import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageSquare, Users, HelpCircle, ExternalLink } from "lucide-react";

const CommunitySection = () => {
  return (
    <section className="py-20 px-4 bg-secondary/20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Community & Support
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our growing community of pet lovers and beta testers. Get support, share feedback, and help shape the future of Rewardz.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="p-6 shadow-[var(--shadow-card)] hover:shadow-lg transition-all duration-300">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Beta Forum</h3>
              <p className="text-muted-foreground mb-4">
                Connect with other beta testers, share experiences, and discuss new features.
              </p>
              <Button variant="outline" className="w-full">
                <ExternalLink className="w-4 h-4" />
                Join Forum
              </Button>
            </div>
          </Card>
          
          <Card className="p-6 shadow-[var(--shadow-card)] hover:shadow-lg transition-all duration-300">
            <div className="text-center">
              <div className="w-12 h-12 bg-magenta/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-magenta" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Social Media</h3>
              <p className="text-muted-foreground mb-4">
                Follow us for the latest updates, success stories, and community highlights.
              </p>
              <Button variant="outline" className="w-full">
                <ExternalLink className="w-4 h-4" />
                Follow Updates
              </Button>
            </div>
          </Card>
          
          <Card className="p-6 shadow-[var(--shadow-card)] hover:shadow-lg transition-all duration-300">
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Installation Help</h3>
              <p className="text-muted-foreground mb-4">
                Need help installing .APK or .IPA files? Check our step-by-step guides.
              </p>
              <Button variant="outline" className="w-full">
                <ExternalLink className="w-4 h-4" />
                View Guide
              </Button>
            </div>
          </Card>
        </div>
        
        <Card className="p-8 bg-accent/10 border-primary/20">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4 text-primary">
              Frequently Asked Questions
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold mb-2 text-primary">How do I install an .APK file safely?</h4>
                <p className="text-sm text-muted-foreground">
                  Enable "Install from unknown sources" in your Android settings, then tap the downloaded .APK file to install.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-primary">Can I install the .IPA on my iPhone?</h4>
                <p className="text-sm text-muted-foreground">
                  iOS .IPA installation requires tools like AltStore or TestFlight. Follow our detailed guide for instructions.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-primary">Is my data safe during beta testing?</h4>
                <p className="text-sm text-muted-foreground">
                  We follow strict data protection protocols. However, as this is beta software, we recommend not storing sensitive information.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-primary">When will the app be available on app stores?</h4>
                <p className="text-sm text-muted-foreground">
                  We plan to launch on official app stores after completing beta testing and addressing user feedback.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CommunitySection;