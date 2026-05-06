import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useInView } from "framer-motion";
import * as THREE from "three";
import { SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiPython, SiTailwindcss, SiPostgresql, SiMongodb, SiDocker,
SiGraphql, SiRedux, SiGit, SiFigma, SiWebgl, SiRust, SiCriticalrole, SiDjango,  
SiJavascript} from "react-icons/si";
import {  FiGithub, FiExternalLink, FiMail, FiTwitter, FiLinkedin,  FiArrowRight, FiX, FiCode, FiLayers, FiZap, FiCpu, FiGlobe, FiShield, } from "react-icons/fi";
import Agricare from "./assets/agricare.png";
import emailjs from "@emailjs/browser";

export default function ContactSection() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    emailjs.send(
      "service_gr5vd4p",
      "template_edw5zlf",
      {
        name: form.name,
        email: form.email,
        message: form.message,
      },
      "KuwF7vLbWlrDr4RPB"
    )
    .then(() => {
      alert("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
      setLoading(false);
    })
    .catch((error) => {
      console.error(error);
      alert("Failed to send message");
      setLoading(false);
    });
  };

  return (
    <section id="contact" className="py-32 bg-[#050805] relative overflow-hidden">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(13,148,136,0.06) 0%, transparent 65%)" }} />
      </div>

      <div className="max-w-2xl mx-auto px-6 relative z-10">

        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-widest text-[#0d9488] font-semibold mb-3">Contact</div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Let's <span className="italic font-['Playfair_Display'] text-[#c8b89a]">collaborate</span>
          </h2>
          <p className="text-[#6a7e68] text-sm">Have a project in mind? I'd love to hear about it.</p>
        </div>

        <div className="bg-white/3 border border-white/8 rounded-3xl p-8 space-y-4">

          {/* Name */}
          <div>
            <label className="block text-xs uppercase tracking-widest text-[#6a7e68] font-semibold mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-[#4a5e50] focus:outline-none focus:border-[#0d9488]/60 transition-colors"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs uppercase tracking-widest text-[#6a7e68] font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Ali@example.com"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-[#4a5e50] focus:outline-none focus:border-[#0d9488]/60 transition-colors"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs uppercase tracking-widest text-[#6a7e68] font-semibold mb-2">Message</label>
            <textarea
              rows={4}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-[#4a5e50] focus:outline-none focus:border-[#0d9488]/60 transition-colors resize-none"
            />
          </div>

          {/* Button */}
          <motion.button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full py-4 bg-[#0d9488] hover:bg-[#0f766e] rounded-2xl font-bold text-sm text-black transition-colors flex items-center justify-center gap-2"
            whileTap={{ scale: 0.98 }}
          >
            <FiMail />
            {loading ? "Sending..." : "Send Message"}
          </motion.button>

        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-5 mt-10">
          {[ 
            { icon: FiGithub, href: "https://github.com/codemaniaa/" },
            { icon: FiLinkedin, href: "https://www.linkedin.com/in/ali-hassan-84920022b/" }, 
            { icon: FiMail, href: "hassanaliabbasi478@gmail.com" },
          ].map(({ icon: Icon, href }, i) => (
            <motion.a key={i} href={href}
              className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#8a9988] hover:text-[#0d9488] hover:border-[#0d9488]/40 transition-colors"
              whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Icon className="text-lg" />
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}