import type { SiteConfig, NavItem } from '../types'

export const SITE: SiteConfig = {
  name: 'this is joey',
  tagline: 'I build things that matter.',
  description:
    "I'm a developer focused on building clean, thoughtful products. From full-stack apps to polished landing pages — I care about the details that make software feel good to use.",
  copyright: '© 2026 Joey. All rights reserved.',
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const COLORS = {
  cream: '#F5F5EB',
  black: '#181717',
  coral: '#FFA489',
  red: '#DE2826',
  teal: '#9FD4CA',
} as const
