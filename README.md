# NGL Professional Audit & Anonymous Q&A Platform

![NGL Banner](https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000&auto=format&fit=crop)

A sophisticated full-stack anonymous messaging platform inspired by NGL.designed for security auditing and private data collection. Built with a React/Vite frontend and a Node.js/Express backend, this project features a professional admin dashboard, data persistence, and advanced IP tracking.

## ✨ Features

### 📨 For Users

- **Anonymous Messaging**: Seamless message submission interface with random prompts (dice feature).
- **Instagram Verification**: Conditional Instagram username prompt to build trust/collect data.
- **Modern UI**: Vibrant gradients and smooth micro-animations using Framer Motion.
- **Privacy First**: Clear privacy notes and security guarantees for users.

### 🔐 For Admins (Secure Dashboard)

- **Centralized Inbox**: Archived messages with IP tracking and timestamps.
- **Real-time Settings**: Toggle Instagram verification requirements instantly across all sessions.
- **Media Library**: Generate and download ready-to-share Instagram Story cards using `html2canvas`.
- **Authenticated Access**: Secure login protected by environment variables.
- **Advanced Persistence**: Server-side JSON storage (`mes.json`) ensures data synchronization across sessions.

### 🛡️ Security

- **Express Rate Limit**: Prevents spam on the messaging endpoint.
- **Helmet Middleware**: Configurable CSP policies to protect against XSS and data injection.
- **IP Forensic Tracking**: Captures and stores submitter IP addresses for audit purposes.
- **Atomic File Writing**: Prevents data corruption on high-traffic instances.

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite, Framer Motion, Lucide React, html2canvas
- **Backend**: Node.js, Express
- **Storage**: JSON Flat-File Database (Atomic)
- **Security**: Helmet, Express Rate Limit, CORS

## 📦 Installation & Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/ngl-core-audit.git
   cd ngl-core-audit
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory:

   ```env
   VITE_ADMIN_USERNAME=your_admin_user
   VITE_ADMIN_PASSWORD=your_secure_password
   PORT=5001
   ```

4. **Run the application:**
   - **Full Stack Development**: `npm run dev:all` (Starts both Vite and Backend)
   - **Frontend Only**: `npm run dev`
   - **Backend Only**: `npm run server`

## 📂 Project Structure

```text
├── src/
│   ├── pages/        # Send page, Login, Admin Panel
│   ├── components/   # UI components (StoryCanvas, etc.)
│   └── main.jsx       # Entry point
├── server.js         # Node.js Express Backend
├── mes.json          # Server-side Data Persistence
├── vite.config.js    # Proxy and build configuration
└── .env              # Secrets and Configuration
```

## 📜 License

MIT License. For educational and security auditing purposes only.

---
Built with ⚡ by BugraAkdemir Developer
