import siteContent from '@/content/site-content.json'
import dynamicContent from '@/content/dynamic-content.json'

export interface Foundation {
  name: string
  tagline: string
  description: string
  mission: string
  vision: string
  established: string
  founders: string
  location: string
  workingAreas: string
  contact: {
    email: string
    donateEmail: string
    phone: string
    address: string
  }
  social: {
    twitter: string
    facebook: string
    linkedin: string
    instagram: string
  }
}

export interface Hero {
  badge: string
  title: string
  subtitle: string
  description: string
  founders: string
  primaryButton: {
    text: string
    link: string
  }
  secondaryButton: {
    text: string
    link: string
  }
  heroCard: {
    image?: string
    images?: Array<{
      src: string
      alt: string
      title: string
      subtitle: string
      description: string
    }>
    title?: string
    subtitle?: string
    description?: string
    stats: string[]
  }
}

export interface FocusArea {
  id: string
  title: string
  description: string
  icon: string
  category: string
}

export interface Program {
  id: string
  title: string
  description: string
  category: string
  buttonText: string
  link: string
}

export interface Impact {
  number: string
  label: string
}

export interface Donation {
  title: string
  description: string
  howToDonate: {
    title: string
    description: string
    buttonText: string
    email: string
  }
  donationImpact?: {
    title: string
    amounts: string[]
  }
}

export interface NewsItem {
  id: string
  title: string
  excerpt: string
  content: string
  date: string
  author: string
  category: string
  featured: boolean
  image: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  image: string
  location: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
  linkedin: string
}

export interface SiteContent {
  foundation: Foundation
  hero: Hero
  focusAreas: FocusArea[]
  programs: Program[]
  impact: Impact[]
  governingBody: string[]
  donation: Donation
}

export interface DynamicContent {
  news: NewsItem[]
  testimonials: Testimonial[]
  team: TeamMember[]
}

export function getFoundationInfo(): Foundation {
  return siteContent.foundation
}

export function getHeroContent(): Hero {
  return siteContent.hero
}

export function getFocusAreas(): FocusArea[] {
  return siteContent.focusAreas
}

export function getPrograms(): Program[] {
  return siteContent.programs
}

export function getImpactStats(): Impact[] {
  return siteContent.impact
}

export function getGoverningBody(): string[] {
  return siteContent.governingBody
}

export function getDonationInfo(): Donation {
  return siteContent.donation
}

export function getNews(): NewsItem[] {
  return dynamicContent.news
}

export function getFeaturedNews(): NewsItem[] {
  return dynamicContent.news.filter(item => item.featured)
}

export function getTestimonials(): Testimonial[] {
  return dynamicContent.testimonials
}

export function getTeamMembers(): TeamMember[] {
  return dynamicContent.team
}

export function getNewsById(id: string): NewsItem | undefined {
  return dynamicContent.news.find(item => item.id === id)
}

export function getProgramById(id: string): Program | undefined {
  return siteContent.programs.find(program => program.id === id)
}
