import { Gem, Car, Home, Utensils } from "lucide-react";

const lifestyleCategories = [
  {
    icon: Gem,
    name: "Fashion & Style",
    description: "Premium brands"
  },
  {
    icon: Car,
    name: "Automobiles",
    description: "Luxury vehicles"
  },
  {
    icon: Home,
    name: "Home & Decor",
    description: "Designer interiors"
  },
  {
    icon: Utensils,
    name: "Fine Dining",
    description: "Culinary experiences"
  }
];

const lifestyleImages = [
  {
    src: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500",
    alt: "Luxury lifestyle jewelry",
    className: "rounded-xl shadow-lg object-cover h-64"
  },
  {
    src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    alt: "Luxury lifestyle fashion",
    className: "rounded-xl shadow-lg object-cover h-32 mt-8"
  },
  {
    src: "https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    alt: "Luxury lifestyle automobile",
    className: "rounded-xl shadow-lg object-cover h-32"
  },
  {
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500",
    alt: "Luxury lifestyle home decor",
    className: "rounded-xl shadow-lg object-cover h-64"
  }
];

export default function LuxuryConnection() {
  return (
    <section id="luxury-connection" className="py-20 bg-gradient-to-br from-deep-charcoal to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl font-bold mb-4">Luxury Connection</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A premium lifestyle magazine reaching 40,000 affluent readers monthly in Gurgaon & South Delhi, covering style, luxury, and sophisticated living.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="font-playfair text-3xl font-bold mb-6 text-gold">Premium Lifestyle Content</h3>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Luxury Connection provides readers with the latest information related to style in all aspects of life - from fashion and jewelry to beauty, fitness, fine dining, home decor, automobiles, and premium gadgets. It's the perfect platform to showcase luxury brands and high-end services.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-2">40,000</div>
                <div className="text-sm text-gray-400">Monthly Circulation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-2">2</div>
                <div className="text-sm text-gray-400">Prime Areas</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {lifestyleImages.map((image, index) => (
              <img 
                key={index}
                src={image.src} 
                alt={image.alt} 
                className={image.className} 
              />
            ))}
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
          <h3 className="font-playfair text-2xl font-bold text-center mb-8">Featured Lifestyle Categories</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {lifestyleCategories.map((category, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="bg-gold/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 group-hover:bg-gold/30 transition-colors">
                  <category.icon className="h-8 w-8 text-gold" />
                </div>
                <h4 className="font-semibold text-white mb-1">{category.name}</h4>
                <p className="text-sm text-gray-400">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
