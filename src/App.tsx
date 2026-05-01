import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronRight, Globe, Target, BarChart2, ShieldAlert, MessageSquare, Database, Network, TrendingUp, Box, Lock, CheckCircle, Users, Truck, Briefcase, RotateCcw } from 'lucide-react';

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

  // Blueprint Data
  knowledgeTitle: { en: "The Core Competency Blueprint", zh: "核心能力与知识体系蓝图" },
  knowledgeDesc: { en: "A structured framework bridging theoretical planning methodologies with my hands-on operations and systems integration expertise.", zh: "将系统的供应链计划理论（如需求预测框架）与我扎实的一线运营及系统架构经验相融合的底层蓝图。" },
  hubTitle: { en: "Data Control Tower (WMS/ERP)", zh: "系统底层与数据控制塔" },
  hubDesc: { en: "The central hub. Ensuring 99.9% data integrity through strict cycle counts to feed accurate master data into planning models.", zh: "中枢节点。通过主导系统实施，确保极高的数据准确率，为所有预测与计划模型提供绝对可靠的基石。" },
  upstreamTitle: { en: "Upstream: Supplier Management", zh: "上游：供应商协同与风险" },
  upstreamDesc: { en: "Mitigating lead-time volatility, monitoring compliance, and optimizing MOQ constraints through deep integration and communication.", zh: "控制交货期波动风险，监控供应商合规性，并通过无缝沟通优化最小起订量 (MOQ) 约束。" },
  downstreamTitle: { en: "Downstream: S&OP & Demand", zh: "下游：需求预测与产销协同" },
  downstreamDesc: { en: "Translating historical depletion data into forecasting frameworks. Synchronizing supply availability with Marketing NPLs.", zh: "利用结构化框架进行需求预测。确保供应链能力与销售推广及新产品发布 (NPL) 的节奏同频。" },
  coreTitle: { en: "Core: Inventory Optimization", zh: "核心：库存战略模型" },
  coreDesc: { en: "Calculating Safety Stock, EOQ, and Reorder Points (ROP) to balance high service levels with minimal working capital tied up.", zh: "精准运用安全库存、EOQ 与订货点模型，在保障高履约率与降低资金占用之间取得极致平衡。" },

  // Interactive 2L-5P Interactive Section
  interactiveTitle: { en: "The '2L-5P' Standard Operating Procedure", zh: "全能操作系统：2L-5P「两锁定·五保证」法则" },
  interactiveDesc: { en: "My universal problem-solving framework. The default view shows my core Supply Planner baseline. Click the sub-titles below to drill down into specific scenarios.", zh: "这是我驾驭 Supply Planner 全盘工作的底层操作系统。默认状态展示了我的核心常规工作基线；请点击下方的小标题，查看我在特定项目场景下的精准发力点。" },
  externalTitle: { en: "EXTERNAL COLLABORATION", zh: "对外协同 (EXTERNAL)" },
  internalTitle: { en: "INTERNAL COLLABORATION", zh: "对内协同 (INTERNAL)" },
  
  lblLock1: { en: "Lock Stakeholders", zh: "锁定人群" },
  lblLock2: { en: "Lock Goals", zh: "锁定目标" },
  lblP1: { en: "Commitment", zh: "有承诺" },
  lblP2: { en: "Support", zh: "有支持" },
  lblP3: { en: "Kick-off", zh: "有启动" },
  lblP4: { en: "Incentive", zh: "有激励" },
  lblP5: { en: "Evaluation", zh: "有追踪" },

  // Matrix Data Split
  matrix: {
    left: {
      default: {
        l1: { en: "Lock international suppliers, forwarders, and carriers.", zh: "明确外部对接节点：海外代工厂、货代及清关代理。" },
        l2: { en: "Lock lead times, MOQ, and inbound logistics costs.", zh: "锁定外部红线：目标交期、MOQ 约束与跨境物流成本。" },
        p1: { en: "Demand firm lead time and capacity commitments from vendors.", zh: "承诺是双向的：对外部，需要中国供应商提供死硬的交期承诺。" },
        p2: { en: "Provide rolling forecasts to factories to secure raw materials.", zh: "向下游供应商输出长期滚动预测，支撑其大宗备料。" },
        p3: { en: "Discuss lead time and customs delay risks upfront.", zh: "事前会议：把所有的海外 Lead time 延误、清关延误风险摆在桌面上谈透。" },
        p4: { en: "Use PO allocation as an incentive for compliant vendors.", zh: "用采购订单 (PO) 份额倾斜来激励按时交货率高的优质供应商。" },
        p5: { en: "Expedite POs or delay shipments based on demand shifts.", zh: "动态纠偏：一旦需求偏离预测，立即通过加急 PO 或推迟海外发货来纠偏。" }
      },
      vendor: {
        l1: { en: "Identify core factories and critical inbound forwarders.", zh: "锁定核心代工厂及关键入境货代团队。" },
        l2: { en: "Define strict lead times, MOQ thresholds, and unit cost targets.", zh: "锁定目标交期、最小起订量 (MOQ) 阶梯及降本指标。" },
        p1: { en: "Negotiate hard Service Level Agreements (SLAs) with China suppliers.", zh: "与海外(中国)供应商签署并强调严苛的服务水平承诺(SLA)。" },
        p2: { en: "Ensure vendor portals and EDI/NetSuite integrations are maintained.", zh: "确保供应商信息库与 NetSuite 系统的物料映射准确无误。" },
        p3: { en: "Conduct Quarterly Business Reviews (QBR) to discuss vendor performance.", zh: "每季度举行供应商业务回顾会(QBR)，深度沟通风险与改善点。" },
        p4: { en: "Reward top-performing vendors with larger PO allocations.", zh: "用采购份额的大幅倾斜，激励合规率高、交期稳的头部供应商。" },
        p5: { en: "Generate Monthly Vendor Compliance Reports as required by management.", zh: "严格按 JD 要求，每月输出详尽的《供应商合规与表现报告》。" }
      },
      customer: {
        l1: { en: "Identify key B2B accounts, wholesale distributors, and Sales Reps.", zh: "锁定核心 B2B 大客户、区域分销商及内部对应销售人员。" },
        l2: { en: "Establish Target Order Fill Rates (OTIF) and minimum service levels.", zh: "锁定核心大客户的订单履约率 (OTIF) 红线。" },
        p1: { en: "Guarantee VIP supply allocation commitments during shortage periods.", zh: "在全网缺货的危机时期，对头部 VIP 客户做出硬性保供承诺。" },
        p2: { en: "Provide transparent ETAs and inbound visibility to the sales team.", zh: "向业务前端提供在途物资的清晰视野与预计到港时间(ETA)。" },
        p3: { en: "Hold Joint Business Planning (JBP) sessions before peak seasons.", zh: "在黑五等旺季来临前，参与大客户联合商业计划(JBP)制定。" },
        p4: { en: "Minimize punitive stockout penalties from critical retail partners.", zh: "通过前置精准调拨，帮助公司规避核心零售商的巨额断货罚款。" },
        p5: { en: "Track daily backorder statuses and customer fulfillment ratios.", zh: "每日高频追踪 Backorder (欠货) 状态与实际订单满足率。" }
      }
    },
    right: {
      default: {
        l1: { en: "Lock internal matrix: Sales, Marketing, Operations, Finance.", zh: "锁定内部对接矩阵：销售要销量、市场要节点、运营要仓容、财务要预算。" },
        l2: { en: "Lock business red lines: 99% Fill Rate vs. reducing obsolescence.", zh: "锁定业务红线：这批货的目标是保 99% 现货率，还是为了消化呆滞库存？" },
        p1: { en: "Demand firm volume forecast commitments from Sales.", zh: "承诺是双向的：对内部，需要销售团队对他们给出的销量预测 (Forecast) 做出承诺。" },
        p2: { en: "Maintain NetSuite parameters (Lead time, Safety stock).", zh: "核心支持动作：日常深度维护 NetSuite 的各项底层参数，让系统跑出准确数据。" },
        p3: { en: "Run bi-weekly replenishment meetings & NPL kick-offs.", zh: "内部排雷：对于新品是项目 Kick-off 会；对于日常是双周补货沟通会。" },
        p4: { en: "Share Obsolescence Reports to drive cross-functional accountability.", zh: "数据透明度：输出《呆滞库存报告》暴露库存成本，倒逼销售主推老品打破背锅壁垒。" },
        p5: { en: "High-frequency tracking of depletion rates.", zh: "事后追踪重于事前预测：高频追踪实际消耗率 (Depletion rate) 动态评估。" }
      },
      sop: {
        l1: { en: "Align Sales, Marketing, Finance, and Warehouse Operations.", zh: "对齐并打通跨部门团队：销售、营销、财务与库房运营。" },
        l2: { en: "Align on monthly fill rate targets vs. working capital limits.", zh: "锁定月度现货率目标，同时坚守流动资金占用底线。" },
        p1: { en: "Obtain firm volume forecasts from Sales to drive procurement.", zh: "获取销售端确定的销量预测，严禁朝令夕改。" },
        p2: { en: "Maintain clean NetSuite master data (Safety stock, Lead times).", zh: "持续维护准确的 NetSuite 主数据，保障系统自动排程无误。" },
        p3: { en: "Lead bi-weekly replenishment review meetings to assess risks.", zh: "主导双周维度的补货复盘会议，排查爆仓与断货风险。" },
        p4: { en: "Share obsolescence cost reports so Sales shares inventory accountability.", zh: "公开呆滞库存成本，倒逼销售端共担清理死库存的责任。" },
        p5: { en: "Daily tracking of depletion rates vs. forecast to mitigate excess.", zh: "每日比对实际消耗与预测值，动态调整 PO 踩刹车或油门。" }
      },
      npl: {
        l1: { en: "Identify NPL Project Managers, Product Marketing, and Logistics.", zh: "明确 NPL 项目经理、产品营销及物流实施人员的权责边界。" },
        l2: { en: "Establish an unshakeable Launch Date and initial launch volumes.", zh: "锁定不可动摇的首发日期，及精确的首批铺货体量预测。" },
        p1: { en: "Secure firm sales targets and fast-track shipping budgets.", zh: "确保前端销售签署硬性提货目标，及财务批复空运加急预算。" },
        p2: { en: "Ensure physical warehouse space is allocated and SKUs are active in ERP.", zh: "确保库房物理储存空间腾出，且 ERP 允许新品无缝直通入库。" },
        p3: { en: "Conduct Stage-Gate alignment meetings to clear all operational blind spots.", zh: "主导严格的 Stage-Gate 流程核对会，消除执行层面的所有盲区。" },
        p4: { en: "Establish a shared cross-functional KPI for 'On-Time Launch Rate'.", zh: "设立跨部门共享的'准时发售率' KPI，强行打破部门各自为战。" },
        p5: { en: "High-frequency tracking of post-launch velocity to pivot follow-up POs.", zh: "发布首周高频追踪动销率，根据真实热度秒级调整第二波补货节奏。" }
      }
    }
  },

  // 60-Day Matrix
  planTitle: { en: "The 90-Day Action Matrix", zh: "首发 90 天行动计划" },
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
  plan90_2: { en: "Coordinate inventory plans for upcoming New Product Launches (NPL) aligning supply with demand.", zh: "统筹即将到来的新产品发布 (NPL) 的前置库存计划，确保供需完美平衡。" }
};

type LeftScenario = 'default' | 'vendor' | 'customer';
type RightScenario = 'default' | 'sop' | 'npl';

const FishboneNode = ({ 
  title, icon: Icon, leftContent, rightContent, leftActive, rightActive, colorName 
}: { 
  title: string, icon: any, leftContent: string, rightContent: string, leftActive: boolean, rightActive: boolean, colorName: 'purple' | 'blue' | 'emerald' 
}) => {
  const colorMap = {
    purple: { border: 'border-purple-500', borderMuted: 'border-purple-500/30', borderHover: 'group-hover:border-purple-500/60', text: 'text-purple-400', shadow: 'shadow-[0_0_15px_rgba(168,85,247,0.4)]' },
    blue: { border: 'border-blue-500', borderMuted: 'border-blue-500/30', borderHover: 'group-hover:border-blue-500/60', text: 'text-blue-400', shadow: 'shadow-[0_0_15px_rgba(59,130,246,0.4)]' },
    emerald: { border: 'border-emerald-500', borderMuted: 'border-emerald-500/30', borderHover: 'group-hover:border-emerald-500/60', text: 'text-emerald-400', shadow: 'shadow-[0_0_15px_rgba(16,185,129,0.4)]' }
  };
  const c = colorMap[colorName];

  return (
    <>
      {/* Desktop Fishbone Layout */}
      <div className="relative hidden md:flex w-full group pt-2 pb-6">
        {/* Left Curved Connector */}
        <div className={`absolute top-5 right-1/2 w-[35%] h-10 border-t-2 border-l-2 ${c.borderMuted} rounded-tl-3xl z-0 transition-colors ${c.borderHover}`}></div>
        {/* Right Curved Connector */}
        <div className={`absolute top-5 left-1/2 w-[35%] h-10 border-t-2 border-r-2 ${c.borderMuted} rounded-tr-3xl z-0 transition-colors ${c.borderHover}`}></div>
        
        {/* Center Label Pill */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 z-20 flex items-center justify-center">
          <div className={`bg-brand-dark border-2 ${c.border} rounded-full px-5 py-1.5 flex items-center gap-2 ${c.shadow} whitespace-nowrap`}>
            <Icon size={14} className={c.text} />
            <span className="text-xs font-bold tracking-widest uppercase text-white">{title}</span>
          </div>
        </div>

        {/* Left Card */}
        <div className="w-1/2 pr-12 lg:pr-20 text-right pt-10 relative z-10">
          <AnimatePresence mode="wait">
            <motion.div key={leftActive ? 'active' : 'default'} initial={{opacity:0, x:-10}} animate={{opacity:1, x:0}} exit={{opacity:0, x:10}} transition={{duration:0.2}} className={`p-5 rounded-2xl border transition-all ${leftActive ? 'bg-blue-500/10 border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.15)]' : 'bg-brand-dark border-white/10 group-hover:border-white/20'}`}>
              <div className={`font-medium leading-relaxed ${leftActive ? 'text-white' : 'text-brand-muted'}`}>{leftContent}</div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Card */}
        <div className="w-1/2 pl-12 lg:pl-20 text-left pt-10 relative z-10">
          <AnimatePresence mode="wait">
            <motion.div key={rightActive ? 'active' : 'default'} initial={{opacity:0, x:10}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-10}} transition={{duration:0.2}} className={`p-5 rounded-2xl border transition-all ${rightActive ? 'bg-brand-accent/10 border-brand-accent/50 shadow-[0_0_20px_rgba(239,68,68,0.15)]' : 'bg-brand-dark border-white/10 group-hover:border-white/20'}`}>
              <div className={`font-medium leading-relaxed ${rightActive ? 'text-white' : 'text-brand-muted'}`}>{rightContent}</div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile Stacked Layout */}
      <div className="md:hidden flex flex-col w-full pb-8">
        <div className="flex justify-center mb-4 relative z-10">
          <div className={`bg-brand-dark border-2 ${c.border} rounded-full px-5 py-1.5 flex items-center gap-2 ${c.shadow}`}>
            <Icon size={14} className={c.text} />
            <span className="text-xs font-bold tracking-widest uppercase text-white">{title}</span>
          </div>
        </div>
        <div className="flex flex-col gap-3 relative">
          <div className="absolute top-0 bottom-0 left-4 w-0.5 bg-white/5 z-0"></div>
          <div className={`ml-8 p-4 rounded-xl border relative z-10 transition-colors ${leftActive ? 'bg-blue-500/10 border-blue-500/50' : 'bg-brand-dark border-white/10'}`}>
            <div className="text-[10px] font-bold text-blue-400 mb-1 uppercase tracking-wider">EXTERNAL</div>
            <div className={`text-sm ${leftActive ? 'text-white' : 'text-brand-muted'}`}>{leftContent}</div>
          </div>
          <div className={`ml-8 p-4 rounded-xl border relative z-10 transition-colors ${rightActive ? 'bg-brand-accent/10 border-brand-accent/50' : 'bg-brand-dark border-white/10'}`}>
            <div className="text-[10px] font-bold text-brand-accent mb-1 uppercase tracking-wider">INTERNAL</div>
            <div className={`text-sm ${rightActive ? 'text-white' : 'text-brand-muted'}`}>{rightContent}</div>
          </div>
        </div>
      </div>
    </>
  );
};

function App() {
  const [lang, setLang] = useState<'en' | 'zh'>('en');
  const [activeLeft, setActiveLeft] = useState<LeftScenario>('default');
  const [activeRight, setActiveRight] = useState<RightScenario>('default');

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'zh' : 'en');
  };

  const handleLeftClick = (mode: LeftScenario) => {
    setActiveLeft(prev => prev === mode ? 'default' : mode);
  };

  const handleRightClick = (mode: RightScenario) => {
    setActiveRight(prev => prev === mode ? 'default' : mode);
  };

  const handleReset = () => {
    setActiveLeft('default');
    setActiveRight('default');
  };

  const leftData = t.matrix.left[activeLeft];
  const rightData = t.matrix.right[activeRight];

  return (
    <div className="min-h-screen bg-brand-dark selection:bg-brand-accent selection:text-white pb-0 font-sans text-brand-text/90">
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

      {/* Blueprint Diagram Section */}
      <section className="pt-24 pb-12 px-6 max-w-7xl mx-auto">
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t.knowledgeTitle[lang]}</h2>
            <p className="text-brand-muted text-lg leading-relaxed">
              {t.knowledgeDesc[lang]}
            </p>
          </div>
          
          <div className="relative mb-12">
            <div className="absolute top-1/2 left-[15%] w-[70%] h-[2px] bg-gradient-to-r from-transparent via-brand-accent/30 to-transparent -translate-y-1/2 hidden lg:block z-0"></div>
            <div className="absolute top-[15%] left-1/2 w-[2px] h-[70%] bg-gradient-to-b from-transparent via-brand-accent/30 to-transparent -translate-x-1/2 hidden lg:block z-0"></div>
            
            <div className="grid lg:grid-cols-3 gap-8 relative z-10">
              <FadeIn delay={0.1}>
                <div className="bg-brand-card/90 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-xl lg:mt-32">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-transparent flex items-center justify-center text-blue-400 mb-6 border border-blue-500/20">
                    <Network size={28} />
                  </div>
                  <h4 className="text-white font-bold text-xl mb-4">{t.upstreamTitle[lang]}</h4>
                  <p className="text-brand-muted leading-relaxed">{t.upstreamDesc[lang]}</p>
                </div>
              </FadeIn>
              <div className="space-y-8 relative z-20">
                <FadeIn delay={0.2}>
                  <div className="bg-gradient-to-b from-brand-accent/10 to-brand-card p-8 rounded-3xl border-2 border-brand-accent/40 shadow-[0_0_40px_rgba(239,68,68,0.15)] text-center">
                    <div className="w-16 h-16 rounded-2xl bg-brand-accent/20 flex items-center justify-center text-brand-accent mb-6 mx-auto">
                      <Database size={32} />
                    </div>
                    <h4 className="text-white font-bold text-2xl mb-4">{t.hubTitle[lang]}</h4>
                    <p className="text-brand-muted leading-relaxed font-medium">{t.hubDesc[lang]}</p>
                  </div>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <div className="bg-brand-card/90 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-xl text-center">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-transparent flex items-center justify-center text-emerald-400 mb-6 mx-auto border border-emerald-500/20">
                      <Box size={24} />
                    </div>
                    <h4 className="text-white font-bold text-xl mb-4">{t.coreTitle[lang]}</h4>
                    <p className="text-brand-muted leading-relaxed">{t.coreDesc[lang]}</p>
                  </div>
                </FadeIn>
              </div>
              <FadeIn delay={0.4}>
                <div className="bg-brand-card/90 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-xl lg:mt-32">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-transparent flex items-center justify-center text-purple-400 mb-6 border border-purple-500/20">
                    <TrendingUp size={28} />
                  </div>
                  <h4 className="text-white font-bold text-xl mb-4">{t.downstreamTitle[lang]}</h4>
                  <p className="text-brand-muted leading-relaxed">{t.downstreamDesc[lang]}</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Interactive 2L-5P Matrix (Symmetric Timeline) */}
      <section className="py-24 px-6 bg-brand-card/30 border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-4">
                <Target className="text-brand-accent" size={36} />
                {t.interactiveTitle[lang]}
              </h2>
              <p className="text-brand-muted max-w-3xl mx-auto text-lg leading-relaxed">{t.interactiveDesc[lang]}</p>
            </div>
            
            {/* Super Large Headers for EXTERNAL and INTERNAL */}
            <div className="grid md:grid-cols-2 gap-8 mb-6 text-center">
              <div>
                <h3 className="text-3xl font-extrabold text-blue-400 tracking-wider mb-2">{t.externalTitle[lang]}</h3>
                <div className="h-1 w-24 bg-blue-500/50 mx-auto rounded-full"></div>
              </div>
              <div>
                <h3 className="text-3xl font-extrabold text-brand-accent tracking-wider mb-2">{t.internalTitle[lang]}</h3>
                <div className="h-1 w-24 bg-brand-accent/50 mx-auto rounded-full"></div>
              </div>
            </div>

            {/* Control Panel: Left (External) vs Right (Internal) + Center Reset */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 lg:gap-8 max-w-6xl mx-auto mb-20 relative">
              
              {/* External Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-[45%]">
                <button 
                  onClick={() => handleLeftClick('vendor')}
                  className={`flex-1 py-4 px-4 lg:px-6 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all border ${activeLeft === 'vendor' ? 'bg-blue-500/20 border-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]' : 'bg-brand-dark border-white/10 text-brand-muted hover:border-blue-400/50 hover:text-white'}`}
                >
                  <Truck size={18} /> Vendor Management
                </button>
                <button 
                  onClick={() => handleLeftClick('customer')}
                  className={`flex-1 py-4 px-4 lg:px-6 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all border ${activeLeft === 'customer' ? 'bg-blue-500/20 border-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]' : 'bg-brand-dark border-white/10 text-brand-muted hover:border-blue-400/50 hover:text-white'}`}
                >
                  <Users size={18} /> Customer / Channel
                </button>
              </div>

              {/* Reset Button (Center) */}
              <div className="shrink-0 flex items-center justify-center w-full md:w-[10%] my-2 md:my-0">
                <button 
                  onClick={handleReset}
                  disabled={activeLeft === 'default' && activeRight === 'default'}
                  className={`p-3 lg:p-4 rounded-full border transition-all flex flex-col items-center justify-center gap-1.5 
                    ${activeLeft !== 'default' || activeRight !== 'default' 
                      ? 'bg-white/10 border-white/30 text-white hover:bg-white/20 hover:scale-105 shadow-[0_0_15px_rgba(255,255,255,0.1)]' 
                      : 'bg-brand-dark border-white/5 text-brand-muted opacity-40 cursor-not-allowed'}`}
                  title="Reset to Core Baseline"
                >
                  <RotateCcw size={20} className={activeLeft !== 'default' || activeRight !== 'default' ? 'animate-[spin_4s_linear_infinite]' : ''} />
                  <span className="text-[9px] font-extrabold uppercase tracking-widest hidden md:block">Reset</span>
                </button>
              </div>

              {/* Internal Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-[45%]">
                <button 
                  onClick={() => handleRightClick('sop')}
                  className={`flex-1 py-4 px-4 lg:px-6 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all border ${activeRight === 'sop' ? 'bg-brand-accent/20 border-brand-accent text-white shadow-[0_0_20px_rgba(239,68,68,0.3)]' : 'bg-brand-dark border-white/10 text-brand-muted hover:border-brand-accent/50 hover:text-white'}`}
                >
                  <Briefcase size={18} /> Routine S&OP
                </button>
                <button 
                  onClick={() => handleRightClick('npl')}
                  className={`flex-1 py-4 px-4 lg:px-6 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all border ${activeRight === 'npl' ? 'bg-brand-accent/20 border-brand-accent text-white shadow-[0_0_20px_rgba(239,68,68,0.3)]' : 'bg-brand-dark border-white/10 text-brand-muted hover:border-brand-accent/50 hover:text-white'}`}
                >
                  <TrendingUp size={18} /> New Product Launch
                </button>
              </div>
              
            </div>

            {/* Vertical Symmetric Fishbone Timeline */}
            <div className="max-w-6xl mx-auto relative hidden md:block">
              {/* Central Continuous Spine Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 via-blue-500 to-emerald-500 -translate-x-1/2 opacity-30 rounded-full z-0"></div>
              
              <div className="space-y-4">
                <FishboneNode title={t.lblLock1[lang]} icon={Lock} leftContent={leftData.l1[lang]} rightContent={rightData.l1[lang]} leftActive={activeLeft !== 'default'} rightActive={activeRight !== 'default'} colorName="purple" />
                <FishboneNode title={t.lblLock2[lang]} icon={Lock} leftContent={leftData.l2[lang]} rightContent={rightData.l2[lang]} leftActive={activeLeft !== 'default'} rightActive={activeRight !== 'default'} colorName="purple" />
                <FishboneNode title={t.lblP1[lang]} icon={Target} leftContent={leftData.p1[lang]} rightContent={rightData.p1[lang]} leftActive={activeLeft !== 'default'} rightActive={activeRight !== 'default'} colorName="blue" />
                <FishboneNode title={t.lblP2[lang]} icon={Target} leftContent={leftData.p2[lang]} rightContent={rightData.p2[lang]} leftActive={activeLeft !== 'default'} rightActive={activeRight !== 'default'} colorName="blue" />
                <FishboneNode title={t.lblP3[lang]} icon={Target} leftContent={leftData.p3[lang]} rightContent={rightData.p3[lang]} leftActive={activeLeft !== 'default'} rightActive={activeRight !== 'default'} colorName="blue" />
                <FishboneNode title={t.lblP4[lang]} icon={Target} leftContent={leftData.p4[lang]} rightContent={rightData.p4[lang]} leftActive={activeLeft !== 'default'} rightActive={activeRight !== 'default'} colorName="blue" />
                <FishboneNode title={t.lblP5[lang]} icon={CheckCircle} leftContent={leftData.p5[lang]} rightContent={rightData.p5[lang]} leftActive={activeLeft !== 'default'} rightActive={activeRight !== 'default'} colorName="emerald" />
              </div>
            </div>

            {/* Mobile Fallback - Stacked */}
            <div className="md:hidden space-y-6 relative">
              <FishboneNode title={t.lblLock1[lang]} icon={Lock} leftContent={leftData.l1[lang]} rightContent={rightData.l1[lang]} leftActive={activeLeft !== 'default'} rightActive={activeRight !== 'default'} colorName="purple" />
              <FishboneNode title={t.lblLock2[lang]} icon={Lock} leftContent={leftData.l2[lang]} rightContent={rightData.l2[lang]} leftActive={activeLeft !== 'default'} rightActive={activeRight !== 'default'} colorName="purple" />
              <FishboneNode title={t.lblP1[lang]} icon={Target} leftContent={leftData.p1[lang]} rightContent={rightData.p1[lang]} leftActive={activeLeft !== 'default'} rightActive={activeRight !== 'default'} colorName="blue" />
              <FishboneNode title={t.lblP2[lang]} icon={Target} leftContent={leftData.p2[lang]} rightContent={rightData.p2[lang]} leftActive={activeLeft !== 'default'} rightActive={activeRight !== 'default'} colorName="blue" />
              <FishboneNode title={t.lblP3[lang]} icon={Target} leftContent={leftData.p3[lang]} rightContent={rightData.p3[lang]} leftActive={activeLeft !== 'default'} rightActive={activeRight !== 'default'} colorName="blue" />
              <FishboneNode title={t.lblP4[lang]} icon={Target} leftContent={leftData.p4[lang]} rightContent={rightData.p4[lang]} leftActive={activeLeft !== 'default'} rightActive={activeRight !== 'default'} colorName="blue" />
              <FishboneNode title={t.lblP5[lang]} icon={CheckCircle} leftContent={leftData.p5[lang]} rightContent={rightData.p5[lang]} leftActive={activeLeft !== 'default'} rightActive={activeRight !== 'default'} colorName="emerald" />
            </div>
            
          </FadeIn>
        </div>
      </section>

      {/* 90-Day Matrix (Moved to bottom) */}
      <section className="py-24 px-6 bg-brand-dark border-t border-white/5">
        <div className="max-w-5xl mx-auto">
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
        </div>
      </section>

    </div>
  );
}

export default App;
