# Rewardz Pet Reunion - Landing Page & App Distribution

A modern web application for the Rewardz Pet Reunion service with APK/IPA file upload and download tracking functionality.

## Features

- 🎨 Beautiful landing page with custom color palette
- 📱 APK/IPA file upload system for app distribution
- 📊 Download tracking and statistics dashboard
- 🔒 Owner-only routes for file management (no authentication required)
- 🌐 Public download page for users
- 📈 Real-time download analytics

## Color Palette

- **White**: `#FCFCFC` - Background and cards
- **Deep Teal**: `#0E5C7B` - Primary color
- **Light Blue-Green**: `#B4D9D5` - Secondary color
- **Light Pastel Green**: `#B9F0C8` - Accent color

## Tech Stack

- **Frontend**: React, TypeScript, Vite, TailwindCSS
- **UI Components**: shadcn/ui, Radix UI
- **Backend**: Express.js, Multer
- **Routing**: React Router DOM
- **State Management**: TanStack Query (React Query)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Sanare-droid/rewardz-landing-page.git
cd rewardz-landing-page
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file (optional):
```bash
cp env.example .env
```

Edit `.env` and set `VITE_API_URL` if deploying to production.

### Development

Run both frontend and backend concurrently:
```bash
npm run dev:all
```

Or run them separately:

**Frontend only** (port 8080):
```bash
npm run dev
```

**Backend only** (port 3001):
```bash
npm run dev:server
```

## Routes

### Public Routes
- `/` - Landing page
- `/downloads` - Public download page for APK/IPA files
- `/admin` - Information on how to access owner features

### Owner-Only Routes (Hidden)
- `/owner/upload` - Upload APK/IPA files
- `/owner/dashboard` - View download statistics

## Deployment

### Vercel (Frontend)

1. Push your code to GitHub
2. Import project in Vercel
3. Set environment variable:
   - `VITE_API_URL` = your backend API URL

### Backend Deployment

Deploy the backend (`server.js`) to any Node.js hosting service:
- Heroku
- Railway
- Render
- DigitalOcean App Platform

**Important**: Set the backend URL in Vercel's `VITE_API_URL` environment variable.

## Project Structure

```
├── src/
│   ├── components/       # React components
│   │   ├── ui/          # shadcn/ui components
│   │   ├── HeroSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   └── ...
│   ├── pages/           # Page components
│   │   ├── Index.tsx
│   │   ├── Downloads.tsx
│   │   ├── Upload.tsx
│   │   ├── Dashboard.tsx
│   │   └── AdminAccess.tsx
│   ├── config/          # Configuration
│   │   └── api.ts       # API endpoints
│   └── hooks/           # Custom React hooks
├── server.js            # Express backend
├── package.json
└── vite.config.ts
```

## API Endpoints

- `POST /api/upload` - Upload APK/IPA file
- `GET /api/stats` - Get all download statistics
- `GET /api/stats/:filename` - Get stats for specific file
- `GET /downloads/:filename` - Download file (tracks download count)
- `GET /health` - Health check endpoint

## Environment Variables

### Frontend (.env)
```
VITE_API_URL=http://localhost:3001  # Development
# VITE_API_URL=https://your-backend-url.com  # Production
```

## License

MIT

## Author

Sanare-droid
