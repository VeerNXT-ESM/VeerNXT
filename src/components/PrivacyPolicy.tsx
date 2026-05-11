import React from 'react';
import { Shield, Lock, Eye } from 'lucide-react';

export const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-ios-bg pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4">
          <div className="w-12 h-12 bg-ios-olive/10 rounded-2xl flex items-center justify-center text-ios-olive">
            <Shield className="w-6 h-6" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight">Privacy Policy</h1>
          <p className="text-gray-500">Last updated: May 2026</p>
        </div>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-600 leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Lock className="w-5 h-5 text-ios-olive" /> Data Collection
            </h2>
            <p>
              At VeerNXT, we collect only the information necessary to provide you with the best career transition support. 
              This includes basic profile information, educational background, and service history provided during registration.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Eye className="w-5 h-5 text-ios-olive" /> How We Use Your Data
            </h2>
            <p>
              Your data is used to generate personalized career roadmaps, suggest relevant vacancies, and coordinate support 
              between the Sewa Kendra and our candidates. We do not sell your personal data to third parties.
            </p>
          </section>

          <section className="space-y-4 font-medium text-gray-900">
            <p>
              By using our services, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
