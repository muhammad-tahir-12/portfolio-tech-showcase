import { useQuery } from '@tanstack/react-query'
import { supabase, ProfileData, ProjectData, ExperienceData, EducationData, SkillData } from '@/lib/supabase'

// Hook for fetching profile data
export const useProfile = () => {
  return useQuery({
    queryKey: ['profile'],
    queryFn: async (): Promise<ProfileData | null> => {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .single()
      
      if (error) throw error
      return data
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
}

// Hook for fetching projects
export const useProjects = () => {
  return useQuery({
    queryKey: ['projects'],
    queryFn: async (): Promise<ProjectData[]> => {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('order_index', { ascending: true })
      
      if (error) throw error
      return data || []
    },
    staleTime: 5 * 60 * 1000,
  })
}

// Hook for fetching featured projects only
export const useFeaturedProjects = () => {
  return useQuery({
    queryKey: ['featured-projects'],
    queryFn: async (): Promise<ProjectData[]> => {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('featured', true)
        .order('order_index', { ascending: true })
      
      if (error) throw error
      return data || []
    },
    staleTime: 5 * 60 * 1000,
  })
}

// Hook for fetching experience data
export const useExperience = () => {
  return useQuery({
    queryKey: ['experience'],
    queryFn: async (): Promise<ExperienceData[]> => {
      const { data, error } = await supabase
        .from('experience')
        .select('*')
        .order('order_index', { ascending: true })
      
      if (error) throw error
      return data || []
    },
    staleTime: 5 * 60 * 1000,
  })
}

// Hook for fetching education data
export const useEducation = () => {
  return useQuery({
    queryKey: ['education'],
    queryFn: async (): Promise<EducationData[]> => {
      const { data, error } = await supabase
        .from('education')
        .select('*')
        .order('order_index', { ascending: true })
      
      if (error) throw error
      return data || []
    },
    staleTime: 5 * 60 * 1000,
  })
}

// Hook for fetching skills data
export const useSkills = () => {
  return useQuery({
    queryKey: ['skills'],
    queryFn: async (): Promise<SkillData[]> => {
      const { data, error } = await supabase
        .from('skills')
        .select('*')
        .order('category, order_index', { ascending: true })
      
      if (error) throw error
      return data || []
    },
    staleTime: 5 * 60 * 1000,
  })
}

// Hook for fetching all portfolio data at once
export const usePortfolioData = () => {
  const profile = useProfile()
  const projects = useProjects()
  const experience = useExperience()
  const education = useEducation()
  const skills = useSkills()

  return {
    profile,
    projects,
    experience,
    education,
    skills,
    isLoading: profile.isLoading || projects.isLoading || experience.isLoading || education.isLoading || skills.isLoading,
    isError: profile.isError || projects.isError || experience.isError || education.isError || skills.isError,
    refetchAll: () => {
      profile.refetch()
      projects.refetch()
      experience.refetch()
      education.refetch()
      skills.refetch()
    }
  }
} 