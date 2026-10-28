import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import Logo from '../components/Logo';
import './css/Home.css';

// Per-year figures from award letters published by GameTheory College Planners (gametheory.college).
// Maria's $68,052 package included work-study. GameTheory's published four-year savings for her ($262,208)
// count gift aid only, which puts the split at $65,552 gift aid and $2,500 work-study.
const results = [
  { student: 'Daniel V.', school: 'Johns Hopkins University', sticker: 86009, giftAid: 67937 },
  { student: 'Maria B.', school: 'University of Southern California', sticker: 81052, giftAid: 65552, workStudy: 2500 },
  { student: 'Julia Z.', school: 'Boston University', sticker: 82824, giftAid: 46000 },
  { student: 'Nicholas W.', school: 'Purdue University', sticker: 47234, giftAid: 30844, note: 'Out-of-state' },
  { student: 'Emily W.', school: 'Georgia Tech', sticker: 28772, giftAid: 28772 },
  { student: 'Anna H.', school: 'University of Alabama', sticker: 40160, giftAid: 24000 },
];

const offer = (name, sticker, paid) => ({ name, sticker, paid });

// 2021 award letters shared by each family, from GameTheory's "Process and Thesis" award analyses.
const awardAnalyses = [
  {
    family: 'Anna H.',
    offers: [
      offer('University of South Carolina', 51583, 26358),
      offer('Arcadia University', 64220, 37220),
      offer('Auburn University', 57020, 40540),
      offer('Furman University', 70846, 35846),
      offer('University of Alabama', 40160, 16160),
      offer('Baylor University', 68722, 48722),
      offer('Mercer University', 56042, 27576),
      offer('Sewanee: The University of the South', 66480, 43480),
    ],
  },
  {
    family: 'Sheridan L.',
    offers: [
      offer('Wingate University', 48806, 17806),
      offer('University of Mobile', 33396, 25936),
      offer('Wesleyan College', 35555, 11401),
      offer('Charleston Southern University', 38600, 19600),
      offer('Florida Southern College', 50986, 33486),
      offer('University of South Carolina', 51583, 26358),
      offer('University of North Alabama', 30828, 29328),
      offer('Reinhardt University', 41220, 31066),
    ],
  },
  {
    family: 'Christopher I.',
    offers: [
      offer('Ohio Wesleyan University', 62120, 19869),
      offer('Winthrop University', 39576, 21146),
      offer('University of Tampa', 42944, 25744),
      offer('Augustana University', 57685, 22335),
      offer('University of North Georgia', 15379, 10369),
      offer('Augusta University', 21544, 15454),
      offer('Marywood University', 54219, 30219),
      offer('University of Arkansas at Pine Bluff', 25627, 0),
    ],
  },
];

const moves = [
  {
    short: 'Cost to graduate',
    title: 'Price the degree, not the first year.',
    usual: 'Families compare colleges by what a year costs to attend and never look at four-year graduation rates.',
    usualResult: 'A fifth or sixth year adds tuition and delays a paycheck. The “affordable” school can become the most expensive degree you buy.',
    ours: 'We judge every college on the cost to graduate: academic fit, retention, the right major, and how many students actually finish in four years.',
    ourResult: 'GameTheory reports that more than 90% of its students graduate in four years.',
    stat: { value: '19%', text: 'of full-time students at most public universities finish a bachelor’s degree in four years.', source: 'Complete College America, 2014' },
  },
  {
    short: 'Chase “expensive” schools',
    title: 'Don’t run from the big sticker price.',
    usual: 'High price tags get crossed off first, and the list shrinks to in-state public schools.',
    usualResult: 'Families walk away from their biggest potential awards, often for schools with lower on-time graduation rates.',
    ours: 'We look closely at “expensive” colleges, because they often have the most institutional money to give. More of the bill is paid with the college’s money and less with yours.',
    ourResult: 'A wider list, larger award letters, and a lower cost to graduate.',
  },
  {
    short: 'Social media strategy',
    title: 'Make social media work for your student.',
    usual: 'The only advice is defensive: lock everything down and stay invisible.',
    usualResult: 'The application rests on an essay, a GPA and a test score, and the student disappears into the stack.',
    ours: 'Students learn to build a professional presence that shows who they are, and families use social channels to research colleges in real time.',
    ourResult: 'A bigger canvas for your student’s story, more visibility with colleges, and skills that carry into a career.',
  },
  {
    short: 'Know your SAI',
    title: 'Know your SAI before the colleges do.',
    usual: 'Families file the FAFSA and wait to see what happens, guided by guesses about who qualifies for aid.',
    usualResult: 'Dream schools get crossed off for cost reasons that aren’t real, and families overpay by thousands.',
    ours: 'We calculate your Student Aid Index under the federal and institutional formulas before you file, and see how each college is likely to apply it.',
    ourResult: 'You know what aid to expect, and which colleges are likely to pay, before you apply.',
  },
  {
    short: 'Data first, then heart',
    title: 'Lead with data. Then follow your heart.',
    usual: 'A six-figure decision is made on campus tours, rankings and where friends are going.',
    usualResult: 'Students transfer, take longer to finish or come home, and parents absorb debt they didn’t plan for.',
    ours: 'We start with the metrics that predict success, like fit, retention and outcomes, then weigh the social and personal side of the experience.',
    ourResult: 'Your student lands where they want to be and where they’ll thrive, at a price your family can manage.',
  },
  {
    short: 'Make colleges compete',
    title: 'Make colleges compete for your student.',
    usual: 'Families shop as if every college sets a fixed price and the buyer simply pays it.',
    usualResult: 'Without understanding how flexible college pricing is, families pay more than they need to.',
    ours: 'Colleges are competing to enroll students. We use enrollment and yield data to find the schools most motivated to win your student with merit aid, and put them in competition.',
    ourResult: 'Multiple strong offers, more leverage and a lower price at a great college.',
  },
  {
    short: 'Check every offer',
    title: 'Check every award letter.',
    usual: 'Award letters are accepted at face value, and appeals, if any, are filed without data.',
    usualResult: 'Money is left on the table every year, and it adds up over four.',
    ours: 'We rate every offer side by side and build appeals and professional-judgment requests on comparable data.',
    ourResult: 'No money left on the table: the most gift aid at the lowest possible cost.',
  },
];

const worries = [
  { label: 'We’re too early', title: 'Early is your advantage.', text: 'With a freshman or sophomore, there’s time to strengthen the academic record, explore majors and careers, and position your finances before the forms that count.' },
  { label: 'We’re too late', title: 'Late isn’t over.', text: 'Early in senior year, there’s still room to move. It just has to happen fast. And if a gap year could mean four years at a fraction of the price, it deserves a real conversation.' },
  { label: 'We make too much', title: 'Income isn’t the deciding factor.', text: 'Merit aid and tuition discounts don’t depend on need. GameTheory has seen families with seven-figure incomes receive $30,000–$40,000 a year in discounts.' },
  { label: 'We don’t make enough', title: 'Aid isn’t automatic.', text: 'Families with modest incomes still get charged full price when the aid process goes wrong. Knowing the forms, formulas and deadlines protects the help your student qualifies for.' },
  { label: 'We don’t have time', title: 'This saves you time.', text: 'A step-by-step timeline built around your student’s grade tells you exactly what to do next. No more late nights on forums and college websites.' },
];

const tools = [
  { icon: 'calculator', name: 'FAFSA Analysis & Strategy', result: 'Know your Student Aid Index before you file.', points: ['Your SAI under federal and institutional formulas', 'Which colleges are likely to meet need or award merit', 'Legitimate ways to improve eligibility'] },
  { icon: 'compass', name: 'Student Positioning System', result: 'See where your student is likely to be admitted, and paid, before applying.', points: ['Key metrics on colleges nationwide', 'Academic, social and financial fit', 'A balanced, data-backed college list'] },
  { icon: 'scale', name: 'Award Letter Analysis & Appeals', result: 'Know whether an offer is actually a good one.', points: ['Every award rated side by side', 'Appeal and professional-judgment strategy', 'Comparable data behind every request'] },
  { icon: 'wallet', name: 'Plan to Pay', result: 'Know where every dollar will come from.', points: ['A full review of your family’s finances', 'A payment plan built around your aid', 'A path to graduation without heavy debt'] },
  { icon: 'megaphone', name: 'Social Media Courseware', result: 'Tell your student’s story beyond the essay.', points: ['A professional, discoverable presence', 'Real-time research on colleges', 'Career skills that outlast college'] },
  { icon: 'route', name: 'Enrollment Management Pathway', result: 'Never miss a deadline again.', points: ['A task-based timeline for each grade', 'Forms and deadlines tracked for you', 'Always know what comes next'] },
];

const extras = ['A dedicated enrollment manager', 'FAFSA & CSS Profile prep', 'Institutional aid forms', 'A year of online test prep through Tutor Space', 'Career coaching & counseling'];

const options = [
  { name: 'Doing it yourself', cost: 'No fee', detail: 'Up to 200 hours of research, and one missed step can cost tens of thousands in aid. The hard part isn’t finding answers. It’s knowing which questions to ask.' },
  { name: 'Your school counselor', cost: 'No fee', detail: 'Maybe an hour of their time. Counselors carry huge caseloads and rarely specialize in financial aid or how colleges set prices.' },
  { name: 'A CPA or financial advisor', cost: 'Varies', detail: 'Experts in taxes and investing, not aid formulas. Some well-meant financial moves can lower your aid instead of raising it.' },
  { name: 'A typical admissions consultant', cost: '$6,000–$40,000', detail: 'Focused on getting in, with little help paying for it, and many don’t track or share their results.' },
];

const faqs = [
  ['How much does it cost, and why isn’t pricing listed?', 'Programs are built around each family’s situation, and not every family is a fit. The webinar is free. Pricing comes once we understand your goals and whether the process will work for you, and GameTheory’s fees typically run at or below what other college planners charge.'],
  ['Is it too early to start with a freshman?', 'Not at all. The earlier you start, the more options you have, especially for building the academic record and positioning your finances.'],
  ['Is it too late with a senior?', 'Early in senior year, there’s still a lot to gain, but the timeline is tight. For students closer to graduation, a gap year can be worth weighing if it means a far lower price for all four years.'],
  ['We already have a college counselor. Do we still need this?', 'Many families who use this process already have one. Counselors focus on admissions. The money side, including aid formulas, merit leverage and appeals, is usually outside their scope.'],
  ['We don’t live nearby. Can you still help?', 'Yes. Everything happens online, and families join from every time zone.'],
  ['We probably earn too much for aid. Is this still worth it?', 'Very likely. Merit aid and tuition discounts don’t depend on need, so income alone rarely rules a family out.'],
  ['How do we know this is legitimate?', 'There are no donations, side doors or backroom deals, just data, forms and strategy. GameTheory’s work has been featured in Forbes, Yahoo Finance and U.S. News, and the free webinar lets you judge the approach for yourself.'],
  ['Can you get my student into Harvard?', 'No one can honestly promise admission to a college with a single-digit acceptance rate. We can tell you whether a school like that is a strong academic fit and what it’s likely to award. The strategy focuses on the hundreds of great colleges where the right moves change the outcome.'],
  ['Isn’t all of this free online?', 'Much of the information is. Knowing which questions to ask, and in what order, is not. Colleges want to enroll your student on their terms. Our job is to represent your family.'],
];

const press = ['Forbes', 'Yahoo Finance', 'U.S. News & World Report', 'The New York Times', 'The Atlanta Journal-Constitution', 'The Epoch Times'];

const navLinks = [['#results', 'Results'], ['#playbook', 'The playbook'], ['#what-you-get', 'What you get'], ['#faq', 'FAQ']];

const yearWords = ['zero', 'one', 'two', 'three', 'four'];
const usd = (value) => `$${value.toLocaleString('en-US')}`;
const pad = (number) => String(number).padStart(2, '0');

function outcome({ sticker, giftAid, workStudy = 0 }) {
  const paid = sticker - giftAid - workStudy;
  return { paid, covered: Math.round(((sticker - paid) / sticker) * 100), saved: giftAid * 4 };
}

function fourYearComparison(paid, sticker) {
  if (paid === 0) return 'Four years at no cost to the family.';
  const years = (paid * 4) / sticker;
  const whole = Math.ceil(years);
  return `Four years for ${years === whole ? 'the' : 'less than the'} sticker price of ${yearWords[whole]} year${whole === 1 ? '' : 's'}.`;
}

function HeroAward() {
  const example = results[0];
  const { paid, covered, saved } = outcome(example);
  return (
    <aside className="hero-award" aria-label={`A real award letter: ${example.school}`}>
      <div className="award-top"><span>Award letter</span><span className="award-stamp">Real result</span></div>
      <p className="award-school">{example.school}</p>
      <p className="award-student">{example.student} · GameTheory family</p>
      <dl className="award-lines">
        <div><dt>Cost of attendance</dt><dd>{usd(example.sticker)}<small>/yr</small></dd></div>
        <div className="is-aid"><dt>Gift aid</dt><dd>−{usd(example.giftAid)}<small>/yr</small></dd></div>
        <div className="is-total"><dt>Family paid</dt><dd>{usd(paid)}<small>/yr</small></dd></div>
      </dl>
      <div className="meter" aria-hidden="true"><span style={{ width: `${covered}%` }} /></div>
      <p className="meter-label">{covered}% paid by the college</p>
      <p className="award-saved"><strong>{usd(saved)}</strong> saved over four years</p>
    </aside>
  );
}

function ResultCard({ result }) {
  const { paid, covered, saved } = outcome(result);
  return (
    <li className="result-card">
      <div className="result-head">
        <h3>{result.school}</h3>
        <span>{result.student}{result.note ? ` · ${result.note}` : ''}</span>
      </div>
      <dl className="result-lines">
        <div><dt>Sticker price</dt><dd><s className="is-struck">{usd(result.sticker)}</s><small>/yr</small></dd></div>
        <div className="is-aid"><dt>{result.workStudy ? 'Gift aid + work-study' : 'Gift aid'}</dt><dd>−{usd(result.giftAid + (result.workStudy || 0))}<small>/yr</small></dd></div>
        <div className="is-total"><dt>Family paid</dt><dd>{usd(paid)}<small>/yr</small></dd></div>
      </dl>
      <div className="meter" aria-hidden="true"><span style={{ width: `${covered}%` }} /></div>
      <p className="meter-label">{covered}% covered by aid</p>
      <div className="result-foot">
        <p className="result-saved"><strong>{usd(saved)}</strong> saved over four years</p>
        <p className="result-years">{fourYearComparison(paid, result.sticker)}</p>
      </div>
    </li>
  );
}

function AwardAnalysis() {
  const [familyIndex, setFamilyIndex] = useState(0);
  const [sortKey, setSortKey] = useState('sticker');
  const { family, offers } = awardAnalyses[familyIndex];
  const sorted = [...offers].sort((first, second) => first[sortKey] - second[sortKey]);
  const maxSticker = Math.max(...offers.map((item) => item.sticker));
  const priciest = offers.reduce((top, item) => (item.sticker > top.sticker ? item : top));
  const best = offers.reduce((low, item) => (item.paid < low.paid ? item : low));
  const undercut = offers.filter((item) => item.paid > priciest.paid).length;

  return (
    <div className="analysis">
      <div className="analysis-head">
        <div>
          <p className="kicker kicker-light">Award analysis</p>
          <h3>One student. Eight colleges. Eight different prices.</h3>
          <p>Each bar is a college’s sticker price. The gold part is what the family would have paid after gift aid.</p>
        </div>
        <div className="analysis-controls">
          <div className="segmented" role="group" aria-label="Choose a family">
            {awardAnalyses.map((item, index) => (
              <button key={item.family} type="button" aria-pressed={index === familyIndex} onClick={() => setFamilyIndex(index)}>{item.family}</button>
            ))}
          </div>
          <div className="sort-control">
            <span id="sort-label">Lowest first by</span>
            <div className="segmented segmented-small" role="group" aria-labelledby="sort-label">
              <button type="button" aria-pressed={sortKey === 'sticker'} onClick={() => setSortKey('sticker')}>Sticker price</button>
              <button type="button" aria-pressed={sortKey === 'paid'} onClick={() => setSortKey('paid')}>After aid</button>
            </div>
          </div>
        </div>
      </div>

      <ol className="analysis-rows" aria-label={`Offers for ${family}`}>
        {sorted.map((item) => (
          <li key={item.name}>
            <span className="row-name">{item.name}</span>
            <span className="row-bars" aria-hidden="true">
              <span className="bar-sticker" style={{ width: `${(item.sticker / maxSticker) * 100}%` }} />
              <span className="bar-paid" style={{ width: `${(item.paid / maxSticker) * 100}%` }} />
            </span>
            <span className="row-values">
              <span className="sr-only">Sticker price </span><s>{usd(item.sticker)}</s>
              <span className="sr-only">, after aid </span><strong>{usd(item.paid)}</strong>
            </span>
            <span className="row-off"><span className="sr-only">, a discount of </span>−{Math.round((1 - item.paid / item.sticker) * 100)}%</span>
          </li>
        ))}
      </ol>

      <div className="analysis-insights">
        <p><span>Highest sticker price</span>{priciest.name} listed {usd(priciest.sticker)}, then came in at {usd(priciest.paid)}{undercut > 0 ? `, below ${undercut} other offers on the list.` : '.'}</p>
        <p><span>Best offer</span>{best.name} came in at {usd(best.paid)} a year, down from {usd(best.sticker)}.</p>
      </div>
      <p className="fine-print fine-print-light">2021 award-letter figures shared by each family and published by GameTheory College Planners. Costs include tuition, room and board, books, mandatory fees and personal expenses.</p>
    </div>
  );
}

function Playbook() {
  const [active, setActive] = useState(0);
  const move = moves[active];
  return (
    <section id="playbook" className="playbook section" aria-labelledby="playbook-title">
      <div className="shell">
        <header className="section-head">
          <p className="kicker kicker-light"><Icon name="knight" /> The playbook</p>
          <h2 id="playbook-title">Seven moves most families never make.</h2>
          <p>College pricing works more like a negotiation than a price tag. These insights from GameTheory’s process and thesis are the foundation of every plan.</p>
        </header>
        <div className="playbook-grid">
          <div className="move-list" role="group" aria-label="Choose a move">
            {moves.map((item, index) => (
              <button key={item.short} type="button" aria-pressed={index === active} aria-controls="move-panel" onClick={() => setActive(index)}>
                <span className="move-num" aria-hidden="true">{pad(index + 1)}</span>{item.short}
              </button>
            ))}
          </div>
          <article id="move-panel" className="move-panel" aria-live="polite">
            <p className="kicker kicker-light">Move {pad(active + 1)} of {pad(moves.length)}</p>
            <h3>{move.title}</h3>
            <div className="move-compare">
              <div className="move-old">
                <h4><Icon name="x" /> The usual way</h4>
                <p>{move.usual}</p>
                <p className="move-result"><span>Result</span>{move.usualResult}</p>
              </div>
              <div className="move-new">
                <h4><Icon name="check" /> The Star way</h4>
                <p>{move.ours}</p>
                <p className="move-result"><span>Result</span>{move.ourResult}</p>
              </div>
            </div>
            {move.stat && (
              <p className="move-stat"><strong>{move.stat.value}</strong><span>{move.stat.text} <cite>{move.stat.source}</cite></span></p>
            )}
          </article>
        </div>
      </div>
    </section>
  );
}

function RightPlace() {
  const [active, setActive] = useState(0);
  const worry = worries[active];
  return (
    <section id="right-place" className="right-place section" aria-labelledby="right-place-title">
      <div className="shell right-grid">
        <div>
          <p className="kicker">Wherever you’re starting from</p>
          <h2 id="right-place-title">You’re in the right place if you think…</h2>
          <div className="worry-options" role="group" aria-label="Choose what you’re thinking">
            {worries.map((item, index) => (
              <button key={item.label} type="button" aria-pressed={index === active} aria-controls="worry-answer" onClick={() => setActive(index)}>{item.label}</button>
            ))}
          </div>
        </div>
        <div id="worry-answer" className="worry-answer" aria-live="polite">
          <h3>{worry.title}</h3>
          <p>{worry.text}</p>
          <Link to="/signup" className="text-link">Find your starting point at the webinar <Icon name="arrow" /></Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const close = (event) => { if (event.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="home">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="shell header-inner">
          <Link to="/" className="header-logo" aria-label="Star College Planners by GameTheory, home" onClick={() => window.scrollTo(0, 0)}><Logo /></Link>
          <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="main-nav" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? 'Close' : 'Menu'}<span aria-hidden="true">{menuOpen ? '×' : '☰'}</span>
          </button>
          <nav id="main-nav" aria-label="Main navigation" className={menuOpen ? 'main-nav is-open' : 'main-nav'}>
            {navLinks.map(([href, label]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
            <Link className="btn btn-gold btn-small" to="/signup">Free webinar <Icon name="arrow" /></Link>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="shell hero-grid">
            <div className="hero-copy">
              <p className="kicker kicker-light"><Icon name="knight" /> College planning, powered by GameTheory</p>
              <h1 id="hero-title">Four years of college for <em>the price of two.</em></h1>
              <p className="hero-lead">Know which colleges will admit your student, and what they’ll award, <strong>before you apply</strong>. No perfect grades or test scores required, at any income level.</p>
              <div className="hero-actions">
                <Link to="/signup" className="btn btn-gold">Save a seat at the free webinar <Icon name="arrow" /></Link>
                <a href="#results" className="btn btn-ghost">See real award letters <Icon name="arrowDown" /></a>
              </div>
            </div>
            <HeroAward />
          </div>
        </section>

        <section className="proof" aria-label="GameTheory results">
          <div className="shell">
            <dl className="proof-stats">
              <div><dt>families helped</dt><dd>30,000+</dd></div>
              <div><dt>average saved per family</dt><dd>$84,000</dd></div>
              <div><dt>years refining the playbook</dt><dd>20+</dd></div>
            </dl>
            <p className="proof-note">Results from GameTheory College Planners, the team and process behind Star.</p>
            <div className="press">
              <span>GameTheory in the press</span>
              <ul>{press.map((name) => <li key={name}>{name}</li>)}</ul>
            </div>
          </div>
        </section>

        <section id="results" className="results section" aria-labelledby="results-title">
          <div className="shell">
            <header className="section-head">
              <p className="kicker">Real award letters</p>
              <h2 id="results-title">The sticker price is just the opening offer.</h2>
              <p>Every family below followed the GameTheory process. Here’s what each college listed, and what the family actually paid.</p>
            </header>
            <ul className="result-grid">
              {results.map((result) => <ResultCard key={result.student} result={result} />)}
            </ul>
            <p className="fine-print">Per-year cost of attendance and aid from each family’s award letter, as published by GameTheory College Planners. Four-year savings count gift aid and assume the award renews each year. Results vary, and admission and aid decisions are made by each college.</p>
            <AwardAnalysis />
          </div>
        </section>

        <Playbook />
        <RightPlace />

        <section id="what-you-get" className="toolkit section" aria-labelledby="toolkit-title">
          <div className="shell">
            <header className="section-head">
              <p className="kicker">What you get</p>
              <h2 id="toolkit-title">Everything it takes to get in, and pay less.</h2>
              <p>Every family works with a dedicated enrollment manager and the same tools behind GameTheory’s results.</p>
            </header>
            <ul className="tool-grid">
              {tools.map((tool, index) => (
                <li key={tool.name} className="tool-card">
                  <div className="tool-top"><span className="tool-icon"><Icon name={tool.icon} /></span><span className="tool-num">{pad(index + 1)}</span></div>
                  <h3>{tool.name}</h3>
                  <p>{tool.result}</p>
                  <ul>{tool.points.map((point) => <li key={point}><Icon name="check" />{point}</li>)}</ul>
                </li>
              ))}
            </ul>
            <div className="extras">
              <h3>Also included</h3>
              <ul>{extras.map((extra) => <li key={extra}><Icon name="plus" />{extra}</li>)}</ul>
            </div>
          </div>
        </section>

        <section id="options" className="options section" aria-labelledby="options-title">
          <div className="shell options-grid">
            <header className="section-head">
              <p className="kicker">Your options</p>
              <h2 id="options-title">There’s a hard way to do this.</h2>
              <p>Most families try one of these first. Each can help, but each leaves a gap where the money is.</p>
            </header>
            <ul className="option-list">
              {options.map((item) => (
                <li key={item.name}>
                  <h3>{item.name}</h3>
                  <p className="option-cost">{item.cost}</p>
                  <p className="option-detail">{item.detail}</p>
                </li>
              ))}
              <li className="option-star">
                <h3><Icon name="check" /> Star College Planners</h3>
                <p className="option-cost">Priced to your family</p>
                <p className="option-detail">Admissions, aid and payment strategy in one plan, with a dedicated enrollment manager and GameTheory’s track record behind it.</p>
              </li>
            </ul>
          </div>
        </section>

        <section className="about-gt" aria-labelledby="about-title">
          <div className="shell about-grid">
            <div>
              <p className="kicker kicker-light">Powered by GameTheory</p>
              <h2 id="about-title">A proven process behind every plan.</h2>
            </div>
            <div>
              <p>Star College Planners is built on the process developed by GameTheory College Planners, founded by Danny and Karen Umali and supported by a national team of enrollment managers. Test prep comes through Tutor Space, GameTheory’s in-house learning platform.</p>
              <a className="text-link text-link-light" href="https://gametheory.college/about" target="_blank" rel="noreferrer">Meet the GameTheory team <Icon name="external" /></a>
            </div>
          </div>
        </section>

        <section id="faq" className="faq section" aria-labelledby="faq-title">
          <div className="shell faq-grid">
            <header className="section-head">
              <p className="kicker">FAQ</p>
              <h2 id="faq-title">Straight answers.</h2>
              <p>Still have a question? Bring it to the webinar.</p>
            </header>
            <div className="faq-list">
              {faqs.map(([question, answer]) => (
                <details key={question}>
                  <summary>{question}<span className="faq-icon" aria-hidden="true" /></summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="closing" aria-labelledby="closing-title">
          <img className="closing-photo" src="/images/campus.jpg" alt="" width="1400" height="933" loading="lazy" />
          <div className="shell closing-inner">
            <p className="kicker kicker-light">Your first move</p>
            <h2 id="closing-title">Learn the game before you play it.</h2>
            <p>Join a free webinar for parents and see how families get four years of college for the price of two, sometimes less.</p>
            <Link className="btn btn-gold" to="/signup">Save a seat at the free webinar <Icon name="arrow" /></Link>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-top">
          <Link to="/" className="footer-logo" aria-label="Star College Planners by GameTheory, home" onClick={() => window.scrollTo(0, 0)}><Logo /></Link>
          <nav className="footer-nav" aria-label="Footer navigation">
            {navLinks.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
            <Link to="/signup">Free webinar</Link>
          </nav>
        </div>
        <div className="shell footer-bottom">
          <p>Results shown are GameTheory College Planners client results. Individual results vary, and admission and financial aid decisions are made by each college.</p>
          <p>© {new Date().getFullYear()} Star College Planners. Powered by <a href="https://gametheory.college/" target="_blank" rel="noreferrer">GameTheory College Planners</a>. <a href="https://unsplash.com/photos/z2ZTk4b4-3g" target="_blank" rel="noreferrer">Campus photo by Zoshua Colah</a>.</p>
        </div>
      </footer>
    </div>
  );
}
