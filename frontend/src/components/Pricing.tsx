import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: 29,
    description: "Perfect for beginners starting their fitness journey",
    features: [
      "Access to gym facilities",
      "Basic equipment usage",
      "Locker room access",
      "1 group class per week",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: 59,
    description: "For dedicated athletes seeking maximum results",
    features: [
      "24/7 gym access",
      "All equipment & facilities",
      "Unlimited group classes",
      "2 personal training sessions",
      "Nutrition consultation",
      "Progress tracking app",
    ],
    popular: true,
  },
  {
    name: "Elite",
    price: 99,
    description: "Premium experience with personalized coaching",
    features: [
      "Everything in Pro",
      "Unlimited personal training",
      "Custom meal plans",
      "Recovery room access",
      "Priority class booking",
      "1-on-1 monthly review",
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest mb-4">MEMBERSHIP PLANS</p>
          <h2 className="font-display text-5xl md:text-7xl text-foreground">
            INVEST IN <span className="text-gradient">YOURSELF</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Choose the plan that fits your goals and start transforming today.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative card-gradient border rounded-2xl p-8 ${
                plan.popular
                  ? "border-primary glow-effect scale-105"
                  : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full tracking-wider">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="font-display text-2xl text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                <div className="flex items-end justify-center gap-1">
                  <span className="font-display text-5xl text-foreground">${plan.price}</span>
                  <span className="text-muted-foreground mb-2">/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "hero" : "outline"}
                className="w-full"
                size="lg"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
