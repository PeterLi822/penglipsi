import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PackageSearch, TrendingUp, Calendar, BookOpen, Box, ShieldCheck, ArrowRight, CheckCircle2, ChevronRight, Globe } from 'lucide-react';

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
  heroBadge: { en: "Prepared for Pacific Smoke International", zh: "专为 Pacific Smoke 面试准备" },
  heroTitle1: { en: "Bridging Operations &", zh: "连接一线运营与" },
  heroTitle2: { en: "Strategic Supply Planning", zh: "战略级供应链计划" },
  heroDesc: { en: "I combine 7+ years of hands-on operational experience with a structured approach to inventory management, bringing realistic, execution-driven planning to the table.", zh: "我将超过 7 年的一线仓储运营经验与系统化的库存管理方法相结合，为您带来务实、落地、以执行为导向的供应链规划能力。" },
  heroButton: { en: "Read My Message", zh: "阅读我的来信" },
  msgTitle: { en: "A Note for James & Ben", zh: "写给 James 和 Ben 的一封信" },
  msgP1: { en: "Hi James and Ben,", zh: "James 和 Ben，你们好：" },
  msgP2: { en: "Thank you for reviewing my application for the Supply Planner role. I built this page to provide more context about my background and my transition into supply planning.", zh: "感谢你们抽空审阅我关于 Supply Planner 的职位申请。我专门制作了这个网页，希望更直观地展示我的背景以及我向供应链计划 (Supply Planning) 转型的决心。" },
  msgP3: { en: "While my title at WECOMTRANSIT was Operations Manager, my day-to-day involved deep, execution-level planning. I didn't just move boxes; I managed inventory accuracy, cycle counts, resolved discrepancies, and dictated replenishment rhythms based on capacity and demand.", zh: "虽然我在 WECOMTRANSIT 的头衔是运营经理 (Operations Manager)，但我的日常工作深度涵盖了执行层面的计划任务。我不仅仅负责货物的流转，更主导了库存准确率控制、周期盘点、差异处理，并根据仓储产能和前端需求把控补货节奏。" },
  msgP4_1: { en: "I'm bringing two distinct advantages to Pacific Smoke:", zh: "我相信我能为 Pacific Smoke 带来两项独特的优势：" },
  msgP4_2: { en: "1. Execution-Driven Planning:", zh: "1. 落地执行力：" },
  msgP4_3: { en: "I understand how planning parameters (MOQ, Safety Stock) actually play out on the warehouse floor.", zh: "我深刻理解计划参数（如最小起订量 MOQ、安全库存 Safety Stock）在仓库实际运作中会引发怎样的连锁反应。" },
  msgP4_4: { en: "2. Native Mandarin Advantage:", zh: "2. 中文母语优势：" },
  msgP4_5: { en: "I can seamlessly manage and influence vendors in China without cultural or language barriers, directly aligning with your vendor management requirements.", zh: "我能够无缝管理并影响中国供应商，不存在任何文化或语言障碍，这完美契合了贵司对供应商管理的核心要求。" },
  msgP5: { en: "I am actively formalizing my operational knowledge into structured planning frameworks through continued education, and I'm ready to hit the ground running.", zh: "目前，我正通过系统的持续学习，将我丰富的实操经验转化为正规的计划分析框架。我已经准备好迅速融入团队并产出价值。" },
  msgSign: { en: "— Peng Li", zh: "— 李鹏 (Peng Li)" },
  compTitle: { en: "Operations Experience, Translated", zh: "运营经验的精准对标" },
  compDesc: { en: "How my hands-on background directly maps to the requirements of the Supply Planner role at PSI.", zh: "我的实操背景如何直接映射并满足 PSI 对于 Supply Planner 的职位要求。" },
  comp1Title: { en: "Inventory Control", zh: "库存控制" },
  comp1Exp: { en: "At WECOMTRANSIT: Managed physical cycle counts, investigated discrepancies, and ensured warehouse space optimization.", zh: "在 WECOMTRANSIT：管理物理周期盘点，调查库存差异，并确保仓库空间的最大化利用。" },
  comp1JD: { en: "Daily inventory assessments to determine shorts, risks, and excess.", zh: "“进行每日库存评估，以确定短缺、风险和过剩。”" },
  comp2Title: { en: "Vendor Management", zh: "供应商管理" },
  comp2Exp: { en: "At WECOMTRANSIT: Handled inbound carrier communications, freight tracking, and supplier dispute resolutions in Mandarin.", zh: "在 WECOMTRANSIT：使用中文处理入境承运人沟通、货运物流追踪以及跨国供应商纠纷解决。" },
  comp2JD: { en: "Development of effective working relationships with international suppliers (China).", zh: "“与国际供应商（中国）建立有效的工作关系。”" },
  comp3Title: { en: "System & Data Integrity", zh: "系统与数据完整性" },
  comp3Exp: { en: "At WECOMTRANSIT: Led WMS implementation, structured warehouse data, and improved system-to-physical accuracy.", zh: "在 WECOMTRANSIT：主导 WMS 系统实施，结构化仓库数据，并大幅提升账物相符率。" },
  comp3JD: { en: "Create and maintain items in NetSuite while ensuring accuracy of master data.", zh: "“在 NetSuite 中创建和维护物料，同时确保主数据的准确性。”" },
  mapsTo: { en: "Maps to PSI JD:", zh: "对标 PSI 职位要求：" },
  planTitle: { en: "The First 90 Days", zh: "入职前 90 天行动计划" },
  planDesc: { en: "My actionable plan to integrate with the team and drive immediate value as a Supply Planner.", zh: "我将如何快速融入团队并作为 Supply Planner 产出直接价值的行动方案。" },
  plan30Title: { en: "Assess & Learn", zh: "评估与学习" },
  plan30_1: { en: "Deep dive into the NetSuite environment; map out Item Master Data flows.", zh: "深入熟悉 NetSuite 系统环境；理清物料主数据流转逻辑。" },
  plan30_2: { en: "Review current inventory levels (shorts, risks, excess) for my assigned portfolio.", zh: "全面审查我负责的产品线的当前库存水平（短缺、风险、过剩）。" },
  plan30_3: { en: "Establish communication lines with key international suppliers in China.", zh: "与位于中国的核心国际供应商建立并巩固沟通渠道。" },
  plan60Title: { en: "Analyze & Optimize", zh: "分析与优化" },
  plan60_1: { en: "Take ownership of the bi-weekly replenishment cycle and PO processing.", zh: "全面接手并主导双周补货循环及采购订单 (PO) 处理。" },
  plan60_2: { en: "Identify slow-moving items and generate the monthly obsolescence/aged inventory report.", zh: "识别滞销物料，并独立生成月度报废/呆滞库存报告。" },
  plan60_3: { en: "Evaluate vendor lead times and MOQ against current safety stock settings.", zh: "结合当前安全库存设置，重新评估供应商的交货期与最小起订量。" },
  plan90Title: { en: "Improve & Report", zh: "改进与汇报" },
  plan90_1: { en: "Present the first comprehensive Vendor Compliance Report to management.", zh: "向管理层提交第一份详尽的供应商合规及表现审查报告。" },
  plan90_2: { en: "Align with Sales & Marketing to coordinate inventory planning for upcoming Q3/Q4 New Product Launches.", zh: "跨部门与销售及营销团队对齐，为 Q3/Q4 的新产品发布统筹库存规划。" },
  plan90_3: { en: "Propose 1-2 process improvements for system calculations on risks and excess.", zh: "针对系统中风险和过剩库存的计算逻辑，提出具体的流程优化建议。" },
  learnTitle: { en: "Proactive Upskilling", zh: "主动技能进阶" },
  learnDesc: { en: "I believe in continuous learning. To ensure a rapid and smooth transition from Operations to Planning, I have proactively completed formal training in Supply Chain and Inventory Management methodologies.", zh: "我坚信持续学习的力量。为了确保从运营岗到计划岗的平稳过渡，我已主动完成了供应链与库存管理的系统化培训。" },
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
            <a href="#message" className="px-6 py-3 rounded-lg bg-brand-accent text-white font-medium hover:bg-red-500 transition-colors flex items-center gap-2">
              {t.heroButton[lang]} <ArrowRight size={18} />
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
              {t.msgTitle[lang]}
            </h2>
            <div className="bg-brand-card border border-white/5 p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <div className="prose prose-invert prose-lg max-w-none relative z-10 text-brand-muted leading-relaxed">
                <p>{t.msgP1[lang]}</p>
                <p>{t.msgP2[lang]}</p>
                <p>{t.msgP3[lang]}</p>
                <p>
                  {t.msgP4_1[lang]}<br/>
                  <strong className="text-white mt-2 block">{t.msgP4_2[lang]}</strong> {t.msgP4_3[lang]}<br/>
                  <strong className="text-white mt-2 block">{t.msgP4_4[lang]}</strong> {t.msgP4_5[lang]}
                </p>
                <p>{t.msgP5[lang]}</p>
                <p className="font-medium text-white mt-8">{t.msgSign[lang]}</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Competencies Translation */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.compTitle[lang]}</h2>
            <p className="text-brand-muted max-w-2xl mx-auto">{t.compDesc[lang]}</p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          <FadeIn delay={0.1}>
            <div className="bg-brand-card p-6 rounded-2xl border border-white/5 h-full hover:border-brand-accent/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-6">
                <Box size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{t.comp1Title[lang]}</h3>
              <p className="text-brand-muted text-sm mb-4 leading-relaxed">
                {t.comp1Exp[lang]}
              </p>
              <div className="pt-4 border-t border-white/10 mt-auto">
                <p className="text-sm text-brand-accent font-medium flex items-center gap-2">
                  <CheckCircle2 size={16} /> {t.mapsTo[lang]}
                </p>
                <p className="text-sm text-white mt-2 font-medium">{t.comp1JD[lang]}</p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="bg-brand-card p-6 rounded-2xl border border-white/5 h-full hover:border-brand-accent/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-6">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{t.comp2Title[lang]}</h3>
              <p className="text-brand-muted text-sm mb-4 leading-relaxed">
                {t.comp2Exp[lang]}
              </p>
              <div className="pt-4 border-t border-white/10 mt-auto">
                <p className="text-sm text-brand-accent font-medium flex items-center gap-2">
                  <CheckCircle2 size={16} /> {t.mapsTo[lang]}
                </p>
                <p className="text-sm text-white mt-2 font-medium">{t.comp2JD[lang]}</p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="bg-brand-card p-6 rounded-2xl border border-white/5 h-full hover:border-brand-accent/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-6">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{t.comp3Title[lang]}</h3>
              <p className="text-brand-muted text-sm mb-4 leading-relaxed">
                {t.comp3Exp[lang]}
              </p>
              <div className="pt-4 border-t border-white/10 mt-auto">
                <p className="text-sm text-brand-accent font-medium flex items-center gap-2">
                  <CheckCircle2 size={16} /> {t.mapsTo[lang]}
                </p>
                <p className="text-sm text-white mt-2 font-medium">{t.comp3JD[lang]}</p>
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
              <div className="aspect-video bg-brand-card border border-white/5 rounded-2xl flex flex-col items-center justify-center p-8 text-center relative overflow-hidden group">
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
