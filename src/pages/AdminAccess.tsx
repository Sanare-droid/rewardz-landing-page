import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Upload, BarChart3, Key } from "lucide-react";
import { Link } from "react-router-dom";

const AdminAccess = () => {
  return (
    <div className="container max-w-4xl mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
          <Shield className="w-8 h-8 text-primary-foreground" />
        </div>
        <h1 className="text-4xl font-bold text-primary mb-4">Admin Access</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Access owner-only features for uploading files and viewing download statistics.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="w-5 h-5 text-primary" />
              File Upload
            </CardTitle>
            <CardDescription>
              Upload new APK and IPA files to make them available for download.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/owner/upload">
              <Button className="w-full">
                <Upload className="w-4 h-4 mr-2" />
                Go to Upload
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-primary" />
              Download Statistics
            </CardTitle>
            <CardDescription>
              View detailed analytics and download tracking for all uploaded files.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/owner/dashboard">
              <Button className="w-full">
                <BarChart3 className="w-4 h-4 mr-2" />
                View Dashboard
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <Card className="border-accent bg-accent/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Key className="w-5 h-5 text-primary" />
            Access Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Owner Routes:</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• <code className="bg-background px-2 py-1 rounded">/owner/upload</code> - Upload APK/IPA files</li>
              <li>• <code className="bg-background px-2 py-1 rounded">/owner/dashboard</code> - View download statistics</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Public Routes:</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• <code className="bg-background px-2 py-1 rounded">/</code> - Landing page</li>
              <li>• <code className="bg-background px-2 py-1 rounded">/downloads</code> - Download available files</li>
            </ul>
          </div>
          <p className="text-sm text-muted-foreground">
            Only the app owner has access to the <code>/owner/*</code> routes for uploading files and viewing statistics.
            Regular users can only download files from the public downloads page.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminAccess;
