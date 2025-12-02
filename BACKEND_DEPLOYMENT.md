# Backend Server Deployment Guide

## 🚨 Issue: 404 Error on Production

If you're getting a 404 error when calling `https://www.devcorp.solutions/api/contact`, it means the backend server is not deployed or not accessible at that path.

---

## 🔍 Problem Analysis

The backend is a **separate Express.js server** that needs to be deployed independently from the frontend. The frontend at `https://www.devcorp.solutions` cannot serve the backend API routes unless:

1. **Option A:** Backend is deployed separately and frontend calls it
2. **Option B:** Backend is deployed as serverless functions (Vercel/Netlify)
3. **Option C:** Backend is on the same server with reverse proxy

---

## ✅ Solution Options

### Option 1: Deploy Backend Separately (Recommended)

Deploy the backend server to a hosting service like:
- **Railway** (https://railway.app)
- **Render** (https://render.com)
- **Heroku** (https://heroku.com)
- **DigitalOcean App Platform**
- **Fly.io**

**Steps:**

1. **Create account** on one of the platforms above

2. **Connect your repository** or upload the `server` folder

3. **Set environment variables:**
   ```
   GMAIL_USER=tudor.baciu1025@gmail.com
   GMAIL_APP_PASSWORD=jyoxzrnapoxoxirk
   PORT=3001
   FRONTEND_URL=https://www.devcorp.solutions
   ```

4. **Deploy** - You'll get a URL like: `https://your-backend.railway.app`

5. **Update frontend `.env.production`:**
   ```
   VITE_API_URL=https://your-backend.railway.app
   ```

6. **Redeploy frontend** with the new API URL

---

### Option 2: Deploy as Vercel Serverless Functions

If your frontend is on Vercel, you can deploy the backend as serverless functions.

**Steps:**

1. **Create `api/contact.js` in your project root:**
   ```javascript
   import express from 'express';
   import cors from 'cors';
   import nodemailer from 'nodemailer';
   
   const app = express();
   app.use(cors());
   app.use(express.json());
   
   // Your contact handler code here
   ```

2. **Or use Vercel's API routes structure:**
   - Create `api/contact.js` in project root
   - Vercel will automatically serve it at `/api/contact`

3. **Set environment variables in Vercel dashboard**

---

### Option 3: Use Netlify Functions

If your frontend is on Netlify:

1. **Create `netlify/functions/contact.js`**
2. **Deploy** - Netlify will serve it at `/.netlify/functions/contact`

---

### Option 4: Same Server with Reverse Proxy

If you have a VPS/server:

1. **Deploy backend** on port 3001
2. **Configure Nginx reverse proxy:**
   ```nginx
   location /api {
       proxy_pass http://localhost:3001;
       proxy_http_version 1.1;
       proxy_set_header Upgrade $http_upgrade;
       proxy_set_header Connection 'upgrade';
       proxy_set_header Host $host;
       proxy_cache_bypass $http_upgrade;
   }
   ```

---

## 🚀 Quick Deploy to Railway (Easiest)

### Step 1: Prepare Backend

1. **Create `server/package.json`** (if not exists):
   ```json
   {
     "name": "devcorp-backend",
     "version": "1.0.0",
     "type": "module",
     "main": "index.js",
     "scripts": {
       "start": "node index.js"
     },
     "dependencies": {
       "express": "^4.19.2",
       "cors": "^2.8.5",
       "nodemailer": "^6.9.14",
       "dotenv": "^16.4.5"
     }
   }
   ```

2. **Create `server/.env`** (for local testing):
   ```
   GMAIL_USER=tudor.baciu1025@gmail.com
   GMAIL_APP_PASSWORD=jyoxzrnapoxoxirk
   PORT=3001
   FRONTEND_URL=https://www.devcorp.solutions
   ```

### Step 2: Deploy to Railway

1. Go to https://railway.app
2. Click "New Project"
3. Select "Deploy from GitHub repo" or "Empty Project"
4. If empty, upload your `server` folder
5. Set environment variables in Railway dashboard
6. Railway will give you a URL like: `https://your-app.railway.app`

### Step 3: Update Frontend

1. **Set `VITE_API_URL` in your frontend hosting:**
   ```
   VITE_API_URL=https://your-app.railway.app
   ```

2. **Redeploy frontend**

---

## 🧪 Testing After Deployment

1. **Test health endpoint:**
   ```
   https://your-backend-url.com/api/health
   ```
   Should return: `{"status":"ok","message":"Server is running"}`

2. **Test contact endpoint:**
   ```bash
   curl -X POST https://your-backend-url.com/api/contact \
     -H "Content-Type: application/json" \
     -d '{
       "company": "Test",
       "email": "test@example.com",
       "phone": "123-456-7890",
       "message": "Test message"
     }'
   ```

3. **Check frontend** - Form should now work

---

## 🔧 Current Backend Structure

```
server/
├── index.js          # Main server file
├── package.json      # Dependencies (create if missing)
└── .env              # Environment variables (not in git)
```

---

## 📋 Environment Variables Needed

### Backend Server:
```bash
GMAIL_USER=tudor.baciu1025@gmail.com
GMAIL_APP_PASSWORD=jyoxzrnapoxoxirk
PORT=3001
FRONTEND_URL=https://www.devcorp.solutions
```

### Frontend:
```bash
VITE_API_URL=https://your-backend-url.com
```

---

## 🐛 Troubleshooting

### Issue: Still Getting 404

**Check:**
1. Is backend actually deployed?
2. Can you access `https://your-backend-url.com/api/health`?
3. Is `VITE_API_URL` set correctly in frontend?
4. Check browser console for actual API URL being called

### Issue: CORS Error

**Solution:** Set `FRONTEND_URL` in backend environment:
```bash
FRONTEND_URL=https://www.devcorp.solutions
```

### Issue: Email Not Sending

**Check:**
1. Are Gmail credentials correct?
2. Is Gmail App Password valid?
3. Check backend logs for errors

---

## ✅ Deployment Checklist

- [ ] Backend server deployed and accessible
- [ ] Health endpoint works: `/api/health`
- [ ] Environment variables set in backend
- [ ] `VITE_API_URL` set in frontend
- [ ] Frontend redeployed with new API URL
- [ ] CORS configured correctly
- [ ] Test contact form submission
- [ ] Verify email received

---

## 🎯 Recommended: Railway Deployment

**Why Railway:**
- ✅ Free tier available
- ✅ Easy deployment
- ✅ Automatic HTTPS
- ✅ Environment variables UI
- ✅ Logs dashboard
- ✅ Simple setup

**Steps:**
1. Sign up at railway.app
2. New Project → Deploy from GitHub
3. Select your repo
4. Set root directory to `server`
5. Add environment variables
6. Deploy!
7. Get your backend URL
8. Update frontend `VITE_API_URL`

---

## 📝 Quick Fix Summary

**The Problem:**
- Frontend is trying to call `/api/contact` on `www.devcorp.solutions`
- But backend server is not deployed there

**The Solution:**
1. Deploy backend to Railway/Render/Heroku
2. Get backend URL (e.g., `https://backend.railway.app`)
3. Set `VITE_API_URL=https://backend.railway.app` in frontend
4. Redeploy frontend
5. Done! ✅

---

**Your backend needs to be deployed separately! The frontend cannot serve backend API routes by itself.** 🚀

