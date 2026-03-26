import { ExternalLink, Github, Code2 } from 'lucide-react';
import { useEffect, useState,forwardRef } from 'react';

const PortfolioCards=forwardRef((props, ref )=> {
  const projects = [
    {
      title: "AgriCare ",
      description: "A full-stack Agriculture Market solution. Buy & Sell with payment integration, user authentication, and real-time inventory management.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      tags: ["React", "Tailwind", "PostgreSQL", "Django"],
      liveUrl: "https://agricarepk.vercel.app",
      githubUrl: "https://github.com/codemaniaa/AgriCare-Frontend-"
    },
    {
      title: "Islam For All",
      description: "Islam For All is a comprehensive Islamic resource platform offering prayer times, Quranic verses, and educational content for Muslims worldwide.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      tags: ["Python", "Tailwind", "React", "Django"],
      liveUrl: "",
      githubUrl: "#"
    },
    {
      title: "Portfolio Dashboard",
      description: "Interactive analytics dashboard for tracking project metrics with beautiful data visualizations and real-time updates.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      tags: ["Vue.js", "D3.js", "Firebase", "Tailwind"],
      liveUrl: "https://islam-for-all.vercel.app/",
      githubUrl: "https://github.com/codemaniaa/Islam-For-All"
    },
    {
      title: "Mobile Fitness App",
      description: "Cross-platform fitness tracking app with workout plans, progress tracking, and social features. Note: Its under development and will be available soon.",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop",
      tags: ["React Native", "Express", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Weather Forecast PWA",
      description: "Progressive web app providing accurate weather forecasts with offline support and push notifications.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop",
      tags: ["JavaScript", "PWA", "API", "CSS3"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management Tool",
      description: "Collaborative project management platform with kanban boards, team collaboration, and deadline tracking.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      tags: ["Angular", "Spring Boot", "MySQL", "Docker"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];
 
const [show, setshow]=useState(false);

useEffect(()=>{
  setshow(true)
},[])

  return (
    <div className={`min-h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 px-4 sm:px-6 lg:px-8  }`} ref={ref}  >
      <div className={`max-w-7xl mx-auto transition-opacity transiton- duration-500 ${show ?  'opacity-100' : 'opacity-0'}`}>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-white mb-4 transition-all duration-500 ${show ?  'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10' }`}>
            My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className={`text-gray-400 text-lg max-w-2xl mx-auto transition-all duration-700 ${show ?  'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10' }`}>  A collection of my recent work showcasing various technologies and solutions </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-2 border border-slate-700/50 hover:border-purple-500/50"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-slate-700/50 text-blue-300 rounded-full border border-slate-600/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-slate-700/50">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-700 text-gray-300 hover:text-white text-sm font-medium rounded-lg transition-all duration-300 border border-slate-600/50"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-600/20 blur-2xl group-hover:w-32 group-hover:h-32 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div> 
    </div>   
  ); 
})
export default PortfolioCards