import { SITE } from '../constants/site'

interface LogoProps {
  className?: string
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <span className={`logo-text ${className}`}>{SITE.name}</span>
  )
}
