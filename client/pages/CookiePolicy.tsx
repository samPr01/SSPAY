import { Cookie, Settings, Shield, BarChart } from 'lucide-react';
import { StatsSection } from '../components/StatsSection';

export default function CookiePolicy() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              This policy explains how Samaysagarpay uses cookies and similar tracking 
              technologies to enhance your browsing experience and improve our services.
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
          
          {/* What are Cookies */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-brand-50 to-purple-50 rounded-3xl p-8 border border-brand-100 mb-12">
              <div className="flex items-center mb-4">
                <Cookie className="w-8 h-8 text-brand-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">What are Cookies?</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Cookies are small text files that are placed on your device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences, 
                keeping you logged in, and helping us understand how you use our services.
              </p>
            </div>
          </div>

          {/* Types of Cookies */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Types of Cookies We Use</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center mb-4">
                  <Shield className="w-6 h-6 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Essential Cookies</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  These cookies are necessary for the website to function properly and cannot be disabled.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• User authentication and security</li>
                  <li>• Transaction processing</li>
                  <li>• Session management</li>
                  <li>• Load balancing</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center mb-4">
                  <BarChart className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Analytics Cookies</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  These cookies help us understand how visitors interact with our website.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Website usage statistics</li>
                  <li>• Performance monitoring</li>
                  <li>• Error tracking</li>
                  <li>• User behavior analysis</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center mb-4">
                  <Settings className="w-6 h-6 text-purple-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Functional Cookies</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  These cookies enable enhanced functionality and personalization.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Language preferences</li>
                  <li>• Theme settings</li>
                  <li>• Recently viewed items</li>
                  <li>• Form data retention</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center mb-4">
                  <Cookie className="w-6 h-6 text-orange-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Marketing Cookies</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  These cookies are used to deliver relevant advertisements and track campaign effectiveness.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Targeted advertising</li>
                  <li>• Campaign tracking</li>
                  <li>• Social media integration</li>
                  <li>• Remarketing</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How We Use Cookies */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">How We Use Cookies</h2>
            
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Security and Authentication</h3>
                <p className="text-gray-700">
                  We use cookies to keep your account secure and maintain your login session. 
                  This prevents you from having to log in repeatedly and helps protect against 
                  unauthorized access to your account.
                </p>
              </div>

              <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Improvement</h3>
                <p className="text-gray-700">
                  Analytics cookies help us understand how our services are used, which features 
                  are most popular, and where users encounter difficulties. This information 
                  helps us improve our platform and user experience.
                </p>
              </div>

              <div className="bg-purple-50 rounded-2xl p-6 border border-purple-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Personalization</h3>
                <p className="text-gray-700">
                  Functional cookies remember your preferences and settings, such as language 
                  selection and dashboard layout, to provide a more personalized experience.
                </p>
              </div>
            </div>
          </div>

          {/* Third-Party Cookies */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Third-Party Cookies</h2>
            
            <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-200 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">External Services</h3>
              <p className="text-gray-700 mb-4">
                We may use third-party services that place their own cookies on your device. 
                These services help us provide better functionality and analyze our website performance.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Google Analytics for website analytics</li>
                <li>• Payment processor cookies for secure transactions</li>
                <li>• Customer support chat services</li>
                <li>• Social media plugins and sharing tools</li>
              </ul>
            </div>
          </div>

          {/* Managing Cookies */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Managing Your Cookie Preferences</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Browser Settings</h3>
                <p className="text-gray-700 mb-4">
                  You can control cookies through your browser settings. Most browsers allow you to:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• View and delete cookies</li>
                  <li>• Block cookies from specific sites</li>
                  <li>• Block all cookies</li>
                  <li>• Get notified when cookies are set</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Cookie Settings</h3>
                <p className="text-gray-700 mb-4">
                  You can manage your cookie preferences directly on our website:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Essential cookies (always required)</li>
                  <li>• Analytics cookies (optional)</li>
                  <li>• Functional cookies (optional)</li>
                  <li>• Marketing cookies (optional)</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-red-50 rounded-2xl p-6 border border-red-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Important Note</h3>
              <p className="text-gray-700">
                Disabling certain cookies may affect the functionality of our website and your 
                ability to use some features. Essential cookies cannot be disabled as they are 
                necessary for the website to function properly.
              </p>
            </div>
          </div>

          {/* Cookie Retention */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Cookie Retention</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Session Cookies</h3>
                <p className="text-gray-700">
                  These temporary cookies are deleted when you close your browser. 
                  They are used for essential functions like maintaining your login session.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Persistent Cookies</h3>
                <p className="text-gray-700">
                  These cookies remain on your device for a specified period or until you delete them. 
                  They help remember your preferences across visits.
                </p>
              </div>
            </div>
          </div>

          {/* Updates to Cookie Policy */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Updates to This Policy</h2>
            
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <p className="text-gray-700">
                We may update this Cookie Policy from time to time to reflect changes in our 
                practices or for legal and regulatory reasons. Any changes will be posted on 
                this page with the updated date.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-brand-50 to-purple-50 rounded-3xl p-8 border border-brand-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Questions About Cookies?</h2>
            <div className="text-center">
              <p className="text-gray-600 mb-6">
                If you have questions about our use of cookies or this Cookie Policy, 
                please contact our support team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:support@samaysagarpay.com"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-medium rounded-lg transition-colors"
                >
                  Contact Support
                </a>
                <a
                  href="/privacy"
                  className="inline-flex items-center justify-center px-6 py-3 border border-brand-300 text-brand-700 font-medium rounded-lg hover:bg-brand-50 transition-colors"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
