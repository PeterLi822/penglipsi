import React from 'react';
import { motion } from 'framer-motion';
import { PackageSearch, TrendingUp, Calendar, BookOpen, Box, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

function App() {
  return (
    <div className="min-h-screen bg-brand-dark selection:bg-brand-accent selection:text-white pb-24">
      {/* Navigation / Header */}
      <nav className="fixed top-0 w-full bg-brand-dark/80 backdrop-blur-md z-50 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-brand-accent flex items-center justify-center font-bold text-white">PL</div>
            <span className="font-semibold text-white tracking-wide">Peng Li</span>
          </div>
          <div className="text-sm text-brand-muted hidden sm:block">
            Supply Planner Candidate • Pacific Smoke International
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-sm font-medium mb-6 border border-brand-accent/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
            </span>
            Prepared for Pacific Smoke International
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight mb-6">
            Bridging Operations & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-muted">Strategic Supply Planning</span>
          </h1>
          <p className="text-xl text-brand-muted max-w-2xl mb-10 leading-relaxed">
            I combine 7+ years of hands-on operational experience with a structured approach to inventory management, bringing realistic, execution-driven planning to the table.
          </p>
          <div className="flex gap-4">
            <a href="#message" className="px-6 py-3 rounded-lg bg-brand-accent text-white font-medium hover:bg-red-500 transition-colors flex items-center gap-2">
              Read My Message <ArrowRight size={18} />
            </a>
          </div>
        </FadeIn>
      </section>

      {/* Message Section */}
      <section id="message" className="py-20 px-6 bg-brand-card/50 border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <div className="w-1 h-6 bg-brand-accent rounded"></div>
              A Note for James & Ben
            </h2>
            <div className="bg-brand-card border border-white/5 p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <div className="prose prose-invert prose-lg max-w-none relative z-10 text-brand-muted">
                <p>Hi James and Ben,</p>
                <p>
                  Thank you for reviewing my application for the Supply Planner role. I built this page to provide more context about my background and my transition into supply planning.
                </p>
                <p>
                  While my title at WECOMTRANSIT was Operations Manager, my day-to-day involved deep, execution-level planning. I didn't just move boxes; I managed inventory accuracy, cycle counts, resolved discrepancies, and dictated replenishment rhythms based on capacity and demand. 
                </p>
                <p>
                  I'm bringing two distinct advantages to Pacific Smoke: 
                  <strong> 1. Execution-Driven Planning:</strong> I understand how planning parameters (MOQ, Safety Stock) actually play out on the warehouse floor.
                  <strong> 2. Native Mandarin Advantage:</strong> I can seamlessly manage and influence vendors in China without cultural or language barriers, directly aligning with your vendor management requirements.
                </p>
                <p>
                  I am actively formalizing my operational knowledge into structured planning frameworks through continued education, and I'm ready to hit the ground running.
                </p>
                <p className="font-medium text-white mt-8">— Peng Li</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Competencies Translation */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Operations Experience, Translated</h2>
            <p className="text-brand-muted max-w-2xl mx-auto">How my hands-on background directly maps to the requirements of the Supply Planner role at PSI.</p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          <FadeIn delay={0.1}>
            <div className="bg-brand-card p-6 rounded-2xl border border-white/5 h-full hover:border-brand-accent/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-6">
                <Box size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Inventory Control</h3>
              <p className="text-brand-muted text-sm mb-4">
                <strong>At WECOMTRANSIT:</strong> Managed physical cycle counts, investigated discrepancies, and ensured warehouse space optimization.
              </p>
              <div className="pt-4 border-t border-white/10">
                <p className="text-sm text-brand-accent font-medium flex items-center gap-2">
                  <CheckCircle2 size={16} /> Maps to PSI JD:
                </p>
                <p className="text-sm text-white mt-2">"Daily inventory assessments to determine shorts, risks, and excess."</p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="bg-brand-card p-6 rounded-2xl border border-white/5 h-full hover:border-brand-accent/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-6">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Vendor Management</h3>
              <p className="text-brand-muted text-sm mb-4">
                <strong>At WECOMTRANSIT:</strong> Handled inbound carrier communications, freight tracking, and supplier dispute resolutions in Mandarin.
              </p>
              <div className="pt-4 border-t border-white/10">
                <p className="text-sm text-brand-accent font-medium flex items-center gap-2">
                  <CheckCircle2 size={16} /> Maps to PSI JD:
                </p>
                <p className="text-sm text-white mt-2">"Development of effective working relationships with international suppliers (China)."</p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="bg-brand-card p-6 rounded-2xl border border-white/5 h-full hover:border-brand-accent/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-6">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">System & Data Integrity</h3>
              <p className="text-brand-muted text-sm mb-4">
                <strong>At WECOMTRANSIT:</strong> Led WMS implementation, structured warehouse data, and improved system-to-physical accuracy.
              </p>
              <div className="pt-4 border-t border-white/10">
                <p className="text-sm text-brand-accent font-medium flex items-center gap-2">
                  <CheckCircle2 size={16} /> Maps to PSI JD:
                </p>
                <p className="text-sm text-white mt-2">"Create and maintain items in NetSuite while ensuring accuracy of master data."</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 30-60-90 Plan */}
      <section className="py-24 px-6 bg-brand-card/30 border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The First 90 Days</h2>
              <p className="text-brand-muted max-w-2xl mx-auto">My actionable plan to integrate with the team and drive immediate value as a Supply Planner.</p>
            </div>
          </FadeIn>

          <div className="space-y-8">
            <FadeIn delay={0.1}>
              <div className="flex gap-6 relative">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-brand-card border-2 border-brand-accent flex items-center justify-center font-bold text-brand-accent z-10">30</div>
                  <div className="w-px h-full bg-white/10 absolute top-12 bottom-0"></div>
                </div>
                <div className="bg-brand-card border border-white/5 p-6 rounded-2xl flex-1 mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">Assess & Learn</h3>
                  <ul className="space-y-3 text-brand-muted">
                    <li className="flex gap-3"><ChevronRight className="text-brand-accent shrink-0" size={20}/> Deep dive into the NetSuite environment; map out Item Master Data flows.</li>
                    <li className="flex gap-3"><ChevronRight className="text-brand-accent shrink-0" size={20}/> Review current inventory levels (shorts, risks, excess) for my assigned portfolio.</li>
                    <li className="flex gap-3"><ChevronRight className="text-brand-accent shrink-0" size={20}/> Establish communication lines with key international suppliers in China.</li>
                  </ul>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="flex gap-6 relative">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-brand-card border-2 border-brand-accent flex items-center justify-center font-bold text-brand-accent z-10">60</div>
                  <div className="w-px h-full bg-white/10 absolute top-12 bottom-0"></div>
                </div>
                <div className="bg-brand-card border border-white/5 p-6 rounded-2xl flex-1 mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">Analyze & Optimize</h3>
                  <ul className="space-y-3 text-brand-muted">
                    <li className="flex gap-3"><ChevronRight className="text-brand-accent shrink-0" size={20}/> Take ownership of the bi-weekly replenishment cycle and PO processing.</li>
                    <li className="flex gap-3"><ChevronRight className="text-brand-accent shrink-0" size={20}/> Identify slow-moving items and generate the monthly obsolescence/aged inventory report.</li>
                    <li className="flex gap-3"><ChevronRight className="text-brand-accent shrink-0" size={20}/> Evaluate vendor lead times and MOQ against current safety stock settings.</li>
                  </ul>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex gap-6 relative">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-brand-accent flex items-center justify-center font-bold text-white z-10">90</div>
                </div>
                <div className="bg-brand-card border border-white/5 p-6 rounded-2xl flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">Improve & Report</h3>
                  <ul className="space-y-3 text-brand-muted">
                    <li className="flex gap-3"><ChevronRight className="text-brand-accent shrink-0" size={20}/> Present the first comprehensive Vendor Compliance Report to management.</li>
                    <li className="flex gap-3"><ChevronRight className="text-brand-accent shrink-0" size={20}/> Align with Sales & Marketing to coordinate inventory planning for upcoming Q3/Q4 New Product Launches.</li>
                    <li className="flex gap-3"><ChevronRight className="text-brand-accent shrink-0" size={20}/> Propose 1-2 process improvements for system calculations on risks and excess.</li>
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <FadeIn>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Proactive Upskilling</h2>
              <p className="text-brand-muted text-lg mb-8 leading-relaxed">
                I believe in continuous learning. To ensure a rapid and smooth transition from Operations to Planning, I have proactively completed formal training in Supply Chain and Inventory Management methodologies.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-brand-card p-4 rounded-xl border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                    <BookOpen size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Supply Chain Foundations</h4>
                    <p className="text-sm text-brand-muted">Completed via LinkedIn Learning</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-brand-card p-4 rounded-xl border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                    <PackageSearch size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Inventory Management Foundations</h4>
                    <p className="text-sm text-brand-muted">Completed via LinkedIn Learning</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-brand-card p-4 rounded-xl border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Getting Started as an Inventory Planning Manager</h4>
                    <p className="text-sm text-brand-muted">Completed via LinkedIn Learning</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full">
              {/* Placeholder for the user's certificate or screenshot */}
              <div className="aspect-video bg-brand-card border border-white/5 rounded-2xl flex flex-col items-center justify-center p-8 text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <BookOpen size={48} className="text-brand-muted mb-4" />
                <p className="text-brand-muted font-medium">Add LinkedIn Certificate Screenshots Here</p>
                <p className="text-sm text-brand-muted/70 mt-2">Replace this placeholder with images in the codebase</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

    </div>
  );
}

export default App;
