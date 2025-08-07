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
  ArrowRight,
} from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export function ServicesSection() {
  return (
    <div className="py-24 bg-white text-center">
      {/* About Company Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-brand-100 to-purple-100 text-brand-700 border border-brand-200/50">
              <Zap className="w-4 h-4 mr-2" />
              Revolutionizing Digital Payments
            </span>
          </div>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Our platform transforms how businesses and individuals handle
            digital transactions. With cutting-edge technology and
            uncompromising security, we provide seamless payment solutions that
            adapt to your needs.
          </p>
        </div>

        <div className="flex gap-16 justify-center flex-row">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-12 bg-gradient-to-r from-brand-500 to-brand-600 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-1 text-sm">
                  Lightning Fast
                </h4>
                <p className="text-xs text-gray-600">Instant processing</p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-12 bg-gradient-to-r from-brand-500 to-brand-600 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-1 text-sm">
                  24/7 Support
                </h4>
                <p className="text-xs text-gray-600">Round-the-clock</p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-12 bg-gradient-to-r from-brand-500 to-brand-600 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-1 text-sm">
                  5L+ Payments
                </h4>
                <p className="text-xs text-gray-600">Processed monthly</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gradient-to-br from-brand-50 via-indigo-50 to-purple-50 py-24 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-brand-100 to-purple-100 text-brand-700 border border-brand-200/50">
                <Shield className="w-4 h-4 mr-2" />
                Why Choose Samaysagarpay
              </span>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the next generation of digital payments with our
              comprehensive platform designed for businesses of all sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* B2C Portals */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-center items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-brand-500 to-brand-600 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-brand-600 via-brand-500 to-blue-600 bg-clip-text text-transparent mb-4">
                B2C Solutions
              </h3>
              <p className="text-gray-600 mb-6">
                Direct sales portals that facilitate seamless transactions
                between businesses and consumers with intuitive interfaces.
              </p>
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link to="/">Learn More</Link>
              </Button>
            </div>

            {/* B2B Platform */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-center items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-brand-500 to-brand-600 rounded-2xl flex items-center justify-center mb-6">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-brand-600 via-brand-500 to-blue-600 bg-clip-text text-transparent mb-4">
                B2B Platform
              </h3>
              <p className="text-gray-600 mb-6">
                Enterprise-grade solutions enabling businesses to trade goods
                and services efficiently with advanced features.
              </p>
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link to="/">Learn More</Link>
              </Button>
            </div>

            {/* Trusted Network */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-center items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-brand-500 to-brand-600 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-brand-600 via-brand-500 to-blue-600 bg-clip-text text-transparent mb-4">
                Trusted by 10k+
              </h3>
              <p className="text-gray-600 mb-6">
                Join thousands of satisfied customers who trust our platform for
                secure and reliable digital payment solutions.
              </p>
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link to="/">Learn More</Link>
              </Button>
            </div>

            {/* Mobile Ready */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-center items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-brand-500 to-brand-600 rounded-2xl flex items-center justify-center mb-6">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-brand-600 via-brand-500 to-blue-600 bg-clip-text text-transparent mb-4">
                Mobile Ready
              </h3>
              <p className="text-gray-600 mb-6">
                Fully optimized mobile applications and responsive design
                ensuring seamless experiences across all devices.
              </p>
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link to="/">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-brand-600 via-brand-500 to-blue-600 bg-clip-text text-transparent mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive payment solutions tailored to meet diverse business
              and personal needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Money Transfer */}
            <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 hover:shadow-xl transition-all duration-300 flex flex-col justify-center items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-brand-500 to-brand-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-brand-600 via-brand-500 to-blue-600 bg-clip-text text-transparent mb-4">
                Money Transfer
              </h3>
              <p className="text-gray-600 mb-6">
                Send money globally with competitive rates and instant
                processing. Secure, fast, and reliable transfers worldwide.
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
            <div className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100 hover:shadow-xl transition-all duration-300 flex flex-col justify-center items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-brand-500 to-brand-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-brand-600 via-brand-500 to-blue-600 bg-clip-text text-transparent mb-4">
                Bill Payment
              </h3>
              <p className="text-gray-600 mb-6">
                Pay utilities, services, and bills online with ease. Schedule
                payments and never miss a due date again.
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
            <div className="group bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100 hover:shadow-xl transition-all duration-300 text-center flex flex-col justify-center items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-brand-500 to-brand-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-center">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-brand-600 via-brand-500 to-blue-600 bg-clip-text text-transparent mb-4">
                Mobile Recharge
              </h3>
              <p className="text-gray-600 mb-6">
                Top up mobile phones instantly with support for all major
                carriers. Quick, convenient, and secure.
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
