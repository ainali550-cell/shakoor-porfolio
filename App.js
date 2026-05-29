import React, { useState, useEffect } from 'react';

export default function App() {
  // Typing Effect State Hook
  const words = ["Professional Prompt Engineer", "Software Developer", "Web Designer", "AI Trainer"];
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typedText, setTypedText] = useState('');

  // Guestbook Interactivity State
  const [guestbook, setGuestbook] = useState([
    { name: "Ali Raza", msg: "Exceptional prompt workflows on The Lex Vault!", date: "May 2026" },
    { name: "M. Asif", msg: "The UI design optimization for local platforms is game-changing.", date: "April 2026" }
  ]);
  const [gbName, setGbName] = useState('');
  const [gbMessage, setGbMessage] = useState('');

  // Contact Form State Matrix
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    let timer;
    const currentWord = words[wordIndex];
    
    const handleTyping = () => {
      if (isDeleting) {
        setTypedText(currentWord.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      } else {
        setTypedText(currentWord.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      }
    };

    let speed = isDeleting ? 40 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
      speed = 2000; 
      setIsDeleting(true);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex(prev => (prev + 1) % words.length);
      speed = 400;
    }

    timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex]);

  const handleGuestbookSubmit = (e) => {
    e.preventDefault();
    if (!gbName.trim() || !gbMessage.trim()) return;
    const newEntry = {
      name: gbName,
      msg: gbMessage,
      date: "Just Now"
    };
    setGuestbook([newEntry, ...guestbook]);
    setGbName('');
    setGbMessage('');
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setContactForm({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <div className="bg-[#0b0f19] text-slate-100 min-h-screen font-sans selection:bg-sky-500 selection:text-slate-900">
      
      {/* Premium Glassmorphic Header */}
      <header className="fixed top-0 w-full z-50 bg-[#0f172a]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tight bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
            Shakoor Malik
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-sky-400 transition">About</a>
            <a href="#portfolio" className="hover:text-sky-400 transition">Projects</a>
            <a href="#advocacy" className="hover:text-sky-400 transition">Impact</a>
            <a href="#bench" className="hover:text-sky-400 transition">The Bench</a>
            <a href="#blog" className="hover:text-sky-400 transition">Insights</a>
            <a href="#contact" className="hover:text-sky-400 transition-colors bg-sky-500/10 text-sky-400 px-4 py-1.5 rounded-full border border-sky-500/20 hover:bg-sky-500/20">Connect</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.07),transparent_50%)]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wider bg-sky-500/10 text-sky-400 border border-sky-500/20 uppercase">
            Available for Global AI & Web Engineering Tasks
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mt-6 mb-4">
            Shakoor Malik
          </h1>
          <h2 className="text-xl md:text-3xl text-slate-400 font-medium h-12">
            <span>{typedText}</span>
            <span className="inline-block w-[3px] h-6 bg-sky-400 ml-1 animate-pulse">|</span>
          </h2>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl font-serif italic text-slate-300 my-8 leading-relaxed border-l-2 border-sky-500/30 pl-4">
            "Software architecture meets premium visual design. Code built to solve real-world problems."
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <a href="#contact" className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold px-8 py-3.5 rounded-lg transition-all shadow-lg shadow-sky-500/10 hover:shadow-sky-500/20 transform hover:-translate-y-0.5">
              Initiate Project Hub
            </a>
            <a href="#portfolio" className="bg-slate-900 hover:bg-slate-800 text-slate-300 font-medium px-8 py-3.5 rounded-lg border border-white/10 transition-all transform hover:-translate-y-0.5">
              Explore Implementations
            </a>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section id="about" className="py-24 max-w-6xl mx-auto px-6 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold text-sky-400 tracking-widest uppercase">The Paradigm</span>
            <h2 className="text-3xl font-bold text-white mt-2 mb-6">Bridging Code and Advanced Inference</h2>
            <div className="space-y-4 text-slate-400 text-base leading-relaxed">
              <p>
                I operate as a hybrid technologist specializing in building high-fidelity web layers while managing precise generative AI infrastructure.
              </p>
              <p>
                My development workflow couples structural reliability with targeted interactive mechanics, ensuring user interfaces translate into optimized data flows.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-slate-900/50 rounded-xl border border-white/5">
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-sm text-slate-400">Deployed Functional Architectures</div>
            </div>
            <div className="p-6 bg-slate-900/50 rounded-xl border border-white/5">
              <div className="text-3xl font-bold text-white mb-2">20+</div>
              <div className="text-sm text-slate-400">Generative Media Frameworks</div>
            </div>
          </div>
        </div>
      </section>

      {/* Production Case Studies Matrix */}
      <section id="portfolio" className="py-24 bg-[#090d16] border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-xs font-bold text-sky-400 tracking-widest uppercase">Showcase</span>
            <h2 className="text-3xl font-bold text-white mt-2">Production Implementations</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Project 1 */}
            <div className="bg-[#111827]/60 border border-white/5 rounded-xl overflow-hidden hover:border-sky-500/30 transition-all group flex flex-col justify-between">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-400 border border-purple-500/20 font-mono">Live Engine</span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">The Lex Vault</h3>
                <p className="text-sm text-slate-400 mt-2.5 leading-relaxed">High-resolution AI media generation hub and cinematic prompt repository.</p>
              </div>
              <div className="p-6 pt-0">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {["UI Design", "Advanced Prompt Engineering", "Asset Management"].map(t => (
                    <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">{t}</span>
                  ))}
                </div>
                <a href="https://thelexvault.netlify.app/" target="_blank" rel="noreferrer" className="text-xs text-sky-400 font-semibold inline-flex items-center gap-1 hover:underline">
                  Analyze Architecture →
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-[#111827]/60 border border-white/5 rounded-xl overflow-hidden hover:border-sky-500/30 transition-all group flex flex-col justify-between">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">Utility</span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">QR Cola</h3>
                <p className="text-sm text-slate-400 mt-2.5 leading-relaxed">A streamlined, interactive utility platform built for quick asset access and clean digital distribution.</p>
              </div>
              <div className="p-6 pt-0">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {["React", "Tailwind CSS", "Frontend Architecture", "Netlify"].map(t => (
                    <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">{t}</span>
                  ))}
                </div>
                <a href="https://qrcola.netlify.app/" target="_blank" rel="noreferrer" className="text-xs text-sky-400 font-semibold inline-flex items-center gap-1 hover:underline">
                  Analyze Architecture →
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-[#111827]/60 border border-white/5 rounded-xl overflow-hidden hover:border-sky-500/30 transition-all group flex flex-col justify-between">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs px-2.5 py-1 rounded-md bg-sky-500/10 text-sky-400 border border-sky-500/20 font-mono">Agri-Tech</span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">Ain Ali Traders & Pesticides Digital Hub</h3>
                <p className="text-sm text-slate-400 mt-2.5 leading-relaxed">Bringing commercial agriculture into the digital space—a clean business interface optimized for local accessibility in Karor Lal Esan.</p>
              </div>
              <div className="p-6 pt-0">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {["React", "Python", "Business Logic", "Responsive UI"].map(t => (
                    <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">{t}</span>
                  ))}
                </div>
                <a href="#contact" className="text-xs text-slate-400 font-semibold inline-flex items-center gap-1 hover:text-white">
                  Internal Core Stack
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Community Advocacy Spotlight Section */}
      <section id="advocacy" className="py-24 max-w-6xl mx-auto px-6 border-t border-white/5">
        <div className="mb-12">
          <span className="text-xs font-bold text-sky-400 tracking-widest uppercase">Advocacy & Design Engagement</span>
          <h2 className="text-3xl font-bold text-white mt-2">Social Leadership & Regional Contributions</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-slate-900/40 border border-white/5 rounded-xl hover:border-white/10 transition-colors">
            <h3 className="text-lg font-bold text-white mb-2">Government Primary School Atlira</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Engineered and deployed structural design assets, local facility expansion banners, digital validation frameworks, admission posters, and regional educational seminar visual portfolios.
            </p>
          </div>
          <div className="p-8 bg-slate-900/40 border border-white/5 rounded-xl hover:border-white/10 transition-colors">
            <h3 className="text-lg font-bold text-white mb-2">Social Leadership Visual Engines</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Spearheaded professional layout automation and structural corporate identities for regional organizations, focusing on materials development for the Punjab Teachers Union leadership matrix.
            </p>
          </div>
        </div>
      </section>

      {/* The Bench Setup Section */}
      <section id="bench" className="py-24 bg-[#090d16] border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold text-sky-400 tracking-widest uppercase">The Bench</span>
            <h2 className="text-3xl font-bold text-white mt-2">Engineering & Inference Tooling Matrix</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-5 bg-[#111827]/40 border border-white/5 rounded-xl text-center">
              <h4 className="text-sm font-semibold text-slate-300 mb-3">Computation</h4>
              <p className="text-xs text-sky-400 font-mono">Python / Automation</p>
            </div>
            <div className="p-5 bg-[#111827]/40 border border-white/5 rounded-xl text-center">
              <h4 className="text-sm font-semibold text-slate-300 mb-3">Client Layer</h4>
              <p className="text-xs text-sky-400 font-mono">React / Tailwind / ES6+</p>
            </div>
            <div className="p-5 bg-[#111827]/40 border border-white/5 rounded-xl text-center">
              <h4 className="text-sm font-semibold text-slate-300 mb-3">Continuous Sync</h4>
              <p className="text-xs text-sky-400 font-mono">GitHub / Netlify Infrastructure</p>
            </div>
            <div className="p-5 bg-[#111827]/40 border border-white/5 rounded-xl text-center">
              <h4 className="text-sm font-semibold text-slate-300 mb-3">AI Engine Architecture</h4>
              <p className="text-xs text-sky-400 font-mono">Advanced Prompts / Text-to-Video</p>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Blogs Matrix */}
      <section id="blog" className="py-24 max-w-6xl mx-auto px-6 border-t border-white/5">
        <div className="mb-12">
          <span className="text-xs font-bold text-sky-400 tracking-widest uppercase">Insights</span>
          <h2 className="text-3xl font-bold text-white mt-2">Technical Authority & Architectural Writing</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <article className="group p-6 bg-slate-900/30 rounded-xl border border-white/5 hover:border-sky-500/20 transition-all cursor-pointer">
            <span className="text-[11px] font-mono text-sky-400">Generative Pipelines</span>
            <h3 className="text-xl font-bold text-white mt-2 group-hover:text-sky-400 transition-colors">Mastering Visual Consistency: A Deep Dive into Cinematic Image-to-Video Workflows.</h3>
            <p className="text-sm text-slate-400 mt-3 leading-relaxed">Analyzing latent space seed locks, temporal interpolation logic, and model weights orchestration for continuous generation output coherence.</p>
          </article>
          <article className="group p-6 bg-slate-900/30 rounded-xl border border-white/5 hover:border-sky-500/20 transition-all cursor-pointer">
            <span className="text-[11px] font-mono text-sky-400">Web Optimization</span>
            <h3 className="text-xl font-bold text-white mt-2 group-hover:text-sky-400 transition-colors">Building for the Web in 2026: Why I Pair React with Netlify for Rapid Project Deployment.</h3>
            <p className="text-sm text-slate-400 mt-3 leading-relaxed">Exploring production deployment acceleration pipelines, custom redirects configurations, and edge cache handling mechanics.</p>
          </article>
        </div>
      </section>

      {/* Contact & Dynamic Interactive Guestbook System */}
      <section id="contact" className="py-24 bg-[#090d16] border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Main Direct Messaging Form */}
          <div className="bg-[#111827]/40 border border-white/5 p-8 rounded-2xl backdrop-blur-xl">
            <h3 className="text-2xl font-bold text-white mb-2">Direct Communications</h3>
            <p className="text-sm text-slate-400 mb-6">Initiate secure project architecture inquiries or generative engineering consultations.</p>
            
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1">Identification Name</label>
                <input type="text" required value={contactForm.name} onChange={e => setContactForm({...contactForm, name: e.target.value})} className="w-full bg-slate-950 border border-white/10 rounded-lg p-3 text-sm focus:border-sky-500 outline-none text-white transition-colors" placeholder="e.g. Architect Client" />
              </div>
              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1">Digital Mail Pointer</label>
                <input type="email" required value={contactForm.email} onChange={e => setContactForm({...contactForm, email: e.target.value})} className="w-full bg-slate-950 border border-white/10 rounded-lg p-3 text-sm focus:border-sky-500 outline-none text-white transition-colors" placeholder="client@domain.com" />
              </div>
              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1">System Scope Request</label>
                <textarea required rows="4" value={contactForm.message} onChange={e => setContactForm({...contactForm, message: e.target.value})} className="w-full bg-slate-950 border border-white/10 rounded-lg p-3 text-sm focus:border-sky-500 outline-none text-white transition-colors resize-none" placeholder="Describe the app structural complexity..."></textarea>
              </div>
              <button type="submit" className="w-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold p-3 rounded-lg text-sm transition-colors">
                Broadcast Network Packet
              </button>
              {formSubmitted && (
                <p className="text-xs font-mono text-emerald-400 text-center mt-2 animate-fade-in">✔ Core telemetry payload transmitted. Awaiting sync.</p>
              )}
            </form>
          </div>

          {/* Interactive Guestbook Component Block */}
          <div className="flex flex-col justify-between">
            <div className="bg-[#111827]/40 border border-white/5 p-8 rounded-2xl backdrop-blur-xl mb-6 flex-grow">
              <h3 className="text-2xl font-bold text-white mb-1">The Guestbook Matrix</h3>
              <p className="text-sm text-slate-400 mb-6">An interactive registry for peers, developers, and project networks.</p>
              
              <form onSubmit={handleGuestbookSubmit} className="flex gap-2 mb-6">
                <input type="text" required value={gbName} onChange={e => setGbName(e.target.value)} placeholder="Handle" className="w-1/3 bg-slate-950 border border-white/10 rounded-lg px-3 py-2 text-xs outline-none focus:border-sky-500 text-white" />
                <input type="text" required value={gbMessage} onChange={e => setGbMessage(e.target.value)} placeholder="Sign the wall..." className="w-2/3 bg-slate-950 border border-white/10 rounded-lg px-3 py-2 text-xs outline-none focus:border-sky-500 text-white" />
                <button type="submit" className="bg-slate-800 hover:bg-slate-700 text-sky-400 font-mono text-xs px-3 rounded-lg border border-white/10">Sign</button>
              </form>

              <div className="space-y-3 max-h-[220px] overflow-y-auto pr-2 custom-scrollbar">
                {guestbook.map((entry, idx) => (
                  <div key={idx} className="bg-slate-950/60 p-3 rounded-lg border border-white/5 text-xs">
                    <div className="flex justify-between text-[11px] font-mono text-slate-500 mb-1">
                      <span className="text-sky-400/80 font-semibold">@{entry.name}</span>
                      <span>{entry.date}</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed">{entry.msg}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Communications Social Vector Routing Bar */}
            <div className="grid grid-cols-3 md:grid-cols-5 gap-2 text-center text-xs font-mono">
              <a href="https://github.com/ainali550-cell" target="_blank" rel="noreferrer" className="p-3 bg-slate-900 border border-white/5 rounded-lg hover:bg-slate-800 text-slate-300 transition-colors">GitHub</a>
              <a href="https://wa.me/923029112840" target="_blank" rel="noreferrer" className="p-3 bg-slate-900 border border-white/5 rounded-lg hover:bg-slate-800 text-emerald-400 transition-colors">WhatsApp</a>
              <a href="https://www.instagram.com/shakoormalik39" target="_blank" rel="noreferrer" className="p-3 bg-slate-900 border border-white/5 rounded-lg hover:bg-slate-800 text-pink-400 transition-colors">Instagram</a>
              <a href="https://www.facebook.com/share/1CiuBmy4NZ/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="p-3 bg-slate-900 border border-white/5 rounded-lg hover:bg-slate-800 text-blue-400 transition-colors">Facebook</a>
              <a href="https://www.youtube.com" target="_blank" rel="noreferrer" className="p-3 bg-slate-900 border border-white/5 rounded-lg hover:bg-slate-800 text-red-400 col-span-3 md:col-span-1 transition-colors">YouTube</a>
            </div>

          </div>
        </div>
      </section>

      {/* Footer Matrix */}
      <footer className="bg-slate-950 border-t border-white/5 py-8 text-center text-xs font-mono text-slate-500">
        <p>© 2026 Shakoor Malik. Distributed over distributed global edge relays.</p>
      </footer>

    </div>
  );
}