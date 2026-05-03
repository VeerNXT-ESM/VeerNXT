import { 
  ChevronRight, 
  Target, 
  ShieldCheck,
  CheckCircle2,
  FileText,
  Monitor,
  Calendar,
  Search,
  Check,
  ArrowRight,
  TrendingUp,
  Briefcase,
  Users,
  Shield,
  Coins,
  Lock,
  ChevronDown,
  PieChart,
  Activity,
  Heart,
  Eye,
  Zap,
  GraduationCap,
  Clock,
  ArrowUpRight
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export const FinancialGuidance = () => {
  return (
    <div className="bg-ios-bg min-h-screen">
      {/* Page Header */}
      <section className="relative py-24 bg-[#111] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="/hero/financial_guidance.png" 
            className="w-full h-full object-cover"
            alt="Financial planning background"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-2 text-xs font-bold text-ios-olive tracking-widest mb-4">
             <Link to="/" className="hover:text-white transition-colors">Home</Link> 
             <ChevronRight className="w-3 h-3" />
             <span className="text-white">Financial Guidance</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-center">Financial Guidance</h1>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-tight">
              Secure Your Sewa Nidhi. <br />
              <span className="text-[#4A5D23]">Build A Prosperous Civilian Life.</span>
            </h2>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed font-light">
              India's first Defence Reintegration EdTech platform designed exclusively for Agniveers and ex-servicemen. Get personalized financial planning, career transition support, and expert guidance for a stable future.
            </p>
            <button className="bg-[#4A5D23] text-white px-8 py-4 rounded-xl flex items-center gap-3 font-bold text-sm tracking-wide shadow-xl">
               Generate My Personal Money Plan <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1">
             <div className="ios-card bg-ios-secondary p-4 overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2671&auto=format&fit=crop" 
                  className="w-full h-auto rounded-3xl" 
                  alt="Coins and growth"
                  referrerPolicy="no-referrer"
                />
             </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-24 bg-ios-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-xs font-bold text-gray-400 tracking-[0.3em] mb-2 font-mono">Why Financial Guidance Matters</div>
            <h2 className="text-5xl font-black tracking-tighter">Your Sewa Nidhi Is Not Just Money. <br /> It's Your <span className="text-ios-olive">Launchpad.</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'PROTECT YOUR WEALTH', desc: 'Avoid bad advice, risky investments, overspending, and money traps.', icon: Shield },
              { title: 'GROW YOUR WEALTH', desc: 'Smart investments → predictable returns → long-term stability.', icon: TrendingUp },
              { title: 'SECURE YOUR FAMILY', desc: 'Insurance, emergency fund, and future planning in one place.', icon: Users }
            ].map((item, idx) => (
              <div key={idx} className="ios-card p-10 bg-white text-center flex flex-col items-center group hover:scale-[1.02] transition-transform">
                <div className="w-16 h-16 bg-ios-secondary rounded-2xl flex items-center justify-center text-[#4A5D23] mb-8 font-black">
                   <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-black tracking-tight mb-4">{item.title}</h3>
                <p className="text-gray-400 text-sm font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="py-24 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-[60%] bg-[#111] z-0">
          <img src="https://images.unsplash.com/photo-1454165833772-d99628a5ffa0?q=80&w=2670&auto=format&fit=crop" className="w-full h-full object-cover opacity-40 grayscale" alt="" referrerPolicy="no-referrer" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-16">
            <div className="text-xs font-bold text-white tracking-[0.3em] mb-2 font-mono flex items-center gap-2">
              Our Offering <TrendingUp className="w-4 h-4 text-ios-olive" />
            </div>
            <h2 className="text-5xl font-black tracking-tighter text-white">What VeerNXT <span className="text-ios-olive">Gives You</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { id: '1', title: 'Personalized Money Plan', desc: 'Based on your age, goals, family needs & risk profile. A customized roadmap designed specifically for your unique situation.', icon: PieChart },
              { id: '2', title: 'Safe Investment Pathways', desc: 'PPF, Post Office, SGB, SIPs, Fixed Deposits – all explained in simple terms. Secure investment options tailored to your risk appetite.', icon: ShieldCheck },
              { id: '3', title: 'Auto-Invest Deployment', desc: 'Set monthly auto-SIPs and watch your money grow. Automated investing to ensure consistent wealth accumulation without manual effort.', icon: Coins },
              { id: '4', title: 'Sewa Nidhi Protection Module', desc: 'Ensure nothing is wasted; every rupee is allocated with discipline. Advanced tracking to maximize the efficiency of your financial resources.', icon: Activity },
              { id: '5', title: 'Family Protection Plan', desc: 'Term Insurance + Health Insurance recommendations. Comprehensive coverage to safeguard your family\'s financial future against uncertainties.', icon: Heart },
              { id: '6', title: 'Financial Education (3-Min Lessons)', desc: 'Avoid scams, mis-selling, risky apps, and investment traps. Bite-sized lessons to build your financial literacy and protect your wealth.', icon: GraduationCap },
              { id: '7', title: 'Goal-Based Planning', desc: 'Home, marriage, education, vehicle – all mapped out. Structured financial plans to help you achieve your most important life goals.', icon: Target },
              { id: '8', title: 'Emergency Shield Setup', desc: 'Your first ₹1 lakh secured for emergencies. A dedicated safety net to protect you from unexpected financial shocks without derailing your plans.', icon: Shield },
              { id: '9', title: 'Veteran Advisory Support', desc: 'Trusted human guidance – not sales agents. Access to experienced financial advisors who prioritize your interests over sales commissions.', icon: Users }
            ].map((item, idx) => (
              <div key={idx} className="ios-card bg-white/10 backdrop-blur-xl border border-white/10 p-10 group hover:bg-white transition-all duration-500">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-12 h-12 bg-ios-olive/10 rounded-2xl flex items-center justify-center text-ios-olive group-hover:bg-[#4A5D23] group-hover:text-white transition-colors">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className="text-4xl font-black text-white/5 group-hover:text-gray-800/5 transition-colors">{item.id}</span>
                </div>
                <h3 className="text-lg font-black tracking-tight mb-4 text-white group-hover:text-gray-800">{item.title}</h3>
                <p className="text-white/40 text-xs font-medium leading-relaxed group-hover:text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-ios-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-xs font-bold text-gray-400 tracking-[0.3em] mb-2 font-mono">How It Works</div>
            <h2 className="text-5xl font-black tracking-tighter">Simple. Transparent. Designed <span className="text-ios-olive">For Soldiers.</span></h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { id: '01', title: 'PROFILE SCAN', desc: 'Income, goals, savings habits, and family responsibilities.', icon: Search },
              { id: '02', title: 'SEWA NIDHI ASSESSMENT', desc: 'Strategic division of ₹10-12 lakh for safety and growth.', icon: Activity },
              { id: '03', title: 'AI MONEY PLAN', desc: '3-year, 5-year, and 10-year financial mission plans.', icon: PieChart },
              { id: '04', title: 'INVESTMENT GUIDANCE', desc: 'SIP, SGB, PPF, Post Office schemes by risk profile.', icon: TrendingUp },
              { id: '05', title: 'PROTECTION LAYER', desc: 'Insurance, health cover, and family security.', icon: ShieldCheck },
              { id: '06', title: 'GROWTH DASHBOARD', desc: 'Monitor progress like a real mission log.', icon: Monitor }
            ].map((step, idx) => (
              <div key={idx} className="ios-card bg-white p-6 text-center group hover:bg-[#4A5D23] transition-colors duration-500">
                <div className="w-10 h-10 bg-ios-secondary rounded-full flex items-center justify-center text-[#4A5D23] mx-auto mb-4 group-hover:bg-white/20 group-hover:text-white">
                  <step.icon className="w-5 h-5" />
                </div>
                <span className="text-[8px] font-black tracking-widest text-[#4A5D23] group-hover:text-white/50">{step.id}</span>
                <h4 className="text-[10px] font-black mt-2 mb-3 leading-tight group-hover:text-white">{step.title}</h4>
                <p className="text-[9px] text-gray-400 leading-tight group-hover:text-white/70">{step.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-16">
            <button className="bg-[#4A5D23] text-white px-10 py-5 rounded-2xl font-bold text-sm tracking-wide shadow-xl flex items-center gap-2 uppercase">
               Start My Financial Scan <Zap className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Strategic Plans Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-xs font-bold text-gray-400 tracking-[0.3em] mb-2 font-mono">Money Plan</div>
            <h2 className="text-5xl font-black tracking-tighter leading-tight">
              Explore Our Strategic Financial Plans <br /> 
              Designed Specifically For <span className="text-ios-olive">Armed Forces Personnel.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Plan 1 */}
            <div className="ios-card border border-gray-100 overflow-hidden group">
               <div className="bg-ios-secondary p-8 border-b border-gray-100">
                  <div className="flex justify-between items-start mb-4">
                     <h3 className="text-xl font-black tracking-tight">Secure Soldier Plan</h3>
                     <Shield className="w-6 h-6 text-[#4A5D23]" />
                  </div>
                  <p className="text-[10px] font-bold text-gray-400 tracking-widest mb-1">Maximum Safety Focus</p>
                  <span className="inline-block px-3 py-1 bg-white text-[#4A5D23] text-[8px] font-black tracking-widest rounded-full uppercase">Conservative Strategy</span>
               </div>
               <div className="p-8 space-y-6">
                  {[
                    { label: 'Safe Savings', val: '40%', sub: 'PPF, Post Office Schemes' },
                    { label: 'Growth Investments', val: '30%', sub: 'Conservative Equity Funds' },
                    { label: 'Protection', val: '20%', sub: 'Insurance & Health Cover' },
                    { label: 'Skills Development', val: '10%', sub: 'Courses & Certifications' }
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center gap-6">
                       <div className="w-12 h-12 rounded-full border-2 border-[#4A5D23] flex items-center justify-center text-xs font-black text-[#4A5D23]">
                          {stat.val}
                       </div>
                       <div>
                          <p className="text-xs font-black">{stat.label}</p>
                          <p className="text-[9px] text-gray-400">{stat.sub}</p>
                       </div>
                    </div>
                  ))}
                  <button className="w-full bg-[#4A5D23] text-white py-4 rounded-xl font-black text-xs uppercase tracking-widest mt-4 group-hover:scale-[1.02] transition-transform">View Example</button>
               </div>
            </div>

            {/* Plan 2 */}
            <div className="ios-card border-none shadow-2xl overflow-hidden scale-105 relative z-10">
               <div className="bg-[#4A5D23] p-8 border-b border-white/10 text-white">
                  <div className="flex justify-between items-start mb-4">
                     <h3 className="text-xl font-black tracking-tight">Growth Warrior Plan</h3>
                     <Zap className="w-6 h-6 text-yellow-400" />
                  </div>
                  <p className="text-[10px] font-bold text-white/50 tracking-widest uppercase mb-1">Aggressive Growth Focus</p>
                  <span className="inline-block px-3 py-1 bg-white/10 text-white text-[8px] font-black tracking-widest rounded-full uppercase font-mono">High Growth Strategy</span>
               </div>
               <div className="p-8 bg-[#4A5D23] text-white space-y-6">
                  {[
                    { label: 'SIP Investments', val: '50%', sub: 'Index + Balanced Funds' },
                    { label: 'Gold Allocation', val: '20%', sub: 'Sovereign Gold Bonds' },
                    { label: 'Safe Savings', val: '20%', sub: 'PPF & Fixed Deposits' },
                    { label: 'Emergency Fund', val: '10%', sub: 'Liquid & Instant Access' }
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center gap-6">
                       <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-xs font-black">
                          {stat.val}
                       </div>
                       <div>
                          <p className="text-xs font-black">{stat.label}</p>
                          <p className="text-[9px] text-white/50">{stat.sub}</p>
                       </div>
                    </div>
                  ))}
                  <button className="w-full bg-white text-[#4A5D23] py-4 rounded-xl font-black text-xs uppercase tracking-widest mt-4">View Example</button>
               </div>
            </div>

             {/* Plan 3 */}
             <div className="ios-card border border-gray-100 overflow-hidden group">
               <div className="bg-ios-secondary p-8 border-b border-gray-100">
                  <div className="flex justify-between items-start mb-4">
                     <h3 className="text-xl font-black tracking-tight">Balanced Patriot Plan</h3>
                     <PieChart className="w-6 h-6 text-[#4A5D23]" />
                  </div>
                  <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-1">Smart Balanced Approach</p>
                  <span className="inline-block px-3 py-1 bg-white text-[#4A5D23] text-[8px] font-black tracking-widest rounded-full uppercase">Balanced Strategy</span>
               </div>
               <div className="p-8 space-y-6">
                  {[
                    { label: 'Secure Investments', val: '40%', sub: 'PPF, Post Office, NSC' },
                    { label: 'Growth Instruments', val: '35%', sub: 'Equity & Debt Mix' },
                    { label: 'Protection Shield', val: '15%', sub: 'Insurance & Health' },
                    { label: 'Gold Reserve', val: '10%', sub: 'Digital Gold & SGB' }
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center gap-6">
                       <div className="w-12 h-12 rounded-full border-2 border-[#4A5D23] flex items-center justify-center text-xs font-black text-[#4A5D23]">
                          {stat.val}
                       </div>
                       <div>
                          <p className="text-xs font-black">{stat.label}</p>
                          <p className="text-[9px] text-gray-400">{stat.sub}</p>
                       </div>
                    </div>
                  ))}
                  <button className="w-full bg-[#4A5D23] text-white py-4 rounded-xl font-black text-xs uppercase tracking-widest mt-4 group-hover:scale-[1.02] transition-transform">View Example</button>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tools */}
      <section className="py-24 bg-ios-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em] mb-2 font-mono">FEATURED TOOLS & MODULES</div>
            <h2 className="text-5xl font-black tracking-tighter">Mission-Ready Financial Systems Built For <br /> <span className="text-[#4A5D23]">Disciplined Civilian Success.</span></h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: 'Investment Zone', desc: 'Beginner-friendly investment options.', icon: TrendingUp },
              { title: 'Family Protection Hub', desc: 'Insurance guidance built on protection, not selling.', icon: Heart },
              { title: 'Prosperity Score', desc: 'Track readiness using a 0-100 mission scale.', icon: Activity },
              { title: 'Record Locker', desc: 'Secure storage for certificates & documents.', icon: Lock }
            ].map((tool, idx) => (
              <div key={idx} className="ios-card bg-white p-10 flex flex-col items-center text-center group hover:bg-ios-olive transition-colors duration-500">
                <div className="w-12 h-12 bg-ios-secondary rounded-2xl flex items-center justify-center text-ios-olive mb-6 group-hover:bg-white group-hover:text-ios-olive">
                   <tool.icon className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-black tracking-tight mb-4 group-hover:text-white uppercase">{tool.title}</h3>
                <p className="text-[10px] text-gray-400 group-hover:text-white/70 font-medium">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust and Integrity */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em] mb-2 font-mono">WHY AGNIVEERS TRUST US</div>
            <h2 className="text-5xl font-black tracking-tighter">Built With Military Integrity, Designed For <br /> <span className="text-[#4A5D23]">Soldier Success.</span></h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Veteran-Led Platform', desc: 'Founded and operated by ex-servicemen who understand the unique financial challenges faced by armed forces personnel.', icon: Users },
              { title: 'Military-Grade Integrity', desc: 'Every recommendation follows strict ethical guidelines, mirroring the discipline and honor of military service.', icon: ShieldCheck },
              { title: 'Zero Mis-Selling Policy', desc: 'No commissions, no hidden charges, no biased recommendations. Your benefit is our only priority.', icon: Target },
              { title: 'Jargon-Free Simplicity', desc: 'Complex financial concepts explained in simple, straightforward language anyone can understand.', icon: FileText },
              { title: 'First-Timer Friendly', desc: 'Everything designed specifically for first-time investors, with step-by-step guidance at every stage.', icon: GraduationCap },
              { title: 'Mission-First Approach', desc: 'Your financial goals become our mission objectives, tracked and achieved with military precision.', icon: CheckCircle2 }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                 <div className="w-12 h-12 bg-ios-secondary rounded-xl flex items-center justify-center text-[#4A5D23] flex-shrink-0 font-black">
                    {idx + 1}
                 </div>
                 <div>
                    <h3 className="text-sm font-black mb-3 tracking-wide uppercase">{item.title}</h3>
                    <p className="text-xs text-gray-400 leading-relaxed font-medium">{item.desc}</p>
                 </div>
              </div>
            ))}
          </div>

          <div className="mt-20 p-12 bg-ios-secondary rounded-[40px] relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-5">
                <FileText className="w-64 h-64" />
             </div>
             <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop" 
                  className="w-24 h-24 rounded-full border-4 border-white shadow-xl" 
                  alt="Col Rajiv Verma"
                  referrerPolicy="no-referrer"
                />
                <div>
                   <p className="text-xl font-black tracking-tight leading-relaxed text-gray-800 mb-4">
                      "VeerNXT helped me turn my Sewa Nidhi into a disciplined financial plan. I now save and invest with confidence, clarity, and a mission-driven approach that keeps my family financially secure for the long term."
                   </p>
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-[2px] bg-[#4A5D23]"></div>
                      <p className="text-xs font-black tracking-widest text-[#4A5D23]">Col Rajiv Verma (Retd), Indian Army</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Bootcamp Section */}
      <section className="py-24 bg-ios-bg">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
               <div className="text-xs font-bold text-gray-400 tracking-[0.3em] font-mono mb-2">Learn In 7 Short Missions</div>
               <h2 className="text-5xl font-black tracking-tighter">Financial Learning <span className="text-[#4A5D23]">Bootcamp</span></h2>
            </div>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
               {[
                 { id: '01', title: 'SEWA NIDHI STRATEGY', desc: 'Learn how to maximize your Sewa Nidhi funds with smart investment approaches.', icon: Zap },
                 { id: '02', title: 'FINANCIAL TRAPS', desc: '5 common financial traps to avoid for better wealth management.', icon: Shield },
                 { id: '03', title: 'SIP INVESTMENTS', desc: 'How Systematic Investment Plans grow your money over time.', icon: TrendingUp },
                 { id: '04', title: 'GOVERNMENT SCHEMES', desc: 'Safe, government-backed investment options with guaranteed returns.', icon: ShieldCheck },
                 { id: '05', title: 'INSURANCE BASICS', desc: 'Essential insurance knowledge for financial protection.', icon: Heart },
                 { id: '06', title: 'EMERGENCY FUND', desc: 'How to build and maintain a financial safety net.', icon: Activity },
                 { id: '07', title: 'WEALTH BUILDING', desc: 'Long-term strategies for sustainable wealth creation.', icon: Coins }
               ].map((mission, idx) => (
                  <div key={idx} className="ios-card bg-white p-8 flex flex-col items-start border-none group hover:bg-[#4A5D23] transition-colors duration-500">
                     <div className="w-10 h-10 bg-ios-secondary rounded-lg flex items-center justify-center text-[#4A5D23] mb-6 group-hover:bg-white/20 group-hover:text-white">
                        <mission.icon className="w-5 h-5" />
                     </div>
                     <span className="text-4xl font-black text-gray-50 mb-4 group-hover:text-white/10 transition-colors uppercase">{mission.id}</span>
                     <h4 className="text-xs font-black tracking-tight mb-2 group-hover:text-white uppercase">{mission.title}</h4>
                     <p className="text-[10px] text-gray-400 mb-6 group-hover:text-white/60 font-medium">{mission.desc}</p>
                     <div className="mt-auto flex items-center gap-2 text-[8px] font-black tracking-widest text-[#4A5D23] group-hover:text-white uppercase transition-colors">
                        <Clock className="w-3 h-3" /> 3 Minutes
                     </div>
                  </div>
               ))}
            </div>
            
            <div className="text-center mt-12 space-y-4">
               <button className="bg-[#4A5D23] text-white px-10 py-5 rounded-2xl font-black text-xs tracking-widest flex items-center gap-2 mx-auto uppercase shadow-xl">
                  Start All 7 Missions <Zap className="w-4 h-4 ml-2" />
               </button>
               <p className="text-[10px] font-bold text-gray-400 uppercase">7 Missions • 3 Minutes Each • 21 Minutes Total</p>
            </div>
         </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-[#4A5D23] text-white">
         <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-5xl font-black tracking-tighter mb-8 leading-tight">
               Your Service Was <span className="text-yellow-400">Disciplined.</span> Your <br />
               <span className="text-white underline decoration-yellow-400 decoration-4 underline-offset-8">Money</span> Should Be Too.
            </h2>
            <p className="text-white/80 mb-12 max-w-2xl mx-auto">Take control of your financial future today. Your personalised money plan is ready.</p>
            <div className="flex flex-wrap justify-center gap-6">
               <button className="bg-white text-[#4A5D23] px-10 py-5 rounded-xl font-black text-xs tracking-widest shadow-2xl flex items-center gap-2">
                  Generate My Personal Money Plan <ArrowUpRight className="w-4 h-4" />
               </button>
               <button className="bg-transparent border border-white/30 text-white px-10 py-5 rounded-xl font-black text-xs tracking-widest hover:bg-white/10 transition-colors flex items-center gap-2">
                  Explore Financial Tools <ArrowRight className="w-4 h-4" />
               </button>
            </div>
         </div>
      </section>
    </div>
  );
};
