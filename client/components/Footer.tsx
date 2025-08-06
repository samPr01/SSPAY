import { Link } from "react-router-dom";
import { Wallet, Mail, MapPin, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content - All in one row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-brand-500 to-brand-600 rounded-lg flex items-center justify-center">
                <Wallet className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold">Samaysagarpay</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Secure digital payment solutions for businesses and individuals.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-base font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div className="text-center">
            <h3 className="text-base font-semibold mb-4">Address</h3>
            <div className="flex flex-col items-center space-y-1">
              <MapPin className="w-4 h-4 text-blue-400 mb-2" />
              <div className="text-gray-400 text-sm">
                <p className="font-medium">213, Diamond Trading Centre</p>
                <p>New Palasia Indore 474001</p>
                <p>(MP) India</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center">
            <h3 className="text-base font-semibold mb-4">Contact</h3>
            <div className="flex flex-col items-center space-y-2">
              <Mail className="w-4 h-4 text-purple-400" />
              <a
                href="mailto:agentxofficialwork@gmail.com"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                agentxofficialwork@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Samaysagarpay. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
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
