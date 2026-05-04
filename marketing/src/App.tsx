import { 
  ChevronRight, 
  Target, 
  Users, 
  Briefcase, 
  TrendingUp, 
  ArrowRight,
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Youtube,
  LogIn,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Monitor,
  Calendar,
  Search,
  Check,
  ChevronDown,
  Languages
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { CareerGuidance } from './components/CareerGuidance';
import { FinancialGuidance } from './components/FinancialGuidance';
import { CommunitySupport } from './components/CommunitySupport';
import { AboutUs } from './components/AboutUs';
import { ContactUs } from './components/ContactUs';
import { StudentLogin } from './components/StudentLogin';
import { Profile } from './components/Profile';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const location = useLocation();

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिन्दी (Hindi)' },
    { code: 'ta', name: 'தமிழ் (Tamil)' },
    { code: 'bn', name: 'বাংলা (Bengali)' },
    { code: 'mr', name: 'मराठी (Marathi)' },
    { code: 'ml', name: 'മലയാളം (Malayalam)' },
    { code: 'te', name: 'తెలుగు (Telugu)' },
    { code: 'gu', name: 'ગુજરાતી (Gujarati)' },
  ];

  const currentLang = languages.find(l => l.code === i18n.language) || languages[0];

  useEffect(() => {
    setIsServicesOpen(false);
    setIsLangOpen(false);
  }, [location]);

  return (
    <nav className="glass-header border-b border-gray-100/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-ios-olive rounded-lg flex items-center justify-center text-white font-bold">V</div>
          <span className="text-xl font-bold tracking-tight">VeerNXT</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/" className="hover:text-ios-olive transition-colors">{t('nav.home')}</Link>
          
          <div 
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button 
              className={`flex items-center gap-1 hover:text-ios-olive transition-colors outline-none h-16 ${isServicesOpen ? 'text-ios-olive' : ''}`}
            >
              {t('nav.services')} <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <AnimatePresence>
              {isServicesOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-0 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden py-2"
                >
                  <Link 
                    to="/services/career-guidance" 
                    className="flex items-center gap-3 px-4 py-3 hover:bg-ios-secondary transition-colors text-gray-700 hover:text-ios-olive"
                  >
                    <div className="w-8 h-8 rounded-lg bg-ios-secondary flex items-center justify-center text-ios-olive line-height-0">
                      <Target className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold leading-none">{t('nav.careerGuidance')}</p>
                      <p className="text-[10px] text-gray-400 mt-1">Transition Support</p>
                    </div>
                  </Link>

                  <Link 
                    to="/services/financial-guidance" 
                    className="flex items-center gap-3 px-4 py-3 hover:bg-ios-secondary transition-colors text-gray-700 hover:text-ios-olive"
                  >
                    <div className="w-8 h-8 rounded-lg bg-ios-secondary flex items-center justify-center text-ios-olive line-height-0">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold leading-none">{t('nav.financialGuidance')}</p>
                      <p className="text-[10px] text-gray-400 mt-1">Sewa Nidhi & Wealth</p>
                    </div>
                  </Link>

                  <Link 
                    to="/services/community-support" 
                    className="flex items-center gap-3 px-4 py-3 hover:bg-ios-secondary transition-colors text-gray-700 hover:text-ios-olive"
                  >
                    <div className="w-8 h-8 rounded-lg bg-ios-secondary flex items-center justify-center text-ios-olive line-height-0">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold leading-none">{t('nav.communitySupport')}</p>
                      <p className="text-[10px] text-gray-400 mt-1">Join the Community</p>
                    </div>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/about-us" className="hover:text-ios-olive transition-colors">{t('nav.about')}</Link>
          <Link to="/contact-us" className="hover:text-ios-olive transition-colors">{t('nav.contact')}</Link>
        </div>

        <div className="flex items-center gap-4">
          <div 
            className="relative"
            onMouseEnter={() => setIsLangOpen(true)}
            onMouseLeave={() => setIsLangOpen(false)}
          >
            <button className={`text-sm font-medium hover:text-ios-olive transition-colors flex items-center gap-1 h-16 ${isLangOpen ? 'text-ios-olive' : ''}`}>
              <Languages className="w-4 h-4" />
              <span className="hidden sm:inline uppercase">{currentLang.code}</span>
              <ChevronDown className={`w-3 h-3 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isLangOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full right-0 mt-0 w-48 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden py-2"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        i18n.changeLanguage(lang.code);
                        setIsLangOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-ios-secondary transition-colors text-left group ${i18n.language === lang.code ? 'text-ios-olive bg-ios-secondary' : 'text-gray-700'}`}
                    >
                      <span className={`text-xs font-bold tracking-tight ${i18n.language === lang.code ? 'text-ios-olive' : 'text-gray-600'}`}>{lang.name}</span>
                      {i18n.language === lang.code && <Check className="w-3 h-3 text-ios-olive ml-auto" />}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a 
            href="http://localhost:5173" 
            className="text-sm font-bold bg-ios-olive text-white px-5 py-2 rounded-full hover:bg-opacity-90 transition-all flex items-center gap-2"
          >
            <LogIn className="w-4 h-4" />
            GO TO APP
          </a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="relative h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero/hero_image.png" 
          className="w-full h-full object-cover filter brightness-50"
          alt="Soldiers silhouette"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl text-white"
        >
          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-4 leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-gray-200 text-lg mb-8 leading-relaxed font-light">
            {t('hero.subtitle')}
          </p>
          
          <div className="flex flex-col gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-1 rounded-full"><CheckCircle2 className="w-5 h-5 text-ios-olive" /></div>
              <span className="text-sm font-medium">{t('hero.govApproved')}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-1 rounded-full"><ShieldCheck className="w-5 h-5 text-ios-olive" /></div>
              <span className="text-sm font-medium">{t('hero.veteranLed')}</span>
            </div>
          </div>
          
          <button className="ios-btn-primary px-8 py-4 ios-pill flex items-center gap-2 group">
            {t('hero.cta')}
            <Target className="w-5 h-5 transition-transform group-hover:rotate-12" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const WhyVeerNXT = () => {
  const { t } = useTranslation();
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-square rounded-[40px] overflow-hidden shadow-2xl">
            <img 
              src="/hero/about.png" 
              alt="Military Professionals"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-ios-olive p-8 rounded-3xl text-white shadow-xl">
            <p className="text-4xl font-bold tracking-tighter">Success</p>
            <p className="text-sm font-medium opacity-80">Built On Discipline</p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-gray-800 underline decoration-ios-olive/30 underline-offset-8">{t('whyVeerNXT.title')}</h2>
            <p className="text-gray-500 leading-relaxed font-light">
              {t('whyVeerNXT.desc')}
            </p>
            <p className="text-gray-800 font-semibold">
              {t('whyVeerNXT.trusted')}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 pt-4">
            <div className="flex items-center gap-4">
              <div className="bg-ios-secondary p-4 rounded-2xl">
                <Users className="w-6 h-6 text-ios-olive" />
              </div>
              <div>
                <p className="text-2xl font-bold">1250 +</p>
                <p className="text-xs text-gray-500 font-medium tracking-wider uppercase">{t('whyVeerNXT.statsHelp')}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-ios-secondary p-4 rounded-2xl">
                <TrendingUp className="w-6 h-6 text-ios-olive" />
              </div>
              <div>
                <p className="text-2xl font-bold">350 +</p>
                <p className="text-xs text-gray-500 font-medium tracking-wider uppercase">{t('whyVeerNXT.statsTransition')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Offerings = () => {
  const { t } = useTranslation();
  const cards = [
    {
      title: t('offerings.career.title'),
      desc: t('offerings.career.desc'),
      icon: Briefcase,
      img: "/hero/career_mapping.png",
      btn: t('offerings.career.btn'),
      link: "/services/career-guidance"
    },
    {
      title: t('offerings.financial.title'),
      desc: t('offerings.financial.desc'),
      icon: TrendingUp,
      img: "/hero/financial_guidance.png",
      btn: t('offerings.financial.btn'),
      link: "/services/financial-guidance"
    },
    {
      title: t('offerings.community.title'),
      desc: t('offerings.community.desc'),
      icon: Users,
      img: "/hero/community_support.png",
      btn: t('offerings.community.btn'),
      link: "/services/community-support"
    }
  ];

  return (
    <section className="py-24 bg-ios-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center gap-2 text-xs font-bold text-ios-olive tracking-widest mb-2">
            {t('offerings.badge')} <span className="w-8 h-[2px] bg-ios-olive"></span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight">{t('offerings.title')}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div key={idx} className="ios-card bg-white overflow-hidden flex flex-col group hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-black/5">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={card.img} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  alt={card.title}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white border border-white/20">
                  <card.icon className="w-5 h-5" />
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold tracking-tight mb-4">{card.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light mb-8">{card.desc}</p>
                <Link to={card.link} className="ios-btn-primary ios-pill px-8 py-4 text-xs font-black uppercase tracking-widest w-full mt-auto flex items-center justify-center group/btn">
                  {card.btn}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Workflow = () => {
  const { t } = useTranslation();
  const steps = t('workflow.steps', { returnObjects: true }) as Array<{ title: string, desc: string }>;

  return (
    <section className="py-24 bg-[#111] text-white relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full mb-16">
        <div className="flex items-center gap-2 text-xs font-bold text-ios-olive tracking-widest mb-2">
          {t('workflow.badge')} <span className="w-8 h-[2px] bg-ios-olive"></span>
        </div>
        <h2 className="text-4xl font-bold tracking-tight">{t('workflow.title')}</h2>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 w-full space-y-12">
        {steps.map((step, idx) => (
          <div key={idx} className="flex gap-8 items-start group">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-ios-olive flex items-center justify-center font-bold text-lg ring-8 ring-ios-olive/10">
                {idx + 1}
              </div>
              {idx !== steps.length - 1 && (
                <div className="w-[2px] h-24 bg-gradient-to-b from-ios-olive to-transparent mt-2"></div>
              )}
            </div>
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 flex-1 hover:bg-white/10 transition-colors">
              <h3 className="text-xl font-bold tracking-tight mb-2 text-ios-olive">{step.title}</h3>
              <p className="text-gray-400 font-light text-sm leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-ios-bg pt-20 pb-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-ios-olive rounded-lg flex items-center justify-center text-white font-bold">V</div>
              <span className="text-xl font-bold tracking-tight">VeerNXT</span>
            </div>
            <p className="text-sm text-gray-400 font-light leading-relaxed">
              {t('footer.desc')}
            </p>
            <div className="flex gap-4">
              <Facebook className="w-5 h-5 text-gray-400 cursor-pointer hover:text-ios-olive transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 cursor-pointer hover:text-ios-olive transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 cursor-pointer hover:text-ios-olive transition-colors" />
              <Youtube className="w-5 h-5 text-gray-400 cursor-pointer hover:text-ios-olive transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm underline decoration-ios-olive decoration-2 underline-offset-4 tracking-tighter">{t('footer.links.title')}</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-medium tracking-wide">
              <li><Link to="/" className="hover:text-ios-olive transition-colors">{t('footer.links.home')}</Link></li>
              <li><Link to="/services/career-guidance" className="hover:text-ios-olive transition-colors">{t('footer.links.services')}</Link></li>
              <li><Link to="/about-us" className="hover:text-ios-olive transition-colors">{t('footer.links.about')}</Link></li>
              <li><Link to="/contact-us" className="hover:text-ios-olive transition-colors">{t('footer.links.contact')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm underline decoration-ios-olive decoration-2 underline-offset-4">Veteran Sewa Kendra</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-medium tracking-wide">
              <li className="hover:text-ios-olive cursor-pointer transition-colors">ECHS Application</li>
              <li className="hover:text-ios-olive cursor-pointer transition-colors">Resume Service</li>
              <li className="hover:text-ios-olive cursor-pointer transition-colors">Important Contacts</li>
              <li className="hover:text-ios-olive cursor-pointer transition-colors">Community Safety</li>
              <li className="hover:text-ios-olive cursor-pointer transition-colors">Welfare Schemes</li>
            </ul>
          </div>

          <div>
             <h4 className="font-bold mb-6 text-sm underline decoration-ios-olive decoration-2 underline-offset-4">{t('footer.address.title')}</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-light">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-ios-olive flex-shrink-0" />
                <span>{t('footer.address.value')}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-ios-olive" />
                <span className="hover:text-ios-olive cursor-pointer transition-colors">support@projectveer.org</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-ios-olive" />
                <span className="hover:text-ios-olive cursor-pointer transition-colors">+91-8883336753</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-gray-100 text-center text-xs text-gray-300">
          {t('footer.copy')}
        </div>
      </div>
    </footer>
  );
};

const Home = () => (
  <>
    <Hero />
    <WhyVeerNXT />
    <Offerings />
    <Workflow />
  </>
);

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/community" element={<CommunitySupport />} />
          <Route path="/services/career-guidance" element={<CareerGuidance />} />
          <Route path="/services/financial-guidance" element={<FinancialGuidance />} />
          <Route path="/services/community-support" element={<CommunitySupport />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/student-login" element={<StudentLogin />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
