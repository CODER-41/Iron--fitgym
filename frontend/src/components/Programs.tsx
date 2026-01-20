import { Dumbbell, Flame, Heart, Zap } from "lucide-react";

const programs = [
  {
    icon: Dumbbell,
    title: "Strength Training",
    description: "Build muscle and increase power with our comprehensive strength programs designed for all levels.",
    color: "from-orange-500 to-red-600",
  },
  {
    icon: Flame,
    title: "HIIT Workouts",
    description: "High-intensity interval training to maximize calorie burn and boost your metabolism.",
    color: "from-red-500 to-pink-600",
  },
  {
    icon: Heart,
    title: "Cardio Fitness",
    description: "Improve endurance and cardiovascular health with varied cardio training sessions.",
    color: "from-pink-500 to-purple-600",
  },
  {
    icon: Zap,
    title: "CrossFit Training",
    description: "Functional fitness combining strength, cardio, and flexibility in dynamic workouts.",
    color: "from-yellow-500 to-orange-600",
  },
];

const Programs = () => {
  return (
    <section id="programs" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest mb-4">OUR PROGRAMS</p>
          <h2 className="font-display text-5xl md:text-7xl text-foreground">
            TRAIN <span className="text-gradient">SMARTER</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Choose from our range of specialized fitness programs designed to help you achieve your specific goals.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <div
              key={program.title}
              className="group card-gradient border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${program.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <program.icon className="h-7 w-7 text-foreground" />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-3">{program.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{program.description}</p>
              <button className="mt-6 text-primary font-medium text-sm flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                Learn More
                <span>→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
