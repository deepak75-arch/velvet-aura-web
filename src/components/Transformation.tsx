import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Software Engineer, Cognizant",
    content: "NOWMI OMR transformed my look completely! The stylists understand tech professionals' needs perfectly. Quick, professional, and affordable.",
    rating: 5,
  },
  {
    name: "Arjun Menon",
    role: "Project Manager, TCS",
    content: "Best grooming experience in OMR! The Executive Grooming Kit is perfect for client meetings. Highly recommend their beard facial service.",
    rating: 5,
  },
  {
    name: "Vikram Shetty",
    role: "Startup Founder",
    content: "Professional service at everyday prices. The staff is friendly and the ambiance is relaxing. My go-to salon for the past year!",
    rating: 5,
  },
];

export const Transformation = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-10 right-20 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-primary/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Client Success Stories
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Transformation of Personality
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of satisfied OMR professionals who trust NOWMI for their grooming needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-border/50 bg-card/80 backdrop-blur-sm animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Quote className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex gap-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-accent text-lg">★</span>
                      ))}
                    </div>
                    <p className="text-foreground/90 leading-relaxed mb-4">
                      "{testimonial.content}"
                    </p>
                  </div>
                </div>
                <div className="border-t border-border/50 pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>

              {/* Shine Effect on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { number: "10,000+", label: "Happy Clients" },
            { number: "500+", label: "Global Outlets" },
            { number: "4.8/5", label: "Customer Rating" },
            { number: "15+", label: "Expert Stylists" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg animate-fade-up"
              style={{ animationDelay: `${450 + index * 100}ms` }}
            >
              <p className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                {stat.number}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.05);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};
