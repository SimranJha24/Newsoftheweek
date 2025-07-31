import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { name: "About Us", href: "#" },
  { name: "Advertising", href: "#advertising" },
  { name: "Coverage Areas", href: "#coverage" },
  { name: "Luxury Connection", href: "#luxury-connection" },
  { name: "Testimonials", href: "#testimonials" }
];

const services = [
  { name: "Display Advertising", href: "#" },
  { name: "Classified Ads", href: "#" },
  { name: "Digital Marketing", href: "#" },
  { name: "Event Promotion", href: "#" },
  { name: "Brand Partnerships", href: "#" }
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" }
];

const legalLinks = [
  { name: "Privacy Policy", href: "#" },
  { name: "Terms of Service", href: "#" },
  { name: "Media Kit", href: "#" }
];

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    if (sectionId.startsWith('#')) {
      const element = document.getElementById(sectionId.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-deep-charcoal text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-4">News of the Week</h3>
            <p className="text-gray-400 mb-4">
              Since 2001, connecting premium brands with Delhi NCR's most affluent households through trusted journalism and targeted advertising.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="text-gray-400 hover:text-gold transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(link.href)}
                    className="hover:text-gold transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              {services.map((service, index) => (
                <li key={index}>
                  <a href={service.href} className="hover:text-gold transition-colors">
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-gold" />
                <span>+91-11-2234-5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-gold" />
                <span>info@newsoftheweek.in</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 text-gold mt-1" />
                <span>Delhi NCR, India</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2023 News of the Week. All rights reserved. | Established 2001
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {legalLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="text-gray-400 hover:text-gold text-sm transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
