import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toast } = useToast();

  const handleRateCardDownload = () => {
    toast({
      title: "Rate Card Download",
      description: "Your rate card download will begin shortly.",
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <h1 className="font-playfair text-2xl font-bold text-deep-charcoal">News of the Week</h1>
              <p className="text-xs text-sophisticated-gray font-medium">Since 2001 • Delhi NCR's Premier Weekly</p>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-deep-charcoal hover:text-gold px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('advertising')} 
                className="text-deep-charcoal hover:text-gold px-3 py-2 text-sm font-medium transition-colors"
              >
                Advertising
              </button>
              <button 
                onClick={() => scrollToSection('coverage')} 
                className="text-deep-charcoal hover:text-gold px-3 py-2 text-sm font-medium transition-colors"
              >
                Coverage
              </button>
              <button 
                onClick={() => scrollToSection('luxury-connection')} 
                className="text-deep-charcoal hover:text-gold px-3 py-2 text-sm font-medium transition-colors"
              >
                Luxury Connection
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')} 
                className="text-deep-charcoal hover:text-gold px-3 py-2 text-sm font-medium transition-colors"
              >
                Testimonials
              </button>
              <Button 
                onClick={handleRateCardDownload}
                className="bg-gold text-deep-charcoal hover:bg-yellow-600 font-semibold"
              >
                Get Rate Card
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-deep-charcoal hover:text-gold"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-2">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-deep-charcoal hover:text-gold px-3 py-2 text-sm font-medium transition-colors text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('advertising')} 
                className="text-deep-charcoal hover:text-gold px-3 py-2 text-sm font-medium transition-colors text-left"
              >
                Advertising
              </button>
              <button 
                onClick={() => scrollToSection('coverage')} 
                className="text-deep-charcoal hover:text-gold px-3 py-2 text-sm font-medium transition-colors text-left"
              >
                Coverage
              </button>
              <button 
                onClick={() => scrollToSection('luxury-connection')} 
                className="text-deep-charcoal hover:text-gold px-3 py-2 text-sm font-medium transition-colors text-left"
              >
                Luxury Connection
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')} 
                className="text-deep-charcoal hover:text-gold px-3 py-2 text-sm font-medium transition-colors text-left"
              >
                Testimonials
              </button>
              <Button 
                onClick={handleRateCardDownload}
                className="bg-gold text-deep-charcoal hover:bg-yellow-600 font-semibold mx-3 mt-2"
              >
                Get Rate Card
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
