import { Card } from "@/components/ui/card";
import { Search, MapPin, Users, Bot } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Search,
      title: "Smart Search & Alerts",
      description: "Find and report lost pets instantly with intelligent search algorithms and real-time notifications.",
      color: "text-primary"
    },
    {
      icon: MapPin,
      title: "Nearby Notifications",
      description: "Get alerts about pets near your location to help reunite them with their families faster.",
      color: "text-magenta"
    },
    {
      icon: Users,
      title: "Community Tools",
      description: "Access forums, interactive maps, and leaderboards to connect with fellow pet lovers.",
      color: "text-accent-foreground"
    },
    {
      icon: Bot,
      title: "AI-Powered Insights",
      description: "Photo-based search and smart recommendations powered by advanced artificial intelligence.",
      color: "text-secondary-foreground"
    }
  ];
  
  return (
    <section className="py-20 px-4 bg-secondary/10">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Beta Features Overview
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the powerful tools that make Rewardz the most effective platform for pet reunification
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 text-center shadow-[var(--shadow-card)] hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="mb-4 flex justify-center">
                <feature.icon className={`w-12 h-12 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;