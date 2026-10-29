import InterestForm from "./components/InterestForm";

const events = [
  {
    edition: "THE NEXT GATHERING",
    title: "CFO London Edition",
    date: "03 December 2026",
    city: "London",
    href: "https://circleofleaders.co.uk/events/circle-of-cfos-london",
    featured: true,
  },
  {
    edition: "SECOND LONDON EDITION",
    title: "CFO London Edition",
    date: "08 April 2027",
    city: "London",
    href: "https://circleofleaders.co.uk/events/circle-of-leaders-london-edition-march-2027",
  },
  {
    edition: "DACH EDITION",
    title: "CFO DACH Edition",
    date: "23 September 2027",
    city: "Frankfurt",
    href: "https://circleofleaders.co.uk/events/circle-of-leaders-cfo-dach-edition",
  },
  {
    edition: "THIRD LONDON EDITION",
    title: "Circle of Leaders",
    date: "11 November 2027",
    city: "London",
    href: "https://circleofleaders.co.uk/events/circle-of-leaders-3rd-london-edition",
  },
];

const principles = [
  {
    number: "01",
    title: "A room with purpose",
    description:
      "A considered mix of CFOs and senior finance leaders, brought together for the relevance of the conversation.",
  },
  {
    number: "02",
    title: "Dialogue over broadcast",
    description:
      "Small-format discussions make space for the honest questions and practical insight that rarely fit on a stage.",
  },
  {
    number: "03",
    title: "Relationships that last",
    description:
      "Thoughtful introductions and time together turn one good conversation into a trusted peer network.",
  },
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Circle of Leaders home">
          <span className="wordmark-symbol" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span className="wordmark-type">
            <strong>circle</strong>
            <span>of leaders</span>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#events">Events</a>
          <a href="#approach">Our approach</a>
          <a href="#partners">Partners</a>
        </nav>
        <a className="header-cta" href="#request-invite">
          Request an invitation <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main id="home">
        <section className="hero" aria-labelledby="hero-title">
          <img
            className="hero-image"
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2200&q=85"
            alt="Senior professionals in conversation around a meeting table"
            fetchPriority="high"
          />
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="eyebrow hero-eyebrow">
              A curated platform for finance leadership
            </p>
            <h1 id="hero-title">
              Better questions.
              <br />
              <em>Stronger</em> finance.
            </h1>
            <p className="hero-description">
              A more considered space for the people shaping what comes next in
              enterprise finance.
            </p>
            <div className="hero-actions">
              <a className="button button-acid" href="#request-invite">
                Find your place <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link light-link" href="#events">
                Explore the gatherings <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
          <div className="hero-footnote">
            <span>For CFOs &amp; senior finance leaders</span>
            <span className="hero-index">01 / 04</span>
          </div>
          <span className="hero-stamp" aria-hidden="true">
            PEOPLE
            <br />
            BEFORE
            <br />
            PLATFORMS
          </span>
        </section>

        <section className="ticker" aria-label="Event themes">
          <div className="ticker-track">
            <span>Finance, forward</span><i />
            <span>Real talk, real peers</span><i />
            <span>Ideas into action</span><i />
            <span>Finance, forward</span><i />
          </div>
        </section>

        <section className="events-section section-wrap" id="events">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Make room for a better conversation</p>
              <h2>Meet us <em>in person.</em></h2>
            </div>
            <p className="section-intro">
              Purposeful gatherings for the people carrying finance forward.
              Find the next room you belong in.
            </p>
          </div>
          <div className="event-grid">
            {events.map((event, index) => (
              <article
                className={`event-card${event.featured ? " event-card-featured" : ""}`}
                key={event.href}
              >
                <div className="event-card-top">
                  <span className="event-number">0{index + 1}</span>
                  <span className="event-edition">{event.edition}</span>
                </div>
                <div className="event-card-main">
                  <p className="event-location">
                    <span className="location-dot" /> {event.city}
                  </p>
                  <h3>{event.title}</h3>
                  <p className="event-date">{event.date}</p>
                </div>
                <a
                  className="event-link"
                  href={event.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Explore ${event.title} in ${event.city} on ${event.date}`}
                >
                  <span>Explore event</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
          <p className="event-note">
            Dates and programme details are provided by the event team. Venue
            information will be shared with invited guests.
          </p>
        </section>

        <section className="approach-section" id="approach">
          <div className="approach-inner section-wrap">
            <div className="approach-lead">
              <p className="eyebrow">Not another conference</p>
              <h2>
                The value isn’t the size of the room.
                <br />
                It’s <em>who’s in it.</em>
              </h2>
              <p>
                Circle of Leaders brings CFOs and senior finance leaders
                together for strategic conversation, relationship-led
                networking, and premium hospitality in service of serious
                dialogue.
              </p>
              <a className="text-link dark-link" href="#request-invite">
                Get to know the circle <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="principle-list">
              {principles.map((principle) => (
                <article className="principle" key={principle.number}>
                  <span className="principle-number">{principle.number}</span>
                  <div>
                    <h3>{principle.title}</h3>
                    <p>{principle.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="partner-section section-wrap" id="partners">
          <p className="eyebrow">In good company</p>
          <div className="partner-row">
            <div className="partner-copy">
              <h2>Better together.</h2>
              <p>
                We work with partners who make a meaningful difference to
                finance teams. Our executive engagement and dinner partner,
                Datarails, helps finance teams bring data and decisions
                together.
              </p>
            </div>
            <div className="partner-mark" aria-label="Datarails, partner">
              <span className="partner-mark-symbol" aria-hidden="true">d</span>
              <span>datarails</span>
              <small>EXECUTIVE PARTNER</small>
            </div>
            <a
              className="text-link dark-link partner-link"
              href="https://circleofleaders.co.uk/partnership"
              target="_blank"
              rel="noreferrer"
            >
              Partner with us <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section className="invite-section" id="request-invite">
          <div className="invite-inner section-wrap">
            <div className="invite-copy">
              <p className="eyebrow">The next conversation starts here</p>
              <h2>
                Good people.
                <br />
                <em>Good questions.</em>
              </h2>
              <p>
                Tell us a little about yourself. Our team will be in touch about
                the right gathering for you.
              </p>
              <div className="invite-aside">
                <span className="invite-aside-mark" aria-hidden="true">✳</span>
                <span>Thoughtful by design. Selective by relevance.</span>
              </div>
            </div>
            <InterestForm />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="wordmark footer-wordmark" href="#home">
          <span className="wordmark-symbol" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span className="wordmark-type">
            <strong>circle</strong>
            <span>of leaders</span>
          </span>
        </a>
        <p>A curated executive finance leadership platform.</p>
        <nav className="footer-nav" aria-label="Footer navigation">
          <a href="#events">Events</a>
          <a href="#approach">About</a>
          <a href="https://circleofleaders.co.uk/contact" target="_blank" rel="noreferrer">Contact</a>
          <a href="https://circleofleaders.co.uk/privacy" target="_blank" rel="noreferrer">Privacy</a>
        </nav>
        <span className="copyright">© Circle of Leaders 2026</span>
      </footer>
    </>
  );
}