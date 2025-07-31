import { Button } from "@/components/ui/button";
import { Check, Star, Target, Newspaper } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const packages = [
  {
    name: "Premium Display",
    description: "Full-page premium positioning",
    price: "₹50,000",
    period: "Per Edition",
    features: [
      "Full-page advertisement",
      "Premium positioning",
      "Color printing included",
      "All 17 editions"
    ],
    type: "premium"
  },
  {
    name: "Elite Package",
    description: "Multi-edition comprehensive reach",
    price: "₹1,25,000",
    period: "Monthly Package",
    features: [
      "Multiple ad formats",
      "Priority positioning",
      "Digital edition inclusion",
      "Performance analytics"
    ],
    type: "elite",
    popular: true
  },
  {
    name: "Custom Solution",
    description: "Tailored to your specific needs",
    price: "Custom",
    period: "Based on Requirements",
    features: [
      "Flexible formats",
      "Targeted areas only",
      "Custom timing",
      "Dedicated support"
    ],
    type: "custom"
  }
];

const whyChooseFeatures = [
  {
    icon: Star,
    title: "Established Credibility",
    description: "22+ years of trusted journalism and community service"
  },
  {
    icon: Target,
    title: "Precise Targeting",
    description: "Reach 100% English-reading households in premium areas"
  },
  {
    icon: Newspaper,
    title: "Premium Distribution",
    description: "Distributed with mainline English dailies"
  }
];

export default function AdvertisingPackages() {
  const { toast } = useToast();

  const handlePackageInquiry = (packageType: string) => {
    toast({
      title: "Package Inquiry",
      description: `We'll contact you regarding the ${packageType} package.`,
    });
  };

  const handleCustomInquiry = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="advertising" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl font-bold text-deep-charcoal mb-4">Premium Advertising Solutions</h2>
          <p className="text-xl text-sophisticated-gray max-w-3xl mx-auto">
            Choose from our comprehensive advertising packages designed to maximize your brand's reach among Delhi NCR's most affluent households.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                pkg.popular ? 'border-2 border-gold relative' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-gold text-deep-charcoal px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
              )}
              <div className="p-8">
                <div className="text-center mb-6">
                  <h3 className="font-playfair text-2xl font-bold text-deep-charcoal mb-2">{pkg.name}</h3>
                  <p className="text-sophisticated-gray">{pkg.description}</p>
                </div>
                
                <div className="text-center mb-8">
                  <div className="text-4xl font-bold text-gold mb-2">{pkg.price}</div>
                  <div className="text-sm text-sophisticated-gray">{pkg.period}</div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sophisticated-gray">
                      <Check className="h-5 w-5 text-gold mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={pkg.type === 'custom' ? handleCustomInquiry : () => handlePackageInquiry(pkg.name)}
                  className={`w-full py-3 font-semibold transition-colors ${
                    pkg.popular 
                      ? 'bg-deep-charcoal text-white hover:bg-gray-800' 
                      : pkg.type === 'custom'
                      ? 'bg-elegant-blue text-white hover:bg-blue-700'
                      : 'bg-gold text-deep-charcoal hover:bg-yellow-600'
                  }`}
                >
                  {pkg.type === 'custom' ? 'Discuss Custom' : 'Get Started'}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-playfair text-3xl font-bold text-deep-charcoal mb-4">Why Choose News of the Week</h3>
              <ul className="space-y-4">
                {whyChooseFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <feature.icon className="h-6 w-6 text-gold mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-deep-charcoal">{feature.title}</h4>
                      <p className="text-sophisticated-gray">{feature.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="High-end retail brand display" 
                className="rounded-xl shadow-lg w-full" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
