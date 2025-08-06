import { Users, TrendingUp, CreditCard, Clock, Shield } from 'lucide-react';

export function StatsSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white rounded-lg p-4 shadow-sm border">
            <div className="flex items-center justify-center mb-2">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <Users className="w-4 h-4 text-blue-600" />
              </div>
            </div>
            <div className="text-xl font-bold text-gray-900 mb-1">50K+</div>
            <div className="text-gray-600 text-sm">Active Users</div>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm border">
            <div className="flex items-center justify-center mb-2">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-green-600" />
              </div>
            </div>
            <div className="text-xl font-bold text-gray-900 mb-1">₹200Cr+</div>
            <div className="text-gray-600 text-sm">Transactions</div>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm border">
            <div className="flex items-center justify-center mb-2">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <CreditCard className="w-4 h-4 text-purple-600" />
              </div>
            </div>
            <div className="text-xl font-bold text-gray-900 mb-1">3Cr+</div>
            <div className="text-gray-600 text-sm">Money Transfers</div>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm border">
            <div className="flex items-center justify-center mb-2">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-orange-600" />
              </div>
            </div>
            <div className="text-xl font-bold text-gray-900 mb-1">5L+</div>
            <div className="text-gray-600 text-sm">Bill Payments</div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
