interface LogoProps {
  className?: string
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <span className={`logo-text ${className}`}>
      <span className="logo-name">Joey.</span>
    </span>
  )
}
