import { Shield, Zap, Globe, Smartphone } from "lucide-react";

export function HeroSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 flex flex-col justify-center items-center">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-brand-100 to-purple-100 text-brand-700 border border-brand-200/50">
            <Zap className="w-4 h-4 mr-2" />
            Instant & Secure Transfers
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          <span className="bg-gradient-to-r from-brand-600 via-brand-500 to-blue-600 bg-clip-text text-transparent">
            Digital payments made simple
          </span>
        </h1>

        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12">
          Experience the future of digital transactions with our secure, fast,
          and reliable payment platform. Send money, pay bills, and manage
          finances effortlessly.
        </p>

        {/* Features - Centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-16">
          <div className="flex flex-col items-center space-y-3">
            <div className="w-12 h-12 bg-gradient-to-r from-brand-500 to-brand-600 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-gray-700 font-medium text-sm">
              Instant Transfers
            </span>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <div className="w-12 h-12 bg-gradient-to-r from-brand-500 to-brand-600 rounded-lg flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <span className="text-gray-700 font-medium text-sm">
              Global Reach
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
