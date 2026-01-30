import React, { forwardRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Linkedin, Github, Twitter, MessageSquare, Clock, Globe } from 'lucide-react';

const ContactSection = forwardRef((props,ref)=>{
const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [focusedField, setFocusedField] = useState(null);

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hassanaliabbasi478@gmail.com',
      link: 'mailto:hassanaliabbasi478@gmail.com',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+92 3267731773',
      link: 'tel: +923267731773',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Okara Punjab, Pakistan',
      link: '#',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const socialLinks = [
    { icon: Linkedin, name: 'LinkedIn', href: '#', color: 'hover:bg-blue-500' },
    { icon: Github, name: 'GitHub', href: '#', color: 'hover:bg-purple-500' },
    { icon: Twitter, name: 'Twitter', href: '#', color: 'hover:bg-cyan-500' },
    { icon: MessageSquare, name: 'Discord', href: '#', color: 'hover:bg-indigo-500' }
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 3000);
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Send email using backend API
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '059b250b-754e-4a1e-a669-9e2d530187b6', // Replace with your access key from web3forms.com
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: 'Portfolio Contact Form',
          to_name: 'Alex Johnson'
        })
      });

      const result = await response.json();
      
      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" ref={ref}  >
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl top-0 right-0 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl bottom-0 left-0 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-96 h-96 bg-pink-500/10 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <MessageSquare className="w-6 h-6 text-blue-400 animate-pulse" />
            <span className="text-blue-400 font-semibold uppercase tracking-wider text-sm">Get In Touch</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Let's Work <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Together</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? I'd love to hear about it. Drop me a message and let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-1 space-y-6">
            
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <a
                  key={index}
                  href={info.link}
                  className="group block relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:border-transparent transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/20 overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${info.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10 flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${info.gradient} flex items-center justify-center transition-transform group-hover:scale-110 duration-300 shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">{info.title}</p>
                      <p className="text-white font-semibold">{info.value}</p>
                    </div>
                  </div>
                </a>
              );
            })}

            <div className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-purple-400" />
                Follow Me
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className={`group flex items-center gap-3 px-4 py-3 bg-slate-800/50 rounded-xl border border-slate-700/50 ${social.color} hover:border-transparent transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                    >
                      <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                      <span className="text-sm text-gray-400 group-hover:text-white transition-colors">{social.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-xl rounded-2xl p-6 border border-green-500/30">
              <div className="flex items-center gap-3 mb-2">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="absolute inset-0 bg-green-500 rounded-full animate-ping"></div>
                </div>
                <span className="text-green-400 font-semibold">Available for Projects</span>
              </div>
              <p className="text-gray-400 text-sm flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Response time: Within 24 hours
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 overflow-hidden">
              
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10 space-y-6">

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 bg-slate-800/50 border ${
                        errors.name ? 'border-red-500/50' : focusedField === 'name' ? 'border-blue-500/50' : 'border-slate-700/50'
                      } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300`}
                      placeholder="Alee Hassan"
                    />
                    {focusedField === 'name' && !errors.name && (
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl -z-10"></div>
                    )}
                  </div>
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 bg-slate-800/50 border ${
                        errors.email ? 'border-red-500/50' : focusedField === 'email' ? 'border-blue-500/50' : 'border-slate-700/50'
                      } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300`}
                      placeholder="alee@example.com"
                    />
                    {focusedField === 'email' && !errors.email && (
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl -z-10"></div>
                    )}
                  </div>
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Subject <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 bg-slate-800/50 border ${
                        errors.subject ? 'border-red-500/50' : focusedField === 'subject' ? 'border-blue-500/50' : 'border-slate-700/50'
                      } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300`}
                      placeholder="Project Inquiry"
                    />
                    {focusedField === 'subject' && !errors.subject && (
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl -z-10"></div>
                    )}
                  </div>
                  {errors.subject && (
                    <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      rows="6"
                      className={`w-full px-4 py-3 bg-slate-800/50 border ${
                        errors.message ? 'border-red-500/50' : focusedField === 'message' ? 'border-blue-500/50' : 'border-slate-700/50'
                      } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none`}
                      placeholder="Tell me about your project..."
                    ></textarea>
                    {focusedField === 'message' && !errors.message && (
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl -z-10"></div>
                    )}
                  </div>
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`group relative w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed ${
                    isSubmitting ? '' : 'hover:scale-[1.02]'
                  }`}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </>
                    )}
                  </span>
                  {!isSubmitting && (
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="bg-green-500/20 border border-green-500/50 rounded-xl p-4 flex items-center gap-3 animate-slideIn">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <div>
                      <p className="text-green-400 font-semibold">Message sent successfully!</p>
                      <p className="text-green-300/80 text-sm">I'll get back to you as soon as possible.</p>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-4 flex items-center gap-3 animate-slideIn">
                    <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0" />
                    <div>
                      <p className="text-red-400 font-semibold">Failed to send message</p>
                      <p className="text-red-300/80 text-sm">Please check the setup instructions above or try again later.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}) 
export default ContactSection