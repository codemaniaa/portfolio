import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useInView } from "framer-motion";
import * as THREE from "three";
import { SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiPython, SiTailwindcss, SiPostgresql, SiMongodb, SiDocker, SiGraphql, SiRedux, SiGit, SiFigma, SiWebgl, SiRust, SiCriticalrole, SiDjango,  SiThreedotjs, SiJavascript} from "react-icons/si";
import {  FiGithub, FiExternalLink, FiMail, FiTwitter, FiLinkedin,  FiArrowRight, FiX, FiCode, FiLayers, FiZap, FiCpu, FiGlobe, FiShield, } from "react-icons/fi";
import Agricare from "./assets/Agricare.png";  
import profile from "./assets/profile.jpeg";
import portfolio from  "./assets/portfolio.png";
import ContactSection from "./Contact";
//  DATA
 
const projects = [
  {
    id: 1,
    title: "AgriCare",
    tagline: "Growing Better Future for Farmers",
    description: "AgriCare is a modern agriculture marketplace that connects farmers and buyers on a single platform. Users can list, explore, and purchase agricultural products with ease, along with location-based listings and real-time communication features. The platform aims to simplify trading, improve accessibility, and create better opportunities within the agriculture ecosystem.",
    image: Agricare,
    tech: [SiPython, SiReact, SiPostgresql, SiDjango, SiTailwindcss],
    techNames: ["Python", "React", "PostgreSQL", "Django", "Tailwind CSS"],
    color: "#0d9488",
    problem: "It solves the problem of fragmented agricultural trade where farmers struggle to reach buyers and get fair prices. The platform provides a centralized marketplace for easy buying and selling. It also improves transparency and accessibility in the agriculture supply chain",
    approach: "The approach is to create a user-friendly marketplace with direct buying, selling, and auction features. It also includes a chatbot for assistance and smooth communication. The platform ensures easy navigation and efficient, location-based trading.",
    features: [ "Product Listing & Browsing", "Auction System", "Real-time Chat", "AI Chatbot Assistance", "Location-based Search & Filtering", "User Authentication & Profiles", "Secure Payment Integration", "Ratings & Reviews", "Order Management & History"],
    users: "Farmers looking to sell their products and buyers, factory owner wholesalers seeking fresh agricultural goods",
    github: "https://github.com/codemaniaa/AgriCare",
    demo: "#",
  },
  {
    id: 2,
    title: "FaceMark",
    tagline: "Ai powered Attendance System",
    description: "FaceMark is an AI-powered attendance system that uses facial recognition technology to automate attendance tracking in educational institutions and workplaces. It provides a seamless and efficient way to record attendance, eliminating the need for manual processes. The system ensures accuracy, saves time, and enhances security by verifying identities through facial recognition.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    tech: [SiReact, SiDjango, SiPython, SiPython, SiPython,SiTailwindcss],
    techNames: ["React","Django","Python", "Deepface", "OpenCv", "Tailwind CSS"],
    color: "#f59e0b",
    problem: "Traditional attendance systems are time-consuming, prone to errors, and can be easily manipulated. FaceMark addresses these issues by providing an automated solution that ensures accurate attendance tracking while enhancing security and efficiency.",
    approach: "The approach is to leverage facial recognition technology to automate attendance tracking. Users can easily mark their attendance by simply looking at a camera, eliminating the need for manual processes. The system ensures accuracy and security by verifying identities through facial recognition algorithms.",
    features: ["Facial Recognition Attendance", "Real-time Attendance Tracking", "AI Chatbot Assistance", "Location-based Search & Filtering", "User Authentication & Profiles"],
    users: "Educational institutions and workplaces",
    github: "https://github.com/codemaniaa/ai-timetable-project",
    demo: "#",
  },
  {
    id: 3,
    title: "My Portfolio",
    tagline: "Showcasing My Journey and Skills",
    description: "My Portfolio is a personal website that serves as a comprehensive showcase of my journey, skills, and projects as a full-stack engineer. It provides an interactive and visually appealing platform to highlight my expertise in performance optimization, design systems, and problem-solving. The portfolio includes detailed case studies of my projects, a curated list of skills, and an engaging narrative that reflects my passion for building impactful products.",
    image: portfolio,
    tech: [SiReact, SiWebgl, SiTailwindcss, SiThreedotjs],
    techNames: ["React", "WebGL", "TailwindCSS", "Three.js"],
    color: "#6366f1", 
    approach: "Beautifullly designed portfolio website built with React and Three.js, featuring a custom 3D hero section, smooth scroll-based animations, and interactive project showcases. The design emphasizes readability and visual storytelling, with a dark theme and vibrant accent colors to create a modern and engaging user experience.",
    features: ["Interactive 3D Hero Section", "Smooth Scroll Animations", "Detailed Project Case Studies", "Curated Skills Showcase", "Responsive Design", "Contact Form with EmailJS Integration"],
    users: "Potential employers, collaborators, and anyone interested in learning about my work and skills",
    github: "https://github.com/codemaniaa/portfolio",
    demo: "#",
  },
  
];

const skills = [
  { icon: SiReact, name: "React", group: "Frontend" },
  { icon: SiJavascript, name: "JavaScript", group: "Frontend" }, 
  { icon: SiTailwindcss, name: "Tailwind CSS", group: "Frontend" },
  { icon: SiWebgl, name: "Three.js", group: "Frontend" }, 
  { icon: SiPython, name: "Python", group: "Backend" }, 
  { icon: SiDjango, name: "Django", group: "Backend" },
  { icon: SiPostgresql, name: "PostgreSQL", group: "Data" }, 
  { icon: SiDocker, name: "Docker", group: "Infra" }, 
  { icon: SiGit, name: "Git", group: "Tools" },
  { icon: SiFigma, name: "Figma", group: "Tools" },
  { icon: SiRedux, name: "Redux", group: "Tools" },
  { icon: SiCriticalrole, name: "Problem Solving", group: "Hobbies" }, 
];

const services = [
  { icon: FiCode, title: "Full-Stack Development", desc: "End-to-end product development from architecture to deployment. APIs, databases, and polished UIs." },
  { icon: FiLayers, title: "Design Systems", desc: "Scalable, token-based component libraries that bridge design and engineering teams." },
  { icon: FiZap, title: "Performance Engineering", desc: "Profiling, WASM, edge runtimes, and intelligent caching to shave critical milliseconds." },
  { icon: FiCpu, title: "Problem Solving and SaaS", desc: "Embedding models into products — inference APIs, RAG pipelines, vector search." },
  { icon: FiGlobe, title: "Platform Architecture", desc: "Designing distributed systems that scale: event-driven, microservices, observability-first." },
  { icon: FiShield, title: "Technical Consulting", desc: "Advisory for startups making critical architectural decisions under time pressure." },
];

const education = [
  { year: "2023 – 2027", degree: "B.S. Computer Science", school: "Comsats University Islamabad", note: "Focus: Website Development, Communication Skills and Problem Solving" },
  { year: "2019–2021", degree: "FSc Pre Engineering", school: "Punjab College Okara", note: "Learned fundamental concepts in mathematics and Business Studies" },
  { year: "2022", degree: "Website Development Diploma", school: "Cotham College Okara", note: "Professional Certification in Website Development" },
  { year: "2022", degree: "Digital Marketing Diploma", school: "DigiSkils", note: "Professional Certification in Marketing" },
];

//  THREE.JS HERO

function HeroCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const W = mountRef.current.clientWidth;
    const H = mountRef.current.clientHeight;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 200);
    camera.position.set(0, 0, 30);

    // Particle field
    const count = 1800;
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const colors = new Float32Array(count * 3);
    const tealC = new THREE.Color("#0d9488");
    const beigeC = new THREE.Color("#d4b896");

    for (let i = 0; i < count; i++) {
      const r = 20 + Math.random() * 35;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
      sizes[i] = Math.random() * 1.5 + 0.3;
      const mix = Math.random();
      const c = tealC.clone().lerp(beigeC, mix);
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.PointsMaterial({ size: 0.18, vertexColors: true, transparent: true, opacity: 0.75, sizeAttenuation: true });
    const particles = new THREE.Points(geo, mat);
    scene.add(particles);

    // Central wireframe torus
    const torusGeo = new THREE.TorusKnotGeometry(6, 1.8, 160, 20);
    const torusMat = new THREE.MeshBasicMaterial({ color: "#0d9488", wireframe: true, transparent: true, opacity: 0.12 });
    const torus = new THREE.Mesh(torusGeo, torusMat);
    scene.add(torus);

    // Mouse parallax
    let mx = 0, my = 0;
    const onMouse = (e) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 2;
      my = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouse);

    let frame;
    const clock = new THREE.Clock();
    const animate = () => {
      frame = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      torus.rotation.x = t * 0.08 + my * 0.3;
      torus.rotation.y = t * 0.12 + mx * 0.3;
      particles.rotation.y = t * 0.015;
      particles.rotation.x = t * 0.008;
      camera.position.x += (mx * 2 - camera.position.x) * 0.04;
      camera.position.y += (my * 2 - camera.position.y) * 0.04;
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      const w = mountRef.current?.clientWidth;
      const h = mountRef.current?.clientHeight;
      if (!w || !h) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      if (mountRef.current?.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 w-full h-full" />;
}

//  SECTION CANVAS (subtle transition divider) 

function WaveCanvas({ color = "#0d9488" }) {
  const mountRef = useRef(null);
  useEffect(() => {
    const W = mountRef.current.clientWidth;
    const H = mountRef.current.clientHeight;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(W, H);
    mountRef.current.appendChild(renderer.domElement);
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const geo = new THREE.PlaneGeometry(2, 2, 64, 8);
    const mat = new THREE.MeshBasicMaterial({ color, wireframe: true, transparent: true, opacity: 0.06 });
    const mesh = new THREE.Mesh(geo, mat);
    scene.add(mesh);

    const pos = geo.attributes.position;
    const initY = new Float32Array(pos.count);
    for (let i = 0; i < pos.count; i++) initY[i] = pos.getY(i);

    let frame;
    const clock = new THREE.Clock();
    const animate = () => {
      frame = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i);
        pos.setY(i, initY[i] + Math.sin(x * 4 + t) * 0.04 + Math.sin(x * 7 + t * 1.3) * 0.02);
      }
      pos.needsUpdate = true;
      renderer.render(scene, camera);
    };
    animate();
    return () => { cancelAnimationFrame(frame); renderer.dispose(); if (mountRef.current?.contains(renderer.domElement)) mountRef.current.removeChild(renderer.domElement); };
  }, []);
  return <div ref={mountRef} className="w-full h-24 pointer-events-none" />;
}

//  PROJECT MODAL

function ProjectModal({ project, onClose }) {
  const Icon = project.icon;
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />
      <motion.div
        className="relative z-10 w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-t-3xl md:rounded-3xl bg-[#0f1410] border border-white/10"
        initial={{ y: 80, opacity: 0, scale: 0.97 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 80, opacity: 0, scale: 0.97 }}
        transition={{ type: "spring", stiffness: 300, damping: 28 }}
      >
        {/* Hero image */}
        <div className="relative h-56 md:h-72 overflow-hidden rounded-t-3xl md:rounded-t-3xl">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1410] via-[#0f1410]/30 to-transparent" />
          <div className="absolute bottom-6 left-8">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-widest uppercase mb-2"
              style={{ background: project.color + "22", color: project.color, border: `1px solid ${project.color}44` }}>
              {project.tagline}
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">{project.title}</h2>
          </div>
          <button onClick={onClose} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center hover:bg-white/20 transition-colors">
            <FiX className="text-white text-xl" />
          </button>
        </div>

        <div className="p-8 space-y-8">
          <p className="text-[#c8b89a] text-lg leading-relaxed">{project.description}</p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-white/4 border border-white/8">
              <div className="text-xs uppercase tracking-widest font-semibold mb-2" style={{ color: project.color }}>Problem</div>
              <p className="text-sm text-[#a89880] leading-relaxed">{project.problem}</p>
            </div>
            <div className="p-5 rounded-2xl bg-white/4 border border-white/8">
              <div className="text-xs uppercase tracking-widest font-semibold mb-2" style={{ color: project.color }}>Approach</div>
              <p className="text-sm text-[#a89880] leading-relaxed">{project.approach}</p>
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest font-semibold text-[#0d9488] mb-4">Key Features</div>
            <div className="flex flex-wrap gap-2">
              {project.features.map(f => (
                <span key={f} className="px-3 py-1.5 text-sm rounded-xl bg-white/5 border border-white/10 text-[#c8b89a]">{f}</span>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest font-semibold text-[#0d9488] mb-4">Tech Stack</div>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((TechIcon, i) => (
                <div key={i} className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10">
                  <TechIcon className="text-[#0d9488] text-lg" />
                  <span className="text-xs text-[#a89880]">{project.techNames[i]}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-white/8">
            <div className="text-xs uppercase tracking-widest font-semibold text-[#0d9488] mb-2">Target Users</div>
            <p className="text-sm text-[#a89880]">{project.users}</p>
          </div>

          <div className="flex gap-3 pt-2">
            <a href={project.demo} className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl font-semibold text-sm transition-all"
              style={{ background: project.color, color: "#000" }}>
              <FiExternalLink /> Live Demo
            </a>
            <a href={project.github} className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl font-semibold text-sm bg-white/8 border border-white/12 text-white hover:bg-white/12 transition-all">
              <FiGithub /> View Source
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

//  FADE IN VIEW WRAPPER

function FadeIn({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}


export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const navLinks = ["About", "Skills", "Projects", "Services", "Education", "Contact"];

  return (
    <div className="bg-[#080c09] text-white min-h-screen font-['Sora',sans-serif] overflow-x-hidden">
      {/* Google font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,700;0,900;1,700&display=swap');
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #080c09; }
        ::-webkit-scrollbar-thumb { background: #0d9488; border-radius: 2px; }
        * { scroll-behavior: smooth; }
      `}</style>

      {/* Progress bar */}
      <motion.div className="fixed top-0 left-0 h-[2px] bg-[#0d9488] z-[100]" style={{ width: progressWidth }} />

      {/*  NAVBAR  */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-6"}`}
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={`mx-auto max-w-7xl px-6 flex items-center justify-between rounded-2xl transition-all duration-500 ${scrolled ? "bg-[#080c09]/80 backdrop-blur-xl border border-white/8 py-3 px-6" : ""}`}>
          <div className="font-black text-xl tracking-tight">
            <span className="text-[#0d9488]">ALI </span>Hassan
          </div>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(l => (
              <button key={l} onClick={() => scrollTo(l.toLowerCase())}
                className="text-sm text-[#8a9988] hover:text-white transition-colors duration-200 tracking-wide font-medium">
                {l}
              </button>
            ))}
            <button onClick={() => scrollTo("contact")}
              className="px-5 py-2.5 bg-[#0d9488] hover:bg-[#0f766e] rounded-xl text-sm font-semibold transition-colors text-black">
              Hire Me
            </button>
          </div>
          <button className="md:hidden text-white" onClick={() => setMenuOpen(v => !v)}>
            <div className="space-y-1.5">
              <div className="w-6 h-0.5 bg-white" />
              <div className="w-4 h-0.5 bg-[#0d9488]" />
            </div>
          </button>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
              className="md:hidden absolute top-full left-4 right-4 mt-2 bg-[#0f1410]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col gap-4">
              {navLinks.map(l => (
                <button key={l} onClick={() => scrollTo(l.toLowerCase())} className="text-left text-sm text-[#c8b89a] hover:text-white font-medium">{l}</button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

     
 

{/*  HERO  */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
        <HeroCanvas />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#080c09]/10 to-[#080c09]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080c09] via-[#080c09]/60 to-transparent lg:via-[#080c09]/30" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 items-center py-24">
          {/* LEFT — copy */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}
          >

            <motion.h1
              className="font-black text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tighter mb-6"
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-white"><span className="text-[#0d9488]">ALI </span>Hassan</span>
              <span className="block text-[#0d9488]">builds things</span>
              <span className="block italic font-['Playfair_Display'] text-[#c8b89a] font-bold">that matter.</span>
            </motion.h1>

            <motion.p
              className="max-w-lg text-[#8a9988] text-lg leading-relaxed mb-10"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Full-Stack Developer obsessed with performance, design systems, and the 1% of polish that separates good from great.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
            >
              <button onClick={() => scrollTo("projects")}
                className="group flex items-center gap-3 px-8 py-4 bg-[#0d9488] hover:bg-[#0f766e] rounded-2xl font-bold text-sm text-black transition-all duration-200">
                View Projects
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={() => scrollTo("contact")}
                className="px-8 py-4 border border-white/15 hover:border-white/30 rounded-2xl font-semibold text-sm text-white transition-all duration-200">
                Let's Talk
              </button>
            </motion.div>
          </motion.div>

          {/* RIGHT — portrait */}
          <motion.div
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-[280px] sm:w-[340px] lg:w-[420px] aspect-[4/5]">
              {/* glow */}
              <div className="absolute -inset-6 bg-[#0d9488]/20 blur-3xl rounded-full" />
              {/* deco frame */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-[#0d9488]" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-[#c8b89a]" />

              <motion.div
                className="relative w-full h-full overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_30px_80px_-20px_rgba(13,148,136,0.45)]"
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              >
                <img
                  src={profile}
                  alt="Ali Hassan portrait"
                  className="w-full h-full object-cover grayscale-[20%] contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080c09] via-transparent to-transparent" />
                <div className="absolute inset-0 mix-blend-overlay bg-gradient-to-br from-[#0d9488]/20 via-transparent to-[#c8b89a]/10" />
              </motion.div>

              {/* floating badge */}
              <motion.div
                className="absolute -left-6 bottom-12 bg-[#080c09]/90 backdrop-blur border border-[#0d9488]/30 rounded-2xl px-4 py-3 shadow-xl"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.8 }}
              >
                <div className="text-[10px] uppercase tracking-widest text-[#4a5e50]">Developer</div>
                <div className="text-sm font-bold text-white">Ali Hassan</div>
              </motion.div>
            </div>
          </motion.div>

          {/* scroll indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
          >
            <span className="text-[10px] uppercase tracking-widest text-[#4a5e50]">Scroll</span>
            <motion.div className="w-px h-10 bg-gradient-to-b from-[#0d9488] to-transparent"
              animate={{ scaleY: [1, 0.3, 1] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }} />
          </motion.div>
        </div>
      </section>



      {/*  ABOUT  */}
      <section id="about" className="relative py-32 overflow-hidden">
        <WaveCanvas color="#0d9488" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="relative"> 
                <div className="text-xs uppercase tracking-widest text-[#0d9488] font-semibold mb-4">About</div>
                <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-6">
                  Precision meets<br />
                  <span className="italic font-['Playfair_Display'] text-[#c8b89a]">creativity.</span>
                </h2>
                <p className="text-[#8a9988] leading-relaxed text-base mb-6">
                  I'm a full-stack engineer with 6 years building products that millions of people use.
                  My superpower is translating ambiguous problems into elegant, performant systems — then
                  shipping them before anyone else thinks it's possible.
                </p>
                <p className="text-[#8a9988] leading-relaxed text-base">
                  Icare deeply about developer experience, design systems, and the craft of software
                  — not just the output. Currently exploring the intersection of AI and product engineering.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative grid grid-cols-2 gap-4">
                {[
                  { n: "1+", l: "Years experience" },
                  { n: "5+", l: "Projects Built" }, 
                  { n: "3×", l: "Problem Solved" },
                ].map(({ n, l }) => (
                  <div key={l} className="p-6 rounded-2xl bg-white/3 border border-white/8 hover:border-[#0d9488]/30 transition-colors">
                    <div className="text-3xl font-black text-[#0d9488] mb-1">{n}</div>
                    <div className="text-xs text-[#8a9988] uppercase tracking-wide">{l}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/*  SKILLS  */}
      <section id="skills" className="py-32 bg-[#050805]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="text-xs uppercase tracking-widest text-[#0d9488] font-semibold mb-3">Skills</div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">
                Tools of the <span className="italic font-['Playfair_Display'] text-[#c8b89a]">trade</span>
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3">
            {skills.map(({ icon: Icon, name, group }, i) => (
              <FadeIn key={name} delay={i * 0.04}>
                <motion.div
                  className="group flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/3 border border-white/8 cursor-default"
                  whileHover={{ scale: 1.06, borderColor: "#0d9488", backgroundColor: "rgba(13,148,136,0.08)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <Icon className="text-2xl text-[#8a9988] group-hover:text-[#0d9488] transition-colors" />
                  <span className="text-[10px] text-center text-[#6a7e68] font-medium leading-tight">{name}</span>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/*  PROJECTS  */}
      <section id="projects" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
              <div>
                <div className="text-xs uppercase tracking-widest text-[#0d9488] font-semibold mb-3">Projects</div>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight">
                  Selected <span className="italic font-['Playfair_Display'] text-[#c8b89a]">work</span>
                </h2>
              </div>
              <p className="text-[#6a7e68] text-sm max-w-xs">Click any project to explore the full case study.</p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <FadeIn key={p.id} delay={i * 0.1}>
                <motion.div
                  className="group relative overflow-hidden rounded-3xl border border-white/8 cursor-pointer bg-[#0a0e0b]"
                  whileHover={{ scale: 1.015 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  onClick={() => setActiveProject(p)}
                >
                  <div className="relative h-52 overflow-hidden">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0e0b]" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: `${p.color}18` }} />
                  </div>
                  <div className="p-7">
                    <div className="inline-block px-2.5 py-1 rounded-lg text-[10px] font-semibold tracking-widest uppercase mb-3"
                      style={{ background: p.color + "18", color: p.color }}>
                      {p.tagline}
                    </div>
                    <h3 className="text-2xl font-black mb-2 tracking-tight">{p.title}</h3>
                    <p className="text-[#8a9988] text-sm leading-relaxed mb-5">{p.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        {p.tech.map((TIcon, ti) => (
                          <TIcon key={ti} className="text-[#4a5e50] text-lg hover:text-[#0d9488] transition-colors" />
                        ))}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-[#0d9488] opacity-0 group-hover:opacity-100 transition-opacity">
                        View Case Study <FiArrowRight />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/*  SERVICES  */}
      <section id="services" className="py-32 bg-[#050805]">
       <ContactSection />
      </section>

      {/*  EDUCATION  */}
      <section id="education" className="py-32">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <div className="text-xs uppercase tracking-widest text-[#0d9488] font-semibold mb-3">Education</div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-16">
              The <span className="italic font-['Playfair_Display'] text-[#c8b89a]">foundation</span>
            </h2>
          </FadeIn>
          <div className="relative pl-8 border-l border-white/10 space-y-10">
            {education.map((e, i) => (
              <FadeIn key={e.degree} delay={i * 0.1}>
                <div className="relative">
                  <div className="absolute -left-[41px] w-4 h-4 rounded-full border-2 border-[#0d9488] bg-[#080c09]" />
                  <div className="text-[10px] uppercase tracking-widest text-[#4a5e50] font-semibold mb-1">{e.year}</div>
                  <h3 className="text-xl font-bold mb-0.5">{e.degree}</h3>
                  <div className="text-[#0d9488] font-semibold text-sm mb-1">{e.school}</div>
                  <div className="text-[#6a7e68] text-sm">{e.note}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/*  CONTACT  */}
      <section id="contact" className="py-32 bg-[#050805] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(13,148,136,0.06) 0%, transparent 65%)" }} />
        </div>
        <div className="max-w-2xl mx-auto px-6 relative z-10">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="text-xs uppercase tracking-widest text-[#0d9488] font-semibold mb-3">Contact</div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
                Let's <span className="italic font-['Playfair_Display'] text-[#c8b89a]">collaborate</span>
              </h2>
              <p className="text-[#6a7e68] text-sm">Have a project in mind? I'd love to hear about it.</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="bg-white/3 border border-white/8 rounded-3xl p-8 space-y-4">
              {[
                { id: "name", label: "Name", type: "text", placeholder: "Your name" },
                { id: "email", label: "Email", type: "email", placeholder: "Ali@example.com" },
              ].map(({ id, label, type, placeholder }) => (
                <div key={id}>
                  <label className="block text-xs uppercase tracking-widest text-[#6a7e68] font-semibold mb-2">{label}</label>
                  <input type={type} placeholder={placeholder}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-[#4a5e50] focus:outline-none focus:border-[#0d9488]/60 transition-colors" />
                </div>
              ))}
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#6a7e68] font-semibold mb-2">Message</label>
                <textarea rows={4} placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-[#4a5e50] focus:outline-none focus:border-[#0d9488]/60 transition-colors resize-none" />
              </div>
              <motion.button
                className="w-full py-4 bg-[#0d9488] hover:bg-[#0f766e] rounded-2xl font-bold text-sm text-black transition-colors flex items-center justify-center gap-2"
                whileTap={{ scale: 0.98 }}>
                <FiMail /> Send Message
              </motion.button>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex justify-center gap-5 mt-10">
              {[
                { icon: FiGithub, href: "https://github.com/codemaniaa/", label: "GitHub" },
                { icon: FiLinkedin, href: "https://www.linkedin.com/in/ali-hassan-84920022b?", label: "LinkedIn" },
                { icon: FiTwitter, href: "https://twitter.com/ali_hassan_", label: "Twitter" },
                { icon: FiMail, href:"https://mail.google.com/mail/?view=cm&fs=1&to=hassanaliabbasi478@gmail.com", label: "Email" }
              ].map(({ icon: Icon, href, label }) => (
                <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#8a9988] hover:text-[#0d9488] hover:border-[#0d9488]/40 transition-colors"
                  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Icon className="text-lg" />
                </motion.a>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/*  FOOTER  */}
      <footer className="py-10 border-t border-white/6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-black text-lg tracking-tight">
            <span className="text-[#0d9488]">ALI </span>Hassan
          </div>
          <p className="text-[#4a5e50] text-xs"> 2025 Ali Hassan. Built with React, Three.js & Framer Motion.</p>
          <div className="flex gap-6">
            {navLinks.slice(0, 4).map(l => (
              <button key={l} onClick={() => scrollTo(l.toLowerCase())}
                className="text-xs text-[#4a5e50] hover:text-[#0d9488] transition-colors">{l}</button>
            ))}
          </div>
        </div>
      </footer>

      {/*  PROJECT MODAL  */}
      <AnimatePresence>
        {activeProject && <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />}
      </AnimatePresence>
    </div>
  );
}

