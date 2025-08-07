import { HeroSection } from "../components/HeroSection";
import { ServicesSection } from "../components/ServicesSection";
import { ContactSection } from "../components/ContactSection";
import { StatsSection } from "../components/StatsSection";
import { Shield, Users, Globe, Award, CheckCircle, Target, CreditCard, Smartphone, Building } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

export default function Index() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      

      {/* Why Choose Us Section */}
      <section className="bg-gradient-to-br from-brand-50 via-indigo-50 to-purple-50 py-24 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-brand-600 via-brand-500 to-blue-600 bg-clip-text text-transparent mb-6 text-center">
              Built for Modern India
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
              Experience the next generation of digital payments with our comprehensive platform
              designed for businesses and individuals across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* B2C Solutions */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-center items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-brand-500 to-brand-600 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">B2C Solutions</h3>
              <p className="text-gray-600 mb-6">
                Direct sales portals that facilitate seamless transactions between businesses and consumers with intuitive interfaces.
              </p>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-600">15K+</div>
                <div className="text-sm text-gray-500">Business Partners</div>
              </div>
            </div>

            {/* B2B Platform */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-center items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-brand-500 to-brand-600 rounded-2xl flex items-center justify-center mb-6">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">B2B Platform</h3>
              <p className="text-gray-600 mb-6">
                Enterprise-grade solutions enabling businesses to trade goods and services efficiently with advanced features.
              </p>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-600">500+</div>
                <div className="text-sm text-gray-500">Enterprise Clients</div>
              </div>
            </div>

            {/* Trusted Network */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-center items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-brand-500 to-brand-600 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Trusted by 50k+</h3>
              <p className="text-gray-600 mb-6">
                Join thousands of satisfied customers who trust our platform for secure and reliable digital payment solutions.
              </p>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-600">99.8%</div>
                <div className="text-sm text-gray-500">Customer Satisfaction</div>
              </div>
            </div>

            {/* Mobile Ready */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-center items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-brand-500 to-brand-600 rounded-2xl flex items-center justify-center mb-6">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mobile Ready</h3>
              <p className="text-gray-600 mb-6">
                Fully optimized mobile applications and responsive design ensuring seamless experiences across all devices.
              </p>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-600">2M+</div>
                <div className="text-sm text-gray-500">App Downloads</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services Overview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-brand-600 via-brand-500 to-blue-600 bg-clip-text text-transparent mb-6 text-center">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
              Comprehensive digital payment solutions for all your financial needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Money Transfer */}
            <div className="group text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-brand-500 to-brand-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <CreditCard className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Money Transfer</h3>
              <p className="text-gray-600 mb-4">
                Send money across India instantly with competitive rates and secure processing.
              </p>
              <div className="text-center mb-4">
                <div className="text-2xl font-bold text-blue-600">3Cr+</div>
                <div className="text-sm text-gray-500">Monthly Transfers</div>
              </div>
              <Button asChild variant="outline">
                <Link to="/services">Explore Service</Link>
              </Button>
            </div>

            {/* Bill Payment */}
            <div className="group text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-brand-500 to-brand-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bill Payment</h3>
              <p className="text-gray-600 mb-4">
                Pay all your utility bills, mobile recharges, and services in one place.
              </p>
              <div className="text-center mb-4">
                <div className="text-2xl font-bold text-green-600">5L+</div>
                <div className="text-sm text-gray-500">Bills Paid Monthly</div>
              </div>
              <Button asChild variant="outline">
                <Link to="/services">Explore Service</Link>
              </Button>
            </div>

            {/* Business Solutions */}
            <div className="group text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-brand-500 to-brand-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Building className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Business Solutions</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive payment solutions for businesses of all sizes.
              </p>
              <div className="text-center mb-4">
                <div className="text-2xl font-bold text-purple-600">15K+</div>
                <div className="text-sm text-gray-500">Business Partners</div>
              </div>
              <Button asChild variant="outline">
                <Link to="/services">Explore Service</Link>
              </Button>
            </div>
          </div>

          <div className="text-center">
            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white"
            >
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
