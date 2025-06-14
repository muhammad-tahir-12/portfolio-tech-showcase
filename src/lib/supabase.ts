import { createClient } from '@supabase/supabase-js'

// Replace with your Supabase project URL and anon key
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'YOUR_SUPABASE_URL'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'YOUR_SUPABASE_ANON_KEY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types for better TypeScript support
export interface ProfileData {
  id: number
  name: string
  title: string
  description: string | null
  avatar_url: string | null
  github_url: string | null
  linkedin_url: string | null
  email: string | null
  location: string | null
  created_at: string
  updated_at: string
}

export interface ProjectData {
  id: number
  title: string
  description: string | null
  image_url: string | null
  technologies: string[]
  category: string | null
  live_url: string | null
  github_url: string | null
  featured: boolean
  order_index: number
  created_at: string
  updated_at: string
}

export interface ExperienceData {
  id: number
  position: string
  company: string
  location: string | null
  start_date: string | null
  end_date: string | null
  description: string | null
  achievements: string[]
  technologies: string[]
  order_index: number
  created_at: string
  updated_at: string
}

export interface EducationData {
  id: number
  degree: string
  institution: string
  location: string | null
  start_date: string | null
  end_date: string | null
  gpa: string | null
  description: string | null
  achievements: string[]
  order_index: number
  created_at: string
  updated_at: string
}

export interface SkillData {
  id: number
  name: string
  category: string
  level: number
  order_index: number
  created_at: string
  updated_at: string
} 