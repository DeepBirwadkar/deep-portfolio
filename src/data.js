export const skills = [
  { name: 'HTML5',             icon: '🌐', level: 95, color: '#E34F26', category: 'Frontend' },
  { name: 'CSS3',              icon: '🎨', level: 90, color: '#1572B6', category: 'Frontend' },
  { name: 'JavaScript',        icon: '🟨', level: 85, color: '#F7DF1E', category: 'Frontend' },
  { name: 'React.js',          icon: '⚛️', level: 88, color: '#61DAFB', category: 'Frontend' },
  { name: 'Tailwind CSS',      icon: '💨', level: 87, color: '#06B6D4', category: 'Frontend' },
  { name: 'Node.js',           icon: '🟢', level: 72, color: '#339933', category: 'Backend' },
  { name: 'Git',               icon: '🌿', level: 82, color: '#F05032', category: 'Tools' },
  { name: 'GitHub',            icon: '🐙', level: 82, color: '#C9D1D9', category: 'Tools' },
  { name: 'VS Code',           icon: '💙', level: 92, color: '#007ACC', category: 'Tools' },
  { name: 'Groq API',          icon: '🤖', level: 75, color: '#7C6FFF', category: 'AI' },
  { name: 'Problem Solving',   icon: '💡', level: 90, color: '#FBBF24', category: 'Soft Skills' },
]

export const projects = [
  {
    
    
    id: 1,
    title: 'SharkPitch',
    tagline: 'AI-Powered Pitch Platform',
    description: 'A Shark Tank-inspired platform where founders pitch ideas and get real-time AI feedback. Features drag-and-drop pitch building, investor simulation, email notifications via Resend, and AI evaluation powered by Groq.',
    emoji: '🦈',
    gradient: 'from-violet-600/20 to-blue-600/20',
    border: 'border-violet-500/30',
    tags: ['React', 'Supabase', 'Groq AI', 'Tailwind', 'Resend', 'Vite'],
    demo: '#',
    github: '#',
    featured: true,
  },
  
  {
    id: 2,
    title: 'DeepCart',
    tagline: 'Full-Stack E-Commerce',
    description: 'Production-grade e-commerce platform with admin panel, RLS-secured Supabase backend, protected routing, real-time inventory, and dynamic product management system.',
    emoji: '🛒',
    gradient: 'from-emerald-600/20 to-teal-600/20',
    border: 'border-emerald-500/30',
    tags: ['React', 'Supabase', 'Tailwind', 'Vite', 'Auth', 'RLS'],
    demo: 'https://deepcart.vercel.app/',
    github: 'https://github.com/DeepBirwadkar/deepcart/tree/main/Cat',
    featured: true,
  },
 
  {
  id: 3,
  title: "DeepStudy",
  tagline: "AI-Powered Study Platform",
  description:
    "An intelligent study platform that helps students learn efficiently with AI-powered notes, quiz generation, PDF analysis, doubt solving, and personalized learning assistance.",
  emoji: "📚",
  gradient: "from-blue-600/20 to-cyan-600/20",
  border: "border-blue-500/30",
  tags: [
    "React",
    "Groq API",
    "Supabase",
    "Tailwind CSS",
    "PDF AI",
    "Responsive"
  ],
  demo: "https://deepstudyzone.netlify.app/",
  github: "#",
  featured: true,
},
{
    id: 4,
    title: 'Personal Portfolio',
    tagline: 'Modern Developer Portfolio',
    description: 'A modern and responsive developer portfolio showcasing my projects, technical skills, certifications, and achievements. Built with smooth animations, interactive UI, and optimized performance to provide an engaging user experience.',
    emoji: '💼',
    gradient: 'from-indigo-600/20 to-violet-600/20',
    border: 'border-indigo-500/30',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'JavaScript', 'Vite', 'Responsive Design'],
    demo: 'https://deepbirwadkar-portfolio.vercel.app/', 
    github: 'https://github.com/DeepBirwadkar/deep-portfolio',
    featured: true,
  }
]

export const education = [
  {
    year: '2024 – 2026',
    degree: 'Diploma in Computer Engineering',
    institution: 'MSBTE K-Scheme',
    location: 'Maharashtra, India',
    description: 'Studying core subjects including Java Programming, Python, Data Communications & Networks, Microprocessor 8086, and Environmental Education (Sem IV). Active in project development and coding competitions.',
    grade: 'In Progress',
  },
  {
    year: '2021 – 2024',
    degree: 'Secondary School (SSC)',
    institution: 'Maharashtra State Board',
    location: 'Virar, Maharashtra',
    description: 'Completed schooling with strong foundation in Mathematics and Science. Developed early interest in computers and programming, leading to pursuing engineering diploma.',
    grade: 'Completed',
  },
]

export const certifications = [
  { icon: '⚛️', name: 'React & Tailwind Bootcamp', issuer: 'Udemy', year: '2025' },
  { icon: '🤖', name: 'AI Fundamentals with Groq', issuer: 'Self-Paced', year: '2025' },
  { icon: '🔥', name: 'Supabase Backend Mastery', issuer: 'Project-Based', year: '2026' },
  { icon: '🐍', name: 'Python Programming', issuer: 'MSBTE K-Scheme', year: '2024' },
  { icon: '☁️', name: 'Git & Version Control', issuer: 'GitHub Learning Lab', year: '2024' },
  { icon: '⚡', name: 'Full Stack Web Development', issuer: 'FreeCodeCamp', year: '2024' },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]