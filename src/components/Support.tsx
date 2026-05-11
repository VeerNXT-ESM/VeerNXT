import React from 'react';
import { HelpCircle, Mail, MessageSquare, Phone } from 'lucide-react';

export const Support = () => {
  return (
    <div className="min-h-screen bg-ios-bg pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4">
          <div className="w-12 h-12 bg-ios-olive/10 rounded-2xl flex items-center justify-center text-ios-olive">
            <HelpCircle className="w-6 h-6" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight">Support Center</h1>
          <p className="text-gray-500">How can we help you today?</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="ios-card p-8 space-y-4 hover:shadow-xl transition-all group">
            <Mail className="w-8 h-8 text-ios-olive group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold">Email Support</h3>
            <p className="text-gray-500 text-sm">Reach out to our team for general inquiries and technical assistance.</p>
            <p className="font-bold text-ios-olive">support@veernxt.in</p>
          </div>

          <div className="ios-card p-8 space-y-4 hover:shadow-xl transition-all group">
            <Phone className="w-8 h-8 text-ios-olive group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold">Phone Support</h3>
            <p className="text-gray-500 text-sm">Our helpdesk is available Monday to Friday, 9:00 AM - 6:00 PM.</p>
            <p className="font-bold text-ios-olive">+91-7889530025</p>
          </div>
        </div>

        <div className="ios-card p-8 space-y-6 bg-white/50 backdrop-blur-sm">
          <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="space-y-2">
              <h4 className="font-bold text-gray-900">How do I access the profiling tool?</h4>
              <p className="text-gray-500 text-sm leading-relaxed">Login using your candidate credentials and navigate to the "Profile" section to begin your assessment.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-gray-900">Where can I see my Sewa Nidhi balance?</h4>
              <p className="text-gray-500 text-sm leading-relaxed">The Financial Guidance module provides a calculator and dashboard to manage your transition funds.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
