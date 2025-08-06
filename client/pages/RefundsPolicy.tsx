import { Clock, Shield, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';
import { StatsSection } from '../components/StatsSection';

export default function RefundsPolicy() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Refunds & Cancellations Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Understanding our refund and cancellation policies to ensure 
              transparent and fair transactions for all our users.
            </p>
          </div>
        </div>
      </section>

      <StatsSection />

      {/* Policy Content */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Overview */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-brand-50 to-purple-50 rounded-3xl p-8 border border-brand-100 mb-12">
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 text-brand-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Policy Overview</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                At Samaysagarpay, we are committed to providing reliable and secure digital payment services. 
                This policy outlines the terms and conditions for refunds and cancellations across all our services. 
                We strive to process all eligible refunds promptly while maintaining the security and integrity of our platform.
              </p>
            </div>
          </div>

          {/* Money Transfer Refunds */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Money Transfer Refunds</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Eligible for Refund</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 mt-1 mr-2 text-green-600 flex-shrink-0" />
                    Transaction failed due to technical error
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 mt-1 mr-2 text-green-600 flex-shrink-0" />
                    Money debited but not received by beneficiary
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 mt-1 mr-2 text-green-600 flex-shrink-0" />
                    Duplicate transactions
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 mt-1 mr-2 text-green-600 flex-shrink-0" />
                    Incorrect amount transferred due to system error
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
                <div className="flex items-center mb-4">
                  <AlertCircle className="w-6 h-6 text-red-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Not Eligible for Refund</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 mt-1 mr-2 text-red-600 flex-shrink-0" />
                    Successful transfers to correct beneficiary
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 mt-1 mr-2 text-red-600 flex-shrink-0" />
                    Incorrect beneficiary details entered by user
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 mt-1 mr-2 text-red-600 flex-shrink-0" />
                    User-initiated cancellation after successful transfer
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-4 h-4 mt-1 mr-2 text-red-600 flex-shrink-0" />
                    Disputes after 30 days of transaction
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Refund Timeline</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Eligible refunds for money transfers are processed within <strong>3-5 business days</strong> 
                from the date of raising the complaint. The refunded amount will be credited to your 
                original payment source.
              </p>
            </div>
          </div>

          {/* Bill Payment Refunds */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Bill Payment Refunds</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Failed Bill Payments</h3>
                <p className="text-gray-700 mb-4">
                  If your bill payment fails due to technical issues or service provider errors, 
                  the full amount will be automatically refunded to your Samaysagarpay wallet within 24-48 hours.
                </p>
                <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                  <p className="text-yellow-800 text-sm">
                    <strong>Note:</strong> If the bill payment is successful but you wish to cancel, 
                    please contact the respective service provider directly as we cannot reverse successful payments.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Duplicate Payments</h3>
                <p className="text-gray-700">
                  In case of duplicate bill payments due to technical errors, the excess amount 
                  will be refunded within 5-7 business days after verification with the service provider.
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Recharge Refunds */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Mobile Recharge Refunds</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Failed Recharges</h3>
                <p className="text-gray-700 mb-4">
                  Failed mobile recharges are automatically refunded to your Samaysagarpay wallet 
                  within 30 minutes. If the refund is not processed automatically, please contact our support team.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Wrong Number Recharges</h3>
                <p className="text-gray-700">
                  Recharges done to wrong mobile numbers cannot be refunded as they are processed 
                  instantly. Please double-check the mobile number before confirming the transaction.
                </p>
              </div>
            </div>
          </div>

          {/* Cancellation Policy */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Cancellation Policy</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Before Processing</h3>
                <p className="text-gray-700 mb-4">
                  Transactions can be cancelled before they are processed. Once you initiate a transaction, 
                  you have a brief window to cancel before it's sent for processing.
                </p>
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <p className="text-green-800 text-sm">
                    Cancellation is possible within 30 seconds of transaction initiation for money transfers.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">After Processing</h3>
                <p className="text-gray-700 mb-4">
                  Once a transaction is successfully processed and completed, cancellation is not possible. 
                  However, you may be eligible for a refund under specific circumstances mentioned above.
                </p>
                <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                  <p className="text-red-800 text-sm">
                    Processed transactions cannot be cancelled, only refunded if eligible.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* How to Request Refund */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">How to Request a Refund</h2>
            
            <div className="bg-gradient-to-r from-brand-50 to-purple-50 rounded-3xl p-8 border border-brand-100">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact Support</h3>
                  <p className="text-gray-600">
                    Email us at support@samaysagarpay.com with your transaction details
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Provide Information</h3>
                  <p className="text-gray-600">
                    Share transaction ID, amount, date, and reason for refund request
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Get Resolution</h3>
                  <p className="text-gray-600">
                    Our team will review and process eligible refunds within specified timelines
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-50 rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Need Help?</h2>
            <div className="text-center">
              <p className="text-gray-600 mb-6">
                For any questions regarding refunds and cancellations, please don't hesitate to contact our support team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:support@samaysagarpay.com"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-medium rounded-lg transition-colors"
                >
                  Email Support
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-brand-300 text-brand-700 font-medium rounded-lg hover:bg-brand-50 transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
