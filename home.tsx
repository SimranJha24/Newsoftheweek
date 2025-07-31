import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import CoverageAreas from "@/components/coverage-areas";
import AdvertisingPackages from "@/components/advertising-packages";
import LuxuryConnection from "@/components/luxury-connection";
import Testimonials from "@/components/testimonials";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <CoverageAreas />
      <AdvertisingPackages />
      <LuxuryConnection />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
}
