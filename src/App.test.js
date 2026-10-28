import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import App from './App';

const originalFetch = global.fetch;
const originalScrollTo = window.scrollTo;

beforeEach(() => {
  window.history.replaceState({}, '', '/');
  window.scrollTo = jest.fn();
  global.fetch = jest.fn();
});

afterEach(() => {
  global.fetch = originalFetch;
  window.scrollTo = originalScrollTo;
});

function openSignup(query = '') {
  window.history.replaceState({}, '', `/signup${query}`);
  return render(<App />);
}

function scheduleResponse(dates) {
  return { ok: true, json: async () => ({ Dates: dates }) };
}

test('choosing a worry shows the matching answer and selected state', () => {
  render(<App />);

  const early = screen.getByRole('button', { name: /too early/i });
  expect(early).toHaveAttribute('aria-pressed', 'true');
  expect(screen.getByRole('heading', { name: 'Early is your advantage.' })).toBeInTheDocument();

  const income = screen.getByRole('button', { name: /make too much/i });
  fireEvent.click(income);

  expect(income).toHaveAttribute('aria-pressed', 'true');
  expect(early).toHaveAttribute('aria-pressed', 'false');
  expect(screen.getByRole('heading', { name: /deciding factor/i })).toBeInTheDocument();
  expect(screen.queryByRole('heading', { name: 'Early is your advantage.' })).not.toBeInTheDocument();
});

test('the playbook switches between moves', () => {
  render(<App />);

  const first = screen.getByRole('button', { name: 'Cost to graduate' });
  expect(first).toHaveAttribute('aria-pressed', 'true');
  expect(screen.getByRole('heading', { name: 'Price the degree, not the first year.' })).toBeInTheDocument();

  const compete = screen.getByRole('button', { name: 'Make colleges compete' });
  fireEvent.click(compete);

  expect(compete).toHaveAttribute('aria-pressed', 'true');
  expect(first).toHaveAttribute('aria-pressed', 'false');
  expect(screen.getByText('Move 06 of 07')).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Make colleges compete for your student.' })).toBeInTheDocument();
});

test('the award analysis switches families and re-sorts by the price after aid', () => {
  render(<App />);

  fireEvent.click(screen.getByRole('button', { name: 'Sheridan L.' }));
  const firstOffer = () => within(screen.getByRole('list', { name: 'Offers for Sheridan L.' })).getAllByRole('listitem')[0];
  expect(firstOffer()).toHaveTextContent('University of North Alabama');

  fireEvent.click(screen.getByRole('button', { name: 'After aid' }));
  expect(screen.getByRole('button', { name: 'After aid' })).toHaveAttribute('aria-pressed', 'true');
  expect(firstOffer()).toHaveTextContent('Wesleyan College');
  expect(firstOffer()).toHaveTextContent('$11,401');
  expect(screen.getByText(/below 3 other offers on the list/)).toBeInTheDocument();
});

test('case studies derive the family price and four-year savings from each award', () => {
  render(<App />);

  const bostonUniversity = screen.getByRole('heading', { name: 'Boston University' }).closest('li');
  expect(bostonUniversity).toHaveTextContent('$36,824');
  expect(bostonUniversity).toHaveTextContent('$184,000 saved over four years');
  expect(bostonUniversity).toHaveTextContent('Four years for less than the sticker price of two years.');

  const georgiaTech = screen.getByRole('heading', { name: 'Georgia Tech' }).closest('li');
  expect(georgiaTech).toHaveTextContent('Four years at no cost to the family.');
});

test('the navigation menu toggles and closes with Escape', () => {
  render(<App />);

  const toggle = screen.getByRole('button', { name: 'Menu' });
  expect(toggle).toHaveAttribute('aria-expanded', 'false');
  fireEvent.click(toggle);
  expect(screen.getByRole('button', { name: 'Close' })).toHaveAttribute('aria-expanded', 'true');

  fireEvent.keyDown(window, { key: 'Escape' });
  expect(screen.getByRole('button', { name: 'Menu' })).toHaveAttribute('aria-expanded', 'false');

  fireEvent.click(toggle);
  expect(toggle).toHaveAttribute('aria-expanded', 'true');
  fireEvent.click(toggle);
  expect(toggle).toHaveAttribute('aria-expanded', 'false');
});

test('signup prefills contact details and requires an upcoming session before submission', async () => {
  const firstDate = new Date(Date.now() + 86400000).toISOString();
  const secondDate = new Date(Date.now() + 172800000).toISOString();
  const pastDate = new Date(Date.now() - 86400000).toISOString();
  global.fetch.mockResolvedValue(scheduleResponse([secondDate, 'not a date', pastDate, firstDate, firstDate]));

  openSignup('?name=Alex%20Rivera&email=alex%40example.com');

  expect(screen.getByRole('textbox', { name: 'Full name' })).toHaveValue('Alex Rivera');
  expect(screen.getByRole('textbox', { name: 'Email address' })).toHaveValue('alex@example.com');
  const sessionSelect = screen.getByRole('combobox', { name: 'Webinar date & time' });
  const submit = screen.getByRole('button', { name: 'Save my place' });
  expect(sessionSelect).toBeDisabled();
  expect(submit).toBeDisabled();

  await waitFor(() => expect(sessionSelect).toBeEnabled());
  const options = within(sessionSelect).getAllByRole('option');
  expect(options.map((option) => option.value)).toEqual(['', firstDate, secondDate]);
  expect(submit).toBeDisabled();

  fireEvent.change(sessionSelect, { target: { value: secondDate } });
  expect(sessionSelect).toHaveValue(secondDate);
  expect(submit).toBeEnabled();
  expect(submit.closest('form')).toHaveAttribute('action', 'https://usebasin.com/f/a645cfae4253');
  expect(submit.closest('form')).toHaveAttribute('method', 'POST');
  expect(global.fetch).toHaveBeenCalledTimes(1);
});

test('signup explains an empty schedule and keeps registration disabled', async () => {
  global.fetch.mockResolvedValue(scheduleResponse(['2000-01-01 12:00:00', 'invalid']));
  openSignup();

  expect(await screen.findByText(/there are no upcoming sessions on the schedule yet/i)).toBeInTheDocument();
  expect(screen.getByRole('combobox', { name: 'Webinar date & time' })).toBeDisabled();
  expect(screen.getByRole('button', { name: 'Save my place' })).toBeDisabled();
  expect(screen.getByRole('button', { name: 'Refresh the schedule' })).toBeEnabled();
});

test('signup shows a failed schedule and can retry without losing contact details', async () => {
  const futureDate = new Date(Date.now() + 86400000).toISOString();
  global.fetch
    .mockRejectedValueOnce(new Error('Schedule unavailable'))
    .mockResolvedValueOnce(scheduleResponse([futureDate]));
  openSignup();

  expect(await screen.findByText(/we couldn’t load the webinar schedule/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Save my place' })).toBeDisabled();
  fireEvent.change(screen.getByRole('textbox', { name: 'Full name' }), { target: { value: 'Alex Rivera' } });
  fireEvent.click(screen.getByRole('button', { name: 'Refresh the schedule' }));

  const sessionSelect = screen.getByRole('combobox', { name: 'Webinar date & time' });
  await waitFor(() => expect(sessionSelect).toBeEnabled());
  expect(screen.getByRole('textbox', { name: 'Full name' })).toHaveValue('Alex Rivera');
  expect(screen.queryByText(/we couldn’t load the webinar schedule/i)).not.toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Save my place' })).toBeDisabled();
  fireEvent.change(sessionSelect, { target: { value: futureDate } });
  expect(screen.getByRole('button', { name: 'Save my place' })).toBeEnabled();
  expect(global.fetch).toHaveBeenCalledTimes(2);
});
