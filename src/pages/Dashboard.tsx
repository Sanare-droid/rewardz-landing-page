import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Calendar, FileText, BarChart3 } from "lucide-react";
import { API_ENDPOINTS } from "@/config/api";

interface FileStats {
  filename: string;
  originalName: string;
  size: number;
  mimeType: string;
  uploadDate: string;
  downloadCount: number;
  lastDownloaded: string | null;
}

const Dashboard = () => {
  const { data: stats, isLoading, error, refetch } = useQuery({
    queryKey: ["downloadStats"],
    queryFn: async (): Promise<FileStats[]> => {
      const response = await fetch(API_ENDPOINTS.STATS);
      if (!response.ok) {
        throw new Error("Failed to fetch stats");
      }
      return response.json();
    },
    refetchInterval: 5000, // Refresh every 5 seconds
  });

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleString();
  };

  const totalDownloads = stats?.reduce((sum, file) => sum + file.downloadCount, 0) || 0;
  const totalFiles = stats?.length || 0;

  if (isLoading) {
    return (
      <div className="container max-w-6xl mx-auto py-16 px-4">
        <div className="flex items-center justify-center h-64">
          <div className="text-lg">Loading statistics...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container max-w-6xl mx-auto py-16 px-4">
        <div className="flex items-center justify-center h-64">
          <div className="text-lg text-red-600">Error loading statistics</div>
        </div>
      </div>
    );
  }

  return (
    <div className="container max-w-6xl mx-auto py-16 px-4">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-primary mb-2">Download Dashboard</h1>
          <p className="text-muted-foreground">Track your APK and IPA file downloads</p>
        </div>
        <Button onClick={() => refetch()} variant="outline">
          Refresh
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Downloads</CardTitle>
            <Download className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalDownloads}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Files</CardTitle>
            <FileText className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalFiles}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Downloads</CardTitle>
            <BarChart3 className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {totalFiles > 0 ? Math.round(totalDownloads / totalFiles) : 0}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* File Statistics Table */}
      <Card>
        <CardHeader>
          <CardTitle>File Statistics</CardTitle>
          <CardDescription>Detailed download statistics for each uploaded file</CardDescription>
        </CardHeader>
        <CardContent>
          {stats && stats.length > 0 ? (
            <div className="space-y-4">
              {stats.map((file) => (
                <div key={file.filename} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <Badge variant={file.mimeType.includes("apk") ? "default" : "secondary"}>
                        {file.mimeType.includes("apk") ? "APK" : "IPA"}
                      </Badge>
                      <span className="font-medium">{file.originalName}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{file.downloadCount}</div>
                      <div className="text-sm text-muted-foreground">downloads</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Uploaded: {formatDate(file.uploadDate)}
                    </div>
                    <div>
                      Size: {formatFileSize(file.size)}
                    </div>
                    <div>
                      Last Downloaded: {file.lastDownloaded ? formatDate(file.lastDownloaded) : "Never"}
                    </div>
                  </div>
                  
                  <div className="mt-3">
                    <a
                      href={API_ENDPOINTS.DOWNLOAD(file.filename)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Download Link
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No files uploaded yet</p>
              <p className="text-sm">Upload your first APK or IPA file to see statistics</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
