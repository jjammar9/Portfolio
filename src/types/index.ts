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
  tags: string[]
  url?: string
  github?: string
  image?: string
}

export interface Skill {
  name: string
  category: string
}

export interface SocialLink {
  label: string
  url: string
}
