import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { BarChart3 } from "lucide-react";
import { API_ENDPOINTS } from "@/config/api";

const MAX_SIZE_BYTES = 1024 * 1024 * 512; // 512MB

export default function Upload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);

  const mutation = useMutation({
    mutationFn: async (file: File) => {
      const form = new FormData();
      form.append("file", file);

      const response = await fetch(API_ENDPOINTS.UPLOAD, {
        method: "POST",
        body: form,
      });

      if (!response.ok) {
        const err = await response.json().catch(() => ({ error: response.statusText }));
        throw new Error(err.error || "Upload failed");
      }
      return (await response.json()) as { url: string; filename: string };
    },
    onSuccess: (data) => {
      setUploadedUrl(data.url);
      toast.success("Upload successful");
    },
    onError: (error: unknown) => {
      const message = error instanceof Error ? error.message : "Upload failed";
      toast.error(message);
    },
    onSettled: () => {
      setProgress(0);
    },
  });

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setUploadedUrl(null);
    setProgress(0);
    if (file) {
      const lower = file.name.toLowerCase();
      const isValidExt = lower.endsWith(".apk") || lower.endsWith(".ipa");
      if (!isValidExt) {
        toast.error("Only .apk or .ipa files are allowed");
        e.target.value = "";
        setSelectedFile(null);
        return;
      }
      if (file.size > MAX_SIZE_BYTES) {
        toast.error("File too large (max 512MB)");
        e.target.value = "";
        setSelectedFile(null);
        return;
      }
      setSelectedFile(file);
    } else {
      setSelectedFile(null);
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) {
      toast.error("Select a file first");
      return;
    }
    // Note: native fetch does not expose upload progress easily without XHR.
    // Keep a fake animated progress for UX; backend returns quickly for small files.
    setProgress(10);
    const interval = setInterval(() => {
      setProgress((p) => (p < 90 ? p + 5 : p));
    }, 300);
    try {
      await mutation.mutateAsync(selectedFile);
      setProgress(100);
    } finally {
      clearInterval(interval);
      setTimeout(() => setProgress(0), 800);
    }
  };

  return (
    <div className="container max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-6 text-primary">Upload build</h1>
      <Card className="p-6">
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="file">APK or IPA file</Label>
            <Input id="file" type="file" accept=".apk,.ipa" onChange={onFileChange} />
          </div>

          {progress > 0 && (
            <div>
              <Progress value={progress} />
              <div className="text-sm text-muted-foreground mt-1">{progress}%</div>
            </div>
          )}

          <div className="flex gap-3 flex-wrap">
            <Button type="submit" disabled={!selectedFile || mutation.isPending}>
              {mutation.isPending ? "Uploading..." : "Upload"}
            </Button>
            {uploadedUrl && (
              <>
                <a className="underline text-primary" href={uploadedUrl} target="_blank" rel="noreferrer">
                  View download link
                </a>
                <Link to="/dashboard">
                  <Button variant="outline" size="sm">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    View Stats
                  </Button>
                </Link>
              </>
            )}
          </div>
        </form>
      </Card>
    </div>
  );
}

