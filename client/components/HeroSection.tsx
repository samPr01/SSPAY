import { ArrowRight, Play, Smartphone, Shield, Zap, Globe, CreditCard } from 'lucide-react';
import { Button } from './ui/button';

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-brand-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-indigo-200/40 to-pink-200/40 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-cyan-200/20 to-blue-200/20 rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center">
          {/* Content */}
          <div className="lg:col-span-6">
            <div className="mb-8">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-brand-100 to-purple-100 text-brand-700 border border-brand-200/50">
                <Zap className="w-4 h-4 mr-2" />
                Instant & Secure Transfers
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Digital payments
              </span>
              <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                made simple
              </span>
            </h1>
            
            <p className="mt-6 text-xl text-gray-600 leading-relaxed max-w-2xl">
              Experience the future of digital transactions with our secure, fast, and reliable payment platform. 
              Send money, pay bills, and manage finances effortlessly.
            </p>

            {/* Features */}
            <div className="mt-8 grid grid-cols-2 gap-4 max-w-lg">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-green-400 to-green-500 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-700 font-medium">Bank-level Security</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-700 font-medium">Instant Transfers</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-purple-400 to-purple-500 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-700 font-medium">Global Reach</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-pink-400 to-pink-500 rounded-lg flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-700 font-medium">24/7 Support</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10">
              <Button
                size="lg"
                className="bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-4 text-lg"
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Hero Illustration */}
          <div className="mt-12 lg:mt-0 lg:col-span-6">
            <div className="relative">
              {/* Modern geometric illustration */}
              <div className="relative z-10 mx-auto max-w-lg">
                <div className="bg-gradient-to-br from-brand-100 via-purple-100 to-pink-100 rounded-3xl p-12 shadow-2xl">
                  <div className="text-center space-y-8">
                    {/* Payment Icons Grid */}
                    <div className="grid grid-cols-3 gap-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <CreditCard className="w-8 h-8 text-white" />
                      </div>
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <Globe className="w-8 h-8 text-white" />
                      </div>
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <Shield className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Central Focus */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Secure Payments</h3>
                      <p className="text-gray-600">Fast, reliable, and secure digital transactions</p>
                    </div>

                    {/* Stats Display */}
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="bg-white/60 rounded-xl p-4">
                        <div className="text-2xl font-bold text-brand-600">50K+</div>
                        <div className="text-sm text-gray-600">Users</div>
                      </div>
                      <div className="bg-white/60 rounded-xl p-4">
                        <div className="text-2xl font-bold text-brand-600">24/7</div>
                        <div className="text-sm text-gray-600">Support</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
