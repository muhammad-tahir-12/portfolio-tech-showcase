# Supabase Setup Guide

## Step 1: Create Environment Variables

Create a `.env.local` file in your project root with:

```env
VITE_SUPABASE_URL=your_supabase_project_url_here
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

## Step 2: Get Your Supabase Credentials

1. Go to [https://supabase.com/dashboard](https://supabase.com/dashboard)
2. Create a new project or select existing one
3. Go to Settings > API
4. Copy your Project URL and anon/public key

## Step 3: Database Schema

Run these SQL commands in your Supabase SQL Editor:

### Create Tables

```sql
-- Profiles table
CREATE TABLE profiles (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  avatar_url TEXT,
  github_url TEXT,
  linkedin_url TEXT,
  email VARCHAR(255),
  location VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Projects table
CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  image_url TEXT,
  technologies TEXT[] DEFAULT '{}',
  category VARCHAR(100),
  live_url TEXT,
  github_url TEXT,
  featured BOOLEAN DEFAULT false,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Experience table
CREATE TABLE experience (
  id SERIAL PRIMARY KEY,
  position VARCHAR(255) NOT NULL,
  company VARCHAR(255) NOT NULL,
  location VARCHAR(255),
  start_date DATE,
  end_date DATE,
  description TEXT,
  achievements TEXT[] DEFAULT '{}',
  technologies TEXT[] DEFAULT '{}',
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Education table
CREATE TABLE education (
  id SERIAL PRIMARY KEY,
  degree VARCHAR(255) NOT NULL,
  institution VARCHAR(255) NOT NULL,
  location VARCHAR(255),
  start_date DATE,
  end_date DATE,
  gpa VARCHAR(10),
  description TEXT,
  achievements TEXT[] DEFAULT '{}',
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Skills table
CREATE TABLE skills (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  category VARCHAR(100) NOT NULL,
  level INTEGER CHECK (level >= 0 AND level <= 100),
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Insert Sample Data

```sql
-- Sample profile data
INSERT INTO profiles (name, title, description, avatar_url, github_url, linkedin_url, email, location) VALUES
('Your Name', 'Full Stack Developer', 'Passionate Full Stack Developer crafting exceptional digital experiences with modern technologies and clean, innovative solutions.', 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop&crop=face', 'https://github.com/yourusername', 'https://linkedin.com/in/yourusername', 'your.email@example.com', 'Your City, Country');

-- Sample projects data
INSERT INTO projects (title, description, image_url, technologies, category, live_url, github_url, featured, order_index) VALUES
('E-commerce Platform', 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.', 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80', ARRAY['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'], 'Full Stack', 'https://example-ecommerce.com', 'https://github.com/username/ecommerce', true, 1),
('Weather Dashboard', 'A responsive weather application with real-time data visualization, location-based forecasts, and interactive maps.', 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=80', ARRAY['React', 'TypeScript', 'Chart.js', 'Weather API', 'CSS Grid'], 'Frontend', 'https://example-weather.com', 'https://github.com/username/weather-app', true, 2);

-- Add more sample data as needed...
```

## Step 4: Enable Row Level Security (Optional but Recommended)

```sql
-- Enable RLS on all tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE experience ENABLE ROW LEVEL SECURITY;
ALTER TABLE education ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;

-- Create policies to allow public read access
CREATE POLICY "Allow public read" ON profiles FOR SELECT USING (true);
CREATE POLICY "Allow public read" ON projects FOR SELECT USING (true);
CREATE POLICY "Allow public read" ON experience FOR SELECT USING (true);
CREATE POLICY "Allow public read" ON education FOR SELECT USING (true);
CREATE POLICY "Allow public read" ON skills FOR SELECT USING (true);
```

## Step 5: Test Your Setup

After setting up the database and environment variables, restart your development server:

```bash
npm run dev
```

Your portfolio should now fetch data from Supabase! 