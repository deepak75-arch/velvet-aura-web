import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Packages } from "@/components/Packages";
import { WhyChoose } from "@/components/WhyChoose";
import { About } from "@/components/About";
import { Transformation } from "@/components/Transformation";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <div id="services">
          <Services />
        </div>
        <Packages />
        <WhyChoose />
        <div id="about">
          <About />
        </div>
        <Transformation />
        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
