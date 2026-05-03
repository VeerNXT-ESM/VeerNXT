import { motion } from 'motion/react';
import { LogIn, UserPlus, GraduationCap, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export const StudentLogin = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 scale-105"
          style={{ 
            backgroundImage: "url('/hero/hero_image.png')",
            filter: "brightness(0.4)"
          }}
        />
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black tracking-tighter mb-4"
          >
            Student Portal Login
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-2 text-sm font-bold tracking-widest text-white/80"
          >
            <span className="hover:text-ios-olive transition-colors cursor-pointer">Home</span>
            <span className="text-white/40">/</span>
            <span className="text-ios-olive">Student Portal Login</span>
          </motion.div>
        </div>
      </section>

      {/* Main Login Content */}
      <section className="py-20 px-6 bg-[#4b6b32] min-h-[600px] flex items-center">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white space-y-8"
          >
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-black tracking-tighter text-ios-gold">Student Portal</h3>
              <GraduationCap className="w-6 h-6 text-ios-gold" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight">
              Access Your Educational Resources
            </h2>
            <p className="text-lg text-white/80 leading-relaxed max-w-xl">
              Welcome to the Student Portal where you can access all your educational resources, course materials, grades, and important announcements. Whether you're a new student or returning, this portal gives you everything needed for your academic journey.
            </p>
          </motion.div>

          {/* Right Side: Login Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-md mx-auto w-full"
          >
            {/* Tabs */}
            <div className="flex border-b border-gray-100">
              <button 
                onClick={() => setActiveTab('login')}
                className={`flex-1 py-6 flex items-center justify-center gap-2 font-bold transition-all ${activeTab === 'login' ? 'text-gray-800 border-b-2 border-ios-gold bg-gray-50/50' : 'text-gray-400 hover:text-gray-600'}`}
              >
                <LogIn className="w-4 h-4" />
                Login
              </button>
              <button 
                onClick={() => setActiveTab('register')}
                className={`flex-1 py-6 flex items-center justify-center gap-2 font-bold transition-all ${activeTab === 'register' ? 'text-gray-800 border-b-2 border-ios-gold bg-gray-50/50' : 'text-gray-400 hover:text-gray-600'}`}
              >
                <UserPlus className="w-4 h-4" />
                Register
              </button>
            </div>

            <div className="p-8 md:p-10">
              {activeTab === 'login' ? (
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-500 uppercase tracking-widest">Email Address *</label>
                    <input 
                      type="email" 
                      placeholder="student@example.com"
                      className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-ios-gold focus:ring-4 focus:ring-ios-gold/10 outline-none transition-all font-medium text-gray-800"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-500 uppercase tracking-widest">Password *</label>
                    <input 
                      type="password" 
                      placeholder="Enter your password"
                      className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:border-ios-gold focus:ring-4 focus:ring-ios-gold/10 outline-none transition-all font-medium text-gray-800"
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-ios-gold focus:ring-ios-gold cursor-pointer" />
                      <span className="text-xs font-bold text-gray-400 group-hover:text-gray-600 transition-colors">Remember me</span>
                    </label>
                    <a href="#" className="text-xs font-bold text-ios-gold hover:text-ios-gold/80 transition-colors">Forgot password?</a>
                  </div>

                  <button className="w-full py-5 bg-[#4b6b32] text-white rounded-xl font-bold tracking-widest flex items-center justify-center gap-3 hover:bg-[#3d5729] transition-all transform active:scale-95 shadow-lg shadow-black/10">
                    <LogIn className="w-4 h-4" />
                    Login to Account
                  </button>
                </form>
              ) : (
                <div className="text-center py-10">
                  <p className="text-gray-500 font-medium">Registration system is currently limited to verified Agniveers.</p>
                  <button className="mt-6 px-8 py-3 bg-ios-gold text-white rounded-xl font-bold tracking-widest text-sm">
                    Contact Administrator
                  </button>
                </div>
              )}
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
};
