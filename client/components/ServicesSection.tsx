import { 
  CreditCard, 
  Smartphone, 
  Globe, 
  Shield, 
  Zap, 
  Users, 
  Building, 
  Clock,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { Button } from './ui/button';

export function ServicesSection() {
  return (
    <div className="py-24 bg-white">
      {/* About Company Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="text-brand-600 font-semibold text-sm uppercase tracking-wide">
              Welcome to Samaysagarpay
            </span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Revolutionizing Digital Payments
          </h2>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Our platform transforms how businesses and individuals handle digital transactions.
            With cutting-edge technology and uncompromising security, we provide seamless
            payment solutions that adapt to your needs.
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Lightning Fast</h4>
                <p className="text-sm text-gray-600">Instant transaction processing</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <Clock className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">24/7 Support</h4>
                <p className="text-sm text-gray-600">Round-the-clock assistance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gradient-to-br from-brand-50 via-indigo-50 to-purple-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-600 font-semibold text-sm uppercase tracking-wide mb-4 block">
              Why Choose Samaysagarpay
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Built for Modern Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the next generation of digital payments with our comprehensive platform 
              designed for businesses of all sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* B2C Portals */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">B2C Solutions</h3>
              <p className="text-gray-600 mb-6">
                Direct sales portals that facilitate seamless transactions between businesses and consumers with intuitive interfaces.
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Learn More
              </Button>
            </div>

            {/* B2B Platform */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">B2B Platform</h3>
              <p className="text-gray-600 mb-6">
                Enterprise-grade solutions enabling businesses to trade goods and services efficiently with advanced features.
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Learn More
              </Button>
            </div>

            {/* Trusted Network */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Trusted by 10k+</h3>
              <p className="text-gray-600 mb-6">
                Join thousands of satisfied customers who trust our platform for secure and reliable digital payment solutions.
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Learn More
              </Button>
            </div>

            {/* Mobile Ready */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mobile Ready</h3>
              <p className="text-gray-600 mb-6">
                Fully optimized mobile applications and responsive design ensuring seamless experiences across all devices.
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive payment solutions tailored to meet diverse business and personal needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Money Transfer */}
            <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Money Transfer</h3>
              <p className="text-gray-600 mb-6">
                Send money globally with competitive rates and instant processing. Secure, fast, and reliable transfers worldwide.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Instant transfers
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Competitive rates
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Global coverage
                </li>
              </ul>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Transfer Now
              </Button>
            </div>

            {/* Bill Payment */}
            <div className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bill Payment</h3>
              <p className="text-gray-600 mb-6">
                Pay utilities, services, and bills online with ease. Schedule payments and never miss a due date again.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Auto-pay options
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Bill reminders
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Multiple providers
                </li>
              </ul>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Pay Bills
              </Button>
            </div>

            {/* Mobile Recharge */}
            <div className="group bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mobile Recharge</h3>
              <p className="text-gray-600 mb-6">
                Top up mobile phones instantly with support for all major carriers. Quick, convenient, and secure.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  All carriers
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Instant recharge
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Special offers
                </li>
              </ul>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                Recharge Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
