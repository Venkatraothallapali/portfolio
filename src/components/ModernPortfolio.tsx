import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Download, ExternalLink, Code2, Database, Briefcase, GraduationCap, ChevronRight } from 'lucide-react';

const ModernPortfolio = () => {
  return (
    <div className="bg-[#0f172a] text-slate-200 min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0f172a]/80 backdrop-blur-xl border-b border-slate-800">
        <div className="container-custom py-0 h-16 flex items-center justify-between">
          <span className="text-xl font-black tracking-tighter text-white">VT<span className="text-blue-500">.</span></span>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="nav-item">About</a>
            <a href="#skills" className="nav-item">Skills</a>
            <a href="#experience" className="nav-item">Experience</a>
            <a href="#projects" className="nav-item">Projects</a>
            <a href="#contact" className="nav-item">Contact</a>
          </div>
          <a href="mailto:venkatraothallapalli809@gmail.com" className="px-4 py-2 bg-blue-600/10 text-blue-400 border border-blue-500/20 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all">
            Hire Me
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-7"
            >
              <span className="badge-primary mb-6">Available for Work</span>
              <h1 className="text-white">
                Hi, I'm <span className="text-blue-500">Venkatrao</span><br />
                <span className="text-4xl md:text-5xl opacity-90">AI/ML Engineer & Developer</span>
              </h1>
              <p className="text-lg text-slate-400 mb-10 max-w-xl leading-relaxed">
                Passionate about architecting intelligent systems and scalable software solutions. Based in India, focused on delivering high-performance AI products for enterprise excellence.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#projects" className="btn-blue flex items-center gap-2">
                  View Projects <ChevronRight size={18} />
                </a>
                <div className="flex items-center space-x-4 ml-2">
                  <a href="https://github.com/Venkatraothallapali" target="_blank" className="p-3 bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors">
                    <Github size={20} />
                  </a>
                  <a href="https://linkedin.com/in/venkatrao-thallapalli" target="_blank" className="p-3 bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative w-full aspect-square max-w-[400px] mx-auto">
                <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-[80px]"></div>
                <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden border-2 border-slate-700 p-2 bg-slate-800/50 backdrop-blur-sm">
                  <img src="venkat_profile.png" alt="Venkatrao Thallapalli" className="w-full h-full object-cover rounded-2xl" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-slate-900/50 py-24 border-y border-slate-800">
        <div className="container-custom">
          <h2>About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="space-y-6 text-lg text-slate-400">
              <p>
                As an <span className="text-white font-semibold">AI/ML Engineer</span> at IndustryIceberg, I specialize in building production-grade intelligence layers for complex enterprise platforms.
              </p>
              <p>
                With a B.Tech in ECE (CGPA 8.63), I blend hardware-level precision with high-level software architecture. My journey is defined by a deep curiosity for how AI can optimize business workflows and scale product performance.
              </p>
              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2 text-sm">
                  <MapPin size={18} className="text-blue-500" />
                  <span>India</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <GraduationCap size={18} className="text-blue-500" />
                  <span>B.Tech ECE</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="card-dark text-center">
                <h4 className="text-3xl font-bold text-blue-500 mb-1">3+</h4>
                <p className="text-xs uppercase tracking-widest font-bold text-slate-500">Projects</p>
              </div>
              <div className="card-dark text-center">
                <h4 className="text-3xl font-bold text-blue-500 mb-1">8.63</h4>
                <p className="text-xs uppercase tracking-widest font-bold text-slate-500">CGPA</p>
              </div>
              <div className="card-dark text-center col-span-2">
                <h4 className="text-xl font-bold text-white mb-1">IndustryIceberg</h4>
                <p className="text-xs uppercase tracking-widest font-bold text-slate-500">Current Role</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="container-custom">
          <h2>Skills & Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-dark">
              <Code2 className="text-blue-500 mb-4" size={32} />
              <h3>Programming</h3>
              <div className="space-y-4 pt-4">
                {[
                  { name: 'Python', level: '90%' },
                  { name: 'TypeScript', level: '85%' },
                  { name: 'SQL', level: '80%' },
                  { name: 'JavaScript', level: '80%' },
                ].map(skill => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-xs font-bold mb-1 uppercase tracking-widest">
                      <span>{skill.name}</span>
                      <span className="text-blue-500">{skill.level}</span>
                    </div>
                    <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500" style={{ width: skill.level }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="card-dark">
              <Database className="text-emerald-500 mb-4" size={32} />
              <h3>AI & Data</h3>
              <div className="flex flex-wrap gap-2 pt-4">
                {['NumPy', 'Pandas', 'LSTM', 'ML Models', 'Power BI', 'EDA', 'Scikit-learn', 'Matplotlib'].map(s => (
                  <span key={s} className="px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-lg text-sm text-slate-300">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="card-dark">
              <Briefcase className="text-purple-500 mb-4" size={32} />
              <h3>Frontend</h3>
              <div className="flex flex-wrap gap-2 pt-4">
                {['React 18', 'Tailwind CSS', 'Vite', 'React Router', 'Lucide Icons', 'Framer Motion'].map(s => (
                  <span key={s} className="px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-lg text-sm text-slate-300">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-slate-900/50 py-24 border-y border-slate-800">
        <div className="container-custom">
          <h2>Experience</h2>
          <div className="max-w-3xl mx-auto">
            <div className="relative pl-8 border-l-2 border-slate-800 pb-12">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="mb-0">AI/ML Engineer</h3>
                  <p className="text-blue-500 font-bold mb-0">IndustryIceberg</p>
                </div>
                <span className="text-xs font-bold text-slate-500 bg-slate-800 px-3 py-1 rounded-full uppercase">2025 — Present</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Leading the development of enterprise-grade AI products and scalable software systems for global clients.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] font-bold text-slate-400 bg-slate-800 px-2 py-0.5 rounded uppercase tracking-widest">Enterprise UI</span>
                <span className="text-[10px] font-bold text-slate-400 bg-slate-800 px-2 py-0.5 rounded uppercase tracking-widest">AI Demos</span>
                <span className="text-[10px] font-bold text-slate-400 bg-slate-800 px-2 py-0.5 rounded uppercase tracking-widest">Architecture</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="container-custom">
          <h2>Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Enterprise AI Dashboard', desc: 'Modular management interface for AI SaaS operations.', tag: 'IndustryIceberg', color: 'blue' },
              { title: 'VeritaScribe AI', desc: 'Pharma document drafting simulation with split-screen preview.', tag: 'IndustryIceberg', color: 'blue' },
              { title: 'Stock Prediction System', desc: 'LSTM-based time series forecasting for market trends.', tag: 'Data & ML', color: 'emerald' },
              { title: 'Retail BI Dashboard', desc: 'EDA and visualization of multi-million row retail datasets.', tag: 'Business Intelligence', color: 'purple' },
            ].map((p, idx) => (
              <motion.div 
                key={p.title}
                whileHover={{ y: -5 }}
                className="card-dark group cursor-pointer"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-3 bg-${p.color}-500/10 rounded-xl`}>
                    <Code2 className={`text-${p.color}-500`} size={24} />
                  </div>
                  <ExternalLink size={18} className="text-slate-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="group-hover:text-blue-400 transition-colors">{p.title}</h3>
                <p className="text-sm text-slate-400 mb-6">{p.desc}</p>
                <div className="flex items-center justify-between pt-6 border-t border-slate-800">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">{p.tag}</span>
                  <span className="text-xs font-bold text-blue-500">Case Study</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-blue-600">
        <div className="container-custom text-center">
          <h2 className="text-white border-none pb-0 after:hidden mb-4">Let's Work Together</h2>
          <p className="text-blue-100 text-xl mb-12 max-w-xl mx-auto">
            Ready to bring intelligent solutions to your next big project. Currently available for new opportunities.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a href="mailto:venkatraothallapalli809@gmail.com" className="px-10 py-4 bg-white text-blue-600 font-black rounded-2xl hover:bg-slate-50 transition-all shadow-xl shadow-blue-900/20">
              Send an Email
            </a>
            <div className="flex items-center space-x-4">
              <a href="https://linkedin.com/in/venkatrao-thallapalli" className="p-4 bg-blue-700 text-white rounded-2xl hover:bg-blue-800 transition-all">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/Venkatraothallapali" className="p-4 bg-blue-700 text-white rounded-2xl hover:bg-blue-800 transition-all">
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800 text-center">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
          © {new Date().getFullYear()} Venkatrao Thallapalli • Built with React & Tailwind
        </p>
      </footer>
    </div>
  );
};

export default ModernPortfolio;
