# 🚀 Deployment Guide - API URL Configuration

## ✅ Problem Fixed

The contact form was hardcoded to `http://localhost:3001`, causing errors when deployed. Now it uses environment variables that work in both development and production.

---

## 🔧 Quick Setup

### For Local Development (Already Working)

No changes needed! The code defaults to `http://localhost:3001` if no env variable is set.

### For Production Deployment

**Step 1:** Create `.env.production` file in project root:

```bash
VITE_API_URL=https://your-backend-domain.com
```

**Step 2:** Set environment variable in your hosting platform:

**Vercel:**

- Go to Project Settings → Environment Variables
- Add: `VITE_API_URL` = `https://your-backend-domain.com`
- Redeploy

**Netlify:**

- Go to Site Settings → Build & Deploy → Environment
- Add: `VITE_API_URL` = `https://your-backend-domain.com`
- Redeploy

**Railway/Render/Other:**

- Add `VITE_API_URL` in Environment Variables section
- Redeploy

**Step 3:** Update backend CORS (if needed)

In `server/.env`:

```bash
FRONTEND_URL=https://your-frontend-domain.com
```

Or update `server/index.js` CORS to allow your production domain.

---

## 📋 What Changed

### Files Modified:

1. ✅ `src/components/sections/ContactSection.tsx` - Uses `VITE_API_URL` env variable
2. ✅ `src/vite-env.d.ts` - Added TypeScript types
3. ✅ `server/index.js` - Updated CORS configuration
4. ✅ `.env.example` - Created template file

### Code Changes:

- **Before:** `axios.post("http://localhost:3001/api/contact", ...)`
- **After:** `axios.post(\`${apiUrl}/api/contact\`, ...)`where`apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001'`

---

## 🌐 Example Configurations

### Same Domain Setup

```
Frontend: https://yourdomain.com
Backend:  https://yourdomain.com/api

VITE_API_URL=https://yourdomain.com
```

### Subdomain Setup

```
Frontend: https://www.yourdomain.com
Backend:  https://api.yourdomain.com

VITE_API_URL=https://api.yourdomain.com
```

### Different Domains

```
Frontend: https://yourdomain.com
Backend:  https://backend.otherdomain.com

VITE_API_URL=https://backend.otherdomain.com
```

---

## ✅ Testing Checklist

- [ ] Set `VITE_API_URL` in production environment
- [ ] Backend server is deployed and accessible
- [ ] Test API health: `https://your-api-url.com/api/health`
- [ ] CORS allows requests from production frontend
- [ ] Build frontend: `npm run build`
- [ ] Deploy frontend
- [ ] Test contact form submission
- [ ] Verify email is received

---

## 🐛 Common Issues & Solutions

### Issue: "Network Error" in Production

**Check:**

1. Is `VITE_API_URL` set correctly?
2. Is backend server running?
3. Can you access `https://your-api-url.com/api/health`?

**Solution:** Verify backend URL and CORS settings

### Issue: CORS Error

**Solution:** Update backend CORS in `server/index.js`:

```javascript
const corsOptions = {
  origin: "https://your-frontend-domain.com",
  credentials: true,
};
```

### Issue: 404 Not Found

**Solution:**

1. Check API endpoint path is correct
2. Verify backend is deployed
3. Test API URL directly

---

## 📝 Environment Variables Summary

| Variable             | Location        | Purpose                  |
| -------------------- | --------------- | ------------------------ |
| `VITE_API_URL`       | Frontend `.env` | Backend API base URL     |
| `FRONTEND_URL`       | Backend `.env`  | Frontend domain for CORS |
| `GMAIL_USER`         | Backend `.env`  | Gmail account            |
| `GMAIL_APP_PASSWORD` | Backend `.env`  | Gmail app password       |
| `PORT`               | Backend `.env`  | Backend server port      |

---

## 🎉 Result

Your contact form now:

- ✅ Works locally (defaults to localhost:3001)
- ✅ Works in production (uses VITE_API_URL)
- ✅ Easy to configure per environment
- ✅ No hardcoded URLs

**Ready for deployment! 🚀**
