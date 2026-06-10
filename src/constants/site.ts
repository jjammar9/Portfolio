import type { SiteConfig, NavItem } from '../types'

export const SITE: SiteConfig = {
  name: 'this is joey',
  tagline: 'One detail at a time.',
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#', view: 'home' },
  { label: 'Projects', href: '#projects', view: 'projects' },
  { label: 'About', href: '#about', view: 'about' },
  { label: 'Contact', href: '#contact', view: 'contact' },
]

export const COLORS = {
  cream: '#F5F5EB',
  black: '#181717',
  coral: '#FFA489',
  red: '#DE2826',
  teal: '#9FD4CA',
} as const
