import { SITE } from '../constants/site'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="global-footer">
      <div className="wrap">
        <Logo className="global-footer__logo" />
        <div className="global-footer__info">
          <p>{SITE.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
