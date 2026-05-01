import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PackageSearch, Calendar, BookOpen, ArrowRight, ChevronRight, Globe, Target, BarChart2, ShieldAlert, MessageSquare, Briefcase, GitMerge, Layers } from 'lucide-react';

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
  heroDesc: { en: "Combining 7+ years of hands-on warehouse operations with a structured, data-driven approach to inventory management. I build processes that make planning realistic.", zh: "将超过 7 年的一线仓储实操经验与系统化、数据驱动的库存管理方法相结合。我构建的流程能让“计划”真正落地。" },
  heroButton: { en: "Read My Note to HR", zh: "阅读我的引言" },
  
  msgTitle: { en: "An Introduction for Ben", zh: "写给 Ben 的自我介绍" },
  msgP1: { en: "Hi Ben,", zh: "Ben，你好：" },
  msgP2: { en: "Thank you for the opportunity to interview with Pacific Smoke. I built this framework to provide you with deeper context on how my background directly addresses the needs of your Supply Planner role.", zh: "感谢你给我这次与 Pacific Smoke 面试的机会。我专门制作了这个网页，希望能向你更直观地展示：我的实操背景究竟是如何精准满足你们对 Supply Planner 的岗位需求的。" },
  msgP3: { en: "My experience goes far beyond traditional warehouse execution. I functioned as the central nervous system of our inventory planning.", zh: "我的实际职责远超传统的库房执行范畴，我实际上充当了整个库存计划体系的中枢神经。" },
  msgP4: { en: "I managed physical cycle counts that dictated system data integrity. I controlled replenishment rhythms based on capacity and demand urgency. I directly handled vendor disputes and inbound freight negotiations.", zh: "我通过管理物理盘点来确保系统数据的绝对准确；我根据仓储产能和前端需求紧急程度，直接决定补货节奏；我更是直接参与了跨国供应商纠纷处理和入境物流谈判。" },
  msgP5: { en: "I know exactly how planning parameters (MOQ, Safety Stock, Lead Time) impact physical realities. This deck is my framework for how I will bring immediate value to your team.", zh: "我极其清楚各项计划参数（MOQ、安全库存、交货期）对物理现实的巨大影响。这个网页，就是我向你展示我将如何为团队带来即时价值的框架。" },
  msgSign: { en: "— Peng Li", zh: "— 李鹏 (Peng Li)" },

  // POP 7.0 Personality Section
  traitSectionTitle: { en: "Management Personality & Strengths", zh: "管理性格与优势特征" },
  traitSectionDesc: { en: "Based on the POP 7.0 (Personal Orientation Profile) Assessment", zh: "(基于 POP 7.0 职场人格与领导力测评工具)" },
  trait1Title: { en: "Goal-Driven & Global Perspective", zh: "全链路思维及进取心" },
  trait1Desc: { en: "Maintains strong goal-orientation. Responsibilities extend beyond internal warehouse management to end-to-end supply chain orchestration.", zh: "始终保持强烈的结果导向 (Goal-driven) 与全局观。职责不仅限于内部库区管理，更具备从前置衔接到末端交付的端到端统筹能力。" },
  trait2Title: { en: "Data-Driven & Logical Decision Maker", zh: "严谨的逻辑分析与决断" },
  trait2Desc: { en: "Logical, analytical, and practical. Accustomed to using data to isolate complex supply chain bottlenecks and deploy resources effectively.", zh: "坚定的数据驱动与逻辑决策者。面对复杂的运转障碍，习惯运用矩阵抽丝剥茧，优先部署资源以稳固供应链核心运转轴心。" },
  trait3Title: { en: "Calm & Focused Under Pressure", zh: "高压环境下的沉稳专注" },
  trait3Desc: { en: "Steady and unhurried. Able to maintain clarity during demand peaks or supply disruptions, mitigating risks effectively.", zh: "在单量高峰与偶发性爆单中始终保持理智与清醒。能稳健防范风险，并通过结构化方法安抚并整合大规模的协作团队。" },
  trait4Title: { en: "Empathetic Communication", zh: "内外协同的共情沟通" },
  trait4Desc: { en: "Extremely sociable and cooperative. Excels at finding the balance of efficiency and cost when coordinating across internal teams and external vendors.", zh: "在具备专业双语能力之上，更注重“利益换位”思考机制。善于在资方期望、跨文化供应商之间寻求高效、低耗的平衡沟通节点。" },

  // STAR Stories Section
  starTitle: { en: "Experience Mapping (STAR Framework)", zh: "核心经历映射 (STAR 框架)" },
  starDesc: { en: "How my operational background solves actual supply planning challenges required in the JD.", zh: "我的实操背景如何解决 JD 中要求的实际供应链计划挑战。" },
  star1Context: { en: "Data Integrity & NetSuite Alignment (The Challenge)", zh: "数据准确性与 ERP 协同 (挑战)" },
  star1Action: { en: "Faced with severe inventory inaccuracies, I mapped out the existing flaws and led the implementation of a WMS. I established strict cycle counting protocols to align physical stock with system data.", zh: "面对严重的库存数据不准，我梳理了现有缺陷，主导了 WMS 系统的实施，并建立了严格的周期盘点协议，以确保物理库存与系统数据完全一致。" },
  star1Result: { en: "Result: Achieved high system-to-physical accuracy, providing a reliable data foundation for all future replenishment decisions (Matching JD: 'Ensure accuracy of master data').", zh: "结果：实现了极高的账物相符率，为所有后续的补货决策提供了绝对可靠的数据基础 (直接对标 JD: '确保主数据的准确性')。" },
  star2Context: { en: "Replenishment Rhythms & Risk Management (The Action)", zh: "补货节奏把控与风险管理 (行动)" },
  star2Action: { en: "By assessing floor capacity against incoming demand, I proactively identified risks of excess and shorts. I adjusted PO timings and negotiated directly with vendors to delay or expedite shipments.", zh: "通过比对仓库产能与需求预测，我主动识别了爆仓或短缺风险。我及时调整 PO 节奏，并直接与供应商交涉推迟或加急发货。" },
  star2Result: { en: "Result: Prevented stockouts during peak seasons while avoiding warehousing overflow (Matching JD: 'Daily inventory assessments to determine shorts, risks, and excess').", zh: "结果：在旺季有效防止了断货，同时避免了不必要的仓库爆仓 (直接对标 JD: '进行每日库存评估，以确定短缺、风险和过剩')。" },

  // 60-Day Matrix
  planTitle: { en: "The 90-Day Action Matrix", zh: "首发 90 天行动计划 (90-Day Matrix)" },
  planDesc: { en: "My structured plan to hit the ground running at Pacific Smoke. Core principle: Establish stable structures before pursuing speed.", zh: "我在 Pacific Smoke 快速产生价值的结构化入职计划。核心原则：在追求速度之前，优先建立稳定的数据与沟通结构。" },
  plan30Title: { en: "Phase 1: Assess & Learn (Days 1-30)", zh: "阶段一：评估与建联 (Days 1-30)" },
  plan30_1: { en: "Master NetSuite parameters: Item Master Data, lead times, MOQ, and safety stock logics.", zh: "精通 NetSuite 参数：物料主数据、交货期、MOQ 和安全库存逻辑。" },
  plan30_2: { en: "Evaluate the current inventory health (shorts, risks, excess) of my assigned brands.", zh: "全面评估我负责的品牌目前的库存健康度（短缺、风险、过剩）。" },
  plan30_3: { en: "Establish communication lines with key international suppliers in China.", zh: "与核心国际供应商（中国）建立稳固的沟通与信任渠道。" },
  plan60Title: { en: "Phase 2: Analyze & Optimize (Days 31-60)", zh: "阶段二：分析与优化 (Days 31-60)" },
  plan60_1: { en: "Take ownership of the bi-weekly replenishment cycle and process Purchase Orders independently.", zh: "全面接手并独立执行双周补货循环，处理各项采购订单 (PO)。" },
  plan60_2: { en: "Identify aged/obsolescence inventory and propose liquidation strategies.", zh: "识别呆滞库存，并向销售部门提出清库存策略建议。" },
  plan60_3: { en: "Analyze vendor performance metrics to identify bottlenecks in lead times.", zh: "分析供应商绩效指标，找出交货期中的核心瓶颈并着手优化。" },
  plan90Title: { en: "Phase 3: Improve & Report (Days 61-90)", zh: "阶段三：持续迭代 (Days 61-90)" },
  plan90_1: { en: "Present the first comprehensive Vendor Compliance Report to the Supply Planning Manager.", zh: "向供应链计划经理提交第一份全面的《供应商合规与表现报告》。" },
  plan90_2: { en: "Coordinate inventory plans for upcoming New Product Launches (NPL) aligning supply with demand.", zh: "统筹即将到来的新产品发布 (NPL) 的前置库存计划，确保供需完美平衡。" },

  // Knowledge Capabilities
  knowledgeTitle: { en: "Supply Planning Framework & Methodologies", zh: "供应链规划知识体系与方法论" },
  knowledgeDesc: { en: "Beyond my hands-on experience, I have built a solid theoretical foundation in modern supply planning methodologies.", zh: "在丰富的实操经验之外，我也构建了扎实的现代供应链规划与库存管理的知识体系。" },
  k1Title: { en: "Inventory Strategy & Optimization", zh: "库存战略与优化" },
  k1Desc: { en: "Deep understanding of Safety Stock calculations, Economic Order Quantity (EOQ), and Reorder Point (ROP) modeling.", zh: "深刻理解安全库存 (Safety Stock) 的计算逻辑、经济订货批量 (EOQ) 以及订货点 (ROP) 建模。" },
  k2Title: { en: "S&OP Alignment", zh: "产销协同规划 (S&OP)" },
  k2Desc: { en: "Balancing demand forecasts with supply constraints, and synchronizing with Marketing and Sales for New Product Launches.", zh: "能够平衡需求预测与供应限制，并在新产品发布阶段与营销和销售团队保持紧密同步。" },
  k3Title: { en: "Supplier Risk & Performance Management", zh: "供应商风险与绩效管理" },
  k3Desc: { en: "Strategies for mitigating lead-time volatility, monitoring vendor compliance, and evaluating MOQ trade-offs.", zh: "掌握缓解交货期波动、监控供应商合规性以及评估最小起订量 (MOQ) 权衡的综合策略。" }
};

function App() {
  const [lang, setLang] = useState<'en' | 'zh'>('en');

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'zh' : 'en');
  };

  return (
    <div className="min-h-screen bg-brand-dark selection:bg-brand-accent selection:text-white pb-24 font-sans text-brand-text/90">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-brand-dark/90 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-brand-accent to-red-700 flex items-center justify-center font-bold text-white shadow-lg">PL</div>
            <span className="font-bold text-white tracking-wide">{t.navTitle[lang]}</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-sm text-brand-muted hidden sm:block font-medium">
              {t.navSubtitle[lang]}
            </div>
            <button 
              onClick={toggleLang}
              className="flex items-center gap-2 text-sm px-4 py-1.5 rounded-full border border-white/20 hover:border-brand-accent/80 hover:text-brand-accent text-white transition-all bg-white/5"
            >
              <Globe size={16} />
              {t.toggleLang[lang]}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-accent/10 text-brand-accent text-sm font-bold mb-8 border border-brand-accent/30 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
            </span>
            {t.heroBadge[lang]}
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-8">
            {t.heroTitle1[lang]} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-brand-accent">{t.heroTitle2[lang]}</span>
          </h1>
          <p className="text-xl text-brand-muted max-w-3xl mx-auto mb-12 leading-relaxed">
            {t.heroDesc[lang]}
          </p>
          <div className="flex justify-center">
            <a href="#message" className="px-8 py-4 rounded-full bg-brand-accent text-white font-bold hover:bg-red-500 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:shadow-[0_0_30px_rgba(239,68,68,0.6)] hover:-translate-y-1">
              {t.heroButton[lang]} <ArrowRight size={20} />
            </a>
          </div>
        </FadeIn>
      </section>

      {/* Message Section to HR (Ben) */}
      <section id="message" className="py-20 px-6 bg-gradient-to-b from-brand-card/50 to-brand-dark border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <div className="w-1.5 h-6 bg-brand-accent rounded"></div>
              {t.msgTitle[lang]}
            </h2>
            <div className="bg-brand-card border border-white/10 p-8 md:p-12 rounded-3xl relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
              <div className="prose prose-invert prose-lg max-w-none relative z-10 text-brand-muted leading-relaxed">
                <p className="text-white font-medium">{t.msgP1[lang]}</p>
                <p>{t.msgP2[lang]}</p>
                <div className="bg-gradient-to-r from-red-500/10 to-transparent border-l-4 border-brand-accent p-5 rounded-r-xl my-8">
                  <p className="m-0 text-white font-medium">{t.msgP3[lang]}</p>
                </div>
                <p>{t.msgP4[lang]}</p>
                <p className="text-white font-medium">{t.msgP5[lang]}</p>
                <p className="font-bold text-white mt-10 text-xl">{t.msgSign[lang]}</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* The POP 7.0 Personality Matrix */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.traitSectionTitle[lang]}</h2>
            <p className="text-brand-muted font-medium bg-white/5 inline-block px-4 py-1.5 rounded-full border border-white/10">{t.traitSectionDesc[lang]}</p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FadeIn delay={0.1}>
            <div className="bg-brand-card p-8 rounded-3xl border border-white/10 h-full hover:border-brand-accent/50 transition-colors shadow-lg hover:shadow-brand-accent/10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-accent/20 to-transparent flex items-center justify-center text-brand-accent mb-6 border border-brand-accent/20">
                <Target size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{t.trait1Title[lang]}</h3>
              <p className="text-brand-muted text-sm leading-relaxed">{t.trait1Desc[lang]}</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="bg-brand-card p-8 rounded-3xl border border-white/10 h-full hover:border-brand-accent/50 transition-colors shadow-lg hover:shadow-brand-accent/10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-accent/20 to-transparent flex items-center justify-center text-brand-accent mb-6 border border-brand-accent/20">
                <BarChart2 size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{t.trait2Title[lang]}</h3>
              <p className="text-brand-muted text-sm leading-relaxed">{t.trait2Desc[lang]}</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="bg-brand-card p-8 rounded-3xl border border-white/10 h-full hover:border-brand-accent/50 transition-colors shadow-lg hover:shadow-brand-accent/10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-accent/20 to-transparent flex items-center justify-center text-brand-accent mb-6 border border-brand-accent/20">
                <ShieldAlert size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{t.trait3Title[lang]}</h3>
              <p className="text-brand-muted text-sm leading-relaxed">{t.trait3Desc[lang]}</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="bg-brand-card p-8 rounded-3xl border border-white/10 h-full hover:border-brand-accent/50 transition-colors shadow-lg hover:shadow-brand-accent/10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-accent/20 to-transparent flex items-center justify-center text-brand-accent mb-6 border border-brand-accent/20">
                <MessageSquare size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{t.trait4Title[lang]}</h3>
              <p className="text-brand-muted text-sm leading-relaxed">{t.trait4Desc[lang]}</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* STAR Stories */}
      <section className="py-24 px-6 bg-brand-card/30 border-y border-white/5">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.starTitle[lang]}</h2>
              <p className="text-brand-muted text-lg">{t.starDesc[lang]}</p>
            </div>
          </FadeIn>
          
          <div className="space-y-8">
            <FadeIn delay={0.1}>
              <div className="bg-brand-card border border-white/10 rounded-3xl p-8 md:p-10 hover:border-brand-accent/30 transition-colors">
                <h4 className="text-brand-accent font-bold text-xl mb-4 flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></div>
                  {t.star1Context[lang]}
                </h4>
                <div className="pl-5 border-l-2 border-white/10 space-y-4">
                  <p className="text-white leading-relaxed text-lg">{t.star1Action[lang]}</p>
                  <p className="text-brand-muted bg-white/5 p-4 rounded-xl border border-white/5 font-medium">✓ {t.star1Result[lang]}</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-brand-card border border-white/10 rounded-3xl p-8 md:p-10 hover:border-brand-accent/30 transition-colors">
                <h4 className="text-brand-accent font-bold text-xl mb-4 flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></div>
                  {t.star2Context[lang]}
                </h4>
                <div className="pl-5 border-l-2 border-white/10 space-y-4">
                  <p className="text-white leading-relaxed text-lg">{t.star2Action[lang]}</p>
                  <p className="text-brand-muted bg-white/5 p-4 rounded-xl border border-white/5 font-medium">✓ {t.star2Result[lang]}</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 90-Day Matrix */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <FadeIn>
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.planTitle[lang]}</h2>
            <p className="text-brand-muted max-w-2xl mx-auto text-lg">{t.planDesc[lang]}</p>
          </div>
        </FadeIn>

        <div className="space-y-6">
          <FadeIn delay={0.1}>
            <div className="flex flex-col md:flex-row gap-6 relative group">
              <div className="md:w-64 shrink-0 flex items-center md:justify-end md:pr-8 md:border-r-2 border-brand-accent/30 group-hover:border-brand-accent transition-colors">
                <h3 className="text-xl font-bold text-brand-accent">{t.plan30Title[lang]}</h3>
              </div>
              <div className="bg-brand-card border border-white/10 p-8 rounded-3xl flex-1 shadow-lg group-hover:border-white/20 transition-all">
                <ul className="space-y-4 text-brand-muted">
                  <li className="flex gap-4"><ChevronRight className="text-brand-accent shrink-0 mt-0.5" size={20}/> <span className="leading-relaxed">{t.plan30_1[lang]}</span></li>
                  <li className="flex gap-4"><ChevronRight className="text-brand-accent shrink-0 mt-0.5" size={20}/> <span className="leading-relaxed">{t.plan30_2[lang]}</span></li>
                  <li className="flex gap-4"><ChevronRight className="text-brand-accent shrink-0 mt-0.5" size={20}/> <span className="leading-relaxed">{t.plan30_3[lang]}</span></li>
                </ul>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="flex flex-col md:flex-row gap-6 relative group">
              <div className="md:w-64 shrink-0 flex items-center md:justify-end md:pr-8 md:border-r-2 border-brand-accent/30 group-hover:border-brand-accent transition-colors">
                <h3 className="text-xl font-bold text-brand-accent">{t.plan60Title[lang]}</h3>
              </div>
              <div className="bg-brand-card border border-white/10 p-8 rounded-3xl flex-1 shadow-lg group-hover:border-white/20 transition-all">
                <ul className="space-y-4 text-brand-muted">
                  <li className="flex gap-4"><ChevronRight className="text-brand-accent shrink-0 mt-0.5" size={20}/> <span className="leading-relaxed">{t.plan60_1[lang]}</span></li>
                  <li className="flex gap-4"><ChevronRight className="text-brand-accent shrink-0 mt-0.5" size={20}/> <span className="leading-relaxed">{t.plan60_2[lang]}</span></li>
                  <li className="flex gap-4"><ChevronRight className="text-brand-accent shrink-0 mt-0.5" size={20}/> <span className="leading-relaxed">{t.plan60_3[lang]}</span></li>
                </ul>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col md:flex-row gap-6 relative group">
              <div className="md:w-64 shrink-0 flex items-center md:justify-end md:pr-8 md:border-r-2 border-brand-accent/30 group-hover:border-brand-accent transition-colors">
                <h3 className="text-xl font-bold text-brand-accent">{t.plan90Title[lang]}</h3>
              </div>
              <div className="bg-brand-card border border-white/10 p-8 rounded-3xl flex-1 shadow-lg group-hover:border-white/20 transition-all">
                <ul className="space-y-4 text-brand-muted">
                  <li className="flex gap-4"><ChevronRight className="text-brand-accent shrink-0 mt-0.5" size={20}/> <span className="leading-relaxed">{t.plan90_1[lang]}</span></li>
                  <li className="flex gap-4"><ChevronRight className="text-brand-accent shrink-0 mt-0.5" size={20}/> <span className="leading-relaxed">{t.plan90_2[lang]}</span></li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Knowledge Section (Replaced LinkedIn courses) */}
      <section className="py-24 px-6 bg-brand-card/50 border-t border-white/5">
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t.knowledgeTitle[lang]}</h2>
            <p className="text-brand-muted text-lg leading-relaxed">
              {t.knowledgeDesc[lang]}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <FadeIn delay={0.1}>
              <div className="bg-brand-card p-8 rounded-3xl border border-white/10 hover:border-brand-accent/50 transition-all shadow-lg hover:shadow-brand-accent/10 h-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-transparent flex items-center justify-center text-blue-400 mb-6 border border-blue-500/20">
                  <Layers size={28} />
                </div>
                <h4 className="text-white font-bold text-lg mb-3">{t.k1Title[lang]}</h4>
                <p className="text-sm text-brand-muted leading-relaxed">{t.k1Desc[lang]}</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-brand-card p-8 rounded-3xl border border-white/10 hover:border-brand-accent/50 transition-all shadow-lg hover:shadow-brand-accent/10 h-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-transparent flex items-center justify-center text-blue-400 mb-6 border border-blue-500/20">
                  <GitMerge size={28} />
                </div>
                <h4 className="text-white font-bold text-lg mb-3">{t.k2Title[lang]}</h4>
                <p className="text-sm text-brand-muted leading-relaxed">{t.k2Desc[lang]}</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="bg-brand-card p-8 rounded-3xl border border-white/10 hover:border-brand-accent/50 transition-all shadow-lg hover:shadow-brand-accent/10 h-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-transparent flex items-center justify-center text-blue-400 mb-6 border border-blue-500/20">
                  <Briefcase size={28} />
                </div>
                <h4 className="text-white font-bold text-lg mb-3">{t.k3Title[lang]}</h4>
                <p className="text-sm text-brand-muted leading-relaxed">{t.k3Desc[lang]}</p>
              </div>
            </FadeIn>
          </div>
        </FadeIn>
      </section>

    </div>
  );
}

export default App;
