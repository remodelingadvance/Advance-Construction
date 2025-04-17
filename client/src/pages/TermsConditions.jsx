import React from 'react';
import Hero from '../components/Others/Hero';
import { TermsHero } from '../assets/data/heroData';

const TermsConditions = () => {
  return (
    <>
    <Hero TermsHero={TermsHero} />
    <div className="bg-gray-50 min-h-screen py-!12 px-4 sm:!px-6 lg:!px-8">
      <div className="container bg-white !p-8 rounded-lg shadow-md">
        <div className="text-center !mb-10">
          <h1 className="text-3xl font-bold text-gray-900 !mb-2">Terms & Conditions</h1>
          <p className="text-gray-600">Last Updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="!space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 !mb-4">1. Services</h2>
            <p className="text-gray-700 !mb-4">
              Arta Jabbari provides professional construction and interior design services in Miami, FL. All services are subject to these Terms and any additional agreements signed by both parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 !mb-4">2. Project Agreements</h2>
            <p className="text-gray-700 !mb-4">
              All projects require a signed contract outlining scope, timeline, payment schedule, and other specific terms. Changes to the project scope may result in additional charges.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 !mb-4">3. Payments</h2>
            <p className="text-gray-700 !mb-4">
              Payment terms will be specified in your project contract. We typically require:
            </p>
            <ul className="list-disc !pl-6 text-gray-700 !space-y-2">
              <li>Deposit to commence work</li>
              <li>Progress payments at defined milestones</li>
              <li>Final payment upon completion</li>
              <li>Late payments may incur additional charges</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 !mb-4">4. Cancellation Policy</h2>
            <p className="text-gray-700 !mb-4">
              Cancellations must be made in writing. Depending on project stage, cancellation fees may apply to cover work completed and materials ordered.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 !mb-4">5. Warranties</h2>
            <p className="text-gray-700 !mb-4">
              We provide a limited warranty on our workmanship for 1 year from project completion. This does not cover damage from normal wear and tear, accidents, or improper maintenance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 !mb-4">6. Liability</h2>
            <p className="text-gray-700 !mb-4">
              Our liability is limited to the contract price. We are not liable for consequential damages. Clients are responsible for obtaining necessary permits and approvals.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 !mb-4">7. Intellectual Property</h2>
            <p className="text-gray-700 !mb-4">
              All designs, drawings, and specifications remain our intellectual property until full payment is received. Unauthorized use or reproduction is prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 !mb-4">8. Dispute Resolution</h2>
            <p className="text-gray-700 !mb-4">
              Any disputes will first attempt resolution through mediation in Miami-Dade County, FL before pursuing legal action.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 !mb-4">9. Contact Information</h2>
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

export default TermsConditions;