import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const coverageAreas = [
  {
    name: "South Delhi",
    description: "Premium residential colonies including Greater Kailash, Vasant Vihar, and Defence Colony",
    households: "25,000+ Households",
    demographic: "HNI Families",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    name: "Gurgaon",
    description: "Corporate executives and business leaders in DLF, Golf Course Road, and Sector areas",
    households: "30,000+ Households",
    demographic: "Corporate Leaders",
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    name: "West Delhi",
    description: "Affluent families in Rajouri Garden, Janakpuri, and surrounding premium localities",
    households: "20,000+ Households",
    demographic: "Business Families",
    image: "https://images.unsplash.com/photo-1590608897129-79da98d15969?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    name: "Noida",
    description: "Tech professionals and entrepreneurs in premium sectors of Noida and Greater Noida",
    households: "22,000+ Households",
    demographic: "Tech Leaders",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  }
];

export default function CoverageAreas() {
  const handleDetailedCoverage = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="coverage" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl font-bold text-deep-charcoal mb-4">Premium Coverage Areas</h2>
          <p className="text-xl text-sophisticated-gray max-w-3xl mx-auto">
            Strategic distribution across Delhi NCR's most affluent neighborhoods, reaching the decision-makers and premium consumers in your target market.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {coverageAreas.map((area, index) => (
            <div key={index} className="group hover:shadow-2xl transition-all duration-300 rounded-xl overflow-hidden border border-gray-200">
              <img 
                src={area.image} 
                alt={`${area.name} affluent neighborhood`} 
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
              />
              <div className="p-6">
                <h3 className="font-playfair text-2xl font-semibold text-deep-charcoal mb-2">{area.name}</h3>
                <p className="text-sophisticated-gray mb-4">{area.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gold font-semibold">{area.households}</span>
                  <span className="text-sm text-sophisticated-gray">{area.demographic}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-elegant-blue to-gold rounded-2xl p-8 text-white text-center">
          <h3 className="font-playfair text-3xl font-bold mb-4">Total Reach: 100,000+ Premium Households</h3>
          <p className="text-xl mb-6 opacity-90">Connect with Delhi NCR's most affluent English-reading families through our targeted distribution network</p>
          <Button 
            onClick={handleDetailedCoverage}
            className="bg-white text-deep-charcoal hover:bg-gray-100 font-semibold"
          >
            <MapPin className="mr-2 h-5 w-5" />
            View Detailed Coverage Map
          </Button>
        </div>
      </div>
    </section>
  );
}
