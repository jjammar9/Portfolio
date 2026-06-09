export interface SiteConfig {
  name: string
  tagline: string
  description: string
  copyright: string
}

export interface NavItem {
  label: string
  href: string
}

export interface Project {
  id: string
  title: string
  description: string
  url?: string
  video?: string
}
