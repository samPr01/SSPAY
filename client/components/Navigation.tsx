import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Wallet, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-brand-500 to-brand-600 rounded-lg flex items-center justify-center">
              <Wallet className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-brand-600 to-brand-700 bg-clip-text text-transparent">
              PayFlow
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-brand-600 font-medium transition-colors"
            >
              Home
            </Link>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-brand-600 font-medium transition-colors">
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link to="/services/money-transfer" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Money Transfer</Link>
                  <Link to="/services/bill-payment" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Bill Payment</Link>
                  <Link to="/services/mobile-recharge" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Mobile Recharge</Link>
                </div>
              </div>
            </div>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-brand-600 font-medium transition-colors"
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-brand-600 font-medium transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/login" 
              className="text-gray-700 hover:text-brand-600 font-medium transition-colors"
            >
              Log In
            </Link>
            <Button 
              asChild
              className="bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white shadow-lg"
            >
              <Link to="/signup">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-brand-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className="text-gray-700 hover:text-brand-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-brand-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-brand-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/login" 
                className="text-gray-700 hover:text-brand-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Log In
              </Link>
              <Button 
                asChild
                className="bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white w-full"
              >
                <Link to="/signup" onClick={() => setIsOpen(false)}>Get Started</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
