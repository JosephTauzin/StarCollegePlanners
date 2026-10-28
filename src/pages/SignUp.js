import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import Logo from '../components/Logo';
import './css/SignUp.css';

const WEBINAR_DATES_URL = 'https://firebasestorage.googleapis.com/v0/b/tutorspace-7a7f1.appspot.com/o/StarCollegePlanners%2FWebinarDates.json?alt=media&token=2a74798b-938d-4d77-92f0-a17db6200be1';

function upcomingDates(data) {
  if (!data || !Array.isArray(data.Dates)) {
    throw new Error('The webinar schedule could not be read.');
  }

  const now = Date.now();
  const timestamps = data.Dates
    .filter((value) => typeof value === 'string')
    .map((value) => new Date(value.trim().replace(/^(\d{4}-\d{2}-\d{2})\s+/, '$1T')).getTime())
    .filter((timestamp) => Number.isFinite(timestamp) && timestamp > now);

  return [...new Set(timestamps)]
    .sort((first, second) => first - second)
    .map((timestamp) => new Date(timestamp));
}

function SignUp() {
  const [formData, setFormData] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return { name: params.get('name') || '', email: params.get('email') || '', date: '' };
  });
  const [dates, setDates] = useState([]);
  const [scheduleState, setScheduleState] = useState('loading');
  const [refreshCount, setRefreshCount] = useState(0);
  const [formError, setFormError] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 15000);
    let active = true;
    setScheduleState('loading');
    setDates([]);
    setFormData((current) => ({ ...current, date: '' }));

    async function loadSchedule() {
      try {
        const response = await fetch(WEBINAR_DATES_URL, { signal: controller.signal });
        if (!response.ok) throw new Error('The webinar schedule is unavailable.');
        const availableDates = upcomingDates(await response.json());
        if (!active) return;
        setDates(availableDates);
        setScheduleState(availableDates.length ? 'ready' : 'empty');
      } catch (error) {
        if (active) setScheduleState('error');
      } finally {
        window.clearTimeout(timeout);
      }
    }

    loadSchedule();
    return () => {
      active = false;
      controller.abort();
      window.clearTimeout(timeout);
    };
  }, [refreshCount]);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setFormError('');
  }

  function handleSubmit(event) {
    const selectedDate = dates.find((date) => date.toISOString() === formData.date);
    if (!selectedDate || selectedDate.getTime() <= Date.now()) {
      event.preventDefault();
      setFormError('Please choose an upcoming webinar date before signing up.');
      setRefreshCount((count) => count + 1);
    }
  }

  return (
    <main className="signup-page">
      <header className="webinar-header">
        <Link className="webinar-logo" to="/" aria-label="Star College Planners by GameTheory, home"><Logo /></Link>
        <Link className="webinar-home-link" to="/"><Icon name="arrow" /> Back to home</Link>
      </header>

      <div className="webinar-layout">
        <section className="webinar-intro" aria-labelledby="webinar-title">
          <p className="webinar-eyebrow"><Icon name="knight" /> Free webinar for parents</p>
          <h1 id="webinar-title">Learn the moves <em>before you apply.</em></h1>
          <p className="webinar-description">
            See how colleges set their prices, how financial aid is really calculated, and how
            GameTheory families get four years of college for the price of two, sometimes less.
          </p>
          <div className="webinar-topics">
            <h2>What you’ll learn</h2>
            <ol>
              <li><span aria-hidden="true">01</span><div><h3>The cost to graduate</h3><p>Why four-year graduation rates matter more than the first year’s price.</p></div></li>
              <li><span aria-hidden="true">02</span><div><h3>Your Student Aid Index</h3><p>How to estimate it before the colleges do, and what moves it.</p></div></li>
              <li><span aria-hidden="true">03</span><div><h3>Colleges that admit, and pay</h3><p>How to find the schools most likely to compete for your student with merit aid.</p></div></li>
              <li><span aria-hidden="true">04</span><div><h3>Award letters and appeals</h3><p>How to compare offers and leave no money on the table.</p></div></li>
            </ol>
          </div>
          <dl className="webinar-stats">
            <div><dt>families helped by GameTheory</dt><dd>30,000+</dd></div>
            <div><dt>average saved per family</dt><dd>$84,000</dd></div>
          </dl>
        </section>

        <section className="webinar-form-card" aria-labelledby="webinar-form-title">
          <div className="webinar-card-topline"><span>Your first move</span><span className="webinar-free">Free</span></div>
          <h2 id="webinar-form-title">Save your seat.</h2>
          <p className="webinar-card-description">Choose an upcoming session. It’s online, and there’s no cost to attend.</p>

          <form action="https://usebasin.com/f/a645cfae4253" method="POST" onSubmit={handleSubmit}>
            <div className="webinar-field">
              <label htmlFor="webinar-name">Full name</label>
              <input id="webinar-name" name="name" type="text" autoComplete="name" placeholder="Your full name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="webinar-field">
              <label htmlFor="webinar-email">Email address</label>
              <input id="webinar-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="webinar-field">
              <label htmlFor="webinar-date">Webinar date &amp; time</label>
              <select id="webinar-date" name="date" value={formData.date} onChange={handleChange} required disabled={scheduleState !== 'ready'} aria-describedby="webinar-schedule-message">
                <option value="">{scheduleState === 'loading' ? 'Loading upcoming sessions…' : 'Select a session'}</option>
                {dates.map((date) => (
                  <option key={date.toISOString()} value={date.toISOString()}>
                    {date.toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit', timeZoneName: 'short' })}
                  </option>
                ))}
              </select>
              <div id="webinar-schedule-message" className="webinar-schedule-message" aria-live="polite" role="status">
                {scheduleState === 'loading' && <p>Checking the latest webinar schedule.</p>}
                {scheduleState === 'ready' && <p>Times are shown in your local time zone.</p>}
                {scheduleState === 'empty' && <p>There are no upcoming sessions on the schedule yet. Please check back soon.</p>}
                {scheduleState === 'error' && <p>We couldn’t load the webinar schedule. Please try again.</p>}
              </div>
              {(scheduleState === 'error' || scheduleState === 'empty') && (
                <button className="webinar-retry" type="button" onClick={() => setRefreshCount((count) => count + 1)}>Refresh the schedule <span aria-hidden="true">↻</span></button>
              )}
            </div>
            {formError && <p className="webinar-form-error" role="alert">{formError}</p>}
            <button className="webinar-submit" type="submit" disabled={scheduleState !== 'ready' || !formData.date}>Save my place <Icon name="arrow" /></button>
            <p className="webinar-form-note">Use an email address where you’d like to receive your webinar information.</p>
          </form>
          <div className="webinar-card-footer"><Icon name="check" /> No cost and no obligation, just a smarter plan.</div>
        </section>
      </div>
      <footer className="webinar-footer">© {new Date().getFullYear()} Star College Planners. Powered by GameTheory College Planners.</footer>
    </main>
  );
}

export default SignUp;
