import { HeroContent, CategoryConfig, PortfolioCategory, PortfolioItem } from '../types/Portfolio';
import { getAssetPath } from '../utils/assetPath';

export const heroContent: HeroContent = {
  name: "Alex Morgan",
  title: "Full Stack Developer & Creative Technologist",
  summary: "Building elegant solutions to complex problems with modern web technologies. Passionate about creating intuitive user experiences and scalable architectures.",
  backgroundImage: getAssetPath("/images/lilly.jpg"),
  ctaButtons: {
    primary: { label: "View Projects", action: "/projects" },
    secondary: { label: "About Me", action: "/about" }
  }
};

const projectItems: PortfolioItem[] = [
  {
    id: "project-1",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard. Built with microservices architecture for scalability and deployed on AWS with CI/CD pipelines.",
    image: getAssetPath("/images/lilly.jpg"),
    tags: ["React", "Node.js", "PostgreSQL", "Docker", "AWS", "Stripe"],
    link: "https://github.com/username/ecommerce-platform",
    videoUrl: getAssetPath("/videos/ecommerce-demo.mp4"),
    category: PortfolioCategory.PROJECT,
    featured: true
  },
  {
    id: "project-2",
    title: "Real-Time Collaboration Tool",
    description: "A collaborative workspace application enabling teams to work together in real-time. Features include live document editing, video conferencing integration, and project management tools. Supports 10,000+ concurrent users.",
    image: getAssetPath("/images/lilly.jpg"),
    tags: ["TypeScript", "WebSocket", "Redis", "MongoDB", "Next.js"],
    link: "https://github.com/username/collab-tool",
    videoUrl: getAssetPath("/videos/collab-demo.mp4"),
    category: PortfolioCategory.PROJECT,
    featured: true
  },
  {
    id: "project-3",
    title: "AI-Powered Analytics Dashboard",
    description: "An intelligent analytics platform that uses machine learning to provide predictive insights and automated reporting. Integrates with multiple data sources and provides customizable visualizations with natural language querying.",
    image: getAssetPath("/images/lilly.jpg"),
    tags: ["Python", "TensorFlow", "React", "D3.js", "FastAPI", "PostgreSQL"],
    link: "https://github.com/username/analytics-dashboard",
    category: PortfolioCategory.PROJECT,
    featured: false
  },
  {
    id: "project-4",
    title: "Mobile Fitness App",
    description: "Cross-platform mobile application for fitness tracking with personalized workout plans, nutrition tracking, and social features. Integrates with wearable devices.",
    image: getAssetPath("/images/lilly.jpg"),
    tags: ["React Native", "Firebase", "GraphQL", "Node.js"],
    link: "https://github.com/username/fitness-app",
    category: PortfolioCategory.PROJECT,
    featured: false
  }
];

const experienceItems: PortfolioItem[] = [
  {
    id: "exp-1",
    title: "Senior Software Engineer",
    company: "Tech Innovations Inc.",
    description: "Led development of customer-facing web applications serving 1M+ users. Architected microservices migration from monolith, reducing deployment time by 70%. Mentored team of 5 junior developers and established code review best practices.",
    image: getAssetPath("/images/lilly.jpg"),
    tags: ["Leadership", "Architecture", "React", "Python", "AWS"],
    date: "2020 - Present",
    category: PortfolioCategory.EXPERIENCE,
    link: "https://www.techinnovations.example.com"
  },
  {
    id: "exp-2",
    title: "Full Stack Developer",
    company: "Digital Solutions Co.",
    description: "Developed and maintained multiple client projects using modern web technologies. Implemented responsive designs, RESTful APIs, and database optimization strategies. Collaborated with designers and product managers in agile environment.",
    image: getAssetPath("/images/lilly.jpg"),
    tags: ["Full Stack", "JavaScript", "Node.js", "MySQL", "Vue.js"],
    date: "2018 - 2020",
    category: PortfolioCategory.EXPERIENCE,
    link: "https://www.digitalsolutions.example.com"
  },
  {
    id: "exp-3",
    title: "Software Engineer Intern",
    company: "StartupXYZ",
    description: "Contributed to the development of core product features. Worked on frontend components, API integrations, and automated testing. Participated in daily standups and sprint planning.",
    image: getAssetPath("/images/lilly.jpg"),
    tags: ["React", "TypeScript", "Jest", "Git"],
    date: "Summer 2017",
    category: PortfolioCategory.EXPERIENCE
  }
];

const skillItems: PortfolioItem[] = [
  {
    id: "skill-1",
    title: "Frontend Development",
    description: "Expert in modern React, TypeScript, and state management. Passionate about performance optimization, accessibility, and creating delightful user experiences. Experienced with Next.js, Redux, and modern CSS solutions.",
    image: getAssetPath("/images/lilly.jpg"),
    tags: ["React", "TypeScript", "Redux", "Next.js", "CSS", "Accessibility"],
    category: PortfolioCategory.SKILL
  },
  {
    id: "skill-2",
    title: "Backend Architecture",
    description: "Proficient in designing scalable backend systems with Node.js, Python, and Go. Experience with microservices, message queues, caching strategies, and database optimization for high-traffic applications.",
    image: getAssetPath("/images/lilly.jpg"),
    tags: ["Node.js", "Python", "PostgreSQL", "Redis", "Docker", "Kubernetes"],
    category: PortfolioCategory.SKILL
  },
  {
    id: "skill-3",
    title: "Cloud & DevOps",
    description: "Skilled in AWS services, infrastructure as code, and CI/CD pipelines. Experience with containerization, orchestration, monitoring, and implementing security best practices in cloud environments.",
    image: getAssetPath("/images/lilly.jpg"),
    tags: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
    category: PortfolioCategory.SKILL
  }
];

const researchItems: PortfolioItem[] = [
  {
    id: "research-1",
    title: "Machine Learning for Code Optimization",
    description: "Research project exploring the use of neural networks to automatically optimize code performance. Published findings in academic journal and presented at international conference.",
    image: getAssetPath("/images/lilly.jpg"),
    tags: ["Machine Learning", "Compilers", "Python", "Research"],
    link: "https://arxiv.org/example-paper",
    category: PortfolioCategory.RESEARCH,
    date: "2021"
  },
  {
    id: "research-2",
    title: "Distributed Systems Performance",
    description: "Analysis of performance characteristics in distributed systems under various network conditions. Developed novel algorithms for improving consistency and availability trade-offs.",
    image: getAssetPath("/images/lilly.jpg"),
    tags: ["Distributed Systems", "Performance", "Algorithms"],
    category: PortfolioCategory.RESEARCH,
    date: "2020"
  }
];

const hobbyItems: PortfolioItem[] = [
  {
    id: "hobby-1",
    title: "Photography",
    description: "Landscape and urban photography enthusiast. Capturing the beauty of nature and architecture through the lens. Portfolio features work from travels across 15 countries.",
    image: getAssetPath("/images/lilly.jpg"),
    tags: ["Photography", "Travel", "Art"],
    link: "https://www.instagram.com/username",
    category: PortfolioCategory.HOBBY
  },
  {
    id: "hobby-2",
    title: "Open Source Contributions",
    description: "Active contributor to various open source projects. Maintaining several npm packages and contributing to popular frameworks. Passionate about giving back to the developer community.",
    image: getAssetPath("/images/lilly.jpg"),
    tags: ["Open Source", "Community", "JavaScript"],
    link: "https://github.com/username",
    category: PortfolioCategory.HOBBY
  },
  {
    id: "hobby-3",
    title: "Music Production",
    description: "Electronic music producer and DJ. Creating ambient and downtempo tracks. Released several EPs on independent labels.",
    image: getAssetPath("/images/lilly.jpg"),
    tags: ["Music", "Production", "Creative"],
    category: PortfolioCategory.HOBBY
  }
];

const movieItems: PortfolioItem[] = [
  {
    id: "movie-1",
    title: "Inception",
    description: "A mind-bending thriller about dream manipulation. Christopher Nolan's masterpiece that explores the nature of reality and the power of ideas. Stunning visuals and intricate plot structure.",
    image: getAssetPath("/images/lilly.jpg"),
    tags: ["Sci-Fi", "Thriller", "Christopher Nolan"],
    category: PortfolioCategory.MOVIE,
    date: "2010"
  },
  {
    id: "movie-2",
    title: "The Shawshank Redemption",
    description: "A powerful story of hope and friendship set in a prison. Timeless classic that explores themes of perseverance, redemption, and the human spirit. Consistently ranked as one of the greatest films ever made.",
    image: getAssetPath("/images/lilly.jpg"),
    tags: ["Drama", "Classic", "Frank Darabont"],
    category: PortfolioCategory.MOVIE,
    date: "1994"
  },
  {
    id: "movie-3",
    title: "Interstellar",
    description: "Epic space exploration film combining hard science fiction with emotional storytelling. Explores themes of love, sacrifice, and humanity's survival.",
    image: getAssetPath("/images/lilly.jpg"),
    tags: ["Sci-Fi", "Drama", "Christopher Nolan"],
    category: PortfolioCategory.MOVIE,
    date: "2014"
  }
];

const musicItems: PortfolioItem[] = [
  {
    id: "music-1",
    title: "Random Access Memories",
    description: "Daft Punk's masterpiece album blending electronic music with live instrumentation. Features iconic tracks like 'Get Lucky' and 'Instant Crush'. A perfect fusion of past and future sounds.",
    image: getAssetPath("/images/lilly.jpg"),
    tags: ["Electronic", "Daft Punk", "Album"],
    link: "https://open.spotify.com/album/example",
    category: PortfolioCategory.MUSIC,
    date: "2013"
  },
  {
    id: "music-2",
    title: "Kind of Blue",
    description: "Miles Davis' legendary jazz album that revolutionized the genre. Modal jazz at its finest, featuring an all-star lineup. Timeless compositions that continue to inspire musicians worldwide.",
    image: getAssetPath("/images/lilly.jpg"),
    tags: ["Jazz", "Miles Davis", "Classic"],
    link: "https://open.spotify.com/album/example",
    category: PortfolioCategory.MUSIC,
    date: "1959"
  },
  {
    id: "music-3",
    title: "OK Computer",
    description: "Radiohead's groundbreaking album that defined alternative rock in the 90s. Explores themes of technology, alienation, and modern life.",
    image: getAssetPath("/images/lilly.jpg"),
    tags: ["Alternative", "Radiohead", "Rock"],
    category: PortfolioCategory.MUSIC,
    date: "1997"
  }
];

const blogItems: PortfolioItem[] = [
  {
    id: "blog-1",
    title: "Building Scalable React Applications",
    description: "A comprehensive guide to architecting large-scale React applications. Covers state management, code splitting, performance optimization, and best practices.",
    image: getAssetPath("/images/lilly.jpg"),
    tags: ["React", "Architecture", "Tutorial"],
    link: "https://blog.example.com/scalable-react",
    category: PortfolioCategory.HOBBY,
    date: "2023"
  },
  {
    id: "blog-2",
    title: "Understanding Microservices",
    description: "Deep dive into microservices architecture, including when to use them, common pitfalls, and implementation strategies.",
    image: getAssetPath("/images/lilly.jpg"),
    tags: ["Architecture", "Backend", "Microservices"],
    link: "https://blog.example.com/microservices",
    category: PortfolioCategory.HOBBY,
    date: "2023"
  }
];

export const categories: CategoryConfig[] = [
  {
    id: "featured",
    name: "Featured Projects",
    category: PortfolioCategory.PROJECT,
    items: projectItems.filter(item => item.featured)
  },
  {
    id: "projects",
    name: "All Projects",
    category: PortfolioCategory.PROJECT,
    items: projectItems
  },
  {
    id: "experience",
    name: "Professional Experience",
    category: PortfolioCategory.EXPERIENCE,
    items: experienceItems
  },
  {
    id: "skills",
    name: "Technical Skills",
    category: PortfolioCategory.SKILL,
    items: skillItems
  },
  {
    id: "research",
    name: "Research",
    category: PortfolioCategory.RESEARCH,
    items: researchItems
  },
  {
    id: "hobbies",
    name: "Hobbies & Interests",
    category: PortfolioCategory.HOBBY,
    items: hobbyItems
  },
  {
    id: "movies",
    name: "Favorite Movies",
    category: PortfolioCategory.MOVIE,
    items: movieItems
  },
  {
    id: "music",
    name: "Favorite Music",
    category: PortfolioCategory.MUSIC,
    items: musicItems
  },
  {
    id: "blogs",
    name: "Blog & Articles",
    category: PortfolioCategory.HOBBY,
    items: blogItems
  }
];

// Profile-specific categories
export const employerCategories = categories.filter(cat => 
  ['featured', 'projects', 'experience', 'skills', 'research'].includes(cat.id)
);

export const stalkerCategories = categories.filter(cat => 
  ['hobbies', 'movies', 'music'].includes(cat.id)
);

export const othersCategories = categories.filter(cat => 
  ['blogs'].includes(cat.id)
);
