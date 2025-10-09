import { Card } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Shield, AlertTriangle, Bot, Bug } from "lucide-react";

const SecuritySection = () => {
  return (
    <section className="py-20 px-4 bg-secondary/10">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Important Security & Disclaimer Information
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Please read these important notices before downloading and using Rewardz Beta
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6 shadow-[var(--shadow-card)] hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-destructive" />
              <h3 className="text-xl font-semibold text-primary">Security Warning</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              This is a pre-release version. As it is not distributed through official app stores, 
              your device may show a security warning when installing.
            </p>
            <Alert className="border-destructive/50 bg-destructive/5">
              <AlertDescription className="text-sm">
                <strong>Ensure you download only from this page</strong> and verify the source before installation.
              </AlertDescription>
            </Alert>
          </Card>
          
          <Card className="p-6 shadow-[var(--shadow-card)] hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Bot className="w-8 h-8 text-magenta" />
              <h3 className="text-xl font-semibold text-primary">AI Accuracy Disclaimer</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Some Rewardz features — such as pet photo recognition and search recommendations — 
              are powered by AI and may produce inaccurate results.
            </p>
            <Alert className="border-magenta/50 bg-magenta/5">
              <AlertDescription className="text-sm">
                <strong>Always verify information independently</strong> and use human judgment when making decisions.
              </AlertDescription>
            </Alert>
          </Card>
          
          <Card className="p-6 shadow-[var(--shadow-card)] hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <Bug className="w-8 h-8 text-accent-foreground" />
              <h3 className="text-xl font-semibold text-primary">Bug Reporting</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Please help us improve Rewardz by reporting any issues you encounter during your testing.
            </p>
            <Alert className="border-accent/50 bg-accent/10">
              <AlertDescription className="text-sm">
                <strong>Find bugs?</strong> Go to the 'Report a Bug' button inside the profile section of the app.
              </AlertDescription>
            </Alert>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;