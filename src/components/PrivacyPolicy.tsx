import React from 'react';

export const PrivacyPolicy = () => {
  return (
    <div className="animate-fade-in" style={{ padding: '8rem 2rem 4rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
      <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100" style={{ padding: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '2rem', color: 'var(--ios-olive)' }}>Privacy Policy</h1>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', color: '#444', lineHeight: '1.6' }}>
          <section>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#111', marginBottom: '1rem' }}>1. Introduction</h2>
            <p>VeerNXT ("we", "us", or "our"), operated by <strong>VETERAN WORKS PRIVATE LIMITED</strong>, respects your privacy and is committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website or use our application.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#111', marginBottom: '1rem' }}>2. Data We Collect</h2>
            <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
              <li><strong>Identity Data:</strong> Full name, date of birth, marital status.</li>
              <li><strong>Contact Data:</strong> Email address and mobile phone numbers.</li>
              <li><strong>Service Data:</strong> Service branch, arm/corps, trade, and duration of service.</li>
              <li><strong>Academic & Physical Data:</strong> Educational qualifications, NCC certificates, height, and physical standards.</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#111', marginBottom: '1rem' }}>3. How We Use Your Data</h2>
            <p>We use your data primarily to calculate your "Veer Score" and provide tailored career recommendations for government and corporate sectors. We also use your contact data to facilitate secure login via OTP (One-Time Password) providers.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#111', marginBottom: '1rem' }}>4. Data Security</h2>
            <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way. We limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#111', marginBottom: '1rem' }}>5. Third-Party Services</h2>
            <p>Our application integrates with secure third-party providers for authentication (OTP services) and payment processing (Razorpay). These providers have their own privacy policies and we recommend you read them.</p>
          </section>

          <section style={{ borderTop: '1px solid #eee', paddingTop: '2rem', marginTop: '2rem' }}>
            <p style={{ fontSize: '0.9rem', color: '#999' }}>Last Updated: May 12, 2026</p>
            <p style={{ fontSize: '0.9rem', color: '#999' }}>VETERAN WORKS PRIVATE LIMITED, Bengaluru.</p>
          </section>
        </div>
      </div>
    </div>
  );
};
