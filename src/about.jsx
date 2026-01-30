import React, { useState, useEffect } from 'react';
import { Download, MapPin, Mail, Phone, Linkedin, Github, Twitter, Award, Briefcase, Code2, Heart, Sparkles, ArrowRight, Coffee, Zap } from 'lucide-react'; 
import profile from './assets/profile.jpeg';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('About');
  const [typedText, setTypedText] = useState('');
  const fullText = "Full-Stack Developer & Creative Problem Solver";

  useEffect(() => {
    setIsVisible(true);
    
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 120);

    return () => clearInterval(typingInterval);
  }, []);

  const stats = [
    { icon: Briefcase, number: "5+", label: "Years Experience" },
    { icon: Code2, number: "100+", label: "Projects Completed" },
    { icon: Award, number: "25+", label: "Happy Clients" },
    { icon: Coffee, number: "∞", label: "Cups of Coffee" }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/codemaniaa", color: "hover:text-purple-400" },
    { icon: Linkedin, href: "#", color: "hover:text-blue-400" },
    { icon: Twitter, href: "#", color: "hover:text-cyan-400" }
  ];

  const interests = [
    { icon: "🎨", text: "UI/UX Design", gradient: "from-pink-500 to-rose-500" },
    { icon: "🚀", text: "Web3 & Blockchain", gradient: "from-purple-500 to-indigo-500" },
    { icon: "🤖", text: "AI & Machine Learning", gradient: "from-blue-500 to-cyan-500" },
    { icon: "📱", text: "Mobile Development", gradient: "from-green-500 to-emerald-500" },
    { icon: "☁️", text: "Cloud Architecture", gradient: "from-orange-500 to-red-500" },
    { icon: "🎮", text: "Game Development", gradient: "from-violet-500 to-purple-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 px-4 sm:pt-[100px] sm:px-6 lg:px-8 relative overflow-hidden  " >
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl top-1/2 right-0 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl -bottom-48 left-1/3 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          
          {/* Left Side - Image & Quick Info */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            
            {/* Profile Card */}
            <div className="relative group">
              
              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 z-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-bold shadow-2xl shadow-purple-500/50 animate-bounce">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  <span>Available for Work</span>
                </div>
              </div>

              {/* Image Container */}
              <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 overflow-hidden">
                
                {/* Gradient Border Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                <div className="absolute inset-[1px] bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  
                  {/* Profile Picture */}
                  <div className="relative w-64 h-64 mx-auto mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-spin-slow blur-md opacity-75"></div>
                    <div className="absolute inset-2 bg-slate-900 rounded-full overflow-hidden">
                      <img 
                        src= {profile}
                        alt="Profile" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Status Indicator */}
                    <div className="absolute bottom-4 right-4 w-6 h-6 bg-green-500 rounded-full border-4 border-slate-900 animate-pulse"></div>
                  </div>

                  {/* Info */}
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-bold text-white">Ali Hassan</h3>
                    <div className="flex items-center justify-center gap-2 text-gray-400">
                      <MapPin className="w-4 h-4" />
                      <span>Okara Punjab, Pakistan</span>
                    </div>

                    {/* Contact Buttons */}
                    <div className="flex gap-3 justify-center pt-4">
                      <a href="hassanaliabbasi@gmail.com" className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700 text-gray-300 hover:text-white rounded-lg transition-all duration-300 border border-slate-700/50">
                        <Mail className="w-4 h-4" />
                        <span className="text-sm">Email</span>
                      </a>
                      <a href="tel:+923267731773" className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700 text-gray-300 hover:text-white rounded-lg transition-all duration-300 border border-slate-700/50">
                        <Phone className="w-4 h-4" />
                        <span className="text-sm">Call</span>
                      </a>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-4 justify-center pt-4 border-t border-slate-700/50">
                      {socialLinks.map((social, index) => {
                        const Icon = social.icon;
                        return (
                          <a
                            key={index}
                            href={social.href}
                            className={`w-10 h-10 bg-slate-800/50 hover:bg-slate-700 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                          >
                            <Icon className="w-5 h-5" />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>

          {/* Right Side - About Content */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-6 h-6 text-yellow-400 animate-pulse" />
                <span className="text-yellow-400 font-semibold uppercase tracking-wider text-sm">About Me</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
                Hello, I'm <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Ali</span>
              </h2>
              <p className="text-xl text-gray-400 font-mono h-8">
                {typedText}< span className="animate-pulse">|</span>
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex gap-4 mb-8">
              {['About', 'education', 'vision'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-purple-500/30'
                      : 'bg-slate-800/50 text-gray-400 hover:text-white border border-slate-700/50'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 mb-8">
              {activeTab === 'About' && (
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                     I am a passionate Computer Science student with a strong focus on React.js and modern web technologies. I enjoy building clean, responsive user interfaces and use Git & GitHub to manage code efficiently and collaborate on projects.
                     </p>
                  <p>
                    Beyond coding, I bring strong soft skills, hands-on experience in digital marketing, and a solid understanding of computer science and IT fundamentals. This combination allows me to create solutions that are not only technically sound but also user-focused and impactful.
                  </p>
                </div>
              )}
              
              {activeTab === 'education' && (
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    I am currently in my 7th semester of a Bachelor’s degree in Computer Science at COMSATS University Islamabad, Sahiwal Campus, where I have developed a strong foundation in programming, software development, and problem-solving. I completed my FSc Pre-Engineering from Punjab College Okara, which strengthened my analytical thinking and mathematical skills. In addition to my academic studies, I have earned diplomas in Digital Marketing and Web Development, enabling me to blend technical knowledge with practical, industry-oriented experience.
                  </p>
                   
                </div>
              )}
              
              {activeTab === 'vision' && (
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                     My vision is to become a skilled computer science professional who builds efficient, user-friendly, and impactful digital solutions.
I aim to continuously learn modern technologies and improve my problem-solving abilities.
I believe in creating products that deliver real value and a great user experience.
                  </p>
                  <p>
                     In the future, I want to work on innovative projects and collaborate with forward-thinking teams.
By combining computer science, web development, and digital marketing skills, I aim to create meaningful digital platforms.
My goal is to grow into a reliable and creative professional in the tech industry.
                  </p>
                </div>
              )}
            </div>

            {/* CTA Buttons */}
            
          </div>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl"></div>
                <div className="relative z-10 text-center">
                  <Icon className="w-8 h-8 text-purple-400 mx-auto mb-3 transition-transform group-hover:scale-110" />
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interests Section */}
        <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-white mb-2">
              What I <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Love</span>
            </h3>
            <p className="text-gray-400">Technologies and areas I'm passionate about</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="group relative bg-slate-900/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50 hover:border-transparent transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${interest.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                <div className="relative z-10 text-center">
                  <div className="text-3xl mb-2 transition-transform group-hover:scale-125 duration-300">{interest.icon}</div>
                  <div className="text-gray-300 text-xs font-medium">{interest.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
}