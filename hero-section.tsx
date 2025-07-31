import { Button } from "@/components/ui/button";
import { Download, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function HeroSection() {
  const { toast } = useToast();

  const handleRateCardDownload = async () => {
    try {
      const response = await fetch('/api/rate-card');
      const data = await response.json();
      toast({
        title: "Rate Card Download",
        description: data.message,
      });
    } catch (error) {
      toast({
        title: "Download Error",
        description: "Unable to download rate card. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleAdvertisingInquiry = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-deep-charcoal to-gray-800 text-white py-20">
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
          alt="Premium advertising displays" 
          className="w-full h-full object-cover" 
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-playfair text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Reach the Most 
              <span className="text-gold"> Premium Households</span> 
              of Delhi NCR
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Connect with affluent English-reading households across South Delhi, Gurgaon, West Delhi, Faridabad, Dwarka & Noida through our established neighborhood weekly since 2001.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleRateCardDownload}
                className="bg-gold text-deep-charcoal hover:bg-yellow-500 font-semibold text-lg px-8 py-4 h-auto"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Rate Card
              </Button>
              <Button 
                onClick={handleAdvertisingInquiry}
                variant="outline"
                className="border-2 border-gold text-gold hover:bg-gold hover:text-deep-charcoal font-semibold text-lg px-8 py-4 h-auto bg-transparent"
              >
                <Phone className="mr-2 h-5 w-5" />
                Discuss Advertising
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-gold mb-2">17</div>
              <div className="text-sm text-gray-300">Editions</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-gold mb-2">100%</div>
              <div className="text-sm text-gray-300">Coverage</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-gold mb-2">22+</div>
              <div className="text-sm text-gray-300">Years Established</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-gold mb-2">40K</div>
              <div className="text-sm text-gray-300">Luxury Connection</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
