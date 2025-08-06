import { Shield, Lock, Eye, AlertTriangle, CheckCircle, Users } from 'lucide-react';
import { StatsSection } from '../components/StatsSection';

export default function Security() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Security & Protection
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your security is our top priority. Learn about the comprehensive measures 
              we take to protect your financial information and transactions.
            </p>
          </div>
        </div>
      </section>

      <StatsSection />

      {/* Security Content */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Our Commitment */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-brand-50 to-purple-50 rounded-3xl p-8 border border-brand-100 mb-12">
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 text-brand-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Our Security Commitment</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                At Samaysagarpay, we employ bank-level security measures to protect your personal 
                and financial information. Our multi-layered security approach ensures that your 
                data and transactions are always safe and secure.
              </p>
            </div>
          </div>

          {/* Security Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Advanced Security Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center mb-4">
                  <Lock className="w-6 h-6 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">256-bit SSL Encryption</h3>
                </div>
                <p className="text-gray-700">
                  All data transmission is protected with military-grade 256-bit SSL encryption, 
                  ensuring your information remains secure during transfer.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center mb-4">
                  <Shield className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Two-Factor Authentication</h3>
                </div>
                <p className="text-gray-700">
                  Add an extra layer of security to your account with SMS or app-based 
                  two-factor authentication for login and transaction verification.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center mb-4">
                  <Eye className="w-6 h-6 text-purple-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Real-time Monitoring</h3>
                </div>
                <p className="text-gray-700">
                  Our advanced fraud detection system monitors all transactions in real-time 
                  to identify and prevent suspicious activities.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center mb-4">
                  <Users className="w-6 h-6 text-orange-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Access Controls</h3>
                </div>
                <p className="text-gray-700">
                  Strict access controls ensure that only authorized personnel can access 
                  sensitive systems, with all actions logged and monitored.
                </p>
              </div>
            </div>
          </div>

          {/* Compliance & Certifications */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Compliance & Certifications</h2>
            
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-8 border border-green-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">RBI Compliant</h3>
                  <p className="text-gray-600">
                    Fully compliant with Reserve Bank of India guidelines for digital payments
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">PCI DSS Certified</h3>
                  <p className="text-gray-600">
                    Payment Card Industry Data Security Standard compliant infrastructure
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">ISO 27001</h3>
                  <p className="text-gray-600">
                    International standard for information security management systems
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Fraud Prevention */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Fraud Prevention</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Machine Learning Detection</h3>
                <p className="text-gray-700">
                  Our AI-powered fraud detection system analyzes transaction patterns and user behavior 
                  to identify and prevent fraudulent activities before they occur.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Transaction Limits</h3>
                <p className="text-gray-700">
                  Configurable transaction limits based on user verification levels help prevent 
                  unauthorized large transactions and limit potential exposure.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Device Recognition</h3>
                <p className="text-gray-700">
                  We track and verify devices used for transactions, alerting you when 
                  your account is accessed from a new or unrecognized device.
                </p>
              </div>
            </div>
          </div>

          {/* Security Best Practices */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Security Best Practices for Users</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Do's</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• Use strong, unique passwords</li>
                  <li>• Enable two-factor authentication</li>
                  <li>• Log out after each session</li>
                  <li>• Keep your app updated</li>
                  <li>• Verify recipient details before sending money</li>
                  <li>• Report suspicious activities immediately</li>
                </ul>
              </div>

              <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Don'ts</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• Don't share your login credentials</li>
                  <li>• Don't use public Wi-Fi for transactions</li>
                  <li>• Don't click on suspicious links</li>
                  <li>• Don't save passwords in browsers</li>
                  <li>• Don't ignore security alerts</li>
                  <li>• Don't share OTPs with anyone</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Incident Response */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Incident Response</h2>
            
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">24/7 Security Monitoring</h3>
              <p className="text-gray-700 mb-4">
                Our security team monitors our systems around the clock. In the event of a security 
                incident, we have established procedures to:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Immediately contain and assess the threat</li>
                <li>• Notify affected users promptly</li>
                <li>• Coordinate with law enforcement if necessary</li>
                <li>• Implement additional security measures</li>
                <li>• Conduct thorough post-incident analysis</li>
              </ul>
            </div>
          </div>

          {/* Data Protection */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Data Protection</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Encrypted Storage</h3>
                <p className="text-gray-700">
                  All sensitive data is stored in encrypted databases with access restricted 
                  to authorized personnel only. Regular security audits ensure data integrity.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Secure Infrastructure</h3>
                <p className="text-gray-700">
                  Our infrastructure is hosted in secure, certified data centers with 
                  physical security controls, redundancy, and disaster recovery capabilities.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Minimization</h3>
                <p className="text-gray-700">
                  We collect and retain only the minimum amount of data necessary to provide 
                  our services, reducing exposure and protecting your privacy.
                </p>
              </div>
            </div>
          </div>

          {/* Security Updates */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Continuous Security Improvements</h2>
            
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <p className="text-gray-700 mb-4">
                Security is an ongoing process. We continuously update our security measures, 
                conduct regular security assessments, and stay informed about the latest threats 
                and protection technologies.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Regular security audits and penetration testing</li>
                <li>• Continuous monitoring and threat intelligence</li>
                <li>• Employee security training and awareness</li>
                <li>• Regular system updates and patches</li>
              </ul>
            </div>
          </div>

          {/* Contact Security Team */}
          <div className="bg-gradient-to-r from-brand-50 to-purple-50 rounded-3xl p-8 border border-brand-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Security Concerns?</h2>
            <div className="text-center">
              <p className="text-gray-600 mb-6">
                If you have security concerns or notice suspicious activity on your account, 
                please contact our security team immediately.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:security@samaysagarpay.com"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-medium rounded-lg transition-colors"
                >
                  Report Security Issue
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
