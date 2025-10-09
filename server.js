import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3001;

const uploadsDir = path.resolve(process.cwd(), "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// In-memory storage for download tracking (in production, use a database)
const downloadStats = new Map();

// CORS middleware
app.use(cors());

const storage = multer.diskStorage({
  destination: function (_req, _file, cb) {
    cb(null, uploadsDir);
  },
  filename: function (_req, file, cb) {
    const time = Date.now();
    const safeOriginal = file.originalname.replace(/[^a-zA-Z0-9_.-]/g, "_");
    cb(null, `${time}_${safeOriginal}`);
  },
});

function fileFilter(_req, file, cb) {
  const allowed = ["application/vnd.android.package-archive", "application/octet-stream", "application/zip", "application/x-itunes-ipa", "application/x-apple-ipa", "application/ipa"];
  const isApk = file.originalname.toLowerCase().endsWith(".apk");
  const isIpa = file.originalname.toLowerCase().endsWith(".ipa");
  if (isApk || isIpa || allowed.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only .apk and .ipa files are allowed"));
  }
}

const upload = multer({ storage, fileFilter, limits: { fileSize: 1024 * 1024 * 512 } }); // 512MB

app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

// Middleware to track downloads
app.use("/downloads", (req, res, next) => {
  const filename = req.path.substring(1); // Remove leading slash
  const stats = downloadStats.get(filename);
  
  if (stats) {
    stats.downloadCount += 1;
    stats.lastDownloaded = new Date().toISOString();
    downloadStats.set(filename, stats);
  }
  
  next();
});

// Serve uploaded files statically for downloads
app.use("/downloads", express.static(uploadsDir));

app.post("/api/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  const filename = req.file.filename;
  const downloadPath = `/downloads/${filename}`;
  
  // Initialize download tracking for this file
  downloadStats.set(filename, {
    originalName: req.file.originalname,
    size: req.file.size,
    mimeType: req.file.mimetype,
    uploadDate: new Date().toISOString(),
    downloadCount: 0,
    lastDownloaded: null
  });
  
  res.json({
    filename,
    originalName: req.file.originalname,
    size: req.file.size,
    mimeType: req.file.mimetype,
    url: downloadPath,
  });
});

// API endpoint to get download statistics
app.get("/api/stats", (req, res) => {
  const stats = Array.from(downloadStats.entries()).map(([filename, data]) => ({
    filename,
    ...data
  }));
  res.json(stats);
});

// API endpoint to get stats for a specific file
app.get("/api/stats/:filename", (req, res) => {
  const { filename } = req.params;
  const stats = downloadStats.get(filename);
  
  if (!stats) {
    return res.status(404).json({ error: "File not found" });
  }
  
  res.json({ filename, ...stats });
});

// Basic error handler
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: err.message || "Server error" });
});

app.listen(port, () => {
  console.log(`Upload server listening on http://localhost:${port}`);
});