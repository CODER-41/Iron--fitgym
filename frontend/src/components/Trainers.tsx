import { Instagram, Twitter } from "lucide-react";
import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.jpg";
import trainer3 from "@/assets/trainer-3.jpg";

const trainers = [
  {
    name: "Marcus Johnson",
    role: "Strength Coach",
    image: trainer1,
    specialties: ["Powerlifting", "Bodybuilding"],
  },
  {
    name: "Sarah Mitchell",
    role: "HIIT Specialist",
    image: trainer2,
    specialties: ["HIIT", "Cardio"],
  },
  {
    name: "Chris Anderson",
    role: "CrossFit Coach",
    image: trainer3,
    specialties: ["CrossFit", "Functional Training"],
  },
];

const Trainers = () => {
  return (
    <section id="trainers" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest mb-4">EXPERT TEAM</p>
          <h2 className="font-display text-5xl md:text-7xl text-foreground">
            MEET YOUR <span className="text-gradient">TRAINERS</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Our certified professionals are dedicated to helping you reach your fitness goals.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {trainers.map((trainer) => (
            <div
              key={trainer.name}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-2xl text-foreground">{trainer.name}</h3>
                <p className="text-primary font-medium text-sm mb-3">{trainer.role}</p>
                <div className="flex gap-2 mb-4">
                  {trainer.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="text-xs bg-secondary px-3 py-1 rounded-full text-muted-foreground"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                    <Instagram className="h-4 w-4 text-foreground" />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                    <Twitter className="h-4 w-4 text-foreground" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
