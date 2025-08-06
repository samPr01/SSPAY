import { ArrowRight, Play, Smartphone, Shield, Zap, Globe } from 'lucide-react';
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
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Digital payments
              <span className="block bg-gradient-to-r from-brand-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
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
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Start Sending Money
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-gray-300 hover:border-brand-300 hover:bg-brand-50 transition-all duration-300"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>

            {/* App Store Badges */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <div className="flex items-center space-x-4">
                <img 
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                  alt="Download on App Store" 
                  className="h-12 hover:scale-105 transition-transform cursor-pointer"
                />
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                  alt="Get it on Google Play" 
                  className="h-12 hover:scale-105 transition-transform cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Hero Image/Illustration */}
          <div className="mt-12 lg:mt-0 lg:col-span-6">
            <div className="relative">
              {/* Phone mockup */}
              <div className="relative z-10 mx-auto w-80 h-96 bg-gradient-to-br from-gray-900 to-gray-800 rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-brand-50 to-purple-50 rounded-[2.5rem] overflow-hidden">
                  {/* Phone screen content */}
                  <div className="p-6 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-sm font-medium text-gray-700">9:41 AM</div>
                      <div className="flex space-x-1">
                        <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
                        <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
                        <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="text-center mb-8">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Send Money</h3>
                      <div className="text-3xl font-bold text-brand-600">$2,500.00</div>
                    </div>

                    <div className="space-y-4 flex-1">
                      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-white/50">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-green-500 rounded-full"></div>
                          <div>
                            <div className="font-medium text-gray-900">John Doe</div>
                            <div className="text-sm text-gray-600">+1 (555) 123-4567</div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-white/50">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full"></div>
                          <div>
                            <div className="font-medium text-gray-900">Sarah Wilson</div>
                            <div className="text-sm text-gray-600">+1 (555) 987-6543</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button className="w-full bg-gradient-to-r from-brand-500 to-brand-600 text-white font-medium py-4 rounded-2xl">
                      Send Money
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -top-4 -left-8 w-24 h-16 bg-white rounded-xl shadow-lg border border-gray-200 p-3 animate-bounce">
                <div className="w-full h-2 bg-gradient-to-r from-green-400 to-green-500 rounded-full mb-2"></div>
                <div className="text-xs font-medium text-gray-700">Transfer Complete</div>
              </div>
              
              <div className="absolute -bottom-4 -right-8 w-28 h-20 bg-white rounded-xl shadow-lg border border-gray-200 p-3 animate-pulse">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <div className="text-xs font-medium text-gray-700">$1,250</div>
                </div>
                <div className="text-xs text-gray-500">Received</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
