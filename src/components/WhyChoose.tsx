import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Car, Snowflake, Smartphone, Users, Zap, Shield } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Express Services",
    description: "Quick grooming solutions for busy schedules. In and out in 30 minutes.",
  },
  {
    icon: Car,
    title: "Free Parking",
    description: "Hassle-free parking right at our doorstep. No searching, no stress.",
  },
  {
    icon: Snowflake,
    title: "AC Ambiance",
    description: "Comfortable, climate-controlled environment for a relaxing experience.",
  },
  {
    icon: Smartphone,
    title: "WhatsApp Booking",
    description: "Book appointments via WhatsApp. Simple, fast, and convenient.",
  },
  {
    icon: Users,
    title: "Walk-ins Welcome",
    description: "No appointment? No problem! We accommodate walk-in clients.",
  },
  {
    icon: Shield,
    title: "Premium Products",
    description: "International brands and highest hygiene standards guaranteed.",
  },
];

export const WhyChoose = () => {
  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <Badge variant="outline" className="mb-4 border-accent text-accent">
            Why Choose NOWMI OMR
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Designed for OMR's Lifestyle
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We understand tech professionals need convenience, quality, and value. That's exactly what we deliver.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="group relative overflow-hidden border-border/50 hover:border-accent/50 transition-all duration-500 hover:shadow-xl animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Animated Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/0 group-hover:from-accent/10 group-hover:via-accent/5 group-hover:to-primary/10 transition-all duration-500" />
              
              <CardContent className="p-6 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300 group-hover:rotate-6">
                    <feature.icon className="h-7 w-7 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>

              {/* Slide-in Border Effect */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
