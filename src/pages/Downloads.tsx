import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Smartphone, Calendar, FileText } from "lucide-react";
import { API_ENDPOINTS } from "@/config/api";

interface FileInfo {
  filename: string;
  originalName: string;
  size: number;
  mimeType: string;
  uploadDate: string;
  downloadCount: number;
  lastDownloaded: string | null;
}

const Downloads = () => {
  const [files, setFiles] = useState<FileInfo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    try {
      const response = await fetch(API_ENDPOINTS.STATS);
      if (!response.ok) {
        throw new Error("Failed to fetch files");
      }
      const data = await response.json();
      setFiles(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load files");
    } finally {
      setLoading(false);
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString();
  };

  if (loading) {
    return (
      <div className="container max-w-4xl mx-auto py-16 px-4">
        <div className="flex items-center justify-center h-64">
          <div className="text-lg">Loading available downloads...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container max-w-4xl mx-auto py-16 px-4">
        <div className="flex items-center justify-center h-64">
          <div className="text-lg text-destructive">Error loading downloads: {error}</div>
        </div>
      </div>
    );
  }

  const apkFiles = files.filter(file => file.mimeType.includes("apk") || file.originalName.toLowerCase().endsWith(".apk"));
  const ipaFiles = files.filter(file => file.mimeType.includes("ipa") || file.originalName.toLowerCase().endsWith(".ipa"));

  return (
    <div className="container max-w-4xl mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Download Rewardz</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Choose your platform and download the latest version of Rewardz to help reunite lost pets with their families.
        </p>
      </div>

      {files.length === 0 ? (
        <Card>
          <CardContent className="text-center py-12">
            <FileText className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-50" />
            <h3 className="text-lg font-semibold mb-2">No Downloads Available</h3>
            <p className="text-muted-foreground">Check back later for the latest version of Rewardz.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-8">
          {/* Android APK Files */}
          {apkFiles.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                <Smartphone className="w-6 h-6" />
                Android Downloads
              </h2>
              <div className="grid gap-4">
                {apkFiles.map((file) => (
                  <Card key={file.filename}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Badge variant="default">APK</Badge>
                          <CardTitle className="text-lg">{file.originalName}</CardTitle>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-muted-foreground">
                            {file.downloadCount} downloads
                          </div>
                        </div>
                      </div>
                      <CardDescription>
                        {formatFileSize(file.size)} • Uploaded {formatDate(file.uploadDate)}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <a
                        href={API_ENDPOINTS.DOWNLOAD(file.filename)}
                        download={file.originalName}
                        className="inline-flex items-center gap-2"
                      >
                        <Button>
                          <Download className="w-4 h-4" />
                          Download APK
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* iOS IPA Files */}
          {ipaFiles.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                <Download className="w-6 h-6" />
                iOS Downloads
              </h2>
              <div className="grid gap-4">
                {ipaFiles.map((file) => (
                  <Card key={file.filename}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Badge variant="secondary">IPA</Badge>
                          <CardTitle className="text-lg">{file.originalName}</CardTitle>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-muted-foreground">
                            {file.downloadCount} downloads
                          </div>
                        </div>
                      </div>
                      <CardDescription>
                        {formatFileSize(file.size)} • Uploaded {formatDate(file.uploadDate)}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <a
                        href={API_ENDPOINTS.DOWNLOAD(file.filename)}
                        download={file.originalName}
                        className="inline-flex items-center gap-2"
                      >
                        <Button variant="secondary">
                          <Download className="w-4 h-4" />
                          Download IPA
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Downloads;
