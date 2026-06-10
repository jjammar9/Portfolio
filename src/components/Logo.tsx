interface LogoProps {
  className?: string
  dark?: boolean
  onClick?: () => void
}

export function Logo({ className = '', dark = false, onClick }: LogoProps) {
  return (
    <a href="#" className={`logo-text ${className}${dark ? ' logo-text--dark' : ''}`} onClick={(e) => { e.preventDefault(); onClick?.() }}>
      <span className="logo-name">Joey.</span>
    </a>
  )
}
