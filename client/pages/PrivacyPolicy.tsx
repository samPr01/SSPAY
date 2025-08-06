import { Shield, Eye, Lock, Users, Database, Globe } from 'lucide-react';
import { StatsSection } from '../components/StatsSection';

export default function PrivacyPolicy() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, 
              use, and protect your personal information when you use Samaysagarpay services.
            </p>
            <div className="mt-6 text-sm text-gray-500">
              Last updated: January 2024
            </div>
          </div>
        </div>
      </section>

      <StatsSection />

      {/* Policy Content */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Introduction */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-brand-50 to-purple-50 rounded-3xl p-8 border border-brand-100 mb-12">
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 text-brand-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Our Commitment to Privacy</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Samaysagarpay ("we," "our," or "us") is committed to protecting your privacy and ensuring 
                the security of your personal information. This Privacy Policy describes how we collect, 
                use, disclose, and safeguard your information when you use our digital payment platform 
                and related services.
              </p>
            </div>
          </div>

          {/* Information We Collect */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Information We Collect</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center mb-4">
                  <Users className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Personal Information</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• Full name and contact details</li>
                  <li>• Email address and phone number</li>
                  <li>• Date of birth and government ID</li>
                  <li>• Bank account and financial information</li>
                  <li>• Address and location data</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center mb-4">
                  <Database className="w-6 h-6 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Usage Information</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• Transaction history and patterns</li>
                  <li>• Device information and IP address</li>
                  <li>• App usage and interaction data</li>
                  <li>• Login times and frequency</li>
                  <li>• Customer service interactions</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">KYC Information</h3>
              <p className="text-gray-700">
                As a financial service provider, we are required by law to collect and verify your identity 
                through Know Your Customer (KYC) procedures. This includes government-issued identification 
                documents and other verification materials as mandated by RBI guidelines.
              </p>
            </div>
          </div>

          {/* How We Use Information */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">How We Use Your Information</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Provision</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Processing transactions and payments</li>
                  <li>• Account management and maintenance</li>
                  <li>• Customer support and assistance</li>
                  <li>• Service improvements and new features</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Security and Compliance</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Fraud prevention and detection</li>
                  <li>• Identity verification and KYC compliance</li>
                  <li>• Anti-money laundering (AML) monitoring</li>
                  <li>• Regulatory reporting and compliance</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Communication</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Transaction confirmations and alerts</li>
                  <li>• Service updates and notifications</li>
                  <li>• Marketing communications (with consent)</li>
                  <li>• Important policy or terms changes</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Information Sharing */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Information Sharing and Disclosure</h2>
            
            <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-200 mb-8">
              <div className="flex items-center mb-4">
                <Eye className="w-6 h-6 text-yellow-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">We Do Not Sell Your Information</h3>
              </div>
              <p className="text-gray-700">
                We do not sell, rent, or trade your personal information to third parties for their 
                marketing purposes. Your data is shared only in specific circumstances outlined below.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Authorized Sharing</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• With your explicit consent</li>
                  <li>• Partner banks and financial institutions</li>
                  <li>• Service providers and vendors</li>
                  <li>• Payment processors and networks</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Legal Requirements</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Regulatory authorities (RBI, SEBI)</li>
                  <li>• Law enforcement agencies</li>
                  <li>• Court orders and legal proceedings</li>
                  <li>• Government compliance requirements</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Data Security */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Data Security</h2>
            
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-8 border border-green-200 mb-8">
              <div className="flex items-center mb-4">
                <Lock className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-semibold text-gray-900">Security Measures</h3>
              </div>
              <p className="text-gray-700 mb-6">
                We implement industry-standard security measures to protect your personal information 
                from unauthorized access, disclosure, alteration, and destruction.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Encryption</h4>
                  <p className="text-sm text-gray-600">256-bit SSL encryption for all data transmission</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lock className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Access Control</h4>
                  <p className="text-sm text-gray-600">Multi-factor authentication and access controls</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Database className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Secure Storage</h4>
                  <p className="text-sm text-gray-600">Encrypted databases and secure cloud infrastructure</p>
                </div>
              </div>
            </div>
          </div>

          {/* Your Rights */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Your Privacy Rights</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Access and Correction</h3>
                <p className="text-gray-700">
                  You have the right to access, update, or correct your personal information. 
                  You can review and modify your account information through your user dashboard 
                  or by contacting our support team.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Portability</h3>
                <p className="text-gray-700">
                  You can request a copy of your personal data in a structured, commonly used format. 
                  Contact our support team to initiate a data export request.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Account Deletion</h3>
                <p className="text-gray-700">
                  You may request account deletion, subject to regulatory requirements. 
                  Some information may be retained for legal compliance and fraud prevention purposes.
                </p>
              </div>
            </div>
          </div>

          {/* Cookies and Tracking */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Cookies and Tracking</h2>
            
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <p className="text-gray-700 mb-4">
                We use cookies and similar technologies to enhance your experience, analyze usage patterns, 
                and improve our services. You can control cookie settings through your browser preferences.
              </p>
              <a 
                href="/cookies" 
                className="text-brand-600 hover:text-brand-700 font-medium"
              >
                View our Cookie Policy →
              </a>
            </div>
          </div>

          {/* Updates to Policy */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Policy Updates</h2>
            
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <p className="text-gray-700">
                We may update this Privacy Policy periodically to reflect changes in our practices, 
                technology, or legal requirements. Material changes will be communicated through 
                email notifications or prominent notices on our platform.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-brand-50 to-purple-50 rounded-3xl p-8 border border-brand-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Privacy Questions?</h2>
            <div className="text-center">
              <p className="text-gray-600 mb-6">
                If you have questions about this Privacy Policy or how we handle your personal information, 
                please contact our privacy team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:privacy@samaysagarpay.com"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-medium rounded-lg transition-colors"
                >
                  Email Privacy Team
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-brand-300 text-brand-700 font-medium rounded-lg hover:bg-brand-50 transition-colors"
                >
                  Contact Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
