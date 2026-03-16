import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyAerial from "@/components/WhyAerial";
import Services from "@/components/Services";
import WhyPricing from "@/components/WhyPricing";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <>
      <div className="hex-grid-overlay" />
      <Navbar />
      <main>
        <Hero />
        <WhyAerial />
        <Services />
        <WhyPricing />
        <Portfolio />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default Index;
