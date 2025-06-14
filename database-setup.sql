-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
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

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
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

-- Create experience table
CREATE TABLE IF NOT EXISTS experience (
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

-- Create education table
CREATE TABLE IF NOT EXISTS education (
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

-- Create skills table
CREATE TABLE IF NOT EXISTS skills (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  category VARCHAR(100) NOT NULL,
  level INTEGER CHECK (level >= 0 AND level <= 100),
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert sample profile data (REPLACE WITH YOUR ACTUAL DATA)
INSERT INTO profiles (name, title, description, avatar_url, github_url, linkedin_url, email, location) 
VALUES (
  'Your Full Name', 
  'Flutter Developer', 
  'Passionate Flutter Developer crafting beautiful, high-performance mobile applications for iOS and Android with exceptional user experiences and clean, scalable code.',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
  'https://github.com/yourusername',
  'https://linkedin.com/in/yourusername',
  'your.email@example.com',
  'Your City, Country'
) ON CONFLICT (id) DO NOTHING;

-- Insert sample projects
INSERT INTO projects (title, description, image_url, technologies, category, live_url, github_url, featured, order_index) VALUES
('E-commerce Mobile App', 'A comprehensive e-commerce mobile application with user authentication, product catalog, shopping cart, and payment integration. Features include real-time notifications and offline support.', 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80', ARRAY['Flutter', 'Dart', 'Firebase', 'Stripe', 'Provider'], 'Mobile App', 'https://play.google.com/store/apps/details?id=com.example.ecommerce', 'https://github.com/username/flutter-ecommerce', true, 1),
('Weather Forecast App', 'A beautiful weather application with location-based forecasts, interactive maps, and weather alerts. Supports multiple cities and includes detailed weather analytics.', 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=80', ARRAY['Flutter', 'Dart', 'OpenWeather API', 'BLoC', 'Hive'], 'Mobile App', 'https://play.google.com/store/apps/details?id=com.example.weather', 'https://github.com/username/flutter-weather', true, 2),
('Task Management App', 'A productivity app for task management with team collaboration features, real-time sync, and push notifications. Includes project tracking and time management tools.', 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80', ARRAY['Flutter', 'Dart', 'Firebase', 'Riverpod', 'SQLite'], 'Mobile App', 'https://apps.apple.com/app/task-manager/id123456789', 'https://github.com/username/flutter-tasks', true, 3),
('Fitness Tracker', 'A comprehensive fitness tracking app with workout plans, progress tracking, and social features. Integrates with health APIs and wearable devices.', 'https://images.unsplash.com/photo-1571019613949-2dd3d1e4a66b?auto=format&fit=crop&w=800&q=80', ARRAY['Flutter', 'Dart', 'Health Connect', 'Charts', 'GetX'], 'Mobile App', 'https://play.google.com/store/apps/details?id=com.example.fitness', 'https://github.com/username/flutter-fitness', true, 4),
('Restaurant Finder', 'A location-based restaurant discovery app with reviews, menu browsing, and table booking. Features AR menu preview and social sharing.', 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80', ARRAY['Flutter', 'Dart', 'Google Maps', 'AR Core', 'Bloc'], 'Mobile App', 'https://apps.apple.com/app/restaurant-finder/id987654321', 'https://github.com/username/flutter-restaurant', true, 5),
('Expense Tracker', 'A personal finance app for expense tracking with budgeting tools, spending analytics, and bill reminders. Supports multiple currencies and bank sync.', 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80', ARRAY['Flutter', 'Dart', 'SQLite', 'Charts', 'Provider'], 'Mobile App', 'https://play.google.com/store/apps/details?id=com.example.expense', 'https://github.com/username/flutter-expense', true, 6)
ON CONFLICT (id) DO NOTHING;

-- Insert sample experience
INSERT INTO experience (position, company, location, start_date, end_date, description, achievements, technologies, order_index) VALUES
('Senior Flutter Developer', 'MobileFirst Technologies', 'San Francisco, CA', '2022-01-01', NULL, 'Lead development of cross-platform mobile applications using Flutter for both iOS and Android. Mentored junior developers and implemented CI/CD pipelines for mobile app deployment.', ARRAY['Increased app performance by 45% through optimization', 'Led mobile development team of 6 developers', 'Successfully launched 8 mobile apps with 4.8+ store ratings', 'Implemented automated testing reducing bugs by 60%'], ARRAY['Flutter', 'Dart', 'Firebase', 'REST APIs', 'CI/CD', 'BLoC', 'Provider'], 1),
('Flutter Developer', 'AppCraft Studios', 'Austin, TX', '2020-01-01', '2021-12-31', 'Developed and maintained multiple mobile applications for clients across various industries. Collaborated with UX/UI designers to create intuitive and beautiful mobile experiences.', ARRAY['Delivered 12+ mobile apps on time and within budget', 'Reduced app crash rate by 75% through better error handling', 'Implemented offline-first architecture for better UX', 'Integrated various third-party APIs and services'], ARRAY['Flutter', 'Dart', 'SQLite', 'HTTP', 'JSON', 'Git', 'Figma'], 2),
('Mobile App Developer', 'StartupHub', 'Remote', '2019-01-01', '2019-12-31', 'Built native and cross-platform mobile applications. Focused on creating smooth user experiences and implementing modern mobile development best practices.', ARRAY['Developed first Flutter app that gained 10k+ downloads', 'Optimized app size by 30% through code splitting', 'Implemented push notifications and analytics', 'Created reusable widget library for team'], ARRAY['Flutter', 'Dart', 'Android Studio', 'Xcode', 'Firebase', 'Git'], 3)
ON CONFLICT (id) DO NOTHING;

-- Insert sample education
INSERT INTO education (degree, institution, location, start_date, end_date, gpa, description, achievements, order_index) VALUES
('Master of Computer Science', 'Tech University', 'San Francisco, CA', '2018-09-01', '2020-05-31', '3.8/4.0', 'Specialized in Mobile App Development and Human-Computer Interaction. Graduated with distinction. Thesis focused on cross-platform mobile development frameworks.', ARRAY['Graduated with Distinction', 'Mobile App Development Research Project', 'Google Developer Student Club Leader', 'Academic Excellence Award'], 1),
('Bachelor of Computer Science', 'State University', 'Austin, TX', '2014-09-01', '2018-05-31', '3.6/4.0', 'Focused on software engineering and mobile development. Active in hackathons and mobile app development competitions.', ARRAY['Won 3 Hackathons for Mobile Apps', 'Dean''s List for 4 semesters', 'Published 2 mobile apps during studies', 'Vice President of Mobile Dev Club'], 2),
('High School Diploma', 'Central High School', 'Austin, TX', '2010-09-01', '2014-05-31', '4.0/4.0', 'Valedictorian. President of Computer Science Club. Early interest in mobile app development.', ARRAY['Valedictorian', 'CS Club President', 'Perfect GPA', 'Built first mobile app at age 16'], 3)
ON CONFLICT (id) DO NOTHING;

-- Insert sample skills
INSERT INTO skills (name, category, level, order_index) VALUES
('Flutter', 'Mobile Development', 95, 1),
('Dart', 'Mobile Development', 92, 2),
('Android Development', 'Mobile Development', 85, 3),
('iOS Development', 'Mobile Development', 80, 4),
('React Native', 'Mobile Development', 75, 5),
('Kotlin', 'Mobile Development', 70, 6),
('Swift', 'Mobile Development', 65, 7),
('Firebase', 'Backend & Services', 90, 1),
('REST APIs', 'Backend & Services', 88, 2),
('GraphQL', 'Backend & Services', 75, 3),
('SQLite', 'Backend & Services', 85, 4),
('Hive', 'Backend & Services', 80, 5),
('Node.js', 'Backend & Services', 70, 6),
('BLoC Pattern', 'State Management', 90, 1),
('Provider', 'State Management', 88, 2),
('Riverpod', 'State Management', 85, 3),
('GetX', 'State Management', 82, 4),
('Redux', 'State Management', 75, 5),
('Git', 'Tools & DevOps', 95, 1),
('Android Studio', 'Tools & DevOps', 90, 2),
('VS Code', 'Tools & DevOps', 88, 3),
('Xcode', 'Tools & DevOps', 75, 4),
('CI/CD', 'Tools & DevOps', 80, 5),
('Fastlane', 'Tools & DevOps', 70, 6),
('Figma', 'Design & UI/UX', 85, 1),
('Adobe XD', 'Design & UI/UX', 75, 2),
('Material Design', 'Design & UI/UX', 90, 3),
('Cupertino Design', 'Design & UI/UX', 85, 4)
ON CONFLICT (id) DO NOTHING;

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE experience ENABLE ROW LEVEL SECURITY;
ALTER TABLE education ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Allow public read" ON profiles FOR SELECT USING (true);
CREATE POLICY "Allow public read" ON projects FOR SELECT USING (true);
CREATE POLICY "Allow public read" ON experience FOR SELECT USING (true);
CREATE POLICY "Allow public read" ON education FOR SELECT USING (true);
CREATE POLICY "Allow public read" ON skills FOR SELECT USING (true); 