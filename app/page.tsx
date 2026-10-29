import Image from "next/image";
import CookieConsent from "./components/CookieConsent";
import InterestTrigger from "./components/InterestTrigger";
import SiteHeader from "./components/SiteHeader";

const events = [
  {
    title: "Circle of Leaders CFO 2nd London Edition - April 2027",
    location: "London",
    date: "8th April 2027",
    description:
      "A flagship gathering for CFOs and senior finance leaders exploring the future of enterprise finance — from AI and transformation to capital discipline, resilience, and growth.",
    href: "https://circleofleaders.co.uk/events/circle-of-leaders-london-edition-march-2027",
  },
  {
    title: "Circle of Leaders CFO DACH Edition",
    location: "Frankfurt",
    date: "23rd September 2027",
    href: "https://circleofleaders.co.uk/events/circle-of-leaders-cfo-dach-edition",
  },
  {
    title: "Circle of Leaders 3rd London Edition",
    location: "London",
    date: "Thursday 11th November 2027",
    href: "https://circleofleaders.co.uk/events/circle-of-leaders-3rd-london-edition",
  },
];

const principles = [
  {
    title: "Beyond the conference floor",
    description:
      "Traditional events optimise for scale. Circle of Leaders is built for relevance, attention, and serious dialogue.",
  },
  {
    title: "Curated by relevance",
    description:
      "The room is shaped around seniority, contribution, strategic value, and fit.",
  },
  {
    title: "Serious executive dialogue",
    description:
      "Each format supports substance, not spectacle — from summits to roundtables.",
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <SiteHeader />

      <main id="main-content">
        <section className="hero" aria-labelledby="hero-title">
          <Image
            className="hero-image"
            src="https://cdn.sanity.io/images/lbm9r0sm/production/70ce277adf6eba541a444d050328382caae6c4ed-2400x1600.jpg?w=1920&q=85"
            alt=""
            fill
            priority
            sizes="100vw"
          />
          <div className="hero-overlay" />
          <div className="hero-content">
            <span className="hero-rule" />
            <p className="hero-eyebrow">Circle of Leaders</p>
            <h1 id="hero-title">Where Senior Finance Leaders meet beyond the conference floor.</h1>
            <p className="hero-description">
              A curated executive finance leadership platform for CFOs and
              Senior Finance Leaders shaping the future of enterprise finance.
            </p>
            <div className="hero-actions">
              <InterestTrigger className="button button-gold">Register Interest</InterestTrigger>
              <a className="button button-outline" href="https://circleofleaders.co.uk/events/circle-of-cfos-london">
                View The Event
              </a>
            </div>
          </div>
        </section>

        <section className="intro-band">
          <p>Built for the people shaping enterprise finance, not for volume, footfall, or conference noise.</p>
        </section>

        <section className="why-section dark-section" aria-labelledby="why-title">
          <div className="section-inner">
            <p className="section-kicker">Why Circle of Leaders</p>
            <h2 id="why-title">The value is not the size of the room. It is the quality of the people in it.</h2>
            <div className="principle-grid">
              {principles.map((principle) => (
                <article className="principle" key={principle.title}>
                  <span className="principle-icon" aria-hidden="true">✦</span>
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="featured-section light-section" aria-labelledby="featured-title">
          <div className="section-inner featured-layout">
            <div className="featured-copy">
              <p className="section-kicker">Featured Event</p>
              <h2 id="featured-title">
                <a href="https://circleofleaders.co.uk/events/circle-of-cfos-london">
                  Circle of Leaders CFO London Edition <span aria-hidden="true">→</span>
                </a>
              </h2>
              <p className="featured-meta">London · Thursday 3 December 2026</p>
              <p className="featured-description">
                A flagship gathering for CFOs and senior finance leaders
                exploring the future of enterprise finance, from AI and
                transformation to capital discipline, resilience, and growth.
              </p>
              <a className="text-link" href="https://circleofleaders.co.uk/events/circle-of-cfos-london">
                Explore The Event <span aria-hidden="true">→</span>
              </a>
            </div>
            <article className="next-event-panel">
              <span className="section-kicker">Next Event</span>
              <span className="next-event-mark" aria-hidden="true">C</span>
              <p>CFOs and Senior Finance Leaders</p>
            </article>
          </div>
        </section>

        <section className="more-events-section dark-section" aria-labelledby="events-title">
          <div className="section-inner">
            <p className="section-kicker">More events</p>
            <h2 className="visually-hidden" id="events-title">Upcoming events</h2>
            <div className="event-grid">
              {events.map((event) => (
                <article className="event-card" key={event.href}>
                  <span className="event-status">Upcoming</span>
                  <h3>
                    <a href={event.href}>{event.title}<span aria-hidden="true"> →</span></a>
                  </h3>
                  <p className="event-meta">{event.location} · {event.date}</p>
                  {event.description && <p className="event-description">{event.description}</p>}
                  <a className="text-link" href={event.href}>View event <span aria-hidden="true">→</span></a>
                </article>
              ))}
            </div>
            <a className="all-events-link" href="https://circleofleaders.co.uk/events">
              View all events <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>

        <section className="advisory-section dark-section" aria-labelledby="advisory-title">
          <div className="section-inner advisory-inner">
            <p className="section-kicker">Advisory Board</p>
            <article className="advisor-card">
              <Image
                className="advisor-image"
                src="https://cdn.sanity.io/images/lbm9r0sm/production/6a995afa7c01df85647b035a8e5df14d6a86aa36-1066x1600.jpg?w=900&q=85"
                alt="Kashif Aslam"
                width={450}
                height={675}
                sizes="(max-width: 700px) 85vw, 450px"
              />
              <div className="advisor-caption">
                <div>
                  <h2 id="advisory-title">Kashif Aslam</h2>
                  <p>Head of Corporate Development</p>
                </div>
                <a href="https://circleofleaders.co.uk/about/advisory/kashif-aslam" aria-label="View profile for Kashif Aslam">↗</a>
              </div>
            </article>
            <a className="all-events-link" href="https://circleofleaders.co.uk/about#advisory-board">
              View full Advisory Board <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>

        <section className="partners-section light-section" aria-labelledby="partners-title">
          <div className="section-inner">
            <p className="section-kicker">Sponsors &amp; Partners</p>
            <h2 id="partners-title">Partner with Circle of Leaders</h2>
            <div className="partner-content">
              <div className="partner-name" aria-label="Datarails">
                <span className="datarails-icon" aria-hidden="true">d</span>
                <span>datarails</span>
              </div>
              <div className="partner-description">
                <p className="partner-role">Executive Engagement Partner &amp; Executive Dinner Partner</p>
                <p>
                  Datarails is the AI operating system for finance teams. Uniting data sources,
                  FinanceOS is the trusted data layer that ensures every AI output is accurate,
                  governed, and auditable. It lets users keep their existing spreadsheet models,
                  enhancing processes across FP&amp;A, month-end close, cash management, ticketing,
                  receivables and spend, transforming the CFO&apos;s office into the home of business
                  insights. <a href="https://www.datarails.com/">https://www.datarails.com/</a>
                </p>
              </div>
            </div>
            <a className="text-link" href="https://circleofleaders.co.uk/partnership">
              Partner with us <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>

        <section className="invitation-section dark-section" aria-labelledby="invitation-title">
          <div className="section-inner invitation-inner">
            <span className="invitation-rule" />
            <h2 id="invitation-title">Request an invitation</h2>
            <p>Register your interest to attend, partner, or begin a conversation with Circle of Leaders.</p>
            <InterestTrigger className="button button-gold">Register Interest</InterestTrigger>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-inner footer-inner">
          <div className="footer-about">
            <p className="footer-title">A curated executive finance leadership platform.</p>
            <p>Circle of Leaders brings CFOs and senior finance leaders together for strategic conversation, relationship led networking, and premium hospitality in service of serious dialogue.</p>
          </div>
          <nav className="footer-column" aria-label="Explore">
            <h2>Explore</h2>
            <a href="https://circleofleaders.co.uk/events/circle-of-cfos-london">CFO Summit</a>
            <a href="https://circleofleaders.co.uk/about">About</a>
            <a href="https://circleofleaders.co.uk/partnership">Partnership Enquiries</a>
            <a href="https://circleofleaders.co.uk/contact">Contact</a>
            <a href="https://circleofleaders.co.uk/events">Upcoming Events</a>
          </nav>
          <nav className="footer-column" aria-label="Legal">
            <h2>Legal</h2>
            <a href="https://circleofleaders.co.uk/privacy">Privacy</a>
            <a href="https://circleofleaders.co.uk/terms">Terms</a>
            <a href="https://circleofleaders.co.uk/cookies">Cookies</a>
          </nav>
          <p className="copyright">Circle of Leaders — Brand &amp; Platform · 2026</p>
        </div>
      </footer>
      <CookieConsent />
    </>
  );
}