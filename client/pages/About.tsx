import { Shield, Users, Globe, Award, CheckCircle, Target } from 'lucide-react';
import { StatsSection } from '../components/StatsSection';

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
              About Samaysagarpay
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're revolutionizing digital payments with innovative solutions that make 
              financial transactions simple, secure, and accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                To democratize financial services by providing secure, fast, and affordable 
                digital payment solutions that empower individuals and businesses to thrive 
                in the digital economy.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Secure and reliable transactions
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Accessible to everyone
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Innovation-driven solutions
                </li>
              </ul>
            </div>
            
            <div>
              <div className="w-full h-80 bg-gradient-to-br from-indigo-400 via-blue-500 to-cyan-500 rounded-2xl shadow-2xl overflow-hidden relative">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-blue-600/20 to-cyan-600/20 animate-pulse"></div>

                {/* Floating elements */}
                <div className="absolute top-12 left-12 w-20 h-20 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center animate-bounce">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <div className="absolute top-20 right-16 w-16 h-16 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center" style={{animationDelay: '0.7s'}}>
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div className="absolute bottom-20 left-20 w-18 h-18 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center animate-bounce" style={{animationDelay: '1.2s'}}>
                  <Globe className="w-9 h-9 text-white" />
                </div>

                {/* Central content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-3xl font-bold mb-3">Innovation Driven</h3>
                    <p className="text-blue-100 text-lg">Building the Future of Payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-brand-600 to-purple-600 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-brand-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">$50M+</div>
              <div className="text-brand-100">Transactions Processed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-brand-100">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-brand-100">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      <StatsSection />

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Security First</h3>
              <p className="text-gray-600">
                We prioritize the security of your data and transactions with 
                bank-level encryption and advanced fraud protection.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Customer Centric</h3>
              <p className="text-gray-600">
                Our customers are at the heart of everything we do. We listen, 
                learn, and continuously improve our services.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Global Impact</h3>
              <p className="text-gray-600">
                We're building solutions that connect people across borders 
                and enable financial inclusion worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
