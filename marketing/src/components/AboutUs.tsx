import { motion } from 'motion/react';
import { Users, CheckCircle, Target, Eye, Trophy } from 'lucide-react';

export const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 scale-105"
          style={{ 
            backgroundImage: "url('/hero/about.png')",
            filter: "brightness(0.5)"
          }}
        />
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black tracking-tighter mb-4"
          >
            About Us
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-2 text-sm font-bold tracking-widest text-white/80"
          >
            <span className="hover:text-ios-olive transition-colors cursor-pointer">Home</span>
            <span className="text-white/40">/</span>
            <span className="text-[#8b8e3a]">About Us</span>
          </motion.div>
        </div>
        
        {/* Abstract hex graphic like in image */}
        <div className="absolute right-10 bottom-10 opacity-20 hidden lg:block">
          <div className="w-32 h-32 border border-white/50 rotate-45 flex items-center justify-center">
            <div className="w-16 h-16 border border-white/50" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image with border frame */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 border-2 border-ios-gold/30 rounded-2xl -z-10 translate-x-4 translate-y-4" />
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/hero/our_story.png" 
                alt="Veterans transitioning to corporate"
                className="w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Right: Info */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Tabs */}
            <div className="flex flex-wrap items-center gap-6 pb-4 border-b border-gray-100">
              <button className="text-ios-gold font-bold tracking-tight flex items-center gap-2 border-b-2 border-ios-gold pb-4 -mb-[18px]">
                Our Mission
              </button>
              <button className="text-gray-400 font-bold tracking-tight hover:text-gray-600 transition-colors flex items-center gap-2 pb-4">
                Our Vision
              </button>
              <button className="text-gray-400 font-bold tracking-tight hover:text-gray-600 transition-colors flex items-center gap-2 pb-4">
                Our Goal
              </button>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-black tracking-tighter text-gray-800">
                About Our Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                VeerNXT is dedicated to guiding Agniveers and veterans toward a confident and successful civilian life. Through job opportunities, training programs, skills development, and mentorship, we ensure defence professionals receive a strong new beginning.
              </p>

              {/* Stats like in image */}
              <div className="grid sm:grid-cols-2 gap-6 pt-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-16 h-16 rounded-full bg-ios-gold/10 flex items-center justify-center text-ios-gold group-hover:scale-110 transition-transform">
                    <Users className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black text-gray-800">1250 +</h4>
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">Veterans Helped</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-16 h-16 rounded-full bg-ios-gold/10 flex items-center justify-center text-ios-gold group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black text-gray-800">350 +</h4>
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">Successful Transitions</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gray-50 rounded-2xl border-l-4 border-ios-gold">
                <p className="text-gray-600 leading-relaxed">
                  "Our mission goes beyond assistance — we aim to empower. With military-grade clarity and discipline, VeerNXT helps former soldiers transform experience into opportunity and step into a future filled with stability and pride."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Pillars Section (Vision/Mission/Values) */}
      <section className="bg-ios-secondary py-20 px-6">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black tracking-tighter text-gray-800 mb-4">Our Guiding Principles</h2>
            <div className="w-20 h-1.5 bg-ios-gold mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Our Mission",
                desc: "To bridge the gap between military service and civilian success by providing integrated support systems."
              },
              {
                icon: Eye,
                title: "Our Vision",
                desc: "To become the premier global platform for veteran career transformation and holistic empowerment."
              },
              {
                icon: Trophy,
                title: "Our Core Goal",
                desc: "Enabling 100,000+ Agniveers to find meaningful corporate leadership roles by 2030."
              }
            ].map((pillar, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-ios-gold text-white flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform shadow-lg shadow-ios-gold/20">
                  <pillar.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-black mb-4 tracking-tighter">{pillar.title}</h3>
                <p className="text-gray-600 leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
