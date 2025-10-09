import { Card } from "@/components/ui/card";
import { Download, UserPlus, Search, MessageSquare } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Download,
      number: "01",
      title: "Download & Install",
      description: "Sideload the beta app on your device following our security guidelines.",
      color: "bg-primary text-primary-foreground"
    },
    {
      icon: UserPlus,
      number: "02", 
      title: "Create a Profile",
      description: "Add your personal information and pet details to get started.",
      color: "bg-magenta text-magenta-foreground"
    },
    {
      icon: Search,
      number: "03",
      title: "Use Features",
      description: "Search for lost pets, report sightings, and engage with the community.",
      color: "bg-accent text-accent-foreground"
    },
    {
      icon: MessageSquare,
      number: "04",
      title: "Report Bugs & Feedback",
      description: "Help shape the final version by sharing your experience and reporting issues.",
      color: "bg-secondary text-secondary-foreground"
    }
  ];
  
  return (
    <section className="py-20 px-4 bg-accent/10">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started with Rewardz Beta in four simple steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="p-6 shadow-[var(--shadow-card)] hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center mb-4 mx-auto relative`}>
                  <step.icon className="w-8 h-8" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-background border-2 border-current rounded-full flex items-center justify-center text-xs font-bold">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center text-primary">{step.title}</h3>
                <p className="text-muted-foreground text-center leading-relaxed">{step.description}</p>
              </Card>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border transform -translate-y-1/2 z-10">
                  <div className="absolute right-0 top-1/2 w-2 h-2 bg-border rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;