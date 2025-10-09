import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle, Download, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background px-4 py-20">
      {/* Creative background with color blocks */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-accent opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/4 h-2/3 bg-secondary opacity-15"></div>
        <div className="absolute bottom-0 left-1/4 w-1/2 h-1/3 bg-primary opacity-5"></div>
      </div>
      
      <div className="container max-w-6xl mx-auto text-center relative z-10">
        <div className="mb-8 inline-flex items-center gap-2 px-6 py-3 bg-primary rounded-full text-primary-foreground font-medium shadow-lg">
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
          Beta Testing Phase
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary">
          Help Reunite Lost Pets
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Download the early-access version of Rewardz and be part of the community saving pets every day.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link to="/downloads">
            <Button 
              variant="default" 
              size="lg"
              className="text-lg px-8 py-6 h-auto bg-primary hover:bg-primary/90"
            >
              <Smartphone className="w-5 h-5" />
              Download for Android (.APK)
            </Button>
          </Link>
          <Link to="/downloads">
            <Button 
              variant="default" 
              size="lg"
              className="text-lg px-8 py-6 h-auto bg-primary hover:bg-primary/90"
            >
              <Download className="w-5 h-5" />
              Download for iOS (.IPA)
            </Button>
          </Link>
        </div>
        
        <Alert className="max-w-2xl mx-auto border-destructive/50 bg-destructive/5">
          <AlertTriangle className="h-4 w-4 text-destructive" />
          <AlertDescription className="text-left">
            <strong>⚠️ Security Notice:</strong> This is a beta version not yet on official app stores. 
            Only download if you trust the source and understand the risks of pre-release software.
          </AlertDescription>
        </Alert>
      </div>
    </section>
  );
};

export default HeroSection;