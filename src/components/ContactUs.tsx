import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, Facebook, Twitter, Instagram, Linkedin, Youtube, ChevronDown } from 'lucide-react';

export const ContactUs = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 scale-105"
          style={{ 
            backgroundImage: "url('/hero/hero_image.png')",
            filter: "brightness(0.3)"
          }}
        />
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black tracking-tighter mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-2 text-sm font-bold tracking-widest text-white/80"
          >
            <span className="hover:text-ios-olive transition-colors cursor-pointer">Home</span>
            <span className="text-white/40">/</span>
            <span className="text-ios-olive">Contact Us</span>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Left: Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col h-full"
            >
              <h2 className="text-2xl font-black tracking-tighter text-gray-800 mb-10">
                Contact Information
              </h2>

              <div className="space-y-8 flex-grow">
                {/* Phone */}
                <div className="flex items-start gap-6 p-6 rounded-2xl bg-gray-50 group transition-all hover:bg-ios-olive/5">
                  <div className="w-12 h-12 rounded-xl bg-ios-olive text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-gray-400 tracking-widest mb-1">Phone Numbers</h4>
                    <p className="text-base font-bold text-gray-800">+91 +91-8883336753</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-6 p-6 rounded-2xl bg-gray-50 group transition-all hover:bg-ios-olive/5">
                  <div className="w-12 h-12 rounded-xl bg-ios-olive text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-gray-400 tracking-widest mb-1">Email Addresses</h4>
                    <p className="text-base font-bold text-gray-800">support@projectveer.org</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-6 p-6 rounded-2xl bg-gray-50 group transition-all hover:bg-ios-olive/5">
                  <div className="w-12 h-12 rounded-xl bg-ios-olive text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-gray-400 tracking-widest mb-1">Our Address</h4>
                    <p className="text-sm font-bold text-gray-800 leading-relaxed">
                      6th Floor, Cosmos Vijay, Shivaji Path, Opp Jagdish Book Depot, Navpada, Thane (West), Maharashtra - 400 601.
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12 pt-8 border-t border-gray-100">
                <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-6">Follow Us</h4>
                <div className="flex gap-4">
                  {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, idx) => (
                    <a 
                      key={idx} 
                      href="#" 
                      className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-ios-olive hover:text-white transition-all transform hover:-translate-y-1"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-gray-100"
            >
              <h2 className="text-2xl font-black tracking-tighter text-gray-800 mb-10">
                Send Us A Message
              </h2>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-500 tracking-wider ml-1">First Name *</label>
                    <input 
                      type="text" 
                      placeholder="John"
                      className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-ios-olive focus:ring-4 focus:ring-ios-olive/10 outline-none transition-all font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-500 tracking-wider ml-1">Last Name *</label>
                    <input 
                      type="text" 
                      placeholder="Doe"
                      className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-ios-olive focus:ring-4 focus:ring-ios-olive/10 outline-none transition-all font-medium"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-500 tracking-wider ml-1">Email Address *</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-ios-olive focus:ring-4 focus:ring-ios-olive/10 outline-none transition-all font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-500 tracking-wider ml-1">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="+91 9876543210"
                      className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-ios-olive focus:ring-4 focus:ring-ios-olive/10 outline-none transition-all font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-500 tracking-wider ml-1">Query Type *</label>
                  <div className="relative">
                    <select className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-ios-olive focus:ring-4 focus:ring-ios-olive/10 outline-none transition-all font-medium appearance-none">
                      <option value="">Select a query type</option>
                      <option value="career">Career Guidance</option>
                      <option value="financial">Financial Planning</option>
                      <option value="community">Community Joining</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                    <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-500 tracking-wider ml-1">Message *</label>
                  <textarea 
                    rows={4}
                    placeholder="Please provide details of your query..."
                    className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-ios-olive focus:ring-4 focus:ring-ios-olive/10 outline-none transition-all font-medium resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full md:w-auto px-10 py-4 bg-ios-olive text-white rounded-xl font-bold tracking-widest flex items-center justify-center gap-3 hover:bg-ios-olive/90 hover:shadow-xl hover:shadow-ios-olive/20 transition-all transform active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section or Extra Info */}
      <section className="h-[400px] bg-gray-200 relative grayscale hover:grayscale-0 transition-all duration-700">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.925828456073!2d72.973415!3d19.1983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8e5c5c5c5c5%3A0x5c5c5c5c5c5c5c5c!2sThane!5e0!3m2!1sen!2sin!4v1625500000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy"
          title="Google Maps"
        />
      </section>
    </div>
  );
};
