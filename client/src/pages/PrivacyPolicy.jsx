import React from 'react';
import Hero from '../components/Others/Hero'
import { PrivacyHero } from '../assets/data/heroData';

const PrivacyPolicy = () => {
  return (
    <>
    <Hero PrivacyHero={PrivacyHero} />
    <div className="bg-gray-50 min-h-screen !py-12 !px-4 sm:!px-6 lg:!px-8">
      <div className="container bg-white !p-8 rounded-lg shadow-md">
        <div className="text-center !mb-10">
          <h1 className="text-3xl font-bold text-gray-900 !mb-2">Privacy Policy</h1>
          <p className="text-gray-600">Last Updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="!space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 !mb-4">1. Introduction</h2>
            <p className="text-gray-700 !mb-4">
              Arta Jabbari ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our construction and interior design services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 !mb-4">2. Information We Collect</h2>
            <p className="text-gray-700 !mb-4">
              We may collect personal information including but not limited to:
            </p>
            <ul className="list-disc !pl-6 text-gray-700 !space-y-2">
              <li>Contact information (name, email, phone number)</li>
              <li>Project details and requirements</li>
              <li>Payment information for services</li>
              <li>Communication records</li>
              <li>Website usage data through cookies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 !mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 !mb-4">
              We use the collected information to:
            </p>
            <ul className="list-disc !pl-6 text-gray-700 !space-y-2">
              <li>Provide and manage our services</li>
              <li>Process transactions and send invoices</li>
              <li>Communicate about projects and appointments</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 !mb-4">4. Data Security</h2>
            <p className="text-gray-700 !mb-4">
              We implement appropriate technical and organizational measures to protect your personal information. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 !mb-4">5. Your Rights</h2>
            <p className="text-gray-700 !mb-4">
              You have the right to:
            </p>
            <ul className="list-disc !pl-6 text-gray-700 !space-y-2">
              <li>Access, update, or delete your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Request restriction of processing</li>
              <li>Lodge a complaint with authorities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 !mb-4">6. Contact Us</h2>
            <p className="text-gray-700 !mb-2">
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-gray-100 !p-4 rounded-lg">
              <p className="text-gray-800"><strong>Arta Jabbari</strong></p>
              <p className="text-gray-800">1717 N Bayshore Dr, #108</p>
              <p className="text-gray-800">Miami, FL 33132</p>
              <p className="text-gray-800">Phone: +1 786-210-9819</p>
              <p className="text-gray-800">Email: letsbuit@ar.miami</p>
            </div>
          </section>
        </div>
      </div>
    </div>
    </>
  );
};

export default PrivacyPolicy;