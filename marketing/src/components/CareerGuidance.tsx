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
  User,
  Users,
  Briefcase,
  TrendingUp,
  Phone,
  Mail,
  Lock,
  ChevronDown
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export const CareerGuidance = () => {
  return (
    <div className="bg-ios-bg min-h-screen">
      {/* Page Header */}
      <section className="relative py-24 bg-[#111] text-white">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="/hero/career_mapping.png" 
            className="w-full h-full object-cover"
            alt="Soldiers silhouette"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-2 text-xs font-bold text-ios-olive tracking-widest mb-4">
             <Link to="/" className="hover:text-white transition-colors">Home</Link> 
             <ChevronRight className="w-3 h-3" />
             <span className="text-white">Career Transition</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-center">Career Transition</h1>
        </div>
      </section>

      {/* Hero with Form Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-green-50 text-green-700 rounded-full text-xs font-semibold mb-6 border border-green-100">
              <ShieldCheck className="w-4 h-4" /> Trusted Career Platform for Veterans
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
              Your Next Mission: <br />
              <span className="text-ios-olive underline decoration-ios-olive/30 underline-offset-8">From Uniform To Civilian Success</span>
            </h2>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed font-light">
              Get personalized career pathways in government, PSU, banking, police, and corporate sectors with AI-powered guidance.
            </p>
            
            <ul className="space-y-4 mb-12">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="font-medium text-gray-700">AI-Powered Career Mapping</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="font-medium text-gray-700">500+ Govt & PSU Exams</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="font-medium text-gray-700">Personalized Roadmap</span>
              </li>
            </ul>

            <div className="grid grid-cols-3 gap-4 mb-12 bg-ios-secondary p-8 rounded-[32px]">
              <div className="text-center">
                <p className="text-3xl font-black tracking-tighter">10,000+</p>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">Veterans Helped</p>
              </div>
              <div className="text-center border-x border-gray-200">
                <p className="text-3xl font-black tracking-tighter">500+</p>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">Career Paths</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-black tracking-tighter">4.9</p>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">Rating</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-sm text-gray-600 font-medium">
                <Target className="w-5 h-5 text-ios-olive" /> Defense Ministry Approved
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-600 font-medium">
                <Users className="w-5 h-5 text-ios-olive" /> Personalized Matching
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-600 font-medium">
                <CheckCircle2 className="w-5 h-5 text-ios-olive" /> 4.9/5 Veteran Rating
              </div>
            </div>
          </div>

          <div className="ios-card p-10 bg-ios-secondary/50 backdrop-blur-md">
            <h3 className="text-2xl font-bold mb-8 tracking-tight flex items-center justify-between">
              Registration Form
              <span className="text-xs font-medium text-gray-400">Step 1 of 3</span>
            </h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Full Name *</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input type="text" placeholder="John Doe" className="w-full bg-white border border-gray-100 rounded-2xl py-4 pl-12 pr-6 text-sm focus:ring-2 focus:ring-ios-olive/20 outline-none transition-all shadow-sm" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Student ID *</label>
                  <div className="relative">
                    <Target className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input type="text" placeholder="STU1001" className="w-full bg-white border border-gray-100 rounded-2xl py-4 pl-12 pr-6 text-sm focus:ring-2 focus:ring-ios-olive/20 outline-none transition-all shadow-sm" />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Email Address *</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input type="email" placeholder="student@example.com" className="w-full bg-white border border-gray-100 rounded-2xl py-4 pl-12 pr-6 text-sm focus:ring-2 focus:ring-ios-olive/20 outline-none transition-all shadow-sm" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input type="tel" placeholder="+91 9876543210" className="w-full bg-white border border-gray-100 rounded-2xl py-4 pl-12 pr-6 text-sm focus:ring-2 focus:ring-ios-olive/20 outline-none transition-all shadow-sm" />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Password *</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input type="password" placeholder="Create password" className="w-full bg-white border border-gray-100 rounded-2xl py-4 pl-12 pr-6 text-sm focus:ring-2 focus:ring-ios-olive/20 outline-none transition-all shadow-sm" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Confirm Password *</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input type="password" placeholder="Confirm password" className="w-full bg-white border border-gray-100 rounded-2xl py-4 pl-12 pr-6 text-sm focus:ring-2 focus:ring-ios-olive/20 outline-none transition-all shadow-sm" />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Previous Job</label>
                  <input type="text" placeholder="e.g. Sales Executive" className="w-full bg-white border border-gray-100 rounded-2xl py-4 px-6 text-sm focus:ring-2 focus:ring-ios-olive/20 outline-none transition-all shadow-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Current Status *</label>
                  <select className="w-full bg-white border border-gray-100 rounded-2xl py-4 px-6 text-sm focus:ring-2 focus:ring-ios-olive/20 outline-none transition-all shadow-sm appearance-none cursor-pointer">
                    <option>Select your status</option>
                    <option>Active Duty</option>
                    <option>Ex-Serviceman</option>
                    <option>Retiring Soon</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Current Service *</label>
                <select className="w-full bg-white border border-gray-100 rounded-2xl py-4 px-6 text-sm focus:ring-2 focus:ring-ios-olive/20 outline-none transition-all shadow-sm appearance-none cursor-pointer text-gray-500">
                  <option>Select Service</option>
                  <option>Indian Army</option>
                  <option>Indian Navy</option>
                  <option>Indian Air Force</option>
                </select>
              </div>

              <button className="w-full bg-[#4A5D23] hover:bg-[#3D4C1D] text-white font-bold py-5 rounded-2xl transition-all shadow-xl shadow-[#4A5D23]/20 uppercase tracking-widest text-xs flex items-center justify-center gap-2">
                Create Free Account
              </button>
              
              <p className="text-center text-sm text-gray-500">
                Already have an account? <span className="text-ios-olive font-bold cursor-pointer">Login</span>
              </p>
            </form>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 mt-16 flex justify-center">
          <button className="bg-[#4A5D23] text-white px-8 py-4 rounded-xl flex items-center gap-3 font-bold text-sm tracking-wide">
             <Target className="w-5 h-5" /> Get Your Free Career Report <ChevronDown className="w-4 h-4 ml-6" />
          </button>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-24 bg-ios-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em] mb-2 font-mono">THE PROCESS</div>
            <h2 className="text-5xl font-black tracking-tighter">How It <span className="text-ios-olive">Works</span></h2>
            <p className="text-gray-500 mt-4">Simple. Fast. Personalised. Built for Soldiers by Soldiers.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="ios-card bg-white p-8 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-ios-olive"></div>
              <h3 className="text-xl font-bold mb-8 tracking-tight">Why Structured Reading Approaches Matter</h3>
              <div className="space-y-8 relative">
                <div className="flex gap-6 items-center">
                  <div className="w-20 h-20 rounded-full border-2 border-dashed border-gray-200 flex items-center justify-center text-[10px] text-center p-2 font-bold leading-tight">
                    Systematic & Cumulative
                  </div>
                  <div className="flex-1 bg-ios-secondary/50 p-4 rounded-xl text-xs font-medium leading-relaxed">
                    Lessons build on each other, starting with simple concepts and moving to more complex ones.
                  </div>
                </div>
                <div className="flex gap-6 items-center">
                  <div className="w-20 h-20 rounded-full border-2 border-dashed border-ios-olive flex items-center justify-center text-[10px] text-center p-2 font-bold leading-tight bg-ios-olive/5">
                    Diagnostic
                  </div>
                  <div className="flex-1 bg-ios-secondary/50 p-4 rounded-xl text-xs font-medium leading-relaxed border-l-4 border-ios-olive">
                    Teachers continuously monitor and adapt to each student's needs.
                  </div>
                </div>
                <div className="flex gap-6 items-center">
                   <div className="w-20 h-20 rounded-full border-2 border-dashed border-gray-200 flex items-center justify-center text-[10px] text-center p-2 font-bold leading-tight">
                    Explicit
                  </div>
                  <div className="flex-1 bg-ios-secondary/50 p-4 rounded-xl text-xs font-medium leading-relaxed">
                    Direct and clear instructional approach that avoids gaps in understanding.
                  </div>
                </div>
                
                <div className="absolute bottom-[-20px] right-4 bg-[#4A5D23] text-white p-6 rounded-2xl max-w-[250px] shadow-2xl">
                  <div className="text-[10px] font-bold tracking-widest opacity-70 mb-2">Step 4</div>
                  <h4 className="font-bold text-sm mb-2">Begin Structured Training</h4>
                  <p className="text-[10px] leading-relaxed opacity-80">Access mock tests, lessons, revision drills, and daily tasks.</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { title: "Fill A Short Form", time: "2 Minutes", step: "1", icon: FileText, active: false },
                { title: "Ai Career Scan", time: "Instant Analysis", step: "2", icon: Target, active: false },
                { title: "Receive Your Personalised Report", time: "24 Hours", step: "3", icon: FileText, active: false },
                { title: "Begin Structured Training", time: "Daily Progress", step: "4", icon: Briefcase, active: true },
                { title: "Achieve Civilian Victory", time: "Career Success", step: "5", icon: Target, active: false }
              ].map((item, idx) => (
                <div key={idx} className={`ios-card p-6 flex items-center gap-6 transition-all border-2 ${item.active ? 'bg-[#4A5D23] text-white border-[#4A5D23] shadow-lg' : 'bg-white border-transparent hover:border-gray-100'}`}>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${item.active ? 'bg-white text-[#4A5D23]' : 'bg-ios-secondary text-[#4A5D23]'}`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold tracking-tight text-sm">{item.title}</h4>
                    <p className={`text-xs ${item.active ? 'text-white/80' : 'text-gray-400'}`}>{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-16 bg-ios-secondary border border-ios-olive/10 p-6 rounded-3xl flex items-center gap-6 max-w-2xl mx-auto">
             <div className="w-12 h-12 bg-[#4A5D23] rounded-full flex items-center justify-center text-white flex-shrink-0">
                <ShieldCheck className="w-6 h-6" />
             </div>
             <div>
                <h4 className="text-sm font-bold tracking-tight">100% Confidential & Secure</h4>
                <p className="text-xs text-gray-500">Your personal information and career data are protected with military-grade encryption.</p>
             </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#4A5D23] text-white relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8">Ready To Start Your Journey?</h2>
            <p className="text-white/80 mb-12">Get your personalized career transition report in just 24 hours</p>
            <button className="bg-white text-[#4A5D23] px-10 py-5 rounded-full font-bold text-sm tracking-wide shadow-xl flex items-center gap-2 mx-auto">
               Generate My Career Transition Report <ArrowRight className="w-5 h-5" />
            </button>
            <div className="flex justify-center gap-8 mt-12 text-[10px] font-bold tracking-[0.2em] opacity-80">
               <span className="flex items-center gap-2">○ No Credit Card Required</span>
               <span className="flex items-center gap-2">○ Free Career Assessment</span>
               <span className="flex items-center gap-2">○ 100% Confidential</span>
            </div>
         </div>
      </section>

      {/* Mission Benefits Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-xs font-bold text-gray-400 tracking-[0.3em] mb-2 font-mono">Exclusive Features</div>
            <h2 className="text-5xl font-black tracking-tighter">Mission Benefits For <span className="text-ios-olive">Agniveers</span></h2>
            <p className="text-gray-500 mt-4">Comprehensive tools and resources designed specifically for your transition journey</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: '01', title: 'Personalized Career Report', desc: 'A custom roadmap based on your qualification, service history & strengths.', icon: FileText },
              { id: '02', title: 'Exam Options Matched To You', desc: 'Central, State, Police, Banking, PSU, Railways — all filtered to your eligibility.', icon: Target },
              { id: '03', title: 'Syllabus + Study Plan', desc: 'Step-by-step learning path built like your daily PT routine.', icon: Calendar },
              { id: '04', title: 'Strengths & Weaknesses Assessment', desc: 'Find where you stand and where to improve.', icon: Briefcase },
              { id: '05', title: 'Training Material Ready To Use', desc: 'Mock tests, practice questions, video lessons, and revision sheets.', icon: Monitor },
              { id: '06', title: 'Automated Progress Tracking', desc: 'Your preparation adjusts each day based on performance.', icon: TrendingUp }
            ].map((benefit, idx) => (
              <div key={idx} className="ios-card p-10 bg-ios-secondary/30 relative overflow-hidden group hover:bg-white transition-all border-none">
                <div className="absolute top-4 right-6 text-6xl font-black text-gray-100 group-hover:text-ios-olive/10 transition-colors">{benefit.id}</div>
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#4A5D23] mb-8 shadow-sm">
                   <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black tracking-tight mb-4 leading-tight">{benefit.title}</h3>
                <p className="text-gray-500 text-sm font-medium leading-relaxed">{benefit.desc}</p>
                <div className="mt-8 pt-6 border-t border-gray-100 space-y-2">
                   <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400">
                      <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div> Military Service Credit
                   </div>
                   <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400">
                      <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div> Age Relaxation
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Report CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
           <div className="ios-card bg-[#4A5D23] text-white p-12 relative overflow-hidden">
              <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-white/5 rounded-full"></div>
              <div className="relative z-10 text-center max-w-3xl mx-auto">
                 <div className="flex items-center gap-3 justify-center mb-6">
                    <ShieldCheck className="w-8 h-8" />
                    <div className="text-left">
                       <h4 className="font-bold">100% Secure & Confidential</h4>
                       <p className="text-xs opacity-70">Your personal information and career data are protected with military-grade encryption</p>
                    </div>
                 </div>
                 <h2 className="text-4xl font-black tracking-tighter mb-8">Want To See A Sample Report?</h2>
                 <p className="opacity-80 mb-12">Download a sample report to understand what you'll receive</p>
                 <div className="flex flex-wrap justify-center gap-6">
                    <button className="bg-white text-[#4A5D23] px-10 py-5 rounded-lg font-bold text-sm tracking-wide shadow-xl flex items-center gap-2">
                       <FileText className="w-5 h-5" /> Download Sample Report <ChevronDown className="w-4 h-4 ml-4" />
                    </button>
                    <button className="bg-transparent border border-white text-white px-10 py-5 rounded-lg font-bold text-sm tracking-wide shadow-xl flex items-center gap-2">
                       Generate My Report <ArrowRight className="w-5 h-5" />
                    </button>
                 </div>
                 <p className="text-[10px] font-medium opacity-60 mt-8 tracking-widest">○ No registration required for sample report</p>
              </div>
           </div>
        </div>
      </section>

      {/* Personalized Report Grid Section */}
      <section className="py-24 bg-ios-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-xs font-bold text-gray-400 tracking-[0.3em] mb-2 font-mono">Report Details</div>
            <h2 className="text-5xl font-black tracking-tighter">Your Personalized Career <span className="text-[#4A5D23]">Report</span></h2>
            <p className="text-gray-500 mt-4">Comprehensive analysis and roadmap for your successful transition</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Top 5 Exams You Should Target', cat: 'Strategy', desc: 'Personalized exam recommendations based on your profile.', icon: Target },
              { title: 'Preparation Difficulty Level', cat: 'Assessment', desc: 'Realistic assessment of preparation effort required.', icon: FileText },
              { id: '3', title: 'Eligibility Confirmation', cat: 'Validation', desc: 'Age, qualification, physical fitness verification.', icon: CheckCircle2 },
              { id: '01', title: 'Exam Pattern & Syllabus Breakdown', cat: 'Analysis', desc: 'Detailed analysis of exam structure and topics.', icon: Briefcase },
              { id: '02', title: 'Strengths & Weaknesses Analysis', cat: 'Analysis', desc: 'Identify your competitive advantages and gaps.', icon: ShieldCheck },
              { id: '03', title: 'Recommended Training Modules', cat: 'Resources', desc: 'Custom study materials and resources.', icon: FileText },
              { id: '07', title: 'Daily/Weekly Preparation Tasks', cat: 'Planning', desc: 'Structured study plan like military training.', icon: Calendar },
              { id: '08', title: 'Timeline To Crack The Exam', cat: 'Planning', desc: 'Realistic roadmap to achieve success.', icon: TrendingUp },
              { id: '09', title: 'Career Salary Expectations', cat: 'Career', desc: 'Potential earnings and growth opportunities.', icon: Briefcase }
            ].map((item, idx) => (
              <div key={idx} className="ios-card p-8 bg-white relative overflow-hidden group hover:shadow-2xl transition-all border-none">
                <div className="absolute top-0 right-0 p-3 bg-ios-secondary text-[8px] font-black tracking-[0.2em] group-hover:bg-[#4A5D23] group-hover:text-white transition-colors">
                   {item.cat}
                </div>
                <div className="w-10 h-10 bg-ios-secondary text-[#4A5D23] rounded-lg flex items-center justify-center mb-6">
                   <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-black tracking-tight mb-4 leading-tight">{item.title}</h3>
                <p className="text-gray-400 text-xs font-medium leading-relaxed">{item.desc}</p>
                {item.id && <div className="absolute bottom-4 right-6 text-2xl font-black text-gray-50 opacity-10">{item.id}</div>}
              </div>
            ))}
          </div>
          
          <div className="mt-20">
             <div className="ios-card bg-[#4A5D23] p-12 text-center text-white">
                <h2 className="text-3xl font-black tracking-tighter mb-6">Ready To Access All These Benefits?</h2>
                <p className="opacity-80 mb-10">Join thousands of Agniveers who have successfully transitioned</p>
                <button className="bg-white text-[#4A5D23] px-10 py-5 rounded-lg font-bold text-sm tracking-wide shadow-xl mx-auto flex items-center gap-2">
                   Get Started Now <ArrowRight className="w-5 h-5" />
                </button>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};
