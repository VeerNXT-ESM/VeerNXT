import React from 'react';
import { Gavel, FileText, Scale } from 'lucide-react';

export const Legal = () => {
  return (
    <div className="min-h-screen bg-ios-bg pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4">
          <div className="w-12 h-12 bg-ios-olive/10 rounded-2xl flex items-center justify-center text-ios-olive">
            <Scale className="w-6 h-6" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight">Legal Information</h1>
          <p className="text-gray-500">Terms of Service and Regulatory Compliance</p>
        </div>

        <div className="prose prose-gray max-w-none space-y-10 text-gray-600 leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Gavel className="w-5 h-5 text-ios-olive" /> Terms of Service
            </h2>
            <p>
              By accessing VeerNXT, you agree to be bound by these terms. Our platform is designed for career 
              counseling and recruitment assistance for personnel transitioning from active duty.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-ios-olive" /> Disclaimer
            </h2>
            <p>
              While we strive to provide accurate vacancy notifications and financial guidance, VeerNXT is 
              not a government agency. Final job placements and fund disbursements are subject to the 
              respective department regulations.
            </p>
          </section>

          <div className="p-6 bg-ios-secondary/30 rounded-2xl border border-ios-olive/10 text-sm italic">
            VeerNXT is a registered trademark. All rights reserved. 2026.
          </div>
        </div>
      </div>
    </div>
  );
};
