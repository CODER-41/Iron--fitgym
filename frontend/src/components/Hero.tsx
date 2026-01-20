import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-gym.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Intense gym training"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="max-w-3xl">
          <p className="text-primary font-medium tracking-widest mb-4 animate-slide-up">
            TRANSFORM YOUR BODY
          </p>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-foreground leading-none mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            UNLEASH
            <br />
            YOUR <span className="text-gradient">POWER</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Join the ultimate fitness experience. Expert trainers, state-of-the-art equipment, and a community that pushes you beyond limits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              <Play className="mr-2 h-5 w-5" />
              Watch Video
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <div>
              <p className="font-display text-4xl md:text-5xl text-primary">500+</p>
              <p className="text-muted-foreground text-sm mt-1">Active Members</p>
            </div>
            <div>
              <p className="font-display text-4xl md:text-5xl text-primary">15+</p>
              <p className="text-muted-foreground text-sm mt-1">Expert Trainers</p>
            </div>
            <div>
              <p className="font-display text-4xl md:text-5xl text-primary">50+</p>
              <p className="text-muted-foreground text-sm mt-1">Fitness Programs</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
