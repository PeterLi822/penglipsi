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
  navTitle: { en: "Peng Li", zh: "鏉庨箯" },
  navSubtitle: { en: "Supply Planner Candidate 鈥?Pacific Smoke International", zh: "Supply Planner 鍊欓€変汉 鈥?澶钩娲嬬儫鑽?(Pacific Smoke)" },
  toggleLang: { en: "涓枃", zh: "English" },
  heroBadge: { en: "A Strategic Pitch for Pacific Smoke", zh: "涓撲负 Pacific Smoke 闈㈣瘯鍑嗗鐨勬垬鐣ユ紨绀? },
  heroTitle1: { en: "Bridging Execution &", zh: "杩炴帴涓€绾挎墽琛屼笌" },
  heroTitle2: { en: "Strategic Supply Planning", zh: "鎴樼暐绾т緵搴旈摼璁″垝" },
  heroDesc: { en: "An ENTJ professional combining 7+ years of hands-on warehouse operations with a structured, data-driven approach to inventory management. I build processes that make planning realistic.", zh: "涓€鍚?ENTJ 鍨嬭亴鍦轰汉锛屽皢瓒呰繃 7 骞寸殑涓€绾夸粨鍌ㄥ疄鎿嶇粡楠屼笌绯荤粺鍖栥€佹暟鎹┍鍔ㄧ殑搴撳瓨绠＄悊鏂规硶鐩哥粨鍚堛€傛垜鏋勫缓鐨勬祦绋嬭兘璁┾€滆鍒掆€濈湡姝ｈ惤鍦般€? },
  heroButton: { en: "Read My Note to HR", zh: "闃呰鍐欑粰 HR 鐨勪俊" },
  msgTitle: { en: "A Note for Ben (Talent Acquisition)", zh: "鍐欑粰 Ben 鐨勪竴灏佸潶璇氱殑淇? },
  msgP1: { en: "Hi Ben,", zh: "Ben锛屼綘濂斤細" },
  msgP2: { en: "Thank you for reviewing my application. I built this page to provide full transparency and address any questions you might have about my background when looking at my resume.", zh: "鎰熻阿浣犳娊绌哄闃呮垜鐨勭敵璇枫€傛垜涓撻棬鍒朵綔浜嗚繖涓綉椤碉紝甯屾湜鑳藉悜浣犳彁渚涘畬鍏ㄩ€忔槑鐨勪俊鎭紝骞惰В绛斾綘鍦ㄧ湅鎴戠畝鍘嗘椂鍙兘浜х敓鐨勪竴浜涚枒闂€? },
  msgP3: { en: "To be completely upfront: while the version of my resume submitted was optimized with Supply Planning keywords to align with the ATS, my actual title at WECOMTRANSIT was Operations Manager. However, this is not a fabrication of experience鈥攊t is a translation.", zh: "鎴戞兂闈炲父鍧﹁瘹鍦拌鏄庝竴鐐癸細铏界劧鎴戞彁浜ょ殑绠€鍘嗕负浜嗗尮閰嶇郴缁燂紙ATS锛夛紝浣跨敤浜嗗ぇ閲?Supply Planning 鐨勪笓涓氳瘝姹囷紝浣嗘垜鍦?WECOMTRANSIT 鐨勫疄闄呭ご琛旀槸杩愯惀缁忕悊 (Operations Manager)銆傜劧鑰岋紝杩欑粷涓嶆槸铏氭瀯缁忓巻锛岃€屾槸涓€娆♀€滆瑙掔殑杞寲鈥濄€? },
  msgP4: { en: "I didn't just move boxes. I functioned as the central nervous system of our inventory. I managed the physical cycle counts that ensure system data integrity. I dictated our replenishment rhythms based on floor capacity and demand urgency. I handled vendor disputes and freight carrier communications.", zh: "鎴戜笉浠呬粎鏄湪鈥滄惉绠卞瓙鈥濄€傛垜鏄暣涓簱瀛樹綋绯荤殑涓灑绁炵粡銆傛垜绠＄悊鐗╃悊鐩樼偣浠ョ‘淇濈郴缁熸暟鎹噯纭紱鎴戞牴鎹粨搴撲骇鑳藉拰闇€姹傜揣鎬ョ▼搴︽潵鍐冲畾琛ヨ揣鑺傚锛涙垜鐩存帴澶勭悊渚涘簲鍟嗙籂绾峰拰鎵胯繍浜烘矡閫氥€? },
  msgP5: { en: "My core advantage is Execution-Driven Planning. I know exactly how planning parameters (MOQ, Safety Stock, Lead Time) impact the actual warehouse floor. I am not just a theorist; I understand the physical limitations and realities behind the numbers. I am eager to formally transition my operational foundation into your structured Supply Planning team.", zh: "鎴戠殑鏍稿績浼樺娍鍦ㄤ簬鈥滀互鎵ц涓哄鍚戠殑璁″垝鑳藉姏鈥濄€傛垜鏋佸叾娓呮鍚勯」璁″垝鍙傛暟锛堝鏈€灏忚捣璁㈤噺銆佸畨鍏ㄥ簱瀛樸€佷氦璐ф湡锛変細缁欏疄闄呯殑浠撳簱杩愪綔甯︽潵鎬庢牱鐨勮繛閿佸弽搴斻€傛垜涓嶆槸鍙細鐪嬫姤琛ㄧ殑鐞嗚瀹讹紝鎴戞噦鏁版嵁鑳屽悗鐨勭墿鐞嗛檺鍒躲€傛垜闈炲父娓存湜灏嗘垜鎵庡疄鐨勮繍钀ュ熀纭€姝ｅ紡杞寲涓轰綘浠郴缁熷寲鐨勪緵搴旈摼璁″垝鑳藉姏銆? },
  msgSign: { en: "鈥?Peng Li", zh: "鈥?鏉庨箯 (Peng Li)" },
  
  personalityTitle: { en: "The ENTJ Approach", zh: "ENTJ 鎸囨尌瀹橈細鎴戠殑琛屼簨椋庢牸" },
  personalityDesc: { en: "As an ENTJ (Commander), I thrive on organizing systems, driving efficiency, and solving complex problems decisively.", zh: "浣滀负涓€鍚?ENTJ (鎸囨尌瀹樹汉鏍?锛屾垜鐑》浜庡缓绔嬬郴缁熴€佹彁鍗囨晥鐜囷紝骞惰兘鏋滄柇瑙ｅ喅澶嶆潅闂銆? },
  pTrait1: { en: "Systematic Thinker", zh: "绯荤粺鍖栨€濈淮" },
  pTrait1Desc: { en: "I don't just solve isolated issues; I fix the root process. E.g., Implementing a WMS to permanently resolve inventory inaccuracies.", zh: "鎴戜笉浠呰В鍐冲绔嬬殑闂锛屾垜鑷村姏浜庝慨澶嶅簳灞傛祦绋嬨€備緥濡傦細涓诲 WMS 瀹炴柦浠ユ案涔呰В鍐冲簱瀛樹笉鍑嗙殑鐥涚偣銆? },
  pTrait2: { en: "Decisive Action", zh: "鏋滄柇鎵ц" },
  pTrait2Desc: { en: "When faced with supply risks or demand changes, I analyze the data quickly and take immediate mitigative actions.", zh: "闈㈠渚涘簲椋庨櫓鎴栭渶姹傜獊鍙樻椂锛屾垜鑳借繀閫熷垎鏋愭暟鎹苟绔嬪嵆閲囧彇缂撹В鎺柦銆? },
  pTrait3: { en: "Cross-Functional Leadership", zh: "璺ㄩ儴闂ㄥ崗鍚岄瀵煎姏" },
  pTrait3Desc: { en: "I seamlessly align Sales, Marketing, and Operations by clearly communicating risks and setting realistic expectations.", zh: "鎴戦€氳繃娓呮櫚浼犺揪椋庨櫓骞惰瀹氬悎鐞嗙殑棰勬湡锛屾棤缂濆榻愰攢鍞€佽惀閿€鍜岃繍钀ラ儴闂ㄧ殑鑺傚銆? },

  starTitle: { en: "Experience in Action (STAR)", zh: "瀹炴垬缁忛獙 (STAR 娉曞垯)" },
  starDesc: { en: "Real examples of how my operational background solves supply planning challenges.", zh: "鎴戠殑杩愯惀鑳屾櫙濡備綍瑙ｅ喅瀹為檯渚涘簲閾捐鍒掓寫鎴樼殑鐪熷疄妗堜緥銆? },
  star1Context: { en: "Inventory Data & WMS (The Challenge)", zh: "搴撳瓨鏁版嵁涓?WMS (鎸戞垬)" },
  star1Action: { en: "We faced severe inventory inaccuracies. I mapped out the existing flaws and led the implementation of a new WMS, establishing strict cycle counting protocols and data structuring.", zh: "闈㈠涓ラ噸鐨勫簱瀛樻暟鎹笉鍑嗭紝鎴戞⒊鐞嗕簡鐜版湁缂洪櫡锛屼富瀵间簡鏂?WMS 绯荤粺鐨勫疄鏂斤紝骞跺缓绔嬩簡涓ユ牸鐨勫懆鏈熺洏鐐瑰崗璁拰鏁版嵁缁撴瀯銆? },
  star1Result: { en: "Resulted in high system-to-physical accuracy, providing a reliable foundation for all future replenishment decisions.", zh: "瀹炵幇浜嗘瀬楂樼殑璐︾墿鐩哥鐜囷紝涓烘墍鏈夊悗缁殑琛ヨ揣鍐崇瓥鎻愪緵浜嗗彲闈犵殑鏁版嵁鍩虹銆? },
  star2Context: { en: "Replenishment Rhythms (The Action)", zh: "琛ヨ揣鑺傚鎶婃帶 (琛屽姩)" },
  star2Action: { en: "By assessing floor capacity against incoming demand, I identified risks of excess and shorts, adjusting PO timings and communicating with vendors to delay or expedite shipments.", zh: "閫氳繃姣斿浠撳簱浜ц兘涓庨渶姹傞娴嬶紝鎴戜富鍔ㄨ瘑鍒簡鐖嗕粨鎴栫煭缂洪闄╋紝鍙婃椂璋冩暣 PO 鑺傚锛屽苟涓庝緵搴斿晢娌熼€氭帹杩熸垨鍔犳€ュ彂璐с€? },
  star2Result: { en: "Prevented stockouts during peak seasons while avoiding unnecessary warehousing overflow.", zh: "鍦ㄦ椇瀛ｆ湁鏁堥槻姝簡鏂揣锛屽悓鏃堕伩鍏嶄簡涓嶅繀瑕佺殑鐖嗕粨銆? },
  
  planTitle: { en: "The 30-60-90 Day Framework", zh: "鍏ヨ亴鍓?90 澶╂鏋? },
  planDesc: { en: "My structured plan to hit the ground running at Pacific Smoke.", zh: "鎴戝湪 Pacific Smoke 蹇€熶骇鐢熶环鍊肩殑缁撴瀯鍖栧叆鑱岃鍒掋€? },
  plan30Title: { en: "Assess & Learn", zh: "璇勪及涓庡涔? },
  plan30_1: { en: "Master NetSuite parameters: Item Master Data, lead times, MOQ, and safety stock logics.", zh: "绮鹃€?NetSuite 鍙傛暟锛氱墿鏂欎富鏁版嵁銆佷氦璐ф湡銆丮OQ 鍜屽畨鍏ㄥ簱瀛橀€昏緫銆? },
  plan30_2: { en: "Evaluate the current inventory health (shorts, risks, excess) of my assigned brands.", zh: "鍏ㄩ潰璇勪及鎴戣礋璐ｇ殑鍝佺墝鐩墠鐨勫簱瀛樺仴搴峰害锛堢煭缂恒€侀闄┿€佽繃鍓╋級銆? },
  plan30_3: { en: "Build relationships with key vendors and internal stakeholders (Sales & Marketing).", zh: "涓庢牳蹇冧緵搴斿晢鍙婂唴閮ㄥ埄鐩婄浉鍏宠€咃紙閿€鍞拰钀ラ攢锛夊缓绔嬭仈绯汇€? },
  plan60Title: { en: "Analyze & Optimize", zh: "鍒嗘瀽涓庝紭鍖? },
  plan60_1: { en: "Execute the bi-weekly replenishment cycle and process Purchase Orders independently.", zh: "鐙珛鎵ц鍙屽懆琛ヨ揣寰幆骞跺鐞嗛噰璐鍗?(PO)銆? },
  plan60_2: { en: "Identify aged/obsolescence inventory and propose liquidation or promotional strategies.", zh: "璇嗗埆鍛嗘粸搴撳瓨锛屽苟鎻愬嚭娓呭簱瀛樻垨淇冮攢绛栫暐寤鸿銆? },
  plan60_3: { en: "Analyze vendor performance metrics to identify bottlenecks in lead times.", zh: "鍒嗘瀽渚涘簲鍟嗙哗鏁堟寚鏍囷紝鎵惧嚭浜よ揣鏈熶腑鐨勭摱棰堛€? },
  plan90Title: { en: "Improve & Report", zh: "鏀硅繘涓庢眹鎶? },
  plan90_1: { en: "Present the first comprehensive Vendor Compliance Report to the Supply Planning Manager.", zh: "鍚戜緵搴旈摼璁″垝缁忕悊鎻愪氦绗竴浠藉叏闈㈢殑渚涘簲鍟嗗悎瑙勬姤鍛娿€? },
  plan90_2: { en: "Coordinate inventory plans for upcoming New Product Launches (NPL) aligning supply with demand.", zh: "缁熺鍗冲皢鍒版潵鐨勬柊浜у搧鍙戝竷 (NPL) 鐨勫簱瀛樿鍒掞紝纭繚渚涢渶骞宠　銆? },
  plan90_3: { en: "Propose a process improvement based on operational insights to enhance system forecasting accuracy.", zh: "鍩轰簬鎴戠殑杩愯惀娲炲療锛屾彁鍑轰竴椤规祦绋嬫敼杩涘缓璁紝浠ユ彁楂樼郴缁熺殑棰勬祴鍑嗙‘鎬с€? },
  
  learnTitle: { en: "Closing the Gap: Proactive Upskilling", zh: "濉ˉ璁ょ煡宸細涓诲姩鎶€鑳借繘闃? },
  learnDesc: { en: "I know there is a gap between operations and formal planning. Here is what I am doing right now to close it.", zh: "鎴戠煡閬撹繍钀ュ疄鎿嶅拰姝ｈ鐨勮鍒掑垎鏋愪箣闂村瓨鍦ㄥ樊璺濄€備互涓嬫槸鎴戞鍦ㄤ负濉ˉ杩欎竴宸窛鎵€閲囧彇鐨勫疄闄呰鍔ㄣ€? },
  learnCourse1: { en: "Supply Chain Foundations", zh: "渚涘簲閾惧熀纭€" },
  learnCourse2: { en: "Inventory Management Foundations", zh: "搴撳瓨绠＄悊鍩虹" },
  learnCourse3: { en: "Getting Started as an Inventory Planning Manager", zh: "搴撳瓨璁″垝缁忕悊鍏ラ棬鎸囧崡" },
  learnVia: { en: "Completed via LinkedIn Learning", zh: "閫氳繃 LinkedIn Learning 瀹屾垚" },
  placeholder1: { en: "Add LinkedIn Certificate Screenshots Here", zh: "璇峰湪姝ゅ娣诲姞 LinkedIn 璇佷功鎴浘" },
  placeholder2: { en: "Replace this placeholder with images in the codebase", zh: "灏嗕唬鐮佸簱涓殑鍥剧墖璺緞鏇挎崲鑷虫澶? }
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
                    <p className="text-brand-muted text-sm">鉁?{t.star1Result[lang]}</p>
                  </div>
                  
                  <div className="relative pl-8 border-l border-white/10">
                    <div className="absolute w-4 h-4 bg-brand-dark border-2 border-brand-accent rounded-full -left-[9px] top-1"></div>
                    <h4 className="text-brand-accent font-bold mb-2">{t.star2Context[lang]}</h4>
                    <p className="text-white text-sm mb-2">{t.star2Action[lang]}</p>
                    <p className="text-brand-muted text-sm">鉁?{t.star2Result[lang]}</p>
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
