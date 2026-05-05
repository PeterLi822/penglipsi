import React, { useState, useEffect } from 'react';
import FloatingAIAssistant from './FloatingAIAssistant';

import { motion, AnimatePresence } from 'framer-motion';

import { ArrowRight, ChevronRight, Globe, Target, BarChart2, ShieldAlert, MessageSquare, Database, Network, TrendingUp, Box, Lock, CheckCircle, CheckCircle2, Users, Truck, Briefcase, RotateCcw } from 'lucide-react';

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

  heroDesc: { en: "With 7+ years of hands-on experience in warehouse operations, inventory management, and supplier coordination, I've been functioning as the operational core of supply chain execution. At WECOMTRANSIT, I owned SKU-level safety stock, reorder points, and vendor POs for a high-volume distribution operation — and led a WMS implementation that delivered a 50% efficiency improvement. I understand that effective replenishment means more than placing orders — it requires evaluating demand signals against lead times, managing MOQ constraints, and actively controlling lifecycle and obsolescence risk before it becomes a financial liability. I've worked cross-functionally with procurement, sales, operations, and finance to align supply with demand — managing both day-to-day exceptions and longer-horizon planning cycles. I'm ready to translate this operational foundation into a structured Supply Planner role at Pacific Smoke.", zh: "拥有7年以上仓储运营、库存管理与供应商协同的一线实战经验，我一直是供应链执行体系的核心节点。在 WECOMTRANSIT 期间，我全面负责 SKU 层级的安全库存、订货点与供应商 PO 管理，并主导完成 WMS 完整实施，实现运营效率提升 50%。我深知有效的补货不止于下单——它要求将需求信号与交货周期精准对齐、管控 MOQ 约束，并在滞销库存演变为财务损失之前，提前介入控制产品呆滞与生命周期风险。我曾跨部门协同采购、销售、运营与财务，将供应与需求对齐——既处理日常异常，也统筹较长周期的计划循环。我已准备好将这些运营底蕴，转化为 Pacific Smoke Supply Planner 岗位所需的系统化计划能力。" },

  heroButton: { en: "Explore My Blueprint", zh: "浏览核心战略蓝图" },

  

  msgTitle: { en: "A Closing Note for Ben", zh: "写给 Ben 的结语" },

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

  coreDesc: { en: "Calculating Safety Stock, EOQ, and Reorder Points (ROP) to balance high service levels with minimal working capital tied up, while actively monitoring product lifecycle to intervene before SKUs become obsolete.", zh: "精准计算安全库存、EOQ 与订货点，在极高服务水平与最低资金占用间取得平衡；并主动监控产品生命周期，在 SKU 演变为呆滞库存前提前干预。" },

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

        l1: { en: "Map out the entire external partnership network and key contacts.", zh: "锁定所有外部节点的对接窗口及职责边界。" },

        l2: { en: "Lock end-to-end external targets: lead times, costs, and fill rates.", zh: "锁定全链路的外部宏观指标：时效、成本、履约率。" },

        p1: { en: "Secure preliminary resource commitments from external partners.", zh: "获取外部伙伴基于 S&OP 计划的初步资源确认。" },

        p2: { en: "Provide macro-level forecasts to secure baseline operational support.", zh: "向外部单向输出宏观预测，换取其底层运营保障。" },

        p3: { en: "Hold regular routine alignment meetings with external stakeholders.", zh: "定期与外部合作方举行常规的业务对齐沟通会。" },

        p4: { en: "Use overarching procurement volume to maintain healthy relationships.", zh: "将整体采购预算与订单规模作为维持合作的激励基石。" },

        p5: { en: "Monitor the macro-level flow efficiency of the external network.", zh: "宏观把控外部供应链与物流网络的整体流转效率。" }

      },

      vendor: {

        l1: { en: "Pinpoint key decision-makers at core factories in China & inbound forwarders.", zh: "深入摸排中国核心代工厂的排产负责人，及关键入境货代专员。" },

        l2: { en: "Define strict tiered pricing, MOQs, and 90+ day overseas lead times.", zh: "锁定严苛的阶梯报价、MOQ (最小起订量) 及远期交货周期。" },

        p1: { en: "Force overseas factories to sign iron-clad SLAs for expedited POs.", zh: "强制要求海外工厂对加急采购订单 (PO) 签署绝对的交期承诺。" },

        p2: { en: "Distribute precise 12-week rolling MRPs to ensure uninterrupted sourcing.", zh: "分发精准的 12 周滚动需求计划，保障供应商大宗备料不中断。" },

        p3: { en: "Lead QBRs to audit late shipments and compliance failures.", zh: "主导每季度的 QBR 会议，逐笔清算异常交期和品质违约。" },

        p4: { en: "Heavily allocate PO volumes to vendors maintaining a 98%+ OTIF rate.", zh: "对连续按时交货率高的工厂，实施大幅度的 PO 采购份额倾斜。" },

        p5: { en: "Generate monthly Vendor Compliance Dashboards to execute vendor consolidation.", zh: "每月向高管产出《供应商绩效看板》，根据实际评分执行末位淘汰。" }

      },

      customer: {

        l1: { en: "Identify B2B wholesale buyers, regional distributors, and sales directors.", zh: "锁定 B2B 大客户采购负责人、区域分销商以及内部的区域销售总监。" },

        l2: { en: "Establish strict OTIF minimums and allocation priorities during peak seasons.", zh: "锁定客户的现货满足率 (OTIF) 底线，及大促期间的库存调拨优先级。" },

        p1: { en: "Guarantee VIP supply allocation for core SKUs during critical shortages.", zh: "在全网缺货期间，向头部 VIP 客户做出“核心单品不断货”的硬性承诺。" },

        p2: { en: "Provide the sales team with full inbound visibility and precise ETAs.", zh: "向业务前端开放物流轨迹权限，提供精准的预计到港时间 (ETA)。" },

        p3: { en: "Kick-off Joint Business Planning (JBP) 60 days prior to major sales events.", zh: "在黑五等大促前 60 天，强制启动大客户联合商业计划 (JBP) 对齐会。" },

        p4: { en: "Minimize punitive stockout penalties via proactive inventory transfers.", zh: "通过前置的跨区库存调拨，为公司规避大型零售渠道严苛的断货罚款。" },

        p5: { en: "Conduct daily rolling reviews of Backorders to maximize sales conversion.", zh: "每日滚动排查 Backorder (欠货) 状态，将滞留订单的转化率提至最高。" }

      }

    },

    right: {

      default: {

        l1: { en: "Lock the cross-functional matrix: identify core departments along the pipeline.", zh: "锁定跨部门协作矩阵：理清业务链路上的所有核心关联部门。" },

        l2: { en: "Lock annual targets: balancing profit, market share, and working capital.", zh: "锁定公司运营总目标：在利润、市占率与资金占用间寻找平衡。" },

        p1: { en: "Obtain in-principle consensus on strategic plans from all departments.", zh: "获取各部门对年度战略计划与常规预算的原则性共识与承诺。" },

        p2: { en: "Maintain core ERP system logic to ensure consistent daily data flow.", zh: "维护 ERP 系统的底层逻辑与主数据，确保日常数据的连贯性。" },

        p3: { en: "Execute standard internal meetings to ensure top-down information flow.", zh: "执行标准的内部例会制度，保障信息的上下通达与透明。" },

        p4: { en: "Establish routine cross-functional metrics to keep the corporate gears turning.", zh: "设立常规的跨部门考核标准与共同目标，推动企业齿轮正常运转。" },

        p5: { en: "Produce standard monthly inventory and sales reports for management review.", zh: "输出月度维度的常规进销存报表，供管理层做宏观审视与追踪。" }

      },

      sop: {

        l1: { en: "Lock the 4 S&OP pillars: Demand, Supply, Operations, and Finance.", zh: "锁定 S&OP 核心四方会谈人：需求端、供应端、仓储端、财务端。" },

        l2: { en: "Lock turn ratios, drawing a red line between 99% fill rate and capital limits.", zh: "锁定极端的周转率目标，在“极高现货率”与“极低资金占用”间划定红线。" },

        p1: { en: "Force Sales to make irrevocable commitments to their Volume Forecasts.", zh: "逼迫销售团队为他们提供的 Volume Forecast (销量预测) 做出签字承诺。" },

        p2: { en: "Deep clean NetSuite data, dynamically adjusting safety stock for seasonality.", zh: "深度清洗 NetSuite 数据，动态更新安全库存水位 (ROP) 以应对季节性波动。" },

        p3: { en: "Lead high-pressure bi-weekly reviews, tackling stockout warnings directly.", zh: "主导高压力的双周补货复盘会，直接切入断货预警与供应链瓶颈。" },

        p4: { en: "Publicize Obsolete Inventory Costs to force Sales to share liquidation KPIs.", zh: "公示死库存持有成本，倒逼前端销售共担清理尾货的指标，打破背锅文化。" },

        p5: { en: "Compare actual depletion vs forecasts daily, acting as the procurement clutch.", zh: "每日高频比对实际消耗与预测偏差，灵活踩下采购指令的刹车或油门。" }

      },

      npl: {

        l1: { en: "Pinpoint NPL Project Managers, Product Marketing leads, and floor supervisors.", zh: "精准锁定 NPL 项目经理、产品营销主创，及负责首发的库房区域主管。" },

        l2: { en: "Lock the unshakeable Global Launch Date and exact initial volume forecast.", zh: "锁定不可动摇的“全球首发日期”及极其精准的首批铺货体量预测。" },

        p1: { en: "Secure fast-track air freight budgets and strict first-week sales minimums.", zh: "确保市场部批复高昂的空运预算，且销售部承诺首周必须吃下的提货底线。" },

        p2: { en: "Ensure warehouse slots are cleared and ERP allows seamless straight-through processing.", zh: "提前腾出库房物理空间，且 NetSuite 系统允许新品条码无缝直通入库。" },

        p3: { en: "Convene centralized Stage-Gate meetings to eliminate all operational blind spots.", zh: "召开高度集权的新品 Stage-Gate 核对会，消除执行层面的所有盲区与推诿。" },

        p4: { en: "Establish a heavily bonded 'On-Time Launch Rate' KPI to force unified execution.", zh: "设立跨部门高度绑定的“准时发售率”单一考核目标，执行强行军作战。" },

        p5: { en: "Track post-launch velocity hourly, instantly pivoting wave-2 ocean freight.", zh: "首周按小时级别追踪动销流速，根据真实市场热度秒级调整第二波补货节奏。" }

      }

    }

  },

  // STAR Experience

  starTitle: { en: "Experience in Action (STAR)", zh: "实战经验 (STAR 法则)" },

  starDesc: { en: "Real examples of how my operational background solves supply planning challenges.", zh: "我的运营背景如何解决实际供应链计划挑战的真实案例。" },

  star1Context: { en: "Inventory Data & WMS (The Challenge)", zh: "库存数据与 WMS (挑战)" },

  star1Action: { en: "We faced severe inventory inaccuracies. I mapped out the existing flaws and led the implementation of a new WMS, establishing strict cycle counting protocols and data structuring.", zh: "面对严重的库存数据不准，我梳理了现有缺陷，主导了新 WMS 系统的实施，并建立了严格的周期盘点协议和数据结构。" },

  star1Result: { en: "Resulted in high system-to-physical accuracy, providing a reliable foundation for all future replenishment decisions.", zh: "实现了极高的账物相符率，为所有后续的补货决策提供了可靠的数据基础。" },

  star2Context: { en: "Replenishment Rhythms (The Action)", zh: "补货节奏把控 (行动)" },

  star2Action: { en: "By assessing floor capacity against incoming demand, I identified risks of excess and shorts, adjusting PO timings and communicating with vendors to delay or expedite shipments.", zh: "通过比对仓库产能与需求预测，我主动识别了爆仓或短缺风险，及时调整 PO 节奏，并与供应商沟通推迟或加急发货。" },

  star2Result: { en: "Prevented stockouts during peak seasons while avoiding unnecessary warehousing overflow.", zh: "在旺季有效防止了断货，同时避免了不必要的爆仓。" },
  star3Context: { en: "Lifecycle & Obsolescence Risk (The Decision)", zh: "产品生命周期与呆滞风险 (决策)" },
  star3Action: { en: "As certain product lines entered end-of-life stages, I tracked sell-through velocity and cross-referenced remaining inventory against projected demand. I flagged aging SKUs early, proposed targeted markdowns, and suspended future replenishment orders — preventing capital from being trapped in non-moving stock.", zh: "当部分产品线进入生命周期末期，我持续追踪其动销流速，并将剩余库存与预期需求进行比对。我提前标记老化 SKU、提出定向促销建议，并暂停未来的补货指令——有效防止了资金被锁死在滞销商品中。" },
  star3Result: { en: "Reduced write-off exposure by proactively liquidating aging inventory before contractual deadlines, while protecting capacity for high-velocity active SKUs.", zh: "通过在合同截止期前主动清理老化库存，有效降低了核销损失，同时为高动销现货 SKU 保留了充足的仓储与资金空间。" },

  // 60-Day Matrix

  planTitle: { en: "The 60-Day Action Matrix", zh: "极速入职 60 天行动计划" },

  planDesc: { en: "My aggressive plan to hit the ground running at Pacific Smoke.", zh: "我在 Pacific Smoke 极速产生价值的结构化入职计划。" },

  plan30Title: { en: "Phase 1: Assess & Takeover (Days 1-30)", zh: "阶段一：评估与接管 (Days 1-30)" },

  plan30_1: { en: "Master NetSuite item logics and evaluate inventory health (shorts, excess) of assigned brands.", zh: "精通 NetSuite 参数逻辑，并全面评估我负责品牌目前的库存健康度（短缺、风险、过剩）。" },

  plan30_2: { en: "Establish solid communication lines with key international suppliers and internal sales teams.", zh: "与核心国际供应商（中国）及内部销售团队建立稳固的沟通与信任渠道。" },

  plan30_3: { en: "Take ownership of the routine bi-weekly replenishment cycle and process POs independently.", zh: "全面接手并独立执行双周补货循环，处理各项常规采购订单 (PO)。" },

  plan60Title: { en: "Phase 2: Optimize & Report (Days 31-60)", zh: "阶段二：优化与赋能 (Days 31-60)" },

  plan60_1: { en: "Identify obsolescence inventory and propose proactive liquidation strategies to Sales.", zh: "识别呆滞库存，并向销售部门主动提出清库存或促销策略建议。" },

  plan60_2: { en: "Produce Vendor Compliance Dashboards to identify bottlenecks and optimize lead times.", zh: "产出并提交《供应商合规与表现报告》，找出交货期瓶颈并着手优化。" },

  plan60_3: { en: "Fully integrate with the NPL process, aligning initial launch supply with budgets.", zh: "全面统筹即将到来的新产品发布 (NPL) 库存计划，确保供需完美平衡。" },

  planClosing: { en: "I am fully prepared to transition my operational foundation into your strategic Supply Planning team.", zh: "我已经准备好，将我扎实的一线运营经验转化为 Pacific Smoke 团队所需的战略级计划能力。" }

};

type LeftScenario = 'default' | 'vendor' | 'customer';

type RightScenario = 'default' | 'sop' | 'npl';

const FishboneNode = ({ 

  title, icon: Icon, leftContent, rightContent, leftActive, rightActive, colorName 

}: { 

  title: string, icon: any, leftContent: string, rightContent: string, leftActive: boolean, rightActive: boolean, colorName: 'purple' | 'blue' | 'emerald' 

}) => {

  const colorMap = {

    purple: { border: 'border-purple-500', borderMuted: 'border-purple-500/30', borderHover: 'group-hover:border-purple-500/60', text: 'text-purple-400', shadow: 'shadow-[0_0_25px_rgba(168,85,247,0.5)]' },

    blue: { border: 'border-blue-500', borderMuted: 'border-blue-500/30', borderHover: 'group-hover:border-blue-500/60', text: 'text-blue-400', shadow: 'shadow-[0_0_25px_rgba(59,130,246,0.5)]' },

    emerald: { border: 'border-emerald-500', borderMuted: 'border-emerald-500/30', borderHover: 'group-hover:border-emerald-500/60', text: 'text-emerald-400', shadow: 'shadow-[0_0_25px_rgba(16,185,129,0.5)]' }

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

          <div className={`bg-brand-dark border-2 ${c.border} rounded-full px-6 py-2 flex items-center gap-2.5 ${c.shadow} whitespace-nowrap transition-transform hover:scale-105 cursor-default`}>

            <Icon size={18} className={c.text} />

            <span className="text-sm font-bold tracking-widest uppercase text-white">{title}</span>

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

      <div className="md:hidden flex flex-col w-full pb-10">

        <div className="flex justify-center mb-6 relative z-10">

          <div className={`bg-brand-dark border-2 ${c.border} rounded-full px-6 py-2 flex items-center gap-2.5 ${c.shadow}`}>

            <Icon size={16} className={c.text} />

            <span className="text-sm font-bold tracking-widest uppercase text-white">{title}</span>

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

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [passwordInput, setPasswordInput] = useState('');

  const [passwordError, setPasswordError] = useState(false);

  useEffect(() => {

    const params = new URLSearchParams(window.location.search);

    if (params.get('pwd') === 'pacific') {

      setIsAuthenticated(true);

    }

  }, []);

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

  const handleLogin = (e: React.FormEvent) => {

    e.preventDefault();

    if (passwordInput.toLowerCase() === 'pacific') {

      setIsAuthenticated(true);

    } else {

      setPasswordError(true);

      setTimeout(() => setPasswordError(false), 2000);

    }

  };

  const leftData = t.matrix.left[activeLeft];

  const rightData = t.matrix.right[activeRight];

  if (!isAuthenticated) {

    return (

      <div className="min-h-screen bg-brand-dark flex flex-col items-center justify-center p-6 font-sans">

        <motion.div 

          initial={{ opacity: 0, scale: 0.95 }}

          animate={{ opacity: 1, scale: 1 }}

          className="bg-brand-card border border-white/10 p-8 md:p-10 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] max-w-md w-full text-center relative overflow-hidden"

        >

          <div className="absolute top-0 right-0 w-48 h-48 bg-brand-accent/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

          

          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-accent to-red-700 flex items-center justify-center font-bold text-white text-3xl shadow-lg mx-auto mb-6 border border-white/10">

            PL

          </div>

          

          <h1 className="text-2xl font-bold text-white mb-2 tracking-widest">{t.navTitle[lang]}</h1>

          <p className="text-brand-accent font-medium mb-8 text-sm">{t.navSubtitle[lang]}</p>

          

          <div className="bg-brand-dark border border-white/5 rounded-2xl p-5 mb-8 text-sm text-brand-muted space-y-3 relative z-10 shadow-inner">

            <div className="flex items-center justify-center gap-3">

              <MessageSquare size={16} className="text-brand-accent/70" />

              <span className="font-medium text-white">Email:</span> aershi@gmail.com

            </div>

            <div className="flex items-center justify-center gap-3">

              <Globe size={16} className="text-brand-accent/70" />

              <span className="font-medium text-white">CA Cell:</span> 647-879-2477

            </div>

          </div>

          <form onSubmit={handleLogin} className="space-y-5 relative z-10">

            <div>

              <input 

                type="password" 

                placeholder={lang === 'en' ? "Enter Access Password" : "请输入访问密码"}

                value={passwordInput}

                onChange={(e) => setPasswordInput(e.target.value)}

                className={`w-full bg-brand-dark border ${passwordError ? 'border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.3)]' : 'border-white/10 focus:border-brand-accent'} rounded-xl px-4 py-3.5 text-white outline-none transition-all text-center tracking-[0.3em]`}

              />

              {passwordError && <p className="text-red-500 text-xs mt-2 absolute w-full text-center">Incorrect password</p>}

            </div>

            <button 

              type="submit"

              className="w-full bg-brand-accent hover:bg-red-600 text-white font-bold py-3.5 px-4 rounded-xl transition-all shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:shadow-[0_0_30px_rgba(239,68,68,0.6)] flex items-center justify-center gap-2"

            >

              <Lock size={18} />

              {lang === 'en' ? "Access Presentation" : "访问高管演示"}

            </button>

          </form>

          <div className="mt-8 pt-6 border-t border-white/5 flex justify-center relative z-10">

            <button 

              onClick={toggleLang}

              className="text-xs text-brand-muted hover:text-brand-accent transition-colors flex items-center gap-1.5"

            >

              <Globe size={14} />

              {lang === 'en' ? 'Switch to Chinese' : 'Switch to English'}

            </button>

          </div>

        </motion.div>

      </div>

    );

  }

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

            <a href="#blueprint" className="px-8 py-4 rounded-full bg-brand-accent text-white font-bold hover:bg-red-500 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:shadow-[0_0_30px_rgba(239,68,68,0.6)] hover:-translate-y-1">

              {t.heroButton[lang]} <ArrowRight size={20} />

            </a>

          </div>

        </FadeIn>

      </section>

      

      {/* The POP 7.0 Personality Matrix */}

      <section id="personality" className="py-24 px-6 max-w-6xl mx-auto">

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

      <section id="blueprint" className="pt-24 pb-12 px-6 max-w-7xl mx-auto">

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

      {/* Experience in Action (STAR) */}

      <section className="py-24 px-6 bg-brand-dark border-t border-white/5 relative">

        <div className="max-w-6xl mx-auto">

          <FadeIn>

            <div className="text-center mb-16">

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.starTitle[lang]}</h2>

              <p className="text-brand-muted font-medium bg-white/5 inline-block px-4 py-1.5 rounded-full border border-white/10">{t.starDesc[lang]}</p>

            </div>

          </FadeIn>

          

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <FadeIn delay={0.1}>

              <div className="bg-brand-card border border-white/10 p-8 rounded-3xl shadow-lg relative overflow-hidden group hover:border-brand-accent/50 transition-colors h-full">

                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-full blur-2xl -mr-16 -mt-16"></div>

                <h3 className="text-xl font-bold text-brand-accent mb-4">{t.star1Context[lang]}</h3>

                <p className="text-white leading-relaxed mb-6">{t.star1Action[lang]}</p>

                <div className="flex gap-3 bg-brand-dark p-5 rounded-2xl border border-white/5">

                  <CheckCircle2 className="text-emerald-400 shrink-0 mt-0.5" size={20} />

                  <p className="text-sm font-medium text-brand-muted leading-relaxed">{t.star1Result[lang]}</p>

                </div>

              </div>

            </FadeIn>

            <FadeIn delay={0.2}>

              <div className="bg-brand-card border border-white/10 p-8 rounded-3xl shadow-lg relative overflow-hidden group hover:border-brand-accent/50 transition-colors h-full">

                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-full blur-2xl -mr-16 -mt-16"></div>

                <h3 className="text-xl font-bold text-brand-accent mb-4">{t.star2Context[lang]}</h3>

                <p className="text-white leading-relaxed mb-6">{t.star2Action[lang]}</p>

                <div className="flex gap-3 bg-brand-dark p-5 rounded-2xl border border-white/5">

                  <CheckCircle2 className="text-emerald-400 shrink-0 mt-0.5" size={20} />

                  <p className="text-sm font-medium text-brand-muted leading-relaxed">{t.star2Result[lang]}</p>

                </div>

              </div>

            </FadeIn>

            <FadeIn delay={0.3}>

              <div className="bg-brand-card border border-white/10 p-8 rounded-3xl shadow-lg relative overflow-hidden group hover:border-brand-accent/50 transition-colors h-full">

                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-full blur-2xl -mr-16 -mt-16"></div>

                <h3 className="text-xl font-bold text-brand-accent mb-4">{t.star3Context[lang]}</h3>

                <p className="text-white leading-relaxed mb-6">{t.star3Action[lang]}</p>

                <div className="flex gap-3 bg-brand-dark p-5 rounded-2xl border border-white/5">

                  <CheckCircle2 className="text-emerald-400 shrink-0 mt-0.5" size={20} />

                  <p className="text-sm font-medium text-brand-muted leading-relaxed">{t.star3Result[lang]}</p>

                </div>

              </div>

            </FadeIn>

          </div>

        </div>

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

      {/* 60-Day Matrix (Moved to bottom) */}

      <section className="py-24 px-6 bg-brand-dark border-t border-white/5 relative">

        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-accent/50 to-transparent"></div>

        <div className="max-w-5xl mx-auto">

          <FadeIn>

            <div className="text-center mb-20">

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.planTitle[lang]}</h2>

              <p className="text-brand-muted max-w-2xl mx-auto text-lg">{t.planDesc[lang]}</p>

            </div>

          </FadeIn>

          <div className="space-y-6 mb-16">

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

          </div>

          

          <FadeIn delay={0.3}>

            <div className="text-center bg-gradient-to-r from-transparent via-brand-accent/10 to-transparent p-8 rounded-3xl border border-brand-accent/20 max-w-3xl mx-auto shadow-[0_0_30px_rgba(239,68,68,0.1)]">

              <p className="text-lg md:text-xl text-white font-bold tracking-wide">

                "{t.planClosing[lang]}"

              </p>

            </div>

          </FadeIn>

        </div>

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

      {/* Floating AI Assistant */}
      <FloatingAIAssistant />

    </div>

  );

}

export default App;

