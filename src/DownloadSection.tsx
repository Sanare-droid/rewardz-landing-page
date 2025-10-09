import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Download, Calendar, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const DownloadSection = () => {
  return (
    <section className="py-20 px-4 bg-accent/10">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Download Rewardz Beta
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose your platform and start helping reunite pets with their families today
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 shadow-[var(--shadow-card)] hover:shadow-lg transition-all duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-primary">Android</h3>
              <p className="text-muted-foreground mb-6">
                Download the .APK file for Android devices
              </p>
              <Link to="/downloads">
                <Button variant="download" size="lg" className="w-full mb-4">
                  <Download className="w-5 h-5" />
                  Download APK
                </Button>
              </Link>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center justify-center gap-2">
                  <Badge variant="secondary">v1.0.0-beta.3</Badge>
                </div>
                <p>Released: September 23, 2025</p>
                <p>Size: 45.2 MB</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-8 shadow-[var(--shadow-card)] hover:shadow-lg transition-all duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-primary">iOS</h3>
              <p className="text-muted-foreground mb-6">
                Download the .IPA file for iPhone/iPad devices
              </p>
              <Link to="/downloads">
                <Button variant="download" size="lg" className="w-full mb-4">
                  <Download className="w-5 h-5" />
                  Download IPA
                </Button>
              </Link>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center justify-center gap-2">
                  <Badge variant="secondary">v1.0.0-beta.3</Badge>
                </div>
                <p>Released: September 23, 2025</p>
                <p>Size: 52.1 MB</p>
              </div>
            </div>
          </Card>
        </div>
        
        <Card className="p-6 bg-muted/50">
          <div className="flex items-start gap-3">
            <FileText className="w-6 h-6 text-primary mt-1" />
            <div>
              <h4 className="font-semibold text-primary mb-2">Version 1.0.0-beta.3 Changelog</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Improved AI pet recognition accuracy by 15%</li>
                <li>• Fixed crash issue when uploading multiple photos</li>
                <li>• Enhanced location-based notifications</li>
                <li>• Added new community forum categories</li>
                <li>• General performance optimizations</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default DownloadSection;