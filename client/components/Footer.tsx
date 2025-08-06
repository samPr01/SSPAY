import { Link } from "react-router-dom";
import {
  Wallet,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-brand-500 to-brand-600 rounded-lg flex items-center justify-center">
                <Wallet className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Samaysagarpay</span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Revolutionizing digital payments with secure, fast, and reliable
              solutions for businesses and individuals worldwide.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition-colors flex items-center group"
                >
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-gray-400 hover:text-white transition-colors flex items-center group"
                >
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  to="/refunds"
                  className="text-gray-400 hover:text-white transition-colors flex items-center group"
                >
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Refunds & Cancellations
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition-colors flex items-center group"
                >
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-400 mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  <p>213, Diamond Trading Centre</p>
                  <p>Indore (MP) 452001</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-400 flex-shrink-0" />
                <a
                  href="mailto:support@samaysagarpay.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  support@samaysagarpay.com
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Samaysagarpay. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/security"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Security
              </Link>
              <Link
                to="/cookies"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
