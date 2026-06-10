import type { SiteConfig, NavItem, Project, Skill, SocialLink } from '../types'

export const SITE: SiteConfig = {
  name: 'this is joey',
  tagline: 'One detail at a time.',
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

export const PROJECTS: Project[] = [
  {
    id: 'portfolio',
    title: 'Portfolio Website',
    description:
      'A personal portfolio site inspired by modern design principles, built with React, TypeScript, and Vite. Features a split-screen hero with video, animated typography, and a minimal aesthetic.',
    tags: ['React', 'TypeScript', 'Vite', 'CSS'],
    url: '#',
    github: 'https://github.com/jjammar9/Portfolio.git',
  },
]

export const ABOUT = {
  bio: "I'm a developer who cares deeply about the craft of building software. I believe great products come from thoughtful design, clean code, and a relentless focus on the people who use them.",
  skills: [
    { name: 'React', category: 'Frontend' },
    { name: 'TypeScript', category: 'Frontend' },
    { name: 'JavaScript', category: 'Frontend' },
    { name: 'CSS / Sass', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Python', category: 'Backend' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Git', category: 'Tools' },
  ] as Skill[],
}

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'GitHub', url: 'https://github.com/jjammar9' },
  { label: 'Email', url: 'mailto:joey@example.com' },
]
