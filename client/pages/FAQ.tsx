import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { StatsSection } from '../components/StatsSection';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is Samaysagarpay?",
    answer: "Samaysagarpay is a comprehensive digital payment platform that allows you to send money, pay bills, recharge mobile phones, and manage various financial transactions securely and conveniently."
  },
  {
    question: "How do I create an account?",
    answer: "You can create an account by clicking on 'Get Started' in the top navigation, then selecting 'Sign Up'. You'll need to provide your basic information, verify your mobile number and email address."
  },
  {
    question: "Is Samaysagarpay safe and secure?",
    answer: "Yes, we use bank-level security measures including 256-bit SSL encryption, two-factor authentication, and comply with all RBI guidelines. Your financial information is always protected."
  },
  {
    question: "What are the transaction limits?",
    answer: "Transaction limits vary based on your KYC verification level. Basic KYC allows up to ₹10,000 per month, while full KYC verification allows up to ₹1,00,000 per month."
  },
  {
    question: "How long do money transfers take?",
    answer: "Most money transfers are completed instantly. In some cases, transfers may take up to 30 minutes depending on the recipient's bank and network conditions."
  },
  {
    question: "What are the charges for money transfer?",
    answer: "We offer competitive rates with transparent pricing. Transfer charges start from as low as ₹2 per transaction. Exact charges depend on the transfer amount and destination."
  },
  {
    question: "Can I pay bills through Samaysagarpay?",
    answer: "Yes, you can pay various bills including electricity, water, gas, DTH, broadband, and mobile postpaid bills. We support all major service providers across India."
  },
  {
    question: "What mobile recharge options are available?",
    answer: "We support prepaid mobile recharges for all major telecom operators in India including Airtel, Jio, Vi, BSNL, and others. You can also purchase data packs and special offers."
  },
  {
    question: "How do I track my transactions?",
    answer: "All your transactions are tracked in real-time. You can view transaction history, status, and receipts in your account dashboard. You'll also receive SMS and email confirmations."
  },
  {
    question: "What if my transaction fails?",
    answer: "If a transaction fails, the amount is automatically refunded to your wallet or original payment method within 24-48 hours. You can also contact our support team for immediate assistance."
  },
  {
    question: "Do you offer customer support?",
    answer: "Yes, we provide 24/7 customer support through email at support@samaysagarpay.com. Our support team is trained to help you with any queries or issues."
  },
  {
    question: "Can businesses use Samaysagarpay?",
    answer: "Absolutely! We offer comprehensive B2B solutions for businesses including bulk payments, API integrations, and custom reporting. Contact us for enterprise solutions."
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept various payment methods including UPI, net banking, debit cards, credit cards, and wallet top-ups. You can also add money to your Samaysagarpay wallet."
  },
  {
    question: "How do I update my profile information?",
    answer: "You can update your profile information by logging into your account and visiting the 'Profile' section. Some changes may require verification for security purposes."
  },
  {
    question: "What happens if I forget my password?",
    answer: "If you forget your password, click on 'Forgot Password' on the login page. You'll receive a password reset link via email. Follow the instructions to create a new password."
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about Samaysagarpay services, 
              security, and how to get the most out of our platform.
            </p>
          </div>
        </div>
      </section>

      <StatsSection />

      {/* FAQ Content */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 rounded-2xl"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  {openItems.includes(index) ? (
                    <ChevronDown className="w-5 h-5 text-brand-600 flex-shrink-0" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Support */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-brand-50 to-purple-50 rounded-3xl p-8 border border-brand-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Still have questions?
              </h3>
              <p className="text-gray-600 mb-6">
                Can't find the answer you're looking for? Our support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:support@samaysagarpay.com"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-medium rounded-lg transition-colors"
                >
                  Contact Support
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-brand-300 text-brand-700 font-medium rounded-lg hover:bg-brand-50 transition-colors"
                >
                  Visit Contact Page
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
