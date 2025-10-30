import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles } from "lucide-react";

const packages = [
  {
    name: "OMR Tech Special",
    description: "Perfect for busy professionals on the go",
    price: "₹499",
    features: [
      "Express Haircut",
      "Beard Trim & Styling",
      "Face Wash",
      "Head Massage",
    ],
    popular: false,
  },
  {
    name: "Executive Grooming Kit",
    description: "Complete transformation for the modern professional",
    price: "₹999",
    features: [
      "Premium Haircut & Styling",
      "Beard Facial & Grooming",
      "Face Cleanup & Treatment",
      "Manicure",
      "Head & Shoulder Massage",
    ],
    popular: true,
  },
  {
    name: "Complete Luxury Experience",
    description: "Ultimate pampering for your special occasions",
    price: "₹1,799",
    features: [
      "Signature Haircut & Hair Color",
      "Premium Beard Facial",
      "Advanced Skin Treatment",
      "Manicure & Pedicure",
      "Full Body Spa Massage",
      "Complimentary Beverage",
    ],
    popular: false,
  },
];

export const Packages = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <Badge variant="outline" className="mb-4 border-accent text-accent">
            Special Packages
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Value Packages for Every Need
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Specially curated for OMR's busy professionals. Save time, save money, look amazing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <Card
              key={pkg.name}
              className={`group relative hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-up ${
                pkg.popular ? "border-accent border-2 shadow-xl scale-105" : "border-border/50"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-accent text-accent-foreground px-4 py-1 shadow-lg">
                    <Sparkles className="h-3 w-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-display mb-2">{pkg.name}</CardTitle>
                <CardDescription className="text-base mb-4">{pkg.description}</CardDescription>
                <div className="relative">
                  <span className="text-5xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                    {pkg.price}
                  </span>
                  <span className="text-muted-foreground ml-2">only</span>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 group/item">
                      <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-accent/20 transition-colors">
                        <Check className="h-3 w-3 text-accent" />
                      </div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full group-hover:shadow-lg transition-all duration-300"
                  variant={pkg.popular ? "luxury" : "default"}
                >
                  Book This Package
                </Button>
              </CardContent>

              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-primary/5 transition-all duration-500 rounded-lg pointer-events-none" />
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "600ms" }}>
          <p className="text-muted-foreground">
            All packages include complimentary parking • AC ambiance • Premium products
          </p>
        </div>
      </div>
    </section>
  );
};
