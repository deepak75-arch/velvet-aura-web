import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-salon.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-3xl animate-fade-up">
          <div className="inline-block mb-6 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full">
            <p className="text-accent text-sm font-medium">
              India's #1 Affordable Salon Franchise
            </p>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Chennai's Premier
            <span className="block text-accent">Grooming Lounge</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
            Where expertise meets elegance. Experience world-class grooming services in a serene, 
            modern ambiance designed for the discerning professional.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              size="lg" 
              variant="luxury"
              className="text-lg animate-glow"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Your Appointment
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-accent/50 hover:scale-105 transition-all duration-300"
            >
              <MapPin className="mr-2 h-5 w-5" />
              Visit Us
            </Button>
          </div>

          <div className="flex flex-wrap gap-8 text-primary-foreground/80">
            <div>
              <p className="text-3xl font-bold text-accent">500+</p>
              <p className="text-sm">Outlets Globally</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-accent">Expert</p>
              <p className="text-sm">Certified Stylists</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-accent">Premium</p>
              <p className="text-sm">Affordable Luxury</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent/50 rounded-full p-1">
          <div className="w-1 h-3 bg-accent rounded-full mx-auto animate-pulse" />
        </div>
      </div>
    </section>
  );
};
