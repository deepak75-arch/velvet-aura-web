import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Visit NOWMI OMR
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Experience premium grooming in Chennai's tech hub. Walk-ins welcome, appointments preferred.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              icon: MapPin,
              title: "Location",
              content: "OMR, Chennai",
              detail: "Tech Corridor",
            },
            {
              icon: Clock,
              title: "Hours",
              content: "Mon - Sun",
              detail: "9:00 AM - 9:00 PM",
            },
            {
              icon: Phone,
              title: "Call Us",
              content: "+91 XXXX XXXXX",
              detail: "WhatsApp Available",
            },
            {
              icon: Mail,
              title: "Email",
              content: "info@nowmi.com",
              detail: "Quick Response",
            },
          ].map((item, index) => (
            <Card
              key={item.title}
              className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm hover:bg-primary-foreground/15 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-primary-foreground mb-1">{item.title}</h3>
                <p className="text-primary-foreground/90 font-medium">{item.content}</p>
                <p className="text-sm text-primary-foreground/60">{item.detail}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-scale-in">
          <Button 
            size="lg" 
            variant="luxury"
            className="text-lg px-8"
          >
            Book Your Appointment Now
          </Button>
          <p className="mt-4 text-primary-foreground/60 text-sm">
            Parking available • AC ambiance • Premium products
          </p>
        </div>
      </div>
    </section>
  );
};
