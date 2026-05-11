import { 
  ChevronRight, 
  Users, 
  ArrowRight, 
  Target, 
  ShieldCheck, 
  CheckCircle2, 
  Briefcase, 
  TrendingUp, 
  Award, 
  BookOpen, 
  GraduationCap, 
  Heart, 
  Lock, 
  ShoppingCart, 
  ExternalLink,
  MessageSquare,
  HelpingHand,
  Search,
  FileText,
  MapPin,
  Clock,
  Zap,
  Globe,
  Monitor,
  Shield
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export const CommunitySupport = () => {
  return (
    <div className="bg-ios-bg min-h-screen">
      {/* Page Header */}
      <section className="relative py-24 bg-[#111] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="/hero/community_support.png" 
            className="w-full h-full object-cover"
            alt="Community Support background"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-2 text-xs font-bold text-ios-olive tracking-widest mb-4">
             <Link to="/" className="hover:text-white transition-colors">Home</Link> 
             <ChevronRight className="w-3 h-3" />
             <span className="text-white">Community Support</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-center leading-none">Community Support</h1>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
             <div className="flex-1">
                <div className="text-[10px] font-bold text-[#4A5D23] tracking-[0.3em] mb-4">The Brotherhood Never Ends. It Evolves.</div>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-tight">
                   Join The VeerNXT <br /> <span className="text-[#4A5D23]">Community</span>
                </h2>
                <p className="text-gray-500 text-lg mb-10 leading-relaxed font-light">
                   India's most trusted network for Agniveers & Veterans to learn, grow, earn, and serve with purpose.
                </p>
                
                <button className="bg-[#4A5D23] text-white px-10 py-5 rounded-2xl flex items-center gap-3 font-black text-sm tracking-widest mb-16 hover:scale-[1.02] transition-transform">
                   <Users className="w-5 h-5" /> Join the Community
                </button>

                <div className="grid grid-cols-3 gap-8">
                   {[
                     { label: 'Members', value: '10,000+' },
                     { label: 'Mentors', value: '500+' },
                     { label: 'Placement', value: '85%' }
                   ].map((stat, idx) => (
                     <div key={idx} className="ios-card bg-ios-secondary p-8 text-center">
                        <div className="text-2xl font-black text-gray-800 mb-1">{stat.value}</div>
                        <div className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">{stat.label}</div>
                     </div>
                   ))}
                </div>
             </div>

             <div className="flex-1 relative">
                <div className="absolute -top-12 -right-12 w-64 h-64 bg-ios-olive/10 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-[#4A5D23]/10 rounded-full blur-3xl opacity-50"></div>
                <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-8 border-ios-secondary rotate-2">
                   <img 
                    src="/hero/merchandise.png" 
                    className="w-full h-auto" 
                    alt="Community image"
                    referrerPolicy="no-referrer"
                   />
                   <div className="absolute bottom-6 left-6 p-4 bg-black/60 backdrop-blur-md rounded-2xl flex items-center gap-3 border border-white/20">
                      <div className="w-8 h-8 rounded-full bg-ios-olive flex items-center justify-center">
                         <Target className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-[10px] font-black text-white tracking-widest uppercase">Sewa Saathi</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Community Pillars */}
      <section className="py-24 bg-ios-secondary">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
               <div className="text-xs font-bold text-gray-400 tracking-[0.3em] font-mono mb-2">More Than A Platform. A Family. A Lifelong Mission.</div>
               <h2 className="text-5xl font-black tracking-tighter">Community <span className="text-ios-olive">Pillars</span></h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
               {[
                 { title: 'Skill Development & Upskilling', icon: Zap },
                 { title: 'Certifications', icon: Award },
                 { title: 'Veteran Sewa Kendra', icon: HelpingHand },
                 { title: 'Corporate Hiring & Job Connects', icon: Briefcase },
                 { title: 'Merchandise', icon: ShoppingCart },
                 { title: 'Mentorship & Volunteering Network', icon: Users }
               ].map((pillar, idx) => (
                  <div key={idx} className="ios-card bg-white p-12 text-center group hover:bg-[#4A5D23] transition-all duration-500 flex flex-col items-center cursor-pointer">
                     <div className="w-12 h-12 bg-ios-secondary rounded-2xl flex items-center justify-center text-ios-olive mb-8 group-hover:bg-white/20 group-hover:text-white transition-colors">
                        <pillar.icon className="w-6 h-6" />
                     </div>
                     <h3 className="text-xs font-black tracking-tight group-hover:text-white leading-tight">{pillar.title}</h3>
                  </div>
                ))}
            </div>

            <div className="mt-12 text-center">
               <p className="text-lg font-black text-gray-800 uppercase">From training grounds to civilian life — your brothers stand with you.</p>
               <p className="text-xs font-bold text-[#4A5D23] tracking-widest mt-2">- VeerNXT Brotherhood</p>
            </div>
         </div>
      </section>

      {/* Skillforce Academy */}
      <section className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
               <div className="text-xs font-bold text-gray-400 tracking-[0.3em] font-mono mb-2">VeerNXT SkillForce Academy</div>
               <h2 className="text-5xl font-black tracking-tighter leading-tight">Shape Your Second Career With <br /><span className="text-ios-olive">Military Precision.</span></h2>
               <p className="text-gray-400 mt-6 max-w-2xl mx-auto">Practical, fast-paced skills and micro-credentials designed for Agniveers transitioning into high-demand careers.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { id: '01', title: 'Corporate Readiness Track', subtitle: 'From Uniform to Office Leadership.', details: ['Workplace behavior & communication', 'Email writing', 'Excel, MIS, CRM basics'], icon: Briefcase },
                 { id: '02', title: 'Security & Ops Track', subtitle: 'Command. Control. Coordinate.', details: ['Security officer training', 'CCTV ops & surveillance', 'Facility management', 'Crisis response basics'], icon: ShieldCheck },
                 { id: '03', title: 'Tech & Digital Track', subtitle: 'Future-ready digital skills.', details: ['Basic IT & computer fundamentals', 'Digital tools (Docs, Sheets, CRM)', 'Intro to cybersecurity', 'Data entry + administrative systems'], icon: Monitor }
               ].map((track, idx) => (
                  <div key={idx} className="ios-card bg-ios-secondary p-10 border border-gray-100 group">
                     <div className="flex justify-between items-start mb-8 text-ios-olive">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                           <track.icon className="w-6 h-6" />
                        </div>
                        <span className="text-4xl font-black opacity-5">{track.id}</span>
                     </div>
                     <h3 className="text-sm font-black tracking-tight mb-2">{track.title}</h3>
                     <p className="text-[10px] text-gray-400 font-bold mb-6">{track.subtitle}</p>
                     <ul className="space-y-3">
                        {track.details.map((detail, i) => (
                           <li key={i} className="flex items-center gap-3 text-xs font-medium text-gray-600">
                              <CheckCircle2 className="w-4 h-4 text-ios-olive" />
                              {detail}
                           </li>
                        ))}
                     </ul>
                  </div>
               ))}
               
               {/* 4th Column - Full width on desktop */}
               <div className="md:col-span-1 ios-card bg-ios-secondary p-10 border border-gray-100 group">
                   <div className="flex justify-between items-start mb-8 text-ios-olive">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                           <MessageSquare className="w-6 h-6" />
                        </div>
                        <span className="text-4xl font-black opacity-5">04</span>
                     </div>
                     <h3 className="text-sm font-black tracking-tight mb-2">Communication & English Mastery</h3>
                     <p className="text-[10px] text-gray-400 font-bold mb-6">Speak with confidence.</p>
                     <ul className="space-y-3">
                         <li className="flex items-center gap-3 text-xs font-medium text-gray-600">
                              <CheckCircle2 className="w-4 h-4 text-ios-olive" />
                              Spoken English
                           </li>
                           <li className="flex items-center gap-3 text-xs font-medium text-gray-600">
                              <CheckCircle2 className="w-4 h-4 text-ios-olive" />
                              Interview communication
                           </li>
                     </ul>
               </div>
            </div>
         </div>
      </section>

      {/* Recognized Credentials */}
      <section className="py-24 bg-ios-bg">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
               <div className="text-xs font-bold text-gray-400 tracking-[0.3em] font-mono mb-2">Mission-Certify Career Advantage Certificates</div>
               <h2 className="text-5xl font-black tracking-tighter leading-tight">Turn Your Skills Into <span className="text-[#4A5D23]">Recognised Credentials.</span></h2>
               <p className="text-gray-400 mt-6 max-w-2xl mx-auto">Short, govt-aligned courses that boost an Agniveer's employability across sectors.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
               <div className="grid grid-cols-2 gap-4">
                  {[
                    { title: 'Security & Protection Certification', icon: ShieldCheck },
                    { title: 'Digital Literacy Badge', icon: Monitor },
                    { title: 'English Proficiency Certificate', icon: GraduationCap },
                    { title: 'Corporate Soft Skills Certificate', icon: Users },
                    { title: 'First Aid & Emergency Response', icon: Heart },
                    { title: 'Logistics & Supply Chain Basics', icon: TrendingUp }
                  ].map((cert, idx) => (
                     <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow text-center">
                        <cert.icon className="w-6 h-6 text-[#4A5D23] mx-auto mb-3" />
                        <h4 className="text-[9px] font-black leading-tight">{cert.title}</h4>
                     </div>
                  ))}
               </div>

               <div className="relative">
                   <div className="absolute -inset-4 bg-[#4A5D23]/5 rounded-[40px] blur-2xl"></div>
                   <div className="relative bg-white p-12 rounded-[32px] shadow-2xl border border-gray-100 text-center">
                      <div className="text-2xl font-black text-gray-800 mb-2">VeerNXT</div>
                      <div className="text-[10px] font-bold text-gray-400 tracking-[0.2em] mb-12 uppercase">Certificate of Achievement</div>
                      
                      <div className="text-[10px] text-gray-400 mb-4">This is to certify that</div>
                      <div className="text-2xl font-black text-[#4A5D23] border-b-2 border-gray-100 pb-2 mb-8 tracking-widest">Agniveer [Name]</div>
                      
                      <div className="text-[10px] text-gray-400 mb-6">has successfully completed the</div>
                      <div className="bg-ios-secondary p-6 rounded-2xl border-2 border-dashed border-[#4A5D23]/20 mb-8">
                         <div className="text-xs font-black text-[#4A5D23]">Security & Protection Certification</div>
                      </div>
                      
                      <p className="text-[10px] text-gray-400 mb-12 leading-relaxed font-light">and is hereby recognized for demonstrated competence and skills.</p>
                      
                      <div className="flex justify-between items-end border-t border-gray-100 pt-8">
                         <div className="text-left">
                            <div className="text-[10px] font-black text-gray-800">Commandant</div>
                            <div className="text-[8px] font-bold text-gray-400 uppercase">VeerNXT Academy</div>
                         </div>
                         <div className="text-right">
                             <div className="text-[8px] font-bold text-gray-400 uppercase">Date: 4/25/2026</div>
                         </div>
                      </div>
                   </div>
               </div>

               <div className="text-center lg:text-left">
                   <h3 className="text-4xl font-black tracking-tighter mb-6 leading-tight">Earn And <br /> <span className="text-[#4A5D23]">Become Unstoppable.</span></h3>
                   <button className="bg-[#4A5D23] text-white px-10 py-5 rounded-2xl font-black text-xs tracking-widest flex items-center gap-3 shadow-xl hover:scale-[1.02] transition-transform">
                      Earn a Certification <ArrowRight className="w-4 h-4 ml-2" />
                   </button>
               </div>
            </div>
         </div>
      </section>

      {/* Veteran Sewa Kendra */}
      <section className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
               <div className="text-xs font-bold text-gray-400 tracking-[0.3em] font-mono mb-2">Veteran Sewa Kendra - Sena Saathi Support Hub</div>
               <h2 className="text-5xl font-black tracking-tighter leading-tight">For Every Soldier Who Served. For Every <br /><span className="text-ios-olive">Need Beyond Service.</span></h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               {[
                 { id: '01', title: 'Welfare & Scheme Navigator', subtitle: 'Find all benefits you deserve:', details: ['ECHS', 'CSD', 'Pension + disability + dependents', 'State welfare schemes', 'Ex-Servicemen quota assistance'], icon: Award },
                 { id: '02', title: 'Documentation & Legal Desk', subtitle: 'Legal/consumer rights help:', details: ['Service records correction', 'Pension/claim documentation', 'Family support guidance'], icon: FileText },
                 { id: '03', title: 'Outreach Wing', subtitle: 'Dedicated veteran support:', details: ['Last-contact tracing', 'Coordination with Zilla Sainik Boards'], icon: MapPin }
               ].map((card, idx) => (
                  <div key={idx} className="ios-card bg-ios-secondary p-10 border border-gray-100 group">
                      <div className="flex justify-between items-start mb-8 text-ios-olive">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                           <card.icon className="w-6 h-6" />
                        </div>
                        <span className="text-4xl font-black opacity-5">{card.id}</span>
                     </div>
                     <h3 className="text-sm font-black tracking-tight mb-2 leading-tight">{card.title}</h3>
                     <p className="text-[10px] text-gray-400 font-bold mb-6">{card.subtitle}</p>
                     <ul className="space-y-3">
                        {card.details.map((detail, i) => (
                           <li key={i} className="flex items-center gap-3 text-xs font-medium text-gray-600">
                              <CheckCircle2 className="w-4 h-4 text-ios-olive flex-shrink-0" />
                              {detail}
                           </li>
                        ))}
                     </ul>
                  </div>
               ))}
            </div>

            <div className="flex justify-center mt-16">
               <button className="bg-[#4A5D23] text-white px-10 py-5 rounded-2xl font-black text-xs tracking-widest flex items-center gap-2 uppercase shadow-xl">
                  Visit Sena Saathi Hub <ArrowRight className="w-4 h-4 ml-2" />
               </button>
            </div>
         </div>
      </section>

      {/* Corporate Alliance */}
      <section className="py-24 bg-ios-secondary">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
               <div className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em] font-mono mb-2">VeerConnect Corporate Alliance</div>
               <h2 className="text-5xl font-black tracking-tighter uppercase leading-tight">Where Discipline Meets <span className="text-ios-olive">Opportunity.</span></h2>
               <p className="text-gray-400 mt-6 max-w-2xl mx-auto">A matchmaking bridge between veteran talent and corporate employers.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
               {[
                 { id: '1', title: 'Curated Job Listings (Security, Ops, Logistics, Aviation)', icon: Search },
                 { id: '2', title: 'Veteran-Friendly Employer Directory', icon: Globe },
                 { id: '3', title: 'Resume Rewriting (Military → Corporate Language)', icon: FileText },
                 { id: '4', title: 'Interview Readiness Support', icon: Users },
                 { id: '5', title: 'Hiring Drives & Job Fairs', icon: Target }
               ].map((item, idx) => (
                  <div key={idx} className="ios-card bg-white p-8 text-center group flex flex-col items-center">
                     <div className="w-10 h-10 bg-ios-secondary rounded-full flex items-center justify-center text-ios-olive mb-6">
                        <span className="text-[10px] font-black">{item.id}</span>
                     </div>
                     <h4 className="text-[9px] font-black uppercase leading-tight mb-2">{item.title}</h4>
                  </div>
               ))}
            </div>

            <div className="mt-12 p-12 bg-[#4A5D23] rounded-[40px] text-center text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Briefcase className="w-48 h-48" />
               </div>
               <div className="text-[10px] font-bold text-white/50 tracking-[0.3em] mb-4 font-mono uppercase">Partner Promise:</div>
               <h3 className="text-4xl font-black tracking-tighter mb-8">"Hire a Soldier. Gain a Leader."</h3>
               <div className="grid md:grid-cols-4 gap-8">
                  {[
                    { label: 'Partner Companies', value: '300 +' },
                    { label: 'Jobs Posted', value: '5000 +' },
                    { label: 'Placement Rate', value: '85 %' },
                    { label: 'Avg Response Time', value: '24 H' }
                  ].map((stat, idx) => (
                     <div key={idx} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                        <div className="text-2xl font-black mb-1">{stat.value}</div>
                        <div className="text-[8px] font-bold text-white/50 tracking-widest uppercase">{stat.label}</div>
                     </div>
                  ))}
               </div>
            </div>

            <div className="flex justify-center mt-12">
               <button className="bg-[#4A5D23] text-white px-10 py-5 rounded-2xl font-black text-xs tracking-widest flex items-center gap-2 uppercase shadow-xl">
                  Explore Jobs <ArrowRight className="w-4 h-4 ml-2" />
               </button>
            </div>
         </div>
      </section>

      {/* Mentorship Network */}
      <section className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-6">
             <div className="text-center mb-16">
               <div className="text-xs font-bold text-gray-400 tracking-[0.3em] font-mono mb-2">Officer's Compass Mentorship Network</div>
               <h2 className="text-5xl font-black tracking-tighter leading-tight">Guidance From Those Who've Walked The <br /><span className="text-ios-olive">Path Before You.</span></h2>
            </div>

            <div className="grid md:grid-cols-2 gap-16">
               <div>
                  <div className="text-xs font-bold text-gray-400 tracking-widest mb-8 flex items-center gap-2">
                     <Target className="w-4 h-4 text-ios-olive" /> One-On-One And Group Mentorship From:
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                     {[
                       { title: 'Retired Officers', icon: Award },
                       { title: 'Senior NCOs', icon: Users },
                       { title: 'Corporate Leaders', icon: Briefcase },
                       { title: 'Veteran Entrepreneurs', icon: Zap }
                     ].map((item, idx) => (
                        <div key={idx} className="ios-card bg-ios-secondary p-8 text-center flex flex-col items-center">
                           <item.icon className="w-6 h-6 text-[#4A5D23] mb-4 opacity-30" />
                           <h4 className="text-[10px] font-black leading-tight">{item.title}</h4>
                        </div>
                     ))}
                  </div>
               </div>

               <div>
                  <div className="text-xs font-bold text-gray-400 tracking-widest mb-8 flex items-center gap-2">
                     <BookOpen className="w-4 h-4 text-ios-olive" /> Mentorship Covers:
                  </div>
                  <div className="space-y-4">
                     {[
                       { id: '1', title: 'Career Mapping' },
                       { id: '2', title: 'Exam Selection' },
                       { id: '3', title: 'Civilian Behaviour & Mindset' },
                       { id: '4', title: 'Psychological Resilience' },
                       { id: '5', title: 'Corporate Transition' },
                       { id: '6', title: 'Life Planning' }
                     ].map((item, idx) => (
                        <div key={idx} className="bg-ios-secondary p-4 rounded-xl flex items-center gap-4 group hover:bg-ios-olive transition-colors duration-300 cursor-pointer">
                           <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-[10px] font-black text-ios-olive">
                              {item.id}
                           </div>
                           <h4 className="text-[10px] font-black group-hover:text-white transition-colors">{item.title}</h4>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            <div className="flex justify-center mt-16">
               <button className="bg-[#4A5D23] text-white px-10 py-5 rounded-2xl font-black text-xs tracking-widest flex items-center gap-2 uppercase shadow-xl">
                  Book a Mentor Session <Clock className="w-4 h-4 ml-2" />
               </button>
            </div>
         </div>
      </section>

      {/* Operation Rakshak Force */}
      <section className="py-24 bg-ios-bg">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
               <div className="text-xs font-bold text-gray-400 tracking-[0.3em] font-mono mb-2">Operation Rakshak Force</div>
               <h2 className="text-5xl font-black tracking-tighter leading-tight">When The Nation Calls, <span className="text-[#4A5D23]">We Always Answer.</span></h2>
            </div>

            <div className="bg-white p-12 rounded-[40px] shadow-2xl border border-gray-100">
               <div className="flex flex-col md:flex-row gap-12">
                  <div className="flex-1">
                     <h3 className="text-sm font-black tracking-tight mb-4 text-ios-olive">Community Volunteer Force</h3>
                     <p className="text-xs text-gray-500 leading-relaxed mb-10">A dedicated volunteer force deployed for emergency response and humanitarian assistance across critical situations.</p>
                     
                     <div className="flex flex-wrap gap-4">
                        {[
                          { label: 'Flood Relief', icon: Globe },
                          { label: 'Earthquake', icon: Shield },
                          { label: 'Cyclone', icon: Zap },
                          { label: 'Fire Rescue', icon: Heart },
                          { label: 'Humanitarian Aid', icon: HelpingHand }
                        ].map((item, idx) => (
                           <div key={idx} className="bg-ios-secondary px-6 py-3 rounded-xl flex items-center gap-3">
                              <item.icon className="w-4 h-4 text-ios-olive" />
                              <span className="text-[9px] font-black uppercase">{item.label}</span>
                           </div>
                        ))}
                     </div>
                  </div>

                  <div className="flex-1">
                     <h3 className="text-sm font-black tracking-tight mb-8">Program Features</h3>
                     <div className="grid grid-cols-2 gap-8">
                        {[
                          { title: 'Rapid Response Training', desc: 'Comprehensive emergency training with certified instructors and simulation exercises.', icon: Zap },
                          { title: 'Digital Volunteer ID', desc: 'Official identification with QR verification for authorized emergency zone access.', icon: Award },
                          { title: 'Mdrf/Sdrf Partnerships', desc: 'Direct collaboration with National and State Disaster Response Forces.', icon: TrendingUp },
                          { title: 'Service Recognition', desc: 'Certificates and awards for volunteers contributing to relief efforts.', icon: Award }
                        ].map((f, idx) => (
                           <div key={idx} className="flex flex-col">
                              <f.icon className="w-6 h-6 text-[#4A5D23] mb-4" />
                              <h4 className="text-[10px] font-black uppercase mb-2 leading-tight">{f.title}</h4>
                              <p className="text-[9px] text-gray-400 leading-tight">{f.desc}</p>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>

               <div className="mt-12 p-8 bg-[#4A5D23] rounded-3xl text-center text-white">
                   <h3 className="text-2xl font-black uppercase mb-2">Join The Force</h3>
                   <p className="text-[10px] text-white/70 mb-8 uppercase tracking-widest">Be part of a national volunteer network ready to serve during emergencies. <br /> Complete training provided.</p>
                   <button className="bg-white text-[#4A5D23] px-10 py-5 rounded-xl font-black text-xs tracking-widest uppercase shadow-xl">
                      Join Rakshak Force <ArrowRight className="w-4 h-4 ml-2 text-[#4A5D23]" />
                   </button>
               </div>
            </div>
         </div>
      </section>

      {/* VeerGear Official Store */}
      <section className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
               <div className="text-xs font-bold text-gray-400 tracking-[0.3em] font-mono mb-2">VeerGear Official Store</div>
               <h2 className="text-5xl font-black tracking-tighter leading-tight">Wear Your Pride. <span className="text-[#4A5D23]">Live Your Identity.</span></h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
               {[
                 { title: 'Agniveer Alumni T-Shirts', desc: 'Premium cotton with custom insignia', img: '/hero/merchandise.png' },
                 { title: 'Battalion Hoodies', desc: 'Heavyweight with battalion designs', img: '/hero/merchandise.png' },
                 { title: 'Military Duffle Bags', desc: 'Rugged and water-resistant', img: '/hero/merchandise.png' },
                 { title: 'Caps & Badges', desc: 'Official military accessories', img: '/hero/merchandise.png' },
                 { title: 'Desk Flags & Posters', desc: 'Display your pride', img: '/hero/merchandise.png' },
                 { title: 'Tactical Notebooks', desc: 'Field-tested stationery', img: '/hero/merchandise.png' }
               ].map((product, idx) => (
                  <div key={idx} className="ios-card bg-ios-secondary p-4 flex flex-col group">
                     <div className="rounded-2xl overflow-hidden mb-6 aspect-square">
                         <img src={product.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={product.title} referrerPolicy="no-referrer" />
                     </div>
                     <h4 className="text-[10px] font-black uppercase mb-1">{product.title}</h4>
                     <p className="text-[8px] text-gray-400 mb-6 font-bold uppercase">{product.desc}</p>
                     <button className="mt-auto w-full bg-[#4A5D23] text-white py-3 rounded-xl text-[8px] font-black uppercase tracking-widest group-hover:bg-ios-olive transition-colors">View Product</button>
                  </div>
               ))}
            </div>

            <div className="mt-20 p-12 bg-ios-secondary rounded-[40px] text-center border-2 border-dashed border-gray-200">
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 leading-tight">Ready To Wear Your Pride?</h3>
                <p className="text-xs text-gray-400 mb-8 uppercase tracking-widest">Explore our premium collection of military-inspired gear and apparel. Each product is crafted with precision and built to last.</p>
                <button className="bg-[#4A5D23] text-white px-10 py-5 rounded-2xl font-black text-xs tracking-widest flex items-center gap-3 mx-auto uppercase shadow-xl">
                   Shop VeerGear Collection <ShoppingCart className="w-4 h-4 ml-2" />
                </button>
                <div className="mt-6 flex justify-center items-center gap-3 grayscale opacity-30">
                    <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
                    <span className="text-[8px] font-bold uppercase tracking-widest">Partnership With Olive Planet</span>
                </div>
            </div>
         </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-[#4A5D23] to-[#7A8D53] text-white">
         <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-tight">
               Join The Future Of <br /> Growth & Innovation
            </h2>
            <p className="text-white/60 mb-12 max-w-2xl mx-auto text-lg">Be part of the VEER-NXT community where learning, collaboration, and opportunity come together.</p>
            <button className="bg-white text-[#4A5D23] px-12 py-6 rounded-2xl font-black text-sm tracking-[0.2em] flex items-center gap-3 mx-auto shadow-2xl hover:scale-[1.05] transition-transform">
               Join VEER-NXT Community Today <ArrowRight className="w-5 h-5 ml-2" />
            </button>
         </div>
      </section>
    </div>
  );
};
