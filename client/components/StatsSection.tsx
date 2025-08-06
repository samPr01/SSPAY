import { Users, DollarSign, CreditCard, Clock, TrendingUp, Globe } from 'lucide-react';

export function StatsSection() {
  return (
    <section className="bg-gradient-to-r from-brand-600 to-purple-600 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 text-white text-center">
          <div>
            <div className="flex items-center justify-center mb-2">
              <Users className="w-6 h-6 mr-2" />
              <div className="text-2xl font-bold">50K+</div>
            </div>
            <div className="text-brand-100 text-sm">Active Users</div>
          </div>
          
          <div>
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="w-6 h-6 mr-2" />
              <div className="text-2xl font-bold">₹200Cr+</div>
            </div>
            <div className="text-brand-100 text-sm">Transactions</div>
          </div>
          
          <div>
            <div className="flex items-center justify-center mb-2">
              <CreditCard className="w-6 h-6 mr-2" />
              <div className="text-2xl font-bold">1M+</div>
            </div>
            <div className="text-brand-100 text-sm">Money Transfers</div>
          </div>
          
          <div>
            <div className="flex items-center justify-center mb-2">
              <Clock className="w-6 h-6 mr-2" />
              <div className="text-2xl font-bold">99.9%</div>
            </div>
            <div className="text-brand-100 text-sm">Uptime</div>
          </div>
          
          <div>
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="w-6 h-6 mr-2" />
              <div className="text-2xl font-bold">5L+</div>
            </div>
            <div className="text-brand-100 text-sm">Bill Payments</div>
          </div>
          
          <div>
            <div className="flex items-center justify-center mb-2">
              <Globe className="w-6 h-6 mr-2" />
              <div className="text-2xl font-bold">24/7</div>
            </div>
            <div className="text-brand-100 text-sm">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}
