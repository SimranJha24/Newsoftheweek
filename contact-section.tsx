import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Download, FileText, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  });

  const { toast } = useToast();
  const queryClient = useQueryClient();

  const contactMutation = useMutation({
    mutationFn: async (data: FormData) => {
      const response = await apiRequest("POST", "/api/inquiries", {
        ...data,
        inquiryType: "advertising"
      });
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Inquiry Sent Successfully",
        description: "We'll contact you within 24 hours regarding your advertising requirements.",
      });
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: ""
      });
      queryClient.invalidateQueries({ queryKey: ["/api/inquiries"] });
    },
    onError: () => {
      toast({
        title: "Submission Failed",
        description: "Please check your information and try again.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.company || !formData.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

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

  const handleMediaKitDownload = async () => {
    try {
      const response = await fetch('/api/media-kit');
      const data = await response.json();
      toast({
        title: "Media Kit Download",
        description: data.message,
      });
    } catch (error) {
      toast({
        title: "Download Error",
        description: "Unable to download media kit. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-deep-charcoal to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-playfair text-4xl font-bold mb-6">Start Your Premium Campaign Today</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Connect with Delhi NCR's most affluent households and grow your business with our targeted advertising solutions. Our team is ready to create a custom campaign that delivers results.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <div className="bg-gold/20 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <Phone className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold">Call Us</h4>
                  <p className="text-gray-400">+91-11-2234-5678</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-gold/20 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <Mail className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold">Email Us</h4>
                  <p className="text-gray-400">advertising@newsoftheweek.in</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-gold/20 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <MapPin className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold">Visit Us</h4>
                  <p className="text-gray-400">Delhi NCR Office</p>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <Button 
                onClick={handleRateCardDownload}
                className="bg-gold text-deep-charcoal hover:bg-yellow-500 font-semibold"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Rate Card
              </Button>
              <Button 
                onClick={handleMediaKitDownload}
                variant="outline"
                className="border-2 border-gold text-gold hover:bg-gold hover:text-deep-charcoal font-semibold bg-transparent"
              >
                <FileText className="mr-2 h-5 w-5" />
                Media Kit
              </Button>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="font-playfair text-2xl font-bold mb-6">Request Information</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name *</label>
                  <Input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-gold focus:border-transparent" 
                    placeholder="Your Name" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Company *</label>
                  <Input 
                    type="text" 
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required 
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-gold focus:border-transparent" 
                    placeholder="Company Name" 
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <Input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-gold focus:border-transparent" 
                    placeholder="your@email.com" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <Input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-gold focus:border-transparent" 
                    placeholder="+91-XXXXX-XXXXX" 
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Advertising Requirements</label>
                <Textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4} 
                  className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-gold focus:border-transparent" 
                  placeholder="Tell us about your advertising goals, target areas, budget range, etc." 
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={contactMutation.isPending}
                className="w-full bg-gold text-deep-charcoal hover:bg-yellow-500 font-semibold py-3"
              >
                <Send className="mr-2 h-5 w-5" />
                {contactMutation.isPending ? "Sending..." : "Send Inquiry"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
