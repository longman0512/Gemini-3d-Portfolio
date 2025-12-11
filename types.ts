import { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  github?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

export interface TechItem {
  name: string;
  icon: LucideIcon | string; // Allow string for image urls if needed, though we use Lucide mostly
  category: 'Frontend' | 'Backend' | 'DevOps' | 'Mobile';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  year: string;
  details: string;
}