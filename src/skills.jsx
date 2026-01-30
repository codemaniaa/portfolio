 import React, { useState, useEffect, forwardRef } from 'react';
import { ChevronLeft, ChevronRight, Circle, Star, Sparkles } from 'lucide-react';
 

const   SkillsSection=((props, ref)=>{
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [direction, setDirection] = useState('next');

  const skillCategories = [
    {
      category: "Frontend Development",
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      bgGradient: "from-blue-500/20 to-cyan-500/20",
      skills: [
        { name: "React.js", level: 95, icon: "⚛️" },
        { name: "Next.js", level: 90, icon: "▲" },
        { name: "TypeScript", level: 88, icon: "TS" },
        { name: "Tailwind CSS", level: 92, icon: "🎨" },
        { name: "JavaScript", level: 85, icon: "💚" }
      ]
    },
    {
      category: "Backend Development",
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      bgGradient: "from-purple-500/20 to-pink-500/20",
      skills: [
        { name: "Node.js", level: 90, icon: "🟢" },
        { name: "Python", level: 88, icon: "🐍" },
        { name: "MySQL", level: 60, icon: "◈" },
        { name: "MongoDB", level: 60, icon: "🍃" },
        { name: "PostgreSQL", level: 82, icon: "🐘" }
      ]
    },
    {
      category: "Mobile Development",
      gradient: "from-orange-500 via-red-500 to-pink-500",
      bgGradient: "from-orange-500/20 to-red-500/20",
      skills: [
        { name: "React Native", level: 80, icon: "📱" },
        { name: "Flutter", level: 80, icon: "🦋" },
        { name: "Claude & Antigravity", level: 75, icon: "🍎" }, 
        { name: "Firebase", level: 80, icon: "🔥" }
      ]
    },
    {
      category: "AI Automation",
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      bgGradient: "from-green-500/20 to-emerald-500/20",
      skills: [
        { name: "N8N", level: 50, icon: "🐳" },
        { name: "Make", level: 50, icon: "☁️" },
        { name: "Zapier", level: 50, icon: "🔄" },
        { name: "Pyhton", level: 80, icon: "⎈" },
        { name: "Ai Prompts", level: 90, icon: "🐧" }
      ]
    },
    {
      category: "Design & Tools",
      gradient: "from-indigo-500 via-purple-500 to-pink-500",
      bgGradient: "from-indigo-500/20 to-purple-500/20",
      skills: [
        { name: "Canva & Ai Agents", level: 92, icon: "🎨" },
        { name: "Adobe XD", level: 85, icon: "✨" },
        { name: "Git", level: 95, icon: "📦" },
        { name: "VS Code", level: 98, icon: "💻" },
        { name: "Photoshop", level: 80, icon: "🖼️" }
      ]
    }
  ];

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setDirection('next');
      setCurrentSlide((prev) => (prev + 1) % skillCategories.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, skillCategories.length]);

  const nextSlide = () => {
    setDirection('next');
    setCurrentSlide((prev) => (prev + 1) % skillCategories.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setDirection('prev');
    setCurrentSlide((prev) => (prev - 1 + skillCategories.length) % skillCategories.length);
    setIsAutoPlay(false);
  };

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 'next' : 'prev');
    setCurrentSlide(index);
    setIsAutoPlay(false);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" ref={ref}>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-500/5 rounded-full blur-3xl top-0 left-1/4 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-purple-500/5 rounded-full blur-3xl bottom-0 right-1/4 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-purple-400 animate-pulse" />
            <span className="text-purple-400 font-semibold uppercase tracking-wider text-sm">Expertise</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical abilities and proficiency levels
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          
          {/* Main Slider */}
          <div className="relative overflow-hidden rounded-3xl">
            
            {/* Slides */}
            <div className="relative h-[600px]  ">
              {skillCategories.map((category, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === currentSlide
                      ? 'opacity-100 translate-x-0 scale-100'
                      : index < currentSlide
                      ? 'opacity-0 -translate-x-full scale-95'
                      : 'opacity-0 translate-x-full scale-95'
                  }`}
                >
                  {/* Card */}
                  <div className="h-full  bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-3xl border border-slate-700/50 p-8 md:p-12 relative overflow-hidden">
                    
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-30 blur-3xl`}></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      
                      {/* Category Title */}
                      <div className="mb-12">
                        <h3 className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                          {category.category}
                        </h3>
                        <div className={`h-1.5 w-24 bg-gradient-to-r ${category.gradient} rounded-full`}></div>
                      </div>

                      {/* Skills Grid */}
                      <div className="space-y-6">
                        {category.skills.map((skill, skillIndex) => (
                          <div
                            key={skillIndex}
                            className="group"
                            style={{
                              animation: index === currentSlide ? `slideInSkill 0.6s ease-out ${skillIndex * 0.1}s both` : 'none'
                            }}
                          >
                            {/* Skill Header */}
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center gap-3">
                                <span className="text-2xl">{skill.icon}</span>
                                <span className="text-white font-semibold text-lg">{skill.name}</span>
                              </div>
                              <span className={`text-sm font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                                {skill.level}%
                              </span>
                            </div>

                            {/* Progress Bar */}
                            <div className="relative h-3 bg-slate-800/80 rounded-full overflow-hidden backdrop-blur-sm border border-slate-700/30">
                              <div
                                className={`absolute inset-y-0 left-0 bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 ease-out shadow-lg`}
                                style={{
                                  width: index === currentSlide ? `${skill.level}%` : '0%',
                                  transitionDelay: index === currentSlide ? `${skillIndex * 0.1 + 0.3}s` : '0s'
                                }}
                              >
                                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-pulse"></div>
                              </div>
                              
                              {/* Shine Effect */}
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${category.gradient} opacity-10 rounded-full blur-3xl`}></div>
                    <div className={`absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr ${category.gradient} opacity-10 rounded-full blur-3xl`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-full flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50 z-10 group"
          >
            <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-0.5" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-full flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-600 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-pink-500/50 z-10 group"
          >
            <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-3 mt-10">
          {skillCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="group relative"
            >
              <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? `bg-gradient-to-r ${category.gradient} scale-125`
                  : 'bg-slate-700 hover:bg-slate-600 scale-100'
              }`}>
                {index === currentSlide && (
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${category.gradient} animate-ping opacity-75`}></div>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Auto-play Toggle */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
              isAutoPlay
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-purple-500/30'
                : 'bg-slate-800/50 text-gray-400 hover:text-white border border-slate-700/50'
            }`}
          >
            {isAutoPlay ? '⏸ Pause Auto-play' : '▶ Resume Auto-play'}
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInSkill {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}) 
export default SkillsSection