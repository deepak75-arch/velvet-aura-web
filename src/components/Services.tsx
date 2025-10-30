import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scissors, Sparkles, User, Wind } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Hair Styling",
    description: "Expert cuts, styling, and coloring by certified professionals using premium products.",
    features: ["Precision Cuts", "Hair Coloring", "Styling"],
  },
  {
    icon: User,
    title: "Beard Grooming",
    description: "Transform your look with professional beard trimming, shaping, and conditioning.",
    features: ["Beard Trim", "Shaping", "Conditioning"],
  },
  {
    icon: Sparkles,
    title: "Skin Care",
    description: "Rejuvenating facials and treatments designed for men's skin care needs.",
    features: ["Facials", "Treatments", "Deep Cleanse"],
  },
  {
    icon: Wind,
    title: "Complete Grooming",
    description: "Full-service packages including manicure, pedicure, and spa treatments.",
    features: ["Manicure", "Pedicure", "Spa Services"],
  },
];

export const Services = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Premium Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            One-stop destination for all your grooming needs. Quality service at everyday prices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-2xl font-display">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
