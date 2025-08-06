import { useLocation, useParams } from 'react-router-dom';
import { Construction, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';

export default function PlaceholderPage() {
  const location = useLocation();
  const params = useParams();
  
  const getPageTitle = () => {
    if (params.service) {
      return params.service.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
    }
    
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const lastSegment = pathSegments[pathSegments.length - 1];
    return lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="w-24 h-24 bg-gradient-to-r from-brand-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <Construction className="w-12 h-12 text-brand-600" />
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {getPageTitle()} Page
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          This page is currently under development. We're working hard to bring you 
          an amazing experience. Please check back soon!
        </p>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Want this page completed?
          </h3>
          <p className="text-gray-600 mb-4">
            Continue prompting our AI to fill in the content for this page, 
            or let us know what specific functionality you'd like to see here.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild
            size="lg"
            className="bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white"
          >
            <a href="/">
              Back to Home
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            asChild
          >
            <a href="/contact">Contact Support</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
