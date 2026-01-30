import React, { useState, useEffect, useRef } from "react";
import './App.css'
import { Menu, X, Home,Award,Wrench,ChevronRight , Mail, Phone, MapPin,  Twitter, Instagram, Facebook, Youtube, Heart, ArrowUp, Send, Code2, Briefcase, User, MessageSquare, ExternalLink, Sparkles, Contact } from 'lucide-react';
import ServicesSection from "./services.jsx";
import SkillsSection from "./skills.jsx";
import AboutSection from "./about.jsx";
import WhyChooseMe from "./whyme.jsx";
import ContactSection from "./contact.jsx";
import PortfolioCards from "./projects.jsx"; 
import logo from './assets/logo.jpeg'
import { Copyright,Github, Linkedin, PhoneIcon } from "lucide-react";

function App(){
  const contactRef=useRef(null);
  const projectRef =useRef(null);
  const skillRef =useRef(null);

  const scrollToAbout =()=>{
    setTimeout(() => {
      window.scrollTo({
        top:"500px",
        behavior:"smooth"
      })
    }, 300);
  }
  const scrollToSkill=()=>{
      activeTab('skills')
    setTimeout(() => {
      skillRef.current.scrollIntoView({
        behavior:"smooth"
      });
    }, 300)
  };
  const scrollToprojects=()=>{
    setTimeout(() => {
      projectRef.current.scrollIntoView({
        behavior:"smooth"
      });
    }, 300);
  }
  const scrollToHome=()=>{
    setTimeout(()=>{
      window.scrollTo({
        top:0,
        behavior:"smooth"
      });
    },400);
  }
  const scrollToContact=()=>{
    setTimeout(() => {
      contactRef.current.scrollIntoView({
    behavior:"smooth",
    });
    }, 400);
    
  };
  const [activeTab, setActiveTab] = useState('projects');
    const [click,clicked]=useState(false);
 return(
  <>
  <div className=""  >
 
  <Navbar oncontactclick={scrollToContact} onhomeclick={scrollToHome} onprojectclick={scrollToprojects} onskillclick={scrollToSkill} onaboutclick={scrollToAbout}/>
    <AboutSection onaboutclick={scrollToAbout}/> 

  <div className="nav md:flex flex-col min-h-screen  ">
    <SideBar activeTab={activeTab} setActiveTab= {setActiveTab} click={click} clicked={clicked}  />
  {activeTab==="projects" && <PortfolioCards click={click}  ref={projectRef} />}
  {activeTab==="skills" && <SkillsSection ref={skillRef}/>}
 {activeTab==="services" && <ServicesSection/>}
  </div>
  <WhyChooseMe/>
 
<ContactSection ref={contactRef} /> 
 
 <Footer/>
 
  </div>
  </> 
  )
}
 
export default App



function Navbar({oncontactclick, onhomeclick, onprojectclick, onskillclick, onaboutclick} ) {
  

  const [isOpen, setIsOpen] = useState(false);

   
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* logo */}
          <div className="flex mr-10 gap-2  h-full items-center rounded-full">
            <div className="  bg-slate-900 rounded-full overflow-hidden w-12 h-12">
          <img src={logo} alt="" className="w-full h-full rounded-full"/>
            </div> 
            <div className="">
 <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:from-blue-300 hover:to-purple-400 transition-all duration-300">
              Alee
            </a>
            </div>
            
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name} 
                  className="relative text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-300 group hover:cursor-default"
                  onClick={()=>{
                    if (link.name==="Contact"){
                      oncontactclick();
                    }
                    if (link.name==="Home"){
                      onhomeclick();
                    }
                    if(link.name==="Projects"){
                      onprojectclick();
                    }
                    if(link.name==="SKills"){
                      onskillclick(); 
                    }
                    if(link.name==="About"){
                      onaboutclick();
                    }
                  }}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-slate-700 focus:outline-none transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 backdrop-blur-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-slate-700 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

function SideBar({ activeTab, setActiveTab,clicked, skillRef }){
   

  const subnav = [
    {
      id: 'projects',
      label: 'My Projects',
      icon: Briefcase,
      href: '#projects',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'skills',
      label: 'Skills',
      icon: Award,
      href: '#skills',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 'services',
      label: 'Services',
      icon: Wrench,
      href: '#services',
      gradient: 'from-orange-500 to-red-500'
    }
  ];
  return(
    <div className="relative backdrop-blur-xl   bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-slate-700/40 shadow-2xl transition-all duration-500  w-full md:h-auto md:p-3 py-2" ref={skillRef}> 

    <div className="relative flex justify-center  gap-9      h-full text-start p-2 pt-9">

      {subnav.map((item) => {
        const Icon = item.icon;

        return (
          <a
            key={item.id}
            href={item.href}
            onClick={() =>{
setActiveTab(item.id); clicked(false);
    setTimeout(() => clicked(true), 10000);
            } }
            className="group relative w-auto flex flex-col items-center justify-center gap-2 px-4 py-3 rounded-xl
                       transition-all duration-300 hover:scale-[1.03]"
          >
            {/* Active Background */}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-xl transition-all duration-500 ${
                activeTab === item.id
                  ? "opacity-90"
                  : "opacity-0 group-hover:opacity-15"
              }`}
            />

            {/* Icon */}
            <div className="relative z-10">
              <div
                className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.gradient}
                            flex items-center justify-center transition-all duration-500 ${
                  activeTab === item.id
                    ? "scale-110 shadow-xl"
                    : "opacity-70 group-hover:opacity-100"
                }`}
              >
                <Icon className="w-5 h-5 text-white" />
              </div>
            </div>

            {/* Label */}
            <span
              className={`relative z-10 text-sm font-medium tracking-wide transition-colors duration-300 ${
                activeTab === item.id ? "text-white" : "text-slate-400"
              }`}
            >
              {item.label}
            </span>
          </a>
        );
      })}
    </div>
  </div> 
  )
}


 

function Footer() {  


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { icon: User, name: 'About', href: '#about' },
    { icon: Briefcase, name: 'Projects', href: '#projects' },
    { icon: Code2, name: 'Services', href: '#services' },
    { icon: MessageSquare, name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Web Development',
    'Mobile Apps',
    'UI/UX Design',
    'Consulting',
    'API Development',
    'Cloud Solutions'
  ];

  const socialLinks = [
    { icon: Github, name: 'GitHub', href: '#', color: 'hover:bg-purple-500' },
    { icon: Linkedin, name: 'LinkedIn', href: '#', color: 'hover:bg-blue-500' },
    { icon: Twitter, name: 'Twitter', href: '#', color: 'hover:bg-cyan-500' },
    { icon: Instagram, name: 'Instagram', href: '#', color: 'hover:bg-pink-500' },
    { icon: Facebook, name: 'Facebook', href: '#', color: 'hover:bg-blue-600' },
    { icon: Youtube, name: 'YouTube', href: '#', color: 'hover:bg-red-500' }
  ];

  const recentProjects = [
    { name: 'E-Commerce Platform', year: '2024' },
    { name: 'AI Chat Application', year: '2024' },
    { name: 'Portfolio Dashboard', year: '2023' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -bottom-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl top-0 right-0 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group z-20 mt-10"
      >
        <div className="relative">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl shadow-purple-500/50 transition-all duration-300 group-hover:scale-110 group-hover:shadow-purple-500/70">
            <ArrowUp className="w-6 h-6 text-white transition-transform group-hover:-translate-y-1" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
        </div>
      </button>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-3xl font-bold mb-2">
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Ali Hassan
                </span>
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Full-Stack Developer & Ai Automation Expert crafting exceptional digital experiences with modern technologies and creative solutions.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:alex@example.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                <div className="w-10 h-10 bg-slate-800/50 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-sm">hassanaliabbasi478@gmail.com</span>
              </a>
              
              <a href="tel:+15551234567" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                <div className="w-10 h-10 bg-slate-800/50 rounded-lg flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-sm">+923267731773</span>
              </a>
              
              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-10 h-10 bg-slate-800/50 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-sm">Okara Punjab, Pakistan</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-400" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <li key={index}>
                    <a href={link.href} className="group flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300">
                      <div className="w-8 h-8 bg-slate-800/50 rounded-lg flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 transition-all duration-300">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400 group-hover:bg-blue-400 transition-colors"></div>
                    <span className="text-sm group-hover:translate-x-1 transition-transform duration-300">{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          
        </div>

        {/* Social Links */}
        <div className="border-t border-slate-800/50 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm">Follow me on:</span>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className={`w-10 h-10 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-white ${social.color} hover:border-transparent transition-all duration-300 hover:scale-110`}
                      title={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-400">
              <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
              <span>•</span>
              <a href="#sitemap" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800/50 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>© 2024 Alee Hassan. Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" fill="currentColor" />
              <span>and</span>
              <Code2 className="w-4 h-4 text-blue-400" />
            </div>

            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <div className="relative">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="absolute inset-0 bg-green-500 rounded-full animate-ping"></div>
                </div>
                <span>All systems operational</span>
              </div>

              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <span>View Source</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Tech Stack Badge */}
          <div className="mt-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/30 border border-slate-700/30 rounded-full text-xs text-gray-400">
              <span>Built with</span>
              <span className="text-cyan-400">React</span>
              <span>•</span>
              <span className="text-purple-400">Tailwind CSS</span>
              <span>•</span>
              <span className="text-blue-400">Lucide Icons</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
    </footer>
  );
}

 