import { FileText, Scale, AlertCircle, CheckCircle } from 'lucide-react';
import { StatsSection } from '../components/StatsSection';

export default function TermsOfService() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              These terms and conditions govern your use of Samaysagarpay services. 
              Please read them carefully before using our platform.
            </p>
            <div className="mt-6 text-sm text-gray-500">
              Last updated: January 2024
            </div>
          </div>
        </div>
      </section>

      <StatsSection />

      {/* Terms Content */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Agreement */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-brand-50 to-purple-50 rounded-3xl p-8 border border-brand-100 mb-12">
              <div className="flex items-center mb-4">
                <FileText className="w-8 h-8 text-brand-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Agreement to Terms</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using Samaysagarpay ("Service"), you accept and agree to be bound by 
                these Terms of Service ("Terms"). If you do not agree to these Terms, you may not 
                access or use our Service.
              </p>
            </div>
          </div>

          {/* Service Description */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Service Description</h2>
            
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm mb-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Samaysagarpay provides digital payment services including but not limited to:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Money transfer services within India</li>
                <li>• Bill payment services for utilities and services</li>
                <li>• Mobile recharge and data pack services</li>
                <li>• Business payment solutions</li>
                <li>• Digital wallet services</li>
              </ul>
            </div>
          </div>

          {/* Eligibility */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Eligibility</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Requirements</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• Must be 18 years or older</li>
                  <li>• Indian resident with valid documentation</li>
                  <li>• Valid mobile number and email address</li>
                  <li>• Complete KYC verification as required</li>
                </ul>
              </div>

              <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
                <div className="flex items-center mb-4">
                  <AlertCircle className="w-6 h-6 text-red-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Restrictions</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• Prohibited from using for illegal activities</li>
                  <li>• Cannot share account access</li>
                  <li>• Must not violate any applicable laws</li>
                  <li>• Cannot use for unauthorized commercial purposes</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Account Responsibilities */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Account Responsibilities</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Account Security</h3>
                <p className="text-gray-700 mb-4">
                  You are responsible for maintaining the confidentiality of your account credentials 
                  and for all activities that occur under your account.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Keep login credentials secure and confidential</li>
                  <li>• Notify us immediately of any unauthorized access</li>
                  <li>• Use strong passwords and enable two-factor authentication</li>
                  <li>• Regularly review account activity and statements</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Accurate Information</h3>
                <p className="text-gray-700">
                  You must provide accurate, current, and complete information when creating your account 
                  and keep this information updated. False or misleading information may result in 
                  account suspension or termination.
                </p>
              </div>
            </div>
          </div>

          {/* Acceptable Use */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Acceptable Use Policy</h2>
            
            <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-200 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Prohibited Activities</h3>
              <p className="text-gray-700 mb-4">
                You agree not to use our Service for any of the following purposes:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Money laundering or terrorist financing</li>
                <li>• Fraudulent or deceptive practices</li>
                <li>• Violating any laws or regulations</li>
                <li>• Harassment or abuse of other users</li>
                <li>• Attempting to gain unauthorized access to our systems</li>
                <li>• Distributing malware or harmful software</li>
              </ul>
            </div>
          </div>

          {/* Transaction Terms */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Transaction Terms</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Transaction Authorization</h3>
                <p className="text-gray-700">
                  By initiating a transaction, you authorize us to process the payment according to 
                  your instructions. Once authorized, transactions cannot typically be cancelled.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Fees and Charges</h3>
                <p className="text-gray-700">
                  Fees for our services are clearly displayed before transaction confirmation. 
                  We reserve the right to modify fees with appropriate notice to users.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Transaction Limits</h3>
                <p className="text-gray-700">
                  Transaction limits are based on your KYC verification level and regulatory requirements. 
                  These limits are in place for security and compliance purposes.
                </p>
              </div>
            </div>
          </div>

          {/* Privacy and Data */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Privacy and Data Protection</h2>
            
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
              <p className="text-gray-700 mb-4">
                Your privacy is important to us. Our collection and use of personal information 
                is governed by our Privacy Policy, which is incorporated into these Terms by reference.
              </p>
              <a 
                href="/privacy" 
                className="text-brand-600 hover:text-brand-700 font-medium"
              >
                View our Privacy Policy →
              </a>
            </div>
          </div>

          {/* Intellectual Property */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Intellectual Property</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Rights</h3>
                <p className="text-gray-700">
                  All content, features, and functionality of our Service are owned by Samaysagarpay 
                  and are protected by copyright, trademark, and other intellectual property laws.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">License to Use</h3>
                <p className="text-gray-700">
                  We grant you a limited, non-exclusive, non-transferable license to access and use 
                  our Service for personal or business purposes in accordance with these Terms.
                </p>
              </div>
            </div>
          </div>

          {/* Disclaimers */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Disclaimers and Limitations</h2>
            
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <Scale className="w-6 h-6 text-gray-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Service Availability</h3>
              </div>
              <p className="text-gray-700 mb-4">
                While we strive to provide uninterrupted service, we do not guarantee that our Service 
                will be available at all times. Service may be temporarily unavailable due to:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Scheduled maintenance</li>
                <li>• Technical issues or system failures</li>
                <li>• Third-party service dependencies</li>
                <li>• Regulatory or legal requirements</li>
              </ul>
            </div>
          </div>

          {/* Termination */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Account Termination</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">By You</h3>
                <p className="text-gray-700">
                  You may terminate your account at any time by contacting our support team. 
                  You remain responsible for any outstanding obligations.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">By Us</h3>
                <p className="text-gray-700">
                  We may suspend or terminate your account if you violate these Terms, 
                  engage in prohibited activities, or for legal or regulatory reasons.
                </p>
              </div>
            </div>
          </div>

          {/* Governing Law */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Governing Law and Jurisdiction</h2>
            
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <p className="text-gray-700">
                These Terms are governed by the laws of India. Any disputes arising from these Terms 
                or your use of our Service will be subject to the exclusive jurisdiction of the courts 
                in Indore, Madhya Pradesh, India.
              </p>
            </div>
          </div>

          {/* Changes to Terms */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Changes to Terms</h2>
            
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
              <p className="text-gray-700">
                We reserve the right to modify these Terms at any time. Changes will be effective 
                immediately upon posting. Your continued use of our Service after changes are posted 
                constitutes acceptance of the modified Terms.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-brand-50 to-purple-50 rounded-3xl p-8 border border-brand-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Questions About Terms?</h2>
            <div className="text-center">
              <p className="text-gray-600 mb-6">
                If you have questions about these Terms of Service, please contact our legal team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:legal@samaysagarpay.com"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-medium rounded-lg transition-colors"
                >
                  Contact Legal Team
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-brand-300 text-brand-700 font-medium rounded-lg hover:bg-brand-50 transition-colors"
                >
                  General Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
