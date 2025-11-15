import { Separator } from "@/components/ui/separator";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-primary-foreground">R</span>
              </div>
              <span className="text-2xl font-bold">Rewardz</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Helping reunite lost pets with their families through community-powered alerts, 
              smart search, and AI recognition technology.
            </p>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-accent" />
              <span>for pets everywhere</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Download</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link to="/downloads" className="hover:text-primary-foreground transition-colors">Get the App</Link></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">About</a></li>
              <li><Link to="/privacy-policy" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-primary-foreground transition-colors">Terms of Use</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Installation Guide</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Report Bug</a></li>
              <li><Link to="/beta-program" className="hover:text-primary-foreground transition-colors">Beta Program</Link></li>
            </ul>
          </div>
        </div>
        
        <Separator className="mb-8 bg-primary-foreground/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-primary-foreground/70">
            © 2025 Rewardz. All rights reserved. Beta version - not for commercial use.
          </div>
          <div className="text-xs text-primary-foreground/60 max-w-md text-center md:text-right">
            <strong>Legal Disclaimer:</strong> By downloading, you agree to participate in the beta testing program 
            and understand the risks of pre-release software.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;