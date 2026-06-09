import { SOCIAL_LINKS } from '../constants/site'

export function ContactSection() {
  return (
    <section className="section section--contact section--coral" id="contact">
      <div className="wrap">
        <div className="contact-inner">
          <h2 className="h1 section__title">
            Let's <span className="highlight cream">connect</span>
          </h2>
          <p className="contact-lede">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
          <div className="contact-links">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
