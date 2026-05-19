import { motion } from 'motion/react';
import {
  Target, Users, TrendingUp, Briefcase, ArrowRight,
  ChevronRight, ShieldCheck, CheckCircle2, MapPin, Phone, Mail,
  Award, Globe, Lock, Star
} from 'lucide-react';
import { Link } from 'react-router-dom';

// ─── HERO ────────────────────────────────────────────────────────────────────

const Hero = () => (
  <section className="relative h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img
        src="/hero/hero_image.png"
        className="w-full h-full object-cover"
        alt="Veterans"
        style={{ filter: 'brightness(0.35)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
    </div>

    <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl text-white"
      >
        <div className="flex items-center gap-2 mb-6">
          <span className="w-8 h-[2px] bg-ios-olive" />
          <span className="text-xs font-bold tracking-[0.2em] text-ios-olive uppercase">India's First Defence Reintegration Platform</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-[0.95]">
          Your Next<br />
          <span className="text-ios-olive">Mission</span><br />
          Starts Here.
        </h1>

        <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed font-light max-w-xl">
          Jobs, career guidance, financial clarity, and veteran mentorship — unified into one platform built for India's service veterans.
        </p>

        <div className="flex flex-wrap gap-4 mb-10">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-ios-olive" />
            <span className="text-sm font-medium text-gray-200">Government of India Approved</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-ios-olive" />
            <span className="text-sm font-medium text-gray-200">Veteran Led &amp; Veteran Driven</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="https://app.veernxt.in"
            className="ios-btn-primary ios-pill px-8 py-4 text-sm font-black tracking-widest uppercase flex items-center gap-2 group"
          >
            Open App
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#how-it-works"
            className="border border-white/30 text-white ios-pill px-8 py-4 text-sm font-bold tracking-wider hover:bg-white/10 transition-all"
          >
            How It Works
          </a>
          <Link
            to="/home-v1"
            className="bg-white/10 hover:bg-white/20 text-white border border-white/20 ios-pill px-8 py-4 text-sm font-bold tracking-wider transition-all"
          >
            Legacy Site (V1)
          </Link>
        </div>

        {/* Stat bar */}
        <div className="flex gap-10 mt-14 pt-8 border-t border-white/10">
          <div>
            <p className="text-3xl font-black text-white">1,250+</p>
            <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mt-1">Veterans Helped</p>
          </div>
          <div>
            <p className="text-3xl font-black text-white">350+</p>
            <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mt-1">Successful Transitions</p>
          </div>
          <div>
            <p className="text-3xl font-black text-white">10K+</p>
            <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mt-1">Community Members</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

// ─── PROBLEM ─────────────────────────────────────────────────────────────────

const painCards = [
  {
    icon: Target,
    title: 'Career Uncertainty',
    desc: 'No civilian resume. No mapped career path. Years of military expertise that the corporate world cannot read.'
  },
  {
    icon: TrendingUp,
    title: 'Financial Confusion',
    desc: 'Sewa Nidhi sitting idle. No guidance on investments, insurance, or how to build long-term financial stability.'
  },
  {
    icon: Users,
    title: 'No Civilian Network',
    desc: 'Brotherhood is everything in service. But outside the uniform, there is no professional network to lean on.'
  }
];

const Problem = () => (
  <section className="py-24 bg-[#0d0d0d] text-white">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <div className="flex items-center gap-2 text-xs font-bold text-ios-olive tracking-widest mb-4 uppercase">
          The Reality <span className="w-8 h-[2px] bg-ios-olive" />
        </div>
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter max-w-2xl leading-tight">
          Leaving Service Should Not Mean<br />
          <span className="text-ios-olive">Starting From Zero.</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {painCards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-ios-olive/30 transition-all group"
          >
            <div className="w-12 h-12 rounded-2xl bg-ios-olive/10 border border-ios-olive/20 flex items-center justify-center mb-6 group-hover:bg-ios-olive/20 transition-colors">
              <card.icon className="w-6 h-6 text-ios-olive" />
            </div>
            <h3 className="text-xl font-bold tracking-tight mb-3">{card.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed font-light">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ─── ECOSYSTEM ───────────────────────────────────────────────────────────────

const ecosystemBlocks = [
  {
    icon: Target,
    label: 'A',
    title: 'Career Navigation',
    desc: 'AI-powered career roadmaps built for military experience.',
    bullets: ['500+ Govt exam pathways', 'Resume & profile building', 'VR interview preparation']
  },
  {
    icon: Briefcase,
    label: 'B',
    title: 'Opportunity Discovery',
    desc: 'Curated roles matched to your military background.',
    bullets: ['Veteran-specific job board', 'Skill pathway mapping', 'Corporate role matching']
  },
  {
    icon: TrendingUp,
    label: 'C',
    title: 'Financial Readiness',
    desc: 'Maximise your Sewa Nidhi and plan for civilian life.',
    bullets: ['Investment & insurance guidance', 'Loan & mutual fund access', 'Entrepreneurship support']
  },
  {
    icon: Users,
    label: 'D',
    title: 'Veteran Network',
    desc: 'Brotherhood that extends beyond the uniform.',
    bullets: ['10,000+ active members', 'Expert mentorship access', 'Industry networking events']
  }
];

const Ecosystem = () => (
  <section className="py-24 bg-ios-secondary">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="flex items-center gap-2 text-xs font-bold text-ios-olive tracking-widest mb-4 uppercase">
          The Platform <span className="w-8 h-[2px] bg-ios-olive" />
        </div>
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
          Everything Needed For<br />
          <span className="text-ios-olive">Veteran Transition</span>
        </h2>
        <p className="text-gray-500 mt-4 text-lg font-light max-w-xl">
          Four pillars. One platform. No more navigating civilian life alone.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {ecosystemBlocks.map((block, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="ios-card bg-white p-8 flex gap-6 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/10 transition-all duration-300 group"
          >
            <div className="flex-shrink-0">
              <div className="w-14 h-14 rounded-2xl bg-ios-olive flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-ios-olive/20">
                <block.icon className="w-7 h-7 text-white" />
              </div>
            </div>
            <div>
              <span className="text-[10px] font-black text-ios-olive tracking-[0.2em] uppercase">{block.label}</span>
              <h3 className="text-xl font-bold tracking-tight mt-1 mb-2">{block.title}</h3>
              <p className="text-gray-500 text-sm font-light mb-4">{block.desc}</p>
              <ul className="space-y-1.5">
                {block.bullets.map((b, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                    <ChevronRight className="w-3 h-3 text-ios-olive flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ─── HOW IT WORKS ─────────────────────────────────────────────────────────────

const steps = [
  {
    num: '01',
    title: 'Create Your Profile',
    desc: 'Tell us your branch, rank, education, and goals. Takes 30 seconds. Our AI does the rest.'
  },
  {
    num: '02',
    title: 'Get AI Recommendations',
    desc: 'Receive a personalised career roadmap, exam shortlist, and financial action plan built for your background.'
  },
  {
    num: '03',
    title: 'Start Your Transition',
    desc: 'Daily tasks, practice tests, mentorship sessions, and job applications — your second mission begins.'
  }
];

const HowItWorks = () => (
  <section id="how-it-works" className="py-24 bg-[#111] text-white">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="flex items-center gap-2 text-xs font-bold text-ios-olive tracking-widest mb-4 uppercase">
          Mission Workflow <span className="w-8 h-[2px] bg-ios-olive" />
        </div>
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
          How VeerNXT Works
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="relative"
          >
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-8 left-full w-full h-[2px] bg-gradient-to-r from-ios-olive to-transparent z-0 -translate-y-1/2" style={{ width: 'calc(100% - 2rem)', left: 'calc(100% + 1rem)' }} />
            )}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-ios-olive/30 transition-all group h-full">
              <div className="text-5xl font-black text-ios-olive/20 mb-4 tracking-tighter group-hover:text-ios-olive/40 transition-colors">
                {step.num}
              </div>
              <h3 className="text-xl font-bold tracking-tight mb-3 text-ios-olive">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-12 text-center"
      >
        <a
          href="https://app.veernxt.in"
          className="ios-btn-primary ios-pill px-10 py-4 text-sm font-black tracking-widest uppercase inline-flex items-center gap-2 group"
        >
          Begin Your Profile
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>
    </div>
  </section>
);

// ─── TRUST ────────────────────────────────────────────────────────────────────

const trustPillars = [
  {
    icon: Award,
    title: 'Veteran-First Platform',
    desc: 'Built by ex-servicemen for ex-servicemen. Every feature is designed with military context in mind.'
  },
  {
    icon: Lock,
    title: 'Secure Data Handling',
    desc: 'Your service records and personal data are encrypted and handled with military-grade security protocols.'
  },
  {
    icon: Star,
    title: 'Transition Proven',
    desc: '350+ veterans have successfully moved into corporate, government, and entrepreneurial roles through VeerNXT.'
  },
  {
    icon: Globe,
    title: "India's First Defence EdTech",
    desc: 'The only platform purpose-built for Agniveers and ex-servicemen transitioning to civilian careers.'
  }
];

const Trust = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="flex items-center justify-center gap-2 text-xs font-bold text-ios-olive tracking-widest mb-4 uppercase">
          <span className="w-8 h-[2px] bg-ios-olive" /> Why Trust Us <span className="w-8 h-[2px] bg-ios-olive" />
        </div>
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
          Built On Service.<br />
          <span className="text-ios-olive">Backed By Trust.</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {trustPillars.map((pillar, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center p-8 rounded-3xl bg-ios-secondary hover:bg-ios-olive/5 border border-transparent hover:border-ios-olive/20 transition-all group"
          >
            <div className="w-16 h-16 rounded-2xl bg-ios-olive flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-ios-olive/20">
              <pillar.icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-base font-bold tracking-tight mb-3">{pillar.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed font-light">{pillar.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ─── FINAL CTA ───────────────────────────────────────────────────────────────

const FinalCTA = () => (
  <section className="relative py-32 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img
        src="/hero/about.png"
        className="w-full h-full object-cover"
        alt=""
        style={{ filter: 'brightness(0.2)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/80 to-ios-olive/30" />
    </div>

    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="flex items-center justify-center gap-2 text-xs font-bold text-ios-olive tracking-widest mb-6 uppercase">
          <span className="w-8 h-[2px] bg-ios-olive" /> Your Second Mission Awaits <span className="w-8 h-[2px] bg-ios-olive" />
        </div>
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-tight">
          Start Your<br />
          <span className="text-ios-olive">Next Mission.</span>
        </h2>
        <p className="text-gray-300 text-lg mb-10 font-light max-w-xl mx-auto">
          Join 10,000+ veterans who have already taken their first step toward a future they deserve.
        </p>
        <a
          href="https://app.veernxt.in"
          className="ios-btn-primary ios-pill px-12 py-5 text-base font-black tracking-widest uppercase inline-flex items-center gap-3 group shadow-2xl shadow-ios-olive/30"
        >
          Open VeerNXT App
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
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
        <p className="text-xs text-gray-600 uppercase tracking-widest">
          Agniveer · Ex-Servicemen · CRPF · BSF · CISF
        </p>
      </div>
    </div>
  </footer>
);

// ─── LANDING PAGE ─────────────────────────────────────────────────────────────

export const LandingPage = () => (
  <>
    <Hero />
    <Problem />
    <Ecosystem />
    <HowItWorks />
    <Trust />
    <FinalCTA />
    <LandingFooter />
  </>
);
