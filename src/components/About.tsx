import { Badge } from "@/components/ui/badge";
import { Award, Clock, Shield, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Expert Stylists",
    description: "Certified professionals with years of experience and ongoing training in the latest techniques.",
  },
  {
    icon: Shield,
    title: "Quality Promise",
    description: "Premium products and strict hygiene standards ensure your safety and satisfaction.",
  },
  {
    icon: Clock,
    title: "Time-Conscious",
    description: "Efficient service that respects your busy schedule with flexible booking options.",
  },
  {
    icon: TrendingUp,
    title: "Growth Mindset",
    description: "Your Growth, Our Expertise - we evolve with trends while maintaining timeless quality.",
  },
];

export const About = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="animate-slide-in-left">
            <Badge variant="outline" className="mb-4 border-accent text-accent">
              Your Neighborhood Grooming Partner
            </Badge>
            
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Affordable Luxury in the Heart of OMR
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Located on Chennai's vibrant Old Mahabalipuram Road, NOWMI OMR brings world-class 
              grooming to tech professionals and residents. We combine the expertise of a leading 
              salon franchise with the warmth of your neighborhood barbershop.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              As part of India's #1 Affordable Salon Franchise network, we're committed to delivering 
              confidence through style - without breaking the bank. With 500+ outlets globally and 
              growing, we bring proven excellence to every service.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="px-6 py-3 bg-primary/5 rounded-lg border border-primary/10">
                <p className="text-sm text-muted-foreground">Established Network</p>
                <p className="text-2xl font-bold text-primary">500+ Outlets</p>
              </div>
              <div className="px-6 py-3 bg-accent/5 rounded-lg border border-accent/10">
                <p className="text-sm text-muted-foreground">Customer Rating</p>
                <p className="text-2xl font-bold text-accent">★★★★★ 4.8/5</p>
              </div>
            </div>
          </div>

          {/* Right Column - Values Grid */}
          <div className="grid sm:grid-cols-2 gap-6 animate-slide-in-right">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group p-6 rounded-lg border border-border/50 bg-card hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                  <value.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                
                {/* Animated border on hover */}
                <div className="absolute inset-0 border-2 border-accent/0 group-hover:border-accent/20 rounded-lg transition-all duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
