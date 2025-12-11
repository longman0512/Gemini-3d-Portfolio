import React from 'react';
import { 
  Code2, 
  Database, 
  Globe, 
  Cpu, 
  Layers, 
  Smartphone, 
  Cloud, 
  Server,
  Layout,
  GitBranch,
  Terminal,
  Linkedin,
  Twitter,
  Facebook
} from 'lucide-react';
import { Project, ExperienceItem, TechItem, Testimonial, EducationItem } from './types';

export const NAV_LINKS = [
  { name: 'About', href: '#hero' },
  { name: 'Tech', href: '#tech' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: '1',
    role: 'Senior Frontend Engineer',
    company: 'Nexus Innovations',
    period: '2021 - Present',
    description: 'Spearheaded the migration of a legacy monolith to a micro-frontend architecture using React and Module Federation. Improved site performance by 40%.',
    skills: ['React', 'TypeScript', 'Next.js', 'GraphQL']
  },
  {
    id: '2',
    role: 'Full Stack Developer',
    company: 'Quantum Solutions',
    period: '2019 - 2021',
    description: 'Developed scalable RESTful APIs using Node.js and PostgreSQL. Implemented real-time features using WebSockets for a fintech dashboard.',
    skills: ['Node.js', 'PostgreSQL', 'Redis', 'Docker']
  },
  {
    id: '3',
    role: 'UI/UX Developer',
    company: 'Creative Spark',
    period: '2017 - 2019',
    description: 'Collaborated with design teams to implement pixel-perfect, responsive interfaces. Created a reusable component library used across 5 products.',
    skills: ['Vue.js', 'SCSS', 'Figma', 'Jest']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Aether Dashboard',
    description: 'A futuristic analytics dashboard visualization tool featuring real-time data streaming and WebGL charts.',
    tags: ['React', 'Three.js', 'D3.js', 'Tailwind'],
    image: 'https://picsum.photos/600/400?random=1',
    link: '#',
    github: '#'
  },
  {
    id: 'p2',
    title: 'Neon Commerce',
    description: 'Headless e-commerce solution with 3D product previews and AI-driven recommendations.',
    tags: ['Next.js', 'Stripe', 'OpenAI', 'Zustand'],
    image: 'https://picsum.photos/600/400?random=2',
    link: '#',
    github: '#'
  },
  {
    id: 'p3',
    title: 'Orbit Chat',
    description: 'End-to-end encrypted messaging platform with a spatial audio voice chat feature.',
    tags: ['WebRTC', 'Socket.io', 'Node.js', 'Redis'],
    image: 'https://picsum.photos/600/400?random=3',
    link: '#',
    github: '#'
  }
];

export const TECH_STACK: TechItem[] = [
  { name: 'React', icon: Code2, category: 'Frontend' },
  { name: 'Next.js', icon: Globe, category: 'Frontend' },
  { name: 'TypeScript', icon: Terminal, category: 'Frontend' },
  { name: 'Node.js', icon: Server, category: 'Backend' },
  { name: 'PostgreSQL', icon: Database, category: 'Backend' },
  { name: 'GraphQL', icon: Layout, category: 'Backend' },
  { name: 'Docker', icon: Cloud, category: 'DevOps' },
  { name: 'AWS', icon: Cpu, category: 'DevOps' },
  { name: 'React Native', icon: Smartphone, category: 'Mobile' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Connor',
    role: 'CTO',
    company: 'Skynet Corp',
    content: 'The attention to detail and ability to tackle complex technical challenges is unmatched. A true 10x engineer.',
    avatar: 'https://picsum.photos/100/100?random=4'
  },
  {
    id: 't2',
    name: 'Bruce Wayne',
    role: 'Founder',
    company: 'Wayne Enterprises',
    content: 'Delivered our platform ahead of schedule with an aesthetic that perfectly matched our premium brand vision.',
    avatar: 'https://picsum.photos/100/100?random=5'
  },
  {
    id: 't3',
    name: 'Tony Stark',
    role: 'Lead Engineer',
    company: 'Stark Industries',
    content: 'Exceptional problem solver. The code quality is pristine and the architecture is built to scale effectively.',
    avatar: 'https://picsum.photos/100/100?random=6'
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'e1',
    degree: 'M.S. Computer Science',
    institution: 'Tech Institute of Future',
    year: '2017',
    details: 'Specialized in Distributed Systems and Artificial Intelligence.'
  },
  {
    id: 'e2',
    degree: 'B.S. Software Engineering',
    institution: 'State University',
    year: '2015',
    details: 'Graduated Magna Cum Laude. Lead developer for the university robotics team.'
  }
];

export const SOCIAL_LINKS = [
  { 
    name: 'LinkedIn', 
    icon: Linkedin, 
    url: '#', 
    color: 'text-blue-500', 
    borderColor: 'border-blue-500',
    shadow: 'shadow-blue-500'
  },
  { 
    name: 'X.com', 
    icon: Twitter, 
    url: '#', 
    color: 'text-white', 
    borderColor: 'border-white',
    shadow: 'shadow-white'
  },
  { 
    name: 'Upwork', 
    // Custom Upwork SVG path wrapper
    icon: (props: any) => React.createElement("svg", { ...props, viewBox: "0 0 24 24", fill: "currentColor" }, React.createElement("path", { d: "M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.077.008-.042c.209-1.187.809-3.654 2.897-3.654 1.202 0 2.164.772 2.164 2.653 0 1.947-.98 3.347-2.223 3.347m-4.664-4.296c-.636-3.467-.842-5.743-.842-8.862h-2.527c.026 2.378.136 5.093.818 8.441-1.325 1.76-2.583 2.768-4.305 2.768-1.353 0-2.327-.852-2.327-2.54 0-1.895 1.144-3.708 3.064-3.708.823 0 1.583.337 2.053.791l1.838-1.787c-.961-.994-2.383-1.583-3.891-1.583-3.151 0-5.59 2.91-5.59 6.287 0 2.946 1.833 4.984 4.852 4.984 2.219 0 4.108-1.222 5.922-3.858.375 1.714.777 3.018 1.487 3.738-1.059 1.139-1.761 2.353-2.176 3.653l2.427.674c.266-.826.705-1.573 1.34-2.247.962 1.353 2.597 2.227 4.542 2.227 3.125 0 5.167-2.455 5.167-5.894 0-3.418-2.022-5.196-4.687-5.196" })), 
    url: '#', 
    color: 'text-green-500', 
    borderColor: 'border-green-500',
    shadow: 'shadow-green-500'
  },
  { 
    name: 'Facebook', 
    icon: Facebook, 
    url: '#', 
    color: 'text-blue-600', 
    borderColor: 'border-blue-600',
    shadow: 'shadow-blue-600'
  }
];