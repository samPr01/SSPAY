import { Link } from 'react-router-dom';
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
import { Button } from '../components/ui/button';
import { StatsSection } from '../components/StatsSection';

export default function Services() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital payment solutions designed to meet all your 
              financial transaction needs with security and convenience.
            </p>
          </div>
        </div>
      </section>

      <StatsSection />

      {/* Main Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
            {/* Money Transfer */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Money Transfer</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Send money globally with competitive rates and secure processing.
              </p>
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-sm py-2">
                <Link to="/services/money-transfer">
                  Learn More
                </Link>
              </Button>
            </div>

            {/* Bill Payment */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm text-center">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Bill Payment</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Pay all your bills in one place with automated scheduling.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Auto-pay scheduling
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Payment reminders
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Multiple service providers
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Payment history tracking
                </li>
              </ul>
              <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                <Link to="/services/bill-payment">
                  Learn More
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>

            {/* Mobile Recharge */}
            <div className="group bg-gradient-to-br from-purple-50 to-pink-100 rounded-3xl p-8 border border-purple-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Smartphone className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mobile Recharge</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Top up your mobile phone or help friends and family stay connected. 
                Support for all major carriers with instant processing.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  All major carriers
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Instant recharge
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Special offers & discounts
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Recharge history
                </li>
              </ul>
              <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
                <Link to="/services/mobile-recharge">
                  Learn More
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Business Solutions */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Business Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade payment solutions for businesses of all sizes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* B2C Solutions */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">B2C Solutions</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Direct sales portals that facilitate seamless transactions between 
                businesses and consumers with intuitive, user-friendly interfaces.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Customer payment portals
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Subscription management
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Analytics & reporting
                </li>
              </ul>
              <Button asChild variant="outline" className="w-full">
                <Link to="/services/b2c">Learn More</Link>
              </Button>
            </div>

            {/* B2B Solutions */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">B2B Platform</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Enterprise-grade solutions enabling businesses to trade goods and 
                services efficiently with advanced features and robust security.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Bulk payment processing
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  API integrations
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Custom reporting
                </li>
              </ul>
              <Button asChild variant="outline" className="w-full">
                <Link to="/services/b2b">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
