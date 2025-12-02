# 🏗️ Project Architecture

## Current Setup

```
┌─────────────────────────────────────────────────────────┐
│                    YOUR WEBSITE                         │
│         https://www.devcorp.solutions                    │
│                                                          │
│  ┌──────────────────────────────────────────────────┐  │
│  │           FRONTEND (React App)                   │  │
│  │  - Contact Form                                  │  │
│  │  - Makes POST request to:                        │  │
│  │    https://www.devcorp.solutions/api/contact      │  │
│  └──────────────────────────────────────────────────┘  │
│                                                          │
│  ❌ NO BACKEND SERVER HERE!                             │
│  (This is just a static frontend site)                  │
└─────────────────────────────────────────────────────────┘
```

## What You Need

```
┌─────────────────────────────────────────────────────────┐
│              FRONTEND (Already Deployed)                │
│         https://www.devcorp.solutions                    │
│                                                          │
│  Contact Form → POST request →                          │
│                                                          │
└─────────────────────────────────────────────────────────┘
                        │
                        │ (needs to call)
                        ▼
┌─────────────────────────────────────────────────────────┐
│           BACKEND SERVER (Need to Deploy!)              │
│         https://your-backend.railway.app                │
│                                                          │
│  ┌──────────────────────────────────────────────────┐  │
│  │  Express.js Server                               │  │
│  │  - Receives POST /api/contact                    │  │
│  │  - Sends email via Gmail                         │  │
│  │  - Returns success response                      │  │
│  └──────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

## After Deployment

```
User fills form on www.devcorp.solutions
         │
         ▼
Frontend sends: POST https://your-backend.railway.app/api/contact
         │
         ▼
Backend receives request
         │
         ▼
Backend sends email via Gmail
         │
         ▼
Backend returns success
         │
         ▼
Frontend shows success message
```

---

## 📁 Project Structure

```
word/
├── src/                    ← Frontend (React)
│   └── components/
│       └── sections/
│           └── ContactSection.tsx  ← Makes API call
│
├── server/                 ← Backend (Express.js) - NEEDS DEPLOYMENT!
│   ├── index.js            ← API endpoint handler
│   ├── package.json        ← Backend dependencies
│   └── .env                ← Gmail credentials
│
└── public/                 ← Static files
```

---

## 🔄 Request Flow

### Current (Broken):

```
Frontend → POST /api/contact → ❌ 404 Error
(No backend server to handle it)
```

### After Deployment (Working):

```
Frontend → POST https://backend.railway.app/api/contact → ✅ Success
(Backend server handles it and sends email)
```

---

## ✅ What You Need to Do

1. **Deploy `server/` folder** to Railway/Render
2. **Get backend URL** (e.g., `https://devcorp-backend.railway.app`)
3. **Set `VITE_API_URL`** in frontend to backend URL
4. **Redeploy frontend**
5. **Done!** ✅

---

**The backend server must run 24/7 online to handle contact form submissions!** 🚀
