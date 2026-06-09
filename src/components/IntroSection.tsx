import { SITE } from '../constants/site'

export function IntroSection() {
  return (
    <section className="section section--full" id="introduction">
      <div className="section--full__container section--full__container--content section--coral">
        <div className="section--half__inner">
          <h2 className="h1 no-margin-top">
            <p>
              I craft <span className="highlight cream">digital experiences</span> for{' '}
              <span className="highlight cream">curious</span>{' '}
              <span className="highlight cream">minds,</span>{' '}
              designed to power business and<br />
              personal growth.
            </p>
          </h2>
          <p>{SITE.description}</p>
          <footer>
            <h3 className="h2">Nobody says it better than<br />the work itself.</h3>
            <a className="circle-button circle-button--2">
              <span className="before" />
              <span className="after" />
              <div className="inner">View projects</div>
            </a>
          </footer>
        </div>
      </div>
    </section>
  )
}
