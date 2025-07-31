import { Star, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Rajesh Kumar",
    position: "Marketing Director, Luxury Homes Ltd.",
    quote: "News of the Week has been instrumental in connecting our luxury real estate projects with the right audience. The targeted reach in premium areas has resulted in qualified leads and successful sales.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
  },
  {
    name: "Priya Sharma",
    position: "Brand Manager, Elite Fashion House",
    quote: "The Luxury Connection magazine has been perfect for showcasing our premium fashion collections. The quality of readership and response rates have exceeded our expectations consistently.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
  },
  {
    name: "Amit Singh",
    position: "CEO, Premium Auto Group",
    quote: "For our luxury car launches, News of the Week provides unmatched access to high-net-worth individuals in Delhi NCR. The editorial credibility enhances our brand's premium positioning.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
  }
];

const stats = [
  { value: "22+", label: "Years Experience" },
  { value: "500+", label: "Brand Partners" },
  { value: "95%", label: "Client Retention" },
  { value: "100K+", label: "Premium Reach" }
];

export default function Testimonials() {
  const handleTestimonialInquiry = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl font-bold text-deep-charcoal mb-4">What Our Advertisers Say</h2>
          <p className="text-xl text-sophisticated-gray max-w-3xl mx-auto">
            Leading brands trust News of the Week to connect with Delhi NCR's most affluent communities. Here's what they say about their success with us.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 mr-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={`${testimonial.name} testimonial`} 
                    className="w-12 h-12 rounded-full object-cover" 
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-deep-charcoal">{testimonial.name}</h4>
                  <p className="text-sm text-sophisticated-gray">{testimonial.position}</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-gold mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-sophisticated-gray italic leading-relaxed">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-gold to-yellow-500 rounded-2xl p-8 text-center text-white">
          <h3 className="font-playfair text-3xl font-bold mb-4">Join Leading Brands</h3>
          <p className="text-xl mb-6 opacity-90">Over 500+ premium brands have successfully advertised with us</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
          <Button 
            onClick={handleTestimonialInquiry}
            className="bg-white text-deep-charcoal hover:bg-gray-100 font-semibold"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Share Your Success Story
          </Button>
        </div>
      </div>
    </section>
  );
}
