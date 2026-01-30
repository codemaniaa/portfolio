import React, { useState, useEffect } from 'react';
import { Code2, Palette, Smartphone, Database, Globe, Zap, ArrowRight } from 'lucide-react';

function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Building responsive, high-performance web applications using modern frameworks and best practices.",
      features: ["React & Next.js", "Node.js Backend", "API Integration", "Performance Optimization"],
      color: "from-blue-500 to-cyan-500",
      delay: "0ms"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Creating seamless cross-platform mobile experiences that engage users and drive results.",
      features: ["React Native", "iOS & Android", "App Store Deploy", "Push Notifications"],
      color: "from-purple-500 to-pink-500",
      delay: "100ms"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Crafting beautiful, intuitive interfaces that users love with attention to every detail.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      color: "from-orange-500 to-red-500",
      delay: "200ms"
    },
    {
      icon: Database,
      title: "Backend Systems",
      description: "Architecting scalable, secure backend solutions that power your applications reliably.",
      features: ["Database Design", "RESTful APIs", "Microservices", "Cloud Deploy"],
      color: "from-green-500 to-emerald-500",
      delay: "300ms"
    },
    {
      icon: Globe,
      title: "SEO & Marketing",
      description: "Optimizing your digital presence to reach more customers and grow your business.",
      features: ["SEO Strategy", "Analytics", "Content Marketing", "Social Media"],
      color: "from-yellow-500 to-orange-500",
      delay: "400ms"
    },
    {
      icon: Zap,
      title: "Consulting",
      description: "Providing expert guidance to help you make informed decisions about your tech stack.",
      features: ["Tech Strategy", "Code Review", "Performance Audit", "Training"],
      color: "from-indigo-500 to-purple-500",
      delay: "500ms"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-96 h-96 bg-pink-500/10 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            What I 
            <span className="relative inline-block mx-3">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Offer
              </span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-pulse"></span>
            </span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions tailored to bring your vision to life with cutting-edge technology
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: service.delay }}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Card Container */}
                <div className="relative h-full bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 overflow-hidden transition-all duration-500 hover:border-transparent hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2">
                  
                  {/* Animated Border Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}></div>
                  <div className="absolute inset-[1px] bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, i) => (
                        <li 
                          key={i}
                          className={`flex items-center text-gray-300 text-sm transition-all duration-300 ${activeCard === index ? 'translate-x-2' : ''}`}
                          style={{ transitionDelay: `${i * 50}ms` }}
                        >
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} mr-3 transition-all duration-300 ${activeCard === index ? 'scale-150' : ''}`}></div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Learn More Button */}
                    <button className={`flex items-center gap-2 text-sm font-medium text-gray-400 group-hover:text-white transition-all duration-300 ${activeCard === index ? 'translate-x-2' : ''}`}>
                      Learn More
                      <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${activeCard === index ? 'translate-x-2' : ''}`} />
                    </button>
                  </div>

                  {/* Floating Particles Effect */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 group-hover:animate-pulse"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ animationDelay: '0.3s' }}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-gray-400 mb-6 text-lg">
            Ready to start your next project?
          </p>
          <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105">
            <span className="relative z-10 flex items-center gap-2">
              Get in Touch
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </div>
  );
}
export default ServicesSection