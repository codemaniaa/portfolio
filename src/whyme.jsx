import React, { useState, useEffect } from 'react';
import { Target, Zap, Shield, Award, TrendingUp, Users, Lightbulb, Rocket, CheckCircle, Star, Sparkles, ArrowRight, Clock, Heart } from 'lucide-react';

export default function WhyChooseMe() {
  const [activeReason, setActiveReason] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setActiveReason((prev) => (prev + 1) % reasons.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  
  const reasons = [
    {
      icon: Zap,
      title: "Lightning Fast Delivery",
      description: "I prioritize efficiency without compromising quality. Your projects are delivered on time, every time, with agile methodologies and rapid iteration.",
      metric: "2x Faster",
      color: "from-yellow-400 to-orange-500",
      benefits: ["Agile Development", "Quick Turnaround", "Continuous Deployment"]
    },
    {
      icon: Shield,
      title: "Rock-Solid Security",
      description: "Security isn't an afterthought—it's built into every line of code. Your data and users are protected with industry-leading best practices.",
      metric: "100% Secure",
      color: "from-blue-400 to-cyan-500",
      benefits: ["Data Encryption", "GDPR Compliant", "Regular Audits"]
    },
    {
      icon: Target,
      title: "Precision & Attention to Detail",
      description: "Every pixel, every interaction, every feature is crafted with meticulous attention to detail. Excellence is not just a goal—it's a standard.",
      metric: "99.9% Accuracy",
      color: "from-purple-400 to-pink-500",
      benefits: ["Pixel Perfect", "Quality Assurance", "Code Reviews"]
    },
    {
      icon: Rocket,
      title: "Scalable Solutions",
      description: "Build for today, ready for tomorrow. My solutions scale seamlessly as your business grows, handling increased traffic and features effortlessly.",
      metric: "∞ Scalability",
      color: "from-green-400 to-emerald-500",
      benefits: ["Cloud Architecture", "Load Balancing", "Auto-Scaling"]
    }
  ];

  const achievements = [
    { icon: Award, number: "50+", label: "Awards Won", gradient: "from-yellow-400 to-orange-500" },
    { icon: Users, number: "200+", label: "Happy Clients", gradient: "from-blue-400 to-cyan-500" },
    { icon: TrendingUp, number: "98%", label: "Success Rate", gradient: "from-purple-400 to-pink-500" },
    { icon: Star, number: "5.0", label: "Client Rating", gradient: "from-green-400 to-emerald-500" }
  ];

  const uniqueValues = [
    {
      icon: Lightbulb,
      title: "Innovative Thinking",
      description: "Creative solutions that push boundaries and challenge the status quo.",
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      icon: Heart,
      title: "Passionate Dedication",
      description: "I genuinely care about your success and pour my heart into every project.",
      gradient: "from-pink-500 to-rose-600"
    },
    {
      icon: Users,
      title: "Client-Centric Approach",
      description: "Your vision drives the process. Collaboration and communication at every step.",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "I'm here when you need me. Continuous support even after project delivery.",
      gradient: "from-purple-500 to-violet-600"
    }
  ];

  const guarantees = [
    "Money-back guarantee if not satisfied",
    "Unlimited revisions until perfect",
    "Clean, documented, maintainable code",
    "Post-launch support included",
    "Mobile-first responsive design",
    "SEO optimization built-in"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-3xl top-0 left-0 animate-pulse"></div>
        <div className="absolute w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl top-1/3 right-0 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl bottom-0 left-1/2 transform -translate-x-1/2 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
            <span className="text-yellow-400 font-semibold uppercase tracking-wider text-sm">Excellence Guaranteed</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Why <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent">Choose Me</span>?
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Not just another developer. I bring a unique blend of technical excellence, creative innovation, and unwavering commitment to your success.
          </p>
        </div>

        {/* Main Reasons Showcase */}
        <div className={`mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative">
            
            {/* Large Feature Card */}
            <div className="relative h-[500px] rounded-3xl overflow-hidden">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ${
                      index === activeReason ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}
                  >
                    <div className="h-full bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl rounded-3xl border border-slate-700/50 p-12 relative overflow-hidden">
                      
                      {/* Background Gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-10 blur-3xl`}></div>
                      
                      {/* Content Grid */}
                      <div className="relative z-10 grid md:grid-cols-2 gap-12 h-full items-center">
                        
                        {/* Left: Icon & Title */}
                        <div>
                          <div className={`inline-flex w-24 h-24 rounded-2xl bg-gradient-to-r ${reason.color} items-center justify-center mb-6 shadow-2xl animate-float`}>
                            <Icon className="w-12 h-12 text-white" />
                          </div>
                          
                          <h3 className={`text-5xl font-bold mb-6 bg-gradient-to-r ${reason.color} bg-clip-text text-transparent`}>
                            {reason.title}
                          </h3>
                          
                          <p className="text-gray-300 text-lg leading-relaxed mb-8">
                            {reason.description}
                          </p>

                          {/* Metric Badge */}
                          <div className={`inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r ${reason.color} rounded-full shadow-lg`}>
                            <Star className="w-5 h-5 text-white" />
                            <span className="text-white font-bold text-lg">{reason.metric}</span>
                          </div>
                        </div>

                        {/* Right: Benefits List */}
                        <div className="space-y-4">
                          {reason.benefits.map((benefit, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-4 bg-slate-800/50 backdrop-blur-sm rounded-xl p-5 border border-slate-700/50 hover:border-transparent hover:bg-slate-800/80 transition-all duration-300"
                              style={{
                                animation: index === activeReason ? `slideIn 0.5s ease-out ${i * 0.1}s both` : 'none'
                              }}
                            >
                              <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${reason.color} flex items-center justify-center flex-shrink-0`}>
                                <CheckCircle className="w-6 h-6 text-white" />
                              </div>
                              <span className="text-white font-medium text-lg">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Decorative Elements */}
                      <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${reason.color} opacity-20 rounded-full blur-3xl`}></div>
                      <div className={`absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr ${reason.color} opacity-20 rounded-full blur-3xl`}></div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {reasons.map((reason, index) => (
                <button
                  key={index}
                  onClick={() => setActiveReason(index)}
                  className="group relative"
                >
                  <div className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeReason ? 'w-12' : 'w-2'
                  }`}>
                    <div className={`h-full rounded-full bg-gradient-to-r ${reason.color} ${
                      index === activeReason ? 'opacity-100' : 'opacity-30 group-hover:opacity-60'
                    }`}></div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
                className="group relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-transparent transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${achievement.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl`}></div>
                
                <div className="relative z-10 text-center">
                  <Icon className={`w-12 h-12 mx-auto mb-4 text-gray-400 group-hover:text-white transition-all duration-300 ${hoverIndex === index ? 'scale-125 rotate-12' : 'scale-100'}`} />
                  <div className={`text-5xl font-bold mb-2 bg-gradient-to-r ${achievement.gradient} bg-clip-text text-transparent`}>
                    {achievement.number}
                  </div>
                  <div className="text-gray-400 font-medium">{achievement.label}</div>
                </div>

                {/* Particle Effect */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Unique Values Grid */}
        <div className={`mb-20 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-4xl font-bold text-center text-white mb-12">
            What Makes Me <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Different</span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {uniqueValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-transparent transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <div className="absolute inset-[1px] bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${value.gradient} flex items-center justify-center mb-4 transition-transform group-hover:scale-110 group-hover:rotate-6 duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                      {value.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Guarantees Section */}
        <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-3xl p-12 border border-slate-700/50 overflow-hidden">
            
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mb-6 shadow-lg shadow-green-500/50">
                  <Shield className="w-6 h-6 text-white" />
                  <span className="text-white font-bold">100% Satisfaction Guaranteed</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  My Commitment to You
                </h3>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  When you work with me, you get more than just code. You get a partner committed to your success.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {guarantees.map((guarantee, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700/30 hover:border-green-500/50 transition-all duration-300 hover:bg-slate-800/80"
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-300 text-sm font-medium">{guarantee}</span>
                  </div>
                ))}
              </div>

              <div className="text-center mt-10">
                <button className="group relative px-10 py-5 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 text-white font-bold text-lg rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105">
                  <span className="relative z-10 flex items-center gap-3">
                    Let's Start Your Project
                    <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}