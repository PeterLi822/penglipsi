import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PackageSearch, TrendingUp, Calendar, BookOpen, Box, ShieldCheck, ArrowRight, CheckCircle2, ChevronRight, Globe, Target, Zap, Activity } from 'lucide-react';

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

const t = {
  navTitle: { en: "Peng Li", zh: "李鹏" },
  navSubtitle: { en: "Supply Planner Candidate • Pacific Smoke International", zh: "Supply Planner 候选人 • 太平洋烟草 (Pacific Smoke)" },
  toggleLang: { en: "中文", zh: "English" },
  heroBadge: { en: "A Strategic Pitch for Pacific Smoke", zh: "专为 Pacific Smoke 面试准备的战略演示" },
  heroTitle1: { en: "Bridging Execution &", zh: "连接一线执行与" },
  heroTitle2: { en: "Strategic Supply Planning", zh: "战略级供应链计划" },
  heroDesc: { en: "An ENTJ professional combining 7+ years of hands-on warehouse operations with a structured, data-driven approach to inventory management. I build processes that make planning realistic.", zh: "一名 ENTJ 型职场人，将超过 7 年的一线仓储实操经验与系统化、数据驱动的库存管理方法相结合。我构建的流程能让“计划”真正落地。" },
  heroButton: { en: "Read My Note to HR", zh: "阅读写给 HR 的信" },
  msgTitle: { en: "A Note for Ben (Talent Acquisition)", zh: "写给 Ben 的一封坦诚的信" },
  msgP1: { en: "Hi Ben,", zh: "Ben，你好：" },
  msgP2: { en: "Thank you for reviewing my application. I built this page to provide full transparency and address any questions you might have about my background when looking at my resume.", zh: "感谢你抽空审阅我的申请。我专门制作了这个网页，希望能向你提供完全透明的信息，并解答你在看我简历时可能产生的一些疑问。" },
  msgP3: { en: "To be completely upfront: while the version of my resume submitted was optimized with Supply Planning keywords to align with the ATS, my actual title at WECOMTRANSIT was Operations Manager. However, this is not a fabrication of experience—it is a translation.", zh: "我想非常坦诚地说明一点：虽然我提交的简历为了匹配系统（ATS），使用了大量 Supply Planning 的专业词汇，但我在 WECOMTRANSIT 的实际头衔是运营经理 (Operations Manager)。然而，这绝不是虚构经历，而是一次“视角的转化”。" },
  msgP4: { en: "I didn't just move boxes. I functioned as the central nervous system of our inventory. I managed the physical cycle counts that ensure system data integrity. I dictated our replenishment rhythms based on floor capacity and demand urgency. I handled vendor disputes and freight carrier communications.", zh: "我不仅仅是在“搬箱子”。我是整个库存体系的中枢神经。我管理物理盘点以确保系统数据准确；我根据仓库产能和需求紧急程度来决定补货节奏；我直接处理供应商纠纷和承运人沟通。" },
  msgP5: { en: "My core advantage is Execution-Driven Planning. I know exactly how planning parameters (MOQ, Safety Stock, Lead Time) impact the actual warehouse floor. I am not just a theorist; I understand the physical limitations and realities behind the numbers. I am eager to formally transition my operational foundation into your structured Supply Planning team.", zh: "我的核心优势在于“以执行为导向的计划能力”。我极其清楚各项计划参数（如最小起订量、安全库存、交货期）会给实际的仓库运作带来怎样的连锁反应。我不是只会看报表的理论家，我懂数据背后的物理限制。我非常渴望将我扎实的运营基础正式转化为你们系统化的供应链计划能力。" },
  msgSign: { en: "— Peng Li", zh: "— 李鹏 (Peng Li)" },
  
  personalityTitle: { en: "The ENTJ Approach", zh: "ENTJ 指挥官：我的行事风格" },
  personalityDesc: { en: "As an ENTJ (Commander), I thrive on organizing systems, driving efficiency, and solving complex problems decisively.", zh: "作为一名 ENTJ (指挥官人格)，我热衷于建立系统、提升效率，并能果断解决复杂问题。" },
  pTrait1: { en: "Systematic Thinker", zh: "系统化思维" },
  pTrait1Desc: { en: "I don't just solve isolated issues; I fix the root process. E.g., Implementing a WMS to permanently resolve inventory inaccuracies.", zh: "我不仅解决孤立的问题，我致力于修复底层流程。例如：主导 WMS 实施以永久解决库存不准的痛点。" },
  pTrait2: { en: "Decisive Action", zh: "果断执行" },
  pTrait2Desc: { en: "When faced with supply risks or demand changes, I analyze the data quickly and take immediate mitigative actions.", zh: "面对供应风险或需求突变时，我能迅速分析数据并立即采取缓解措施。" },
  pTrait3: { en: "Cross-Functional Leadership", zh: "跨部门协同领导力" },
  pTrait3Desc: { en: "I seamlessly align Sales, Marketing, and Operations by clearly communicating risks and setting realistic expectations.", zh: "我通过清晰传达风险并设定合理的预期，无缝对齐销售、营销和运营部门的节奏。" },

  starTitle: { en: "Experience in Action (STAR)", zh: "实战经验 (STAR 法则)" },
  starDesc: { en: "Real examples of how my operational background solves supply planning challenges.", zh: "我的运营背景如何解决实际供应链计划挑战的真实案例。" },
  star1Context: { en: "Inventory Data & WMS (The Challenge)", zh: "库存数据与 WMS (挑战)" },
  star1Action: { en: "We faced severe inventory inaccuracies. I mapped out the existing flaws and led the implementation of a new WMS, establishing strict cycle counting protocols and data structuring.", zh: "面对严重的库存数据不准，我梳理了现有缺陷，主导了新 WMS 系统的实施，并建立了严格的周期盘点协议和数据结构。" },
  star1Result: { en: "Resulted in high system-to-physical accuracy, providing a reliable foundation for all future replenishment decisions.", zh: "实现了极高的账物相符率，为所有后续的补货决策提供了可靠的数据基础。" },
  star2Context: { en: "Replenishment Rhythms (The Action)", zh: "补货节奏把控 (行动)" },
  star2Action: { en: "By assessing floor capacity against incoming demand, I identified risks of excess and shorts, adjusting PO timings and communicating with vendors to delay or expedite shipments.", zh: "通过比对仓库产能与需求预测，我主动识别了爆仓或短缺风险，及时调整 PO 节奏，并与供应商沟通推迟或加急发货。" },
  star2Result: { en: "Prevented stockouts during peak seasons while avoiding unnecessary warehousing overflow.", zh: "在旺季有效防止了断货，同时避免了不必要的爆仓。" },
  
  planTitle: { en: "The 30-60-90 Day Framework", zh: "入职前 90 天框架" },
  planDesc: { en: "My structured plan to hit the ground running at Pacific Smoke.", zh: "我在 Pacific Smoke 快速产生价值的结构化入职计划。" },
  plan30Title: { en: "Assess & Learn", zh: "评估与学习" },
  plan30_1: { en: "Master NetSuite parameters: Item Master Data, lead times, MOQ, and safety stock logics.", zh: "精通 NetSuite 参数：物料主数据、交货期、MOQ 和安全库存逻辑。" },
  plan30_2: { en: "Evaluate the current inventory health (shorts, risks, excess) of my assigned brands.", zh: "全面评估我负责的品牌目前的库存健康度（短缺、风险、过剩）。" },
  plan30_3: { en: "Build relationships with key vendors and internal stakeholders (Sales & Marketing).", zh: "与核心供应商及内部利益相关者（销售和营销）建立联系。" },
  plan60Title: { en: "Analyze & Optimize", zh: "分析与优化" },
  plan60_1: { en: "Execute the bi-weekly replenishment cycle and process Purchase Orders independently.", zh: "独立执行双周补货循环并处理采购订单 (PO)。" },
  plan60_2: { en: "Identify aged/obsolescence inventory and propose liquidation or promotional strategies.", zh: "识别呆滞库存，并提出清库存或促销策略建议。" },
  plan60_3: { en: "Analyze vendor performance metrics to identify bottlenecks in lead times.", zh: "分析供应商绩效指标，找出交货期中的瓶颈。" },
  plan90Title: { en: "Improve & Report", zh: "改进与汇报" },
  plan90_1: { en: "Present the first comprehensive Vendor Compliance Report to the Supply Planning Manager.", zh: "向供应链计划经理提交第一份全面的供应商合规报告。" },
  plan90_2: { en: "Coordinate inventory plans for upcoming New Product Launches (NPL) aligning supply with demand.", zh: "统筹即将到来的新产品发布 (NPL) 的库存计划，确保供需平衡。" },
  plan90_3: { en: "Propose a process improvement based on operational insights to enhance system forecasting accuracy.", zh: "基于我的运营洞察，提出一项流程改进建议，以提高系统的预测准确性。" },
  
  learnTitle: { en: "Closing the Gap: Proactive Upskilling", zh: "填补认知差：主动技能进阶" },
  learnDesc: { en: "I know there is a gap between operations and formal planning. Here is what I am doing right now to close it.", zh: "我知道运营实操和正规的计划分析之间存在差距。以下是我正在为填补这一差距所采取的实际行动。" },
  learnCourse1: { en: "Supply Chain Foundations", zh: "供应链基础" },
  learnCourse2: { en: "Inventory Management Foundations", zh: "库存管理基础" },
  learnCourse3: { en: "Getting Started as an Inventory Planning Manager", zh: "库存计划经理入门指南" },
  learnVia: { en: "Completed via LinkedIn Learning", zh: "通过 LinkedIn Learning 完成" },
  placeholder1: { en: "Add LinkedIn Certificate Screenshots Here", zh: "请在此处添加 LinkedIn 证书截图" },
  placeholder2: { en: "Replace this placeholder with images in the codebase", zh: "将代码库中的图片路径替换至此处" }
};

function App() {
  const [lang, setLang] = useState<'en' | 'zh'>('en');

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'zh' : 'en');
  };

  return (
    <div className="min-h-screen bg-brand-dark selection:bg-brand-accent selection:text-white pb-24 font-sans">
      {/* Navigation / Header */}
      <nav className="fixed top-0 w-full bg-brand-dark/80 backdrop-blur-md z-50 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-brand-accent flex items-center justify-center font-bold text-white">PL</div>
            <span className="font-semibold text-white tracking-wide">{t.navTitle[lang]}</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-sm text-brand-muted hidden sm:block">
              {t.navSubtitle[lang]}
            </div>
            <button 
              onClick={toggleLang}
              className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-md border border-white/10 hover:border-brand-accent/50 hover:text-brand-accent text-white transition-colors bg-brand-card"
            >
              <Globe size={16} />
              {t.toggleLang[lang]}
            </button>
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
            {t.heroBadge[lang]}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight mb-6">
            {t.heroTitle1[lang]} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-muted">{t.heroTitle2[lang]}</span>
          </h1>
          <p className="text-xl text-brand-muted max-w-2xl mb-10 leading-relaxed">
            {t.heroDesc[lang]}
          </p>
          <div className="flex gap-4">
            <a href="#message" className="px-6 py-3 rounded-lg bg-brand-accent text-white font-medium hover:bg-red-500 transition-colors flex items-center gap-2 shadow-lg shadow-brand-accent/20">
              {t.heroButton[lang]} <ArrowRight size={18} />
            </a>
          </div>
        </FadeIn>
      </section>

      {/* Message Section to HR (Ben) */}
      <section id="message" className="py-20 px-6 bg-brand-card/50 border-y border-white/5 relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <FadeIn>
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <div className="w-1 h-6 bg-brand-accent rounded"></div>
              {t.msgTitle[lang]}
            </h2>
            <div className="bg-brand-card border border-white/5 p-8 md:p-12 rounded-2xl relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <div className="prose prose-invert prose-lg max-w-none relative z-10 text-brand-muted leading-relaxed">
                <p>{t.msgP1[lang]}</p>
                <p>{t.msgP2[lang]}</p>
                <div className="bg-red-500/10 border-l-4 border-brand-accent p-4 rounded-r-lg my-6">
                  <p className="m-0 text-white font-medium">{t.msgP3[lang]}</p>
                </div>
                <p>{t.msgP4[lang]}</p>
                <p><strong>{t.msgP5[lang]}</strong></p>
                <p className="font-medium text-white mt-8">{t.msgSign[lang]}</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* The ENTJ Profile & STAR Experiences */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12">
          
          {/* Left Column: Personality */}
          <div className="md:col-span-5">
            <FadeIn>
              <h2 className="text-3xl font-bold text-white mb-4">{t.personalityTitle[lang]}</h2>
              <p className="text-brand-muted mb-10">{t.personalityDesc[lang]}</p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-card border border-white/10 flex items-center justify-center text-brand-accent shrink-0">
                    <Target size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{t.pTrait1[lang]}</h3>
                    <p className="text-brand-muted text-sm leading-relaxed">{t.pTrait1Desc[lang]}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-card border border-white/10 flex items-center justify-center text-brand-accent shrink-0">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{t.pTrait2[lang]}</h3>
                    <p className="text-brand-muted text-sm leading-relaxed">{t.pTrait2Desc[lang]}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-card border border-white/10 flex items-center justify-center text-brand-accent shrink-0">
                    <Activity size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{t.pTrait3[lang]}</h3>
                    <p className="text-brand-muted text-sm leading-relaxed">{t.pTrait3Desc[lang]}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: STAR Stories */}
          <div className="md:col-span-7">
            <FadeIn delay={0.2}>
              <div className="bg-brand-card border border-white/5 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-2">{t.starTitle[lang]}</h2>
                <p className="text-brand-muted mb-8">{t.starDesc[lang]}</p>
                
                <div className="space-y-8">
                  <div className="relative pl-8 border-l border-white/10">
                    <div className="absolute w-4 h-4 bg-brand-dark border-2 border-brand-accent rounded-full -left-[9px] top-1"></div>
                    <h4 className="text-brand-accent font-bold mb-2">{t.star1Context[lang]}</h4>
                    <p className="text-white text-sm mb-2">{t.star1Action[lang]}</p>
                    <p className="text-brand-muted text-sm">✓ {t.star1Result[lang]}</p>
                  </div>
                  
                  <div className="relative pl-8 border-l border-white/10">
                    <div className="absolute w-4 h-4 bg-brand-dark border-2 border-brand-accent rounded-full -left-[9px] top-1"></div>
                    <h4 className="text-brand-accent font-bold mb-2">{t.star2Context[lang]}</h4>
                    <p className="text-white text-sm mb-2">{t.star2Action[lang]}</p>
                    <p className="text-brand-muted text-sm">✓ {t.star2Result[lang]}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 30-60-90 Plan */}
      <section className="py-24 px-6 bg-brand-card/30 border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.planTitle[lang]}</h2>
              <p className="text-brand-muted max-w-2xl mx-auto">{t.planDesc[lang]}</p>
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
                  <h3 className="text-xl font-bold text-white mb-4">{t.plan30Title[lang]}</h3>
                  <ul className="space-y-3 text-brand-muted">
                    <li className="flex gap-3"><ChevronRight className="text-brand-accent shrink-0" size={20}/> <span className="leading-relaxed">{t.plan30_1[lang]}</span></li>
                    <li className="flex gap-3"><ChevronRight className="text-brand-accent shrink-0" size={20}/> <span className="leading-relaxed">{t.plan30_2[lang]}</span></li>
                    <li className="flex gap-3"><ChevronRight className="text-brand-accent shrink-0" size={20}/> <span className="leading-relaxed">{t.plan30_3[lang]}</span></li>
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
                  <h3 className="text-xl font-bold text-white mb-4">{t.plan60Title[lang]}</h3>
                  <ul className="space-y-3 text-brand-muted">
                    <li className="flex gap-3"><ChevronRight className="text-brand-accent shrink-0" size={20}/> <span className="leading-relaxed">{t.plan60_1[lang]}</span></li>
                    <li className="flex gap-3"><ChevronRight className="text-brand-accent shrink-0" size={20}/> <span className="leading-relaxed">{t.plan60_2[lang]}</span></li>
                    <li className="flex gap-3"><ChevronRight className="text-brand-accent shrink-0" size={20}/> <span className="leading-relaxed">{t.plan60_3[lang]}</span></li>
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
                  <h3 className="text-xl font-bold text-white mb-4">{t.plan90Title[lang]}</h3>
                  <ul className="space-y-3 text-brand-muted">
                    <li className="flex gap-3"><ChevronRight className="text-brand-accent shrink-0" size={20}/> <span className="leading-relaxed">{t.plan90_1[lang]}</span></li>
                    <li className="flex gap-3"><ChevronRight className="text-brand-accent shrink-0" size={20}/> <span className="leading-relaxed">{t.plan90_2[lang]}</span></li>
                    <li className="flex gap-3"><ChevronRight className="text-brand-accent shrink-0" size={20}/> <span className="leading-relaxed">{t.plan90_3[lang]}</span></li>
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t.learnTitle[lang]}</h2>
              <p className="text-brand-muted text-lg mb-8 leading-relaxed">
                {t.learnDesc[lang]}
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-brand-card p-4 rounded-xl border border-white/5 hover:border-brand-accent/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                    <BookOpen size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{t.learnCourse1[lang]}</h4>
                    <p className="text-sm text-brand-muted">{t.learnVia[lang]}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-brand-card p-4 rounded-xl border border-white/5 hover:border-brand-accent/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                    <PackageSearch size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{t.learnCourse2[lang]}</h4>
                    <p className="text-sm text-brand-muted">{t.learnVia[lang]}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-brand-card p-4 rounded-xl border border-white/5 hover:border-brand-accent/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{t.learnCourse3[lang]}</h4>
                    <p className="text-sm text-brand-muted">{t.learnVia[lang]}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full">
              {/* Placeholder for the user's certificate or screenshot */}
              <div className="aspect-video bg-brand-card border border-white/5 rounded-2xl flex flex-col items-center justify-center p-8 text-center relative overflow-hidden group shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <BookOpen size={48} className="text-brand-muted mb-4 group-hover:text-brand-accent transition-colors" />
                <p className="text-brand-muted font-medium group-hover:text-white transition-colors">{t.placeholder1[lang]}</p>
                <p className="text-sm text-brand-muted/70 mt-2">{t.placeholder2[lang]}</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

    </div>
  );
}

export default App;
