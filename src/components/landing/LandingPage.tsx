import { motion } from 'motion/react';
import {
  Target, Users, TrendingUp, Briefcase, ArrowRight,
  ChevronRight, ShieldCheck, CheckCircle2, MapPin, Phone, Mail,
  Award, Globe, Lock, Star, Apple, PlaySquare
} from 'lucide-react';
import { Link } from 'react-router-dom';

// ─── NAVBAR ──────────────────────────────────────────────────────────────────

const NavBar = () => (
  <nav className="w-full bg-[#0a0a0a] py-6 flex justify-center items-center relative border-b border-white/5 z-50">
    <img src="/logo.png" alt="VeerNXT" className="h-[80px] md:h-[120px] max-w-[90vw] object-contain" />
  </nav>
);

// ─── HERO ────────────────────────────────────────────────────────────────────

const Hero = () => (
  <section className="relative min-h-[calc(100vh-168px)] flex items-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        src="/hero_video.mp4"
        className="w-full h-full object-cover"
      />
    </div>

    <div className="max-w-7xl mx-auto px-6 pt-24 md:pt-32 pb-12 relative z-10 w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl text-white"
      >
        <div className="flex items-center gap-2 mb-6">
          <span className="w-8 h-[2px] bg-ios-olive" />
          <span className="text-xs font-bold tracking-[0.2em] text-white uppercase">Professional transition services for Military Personnel.</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.95] drop-shadow-[0_8px_16px_rgba(0,0,0,0.9)]">
          Your Next<br />
          <span className="text-white">Mission</span><br />
          Starts Here
        </h1>

        <div className="flex flex-wrap gap-4 mb-10">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-ios-olive" />
            <span className="text-sm font-medium text-gray-200 drop-shadow-md">Government of India Aligned</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-ios-olive" />
            <span className="text-sm font-medium text-gray-200 drop-shadow-md">Veteran Led &amp; Veteran Driven</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="http://localhost:8080"
            className="ios-btn-primary ios-pill px-8 py-4 text-sm font-black tracking-widest uppercase flex items-center gap-2 group shadow-2xl shadow-ios-olive/30"
          >
            Open App
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>


      </motion.div>
    </div>
  </section>
);

// ─── WHAT IS VEERNXT? ────────────────────────────────────────────────────────
const WhatIsVeerNXT = () => (
  <section className="py-24 bg-[#0d0d0d] text-white">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <div className="flex items-center justify-center gap-2 text-xs font-bold text-ios-olive tracking-widest mb-4 uppercase">
          <span className="w-8 h-[2px] bg-ios-olive" /> About The Platform <span className="w-8 h-[2px] bg-ios-olive" />
        </div>
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8">
          What is <span className="text-ios-olive">VeerNXT?</span>
        </h2>
        <p className="text-gray-300 text-lg md:text-2xl leading-relaxed font-light max-w-4xl mx-auto">
          VeerNXT operates as a specialized career transition and wealth management ecosystem designed exclusively for short-term military personnel. The platform delivers dual-spectrum support, ensuring both professional re-alignment in the civilian workforce and the strategic preservation and growth of accumulated financial assets.
        </p>

        <div className="inline-flex flex-wrap justify-center gap-8 md:gap-16 mt-16 p-8 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl">
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-black text-white">1,250+</p>
            <p className="text-xs md:text-sm text-ios-olive font-bold uppercase tracking-widest mt-2">Veterans Helped</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-black text-white">350+</p>
            <p className="text-xs md:text-sm text-ios-olive font-bold uppercase tracking-widest mt-2">Successful Transitions</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-black text-white">10K+</p>
            <p className="text-xs md:text-sm text-ios-olive font-bold uppercase tracking-widest mt-2">Community Members</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

// ─── PRIMARY SERVICE OFFERINGS ───────────────────────────────────────────────

const serviceOfferings = [
  {
    image: '/homepage/F3A.png',
    title: '01. Career Transition & Examination Preparation',
    objective: 'To facilitate seamless entry into high-value civilian and government roles.',
    bullets: [
      {
        title: 'Eligibility-Based Mapping',
        desc: 'Algorithmic identification of corporate and civil service roles aligned with specific military tenures and experience profiles.'
      },
      {
        title: 'Targeted Preparatory Modules',
        desc: 'High-yield technical study materials, curriculum-mapped modules, and mock examinations for competitive selection processes.'
      },
      {
        title: 'Strategic Guidance',
        desc: 'Direct mentorship from industry professionals and veteran executives to navigate civilian corporate hiring pipelines.'
      }
    ]
  },
  {
    image: '/homepage/F3_B.png',
    title: '02. Financial Consolidation & Wealth Growth',
    objective: 'To maximize the long-term utility of the candidate’s separation corpus.',
    bullets: [
      {
        title: 'Corpus Consolidation',
        desc: 'Comprehensive aggregation of separation funds, gratuities, and savings into a single, structured management framework.'
      },
      {
        title: 'Strategic Investment Vehicles',
        desc: 'Access to curated, risk-mitigated investment portfolios designed to generate sustainable wealth post-separation.'
      },
      {
        title: 'Capital Preservation',
        desc: 'Advisory services focused on asset allocation, tax optimization, and structured financial planning for long-term stability.'
      }
    ]
  }
];

const PrimaryServiceOfferings = () => (
  <section className="py-24 bg-ios-secondary">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="flex items-center gap-2 text-xs font-bold text-ios-olive tracking-widest mb-4 uppercase">
          Our Services <span className="w-8 h-[2px] bg-ios-olive" />
        </div>
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
          Primary <span className="text-ios-olive">Service Offerings</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {serviceOfferings.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="ios-card bg-white p-8 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/10 transition-all duration-300 group flex flex-col"
          >
            {service.image ? (
              <div className="w-full aspect-square rounded-xl overflow-hidden mb-6 shadow-lg relative">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            ) : (
              <div className="w-14 h-14 rounded-2xl bg-ios-olive flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-ios-olive/20">
                <service.icon className="w-7 h-7 text-white" />
              </div>
            )}
            <h3 className="text-2xl font-bold tracking-tight mb-2 text-ios-olive">{service.title}</h3>
            <p className="text-gray-600 font-semibold mb-6">Objective: {service.objective}</p>
            <ul className="space-y-4">
              {service.bullets.map((b, j) => (
                <li key={j} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-ios-olive flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-800 text-sm block">{b.title}</strong>
                    <span className="text-gray-500 text-sm font-medium leading-relaxed">{b.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <Link
          to="/register"
          className="ios-btn-primary ios-pill px-10 py-5 text-sm font-black tracking-widest uppercase inline-flex items-center gap-3 group shadow-2xl shadow-ios-olive/30 hover:scale-105 transition-transform"
        >
          Get Started <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  </section>
);

// ─── ONBOARDING PROCESS ──────────────────────────────────────────────────────

const onboardingSteps = [
  {
    num: 'Step 01',
    title: 'Profile Authentication & Verification',
    desc: 'Establish a secure account by verifying service credentials, regiment details, and tenure duration to unlock eligible service tracks.',
    image: '/homepage/F4_A.png'
  },
  {
    num: 'Step 02',
    title: 'Dual-Track Diagnostic Assessment',
    desc: 'Complete the integrated career eligibility mapping and input financial corpus optimization objectives to generate a personalized transition blueprint.',
    image: '/homepage/F4B.png'
  },
  {
    num: 'Step 03',
    title: 'Resource Engagement',
    desc: 'Activate targeted examination preparation modules or engage with curated investment vehicles based on the diagnostic output.',
    image: '/homepage/F4C.png'
  },
  {
    num: 'Step 04',
    title: 'Continuous Monitoring & Execution',
    desc: 'Monitor job application statuses, track academic preparation metrics, and review investment portfolio performance via the centralized interface.',
    image: '/homepage/F4D.png'
  }
];

const OnboardingProcess = () => (
  <section id="how-it-works" className="py-24 bg-[#111] text-white">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="flex items-center gap-2 text-xs font-bold text-ios-olive tracking-widest mb-4 uppercase">
          ONBOARDING <span className="w-8 h-[2px] bg-ios-olive" />
        </div>
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
          Onboarding & Service<br />
          <span className="text-ios-olive">Utilization Process</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-4 gap-6">
        {onboardingSteps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="relative"
          >
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 hover:border-ios-olive/30 transition-all group h-full flex flex-col">
              {step.image && (
                <div className="w-full h-40 rounded-2xl overflow-hidden mb-6 shadow-2xl relative">
                  <img src={step.image} alt={step.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              )}
              <div className="text-2xl font-black text-ios-olive/40 mb-4 tracking-tighter group-hover:text-ios-olive transition-colors">
                {step.num}
              </div>
              <h3 className="text-lg font-bold tracking-tight mb-3 text-white group-hover:text-ios-olive transition-colors">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-medium flex-grow">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <Link
          to="/register"
          className="ios-btn-primary ios-pill px-10 py-5 text-sm font-black tracking-widest uppercase inline-flex items-center gap-3 group shadow-2xl shadow-ios-olive/30 hover:scale-105 transition-transform"
        >
          Get Started <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  </section>
);

// ─── REGULATORY COMPLIANCE ────────────────────────────────────────────────────

const validations = [
  {
    image: '/homepage/F5A.png',
    title: 'Government-Accredited Career Track',
    subtitle: '100% Mapped',
    desc: 'All examination preparation modules and career pathways are mapped directly against official government-accredited curricula and civil service recruitment frameworks.'
  },
  {
    image: '/homepage/F5B.png',
    title: 'Government-Regulated Financial Security',
    subtitle: 'SEBI-Compliant Ecosystem',
    desc: 'Wealth management, corpus consolidation, and investment advisory services are executed exclusively through government-regulated financial entities.'
  },
  {
    image: '/homepage/F5C.png',
    title: 'Impact Driven',
    subtitle: 'Built for Agniveers.',
    desc: 'Retired personnel are currently onboarded and are utilizing the platform to execute their career and financial milestones.'
  }
];

const RegulatoryCompliance = () => (
  <section className="py-24 bg-ios-secondary">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
          Regulatory Compliance &<br />
          <span className="text-ios-olive">Institutional Validation</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {validations.map((val, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="ios-card bg-white p-8 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/10 transition-all duration-300 group flex flex-col"
          >
            {val.image ? (
              <div className="w-full aspect-square rounded-xl overflow-hidden mb-6 shadow-lg relative">
                <img src={val.image} alt={val.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            ) : (
              <div className="w-14 h-14 rounded-2xl bg-ios-olive flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-ios-olive/20">
                <val.icon className="w-7 h-7 text-white" />
              </div>
            )}
            <h3 className="text-xl font-bold tracking-tight mb-1">{val.title}</h3>
            <p className="text-sm font-bold text-ios-olive mb-4">{val.subtitle}</p>
            <p className="text-gray-500 text-sm leading-relaxed font-medium flex-grow">{val.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <Link
          to="/register"
          className="ios-btn-primary ios-pill px-10 py-5 text-sm font-black tracking-widest uppercase inline-flex items-center gap-3 group shadow-2xl shadow-ios-olive/30 hover:scale-105 transition-transform"
        >
          Get Started <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  </section>
);

// ─── CTA SECTION ─────────────────────────────────────────────────────────────

const CTASection = () => (
  <section className="relative py-32 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img
        src="/hero/about.png"
        className="w-full h-full object-cover"
        alt=""
        style={{ filter: 'brightness(0.15)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/80 to-ios-olive/30" />
    </div>

    <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-tight">
            Secure Your <span className="text-ios-olive">Future</span>
          </h2>
          <p className="text-gray-300 text-lg font-light max-w-4xl mx-auto leading-relaxed">
            The complete suite of career optimization tools, eligibility matrices, and financial consolidation frameworks is hosted securely within the VeerNXT mobile application. Desktop access is restricted for security and real-time portfolio management tracking.
          </p>
        </div>
        
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-12 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 backdrop-blur-md">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-6">Immediate Next Steps</h3>
            <ol className="space-y-4 text-base text-gray-300 font-light list-decimal pl-5">
              <li>Download the verified VeerNXT application.</li>
              <li>Complete your secure military identity verification.</li>
              <li>Initialize your dual-track career and corpus growth strategy immediately.</li>
            </ol>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <div
                className="bg-white/5 text-white/60 border border-white/10 ios-pill px-6 py-3 text-sm font-bold tracking-widest uppercase inline-flex items-center gap-3 select-none"
              >
                Coming soon to <Apple className="w-5 h-5" />
              </div>
              <div
                className="bg-white/5 text-white/60 border border-white/10 ios-pill px-6 py-3 text-sm font-bold tracking-widest uppercase inline-flex items-center gap-3 select-none"
              >
                Coming soon to <PlaySquare className="w-5 h-5" />
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/10 flex justify-center w-full">
              <Link
                to="/register"
                className="ios-btn-primary ios-pill px-10 py-5 text-sm font-black tracking-widest uppercase inline-flex items-center gap-3 group shadow-2xl shadow-ios-olive/30 w-full justify-center md:w-auto hover:scale-105 transition-transform"
              >
                Get Started <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          
          <div className="flex flex-col items-center justify-center md:border-l md:border-white/10 md:pl-12 w-full mt-12 md:mt-0">
            <img src="/homepage/F6_Phone.png" alt="VeerNXT App Preview" className="h-auto md:h-[768px] max-h-[60vh] md:max-h-none w-full max-w-[280px] md:max-w-none object-contain drop-shadow-2xl hover:scale-[1.02] transition-transform mx-auto" />
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

// ─── FOOTER ──────────────────────────────────────────────────────────────────

const LandingFooter = () => (
  <footer className="bg-[#0a0a0a] text-white pt-16 pb-8 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="VeerNXT" className="w-8 h-8 object-contain" />
            <span className="text-xl font-black tracking-tight">VeerNXT</span>
          </div>
          <p className="text-gray-400 text-sm font-light leading-relaxed max-w-xs">
            India's first Defence Reintegration platform — guiding Agniveers and ex-servicemen toward careers, skills, and a future they deserve.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6">Contact</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-ios-olive mt-0.5 flex-shrink-0" />
              <a href="mailto:support@veernxt.in" className="hover:text-ios-olive transition-colors">support@veernxt.in</a>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-ios-olive mt-0.5 flex-shrink-0" />
              <a href="tel:+917889530025" className="hover:text-ios-olive transition-colors">+91-7889530025</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-ios-olive mt-0.5 flex-shrink-0" />
              <span>225, 3rd C Cross Rd, Block 2, 3rd Stage, Basaveshwar Nagar, Bengaluru, Karnataka 560079</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6">Legal</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/privacy" className="text-gray-400 hover:text-ios-olive transition-colors">Privacy Policy</Link></li>
            <li><Link to="/support" className="text-gray-400 hover:text-ios-olive transition-colors">Support</Link></li>
            <li><Link to="/legal" className="text-gray-400 hover:text-ios-olive transition-colors">Legal / Terms</Link></li>
          </ul>
        </div>
      </div>

      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-gray-500">
          © 2026 VeerNXT. VETERAN WORKS PRIVATE LIMITED. All Rights Reserved. Built With Discipline.
        </p>
        <div className="text-xs font-bold tracking-widest text-white/40 uppercase mb-4 md:mb-0">
          BUILT BY QUANTUM CLIMB
        </div>
      </div>
    </div>
  </footer>
);

// ─── LANDING PAGE ─────────────────────────────────────────────────────────────

export const LandingPage = () => (
  <div className="bg-[#0a0a0a]">
    <NavBar />
    <Hero />
    <WhatIsVeerNXT />
    <PrimaryServiceOfferings />
    <OnboardingProcess />
    <RegulatoryCompliance />
    <CTASection />
    <LandingFooter />
  </div>
);
