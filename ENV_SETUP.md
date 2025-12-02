# Environment Variables Setup Guide

## Problem Fixed

The contact form was hardcoded to use `http://localhost:3001`, which doesn't work when deployed to a production server. Now it uses environment variables that can be configured for different environments.

---

## 📁 Files Updated

1. ✅ `src/components/sections/ContactSection.tsx` - Now uses `VITE_API_URL` env variable
2. ✅ `src/vite-env.d.ts` - Added TypeScript types for env variables
3. ✅ `.env.example` - Template for environment variables

---

## 🔧 Setup Instructions

### For Local Development

1. **Create `.env` file** in the project root (if not exists):

   ```bash
   VITE_API_URL=http://localhost:3001
   ```

2. **Start the backend server:**

   ```bash
   npm run server
   ```

3. **Start the frontend:**
   ```bash
   npm run dev
   ```

### For Production Deployment

#### Option 1: Using Environment Variables (Recommended)

1. **Create `.env.production` file:**

   ```bash
   VITE_API_URL=https://your-backend-domain.com
   ```

2. **Or set environment variable in your hosting platform:**

   - **Vercel:** Add in Project Settings → Environment Variables
   - **Netlify:** Add in Site Settings → Build & Deploy → Environment
   - **Railway/Render:** Add in Environment Variables section

3. **Build the project:**
   ```bash
   npm run build
   ```

#### Option 2: Using .env File

1. **Create `.env.production` in project root:**

   ```bash
   VITE_API_URL=https://api.yourdomain.com
   ```

2. **Build:**
   ```bash
   npm run build
   ```

---

## 🌐 Common Deployment Scenarios

### Scenario 1: Backend on Same Domain

If your backend is on the same domain (e.g., `https://yourdomain.com/api`):

```bash
VITE_API_URL=https://yourdomain.com
```

The code will automatically append `/api/contact` to make: `https://yourdomain.com/api/contact`

### Scenario 2: Backend on Different Domain/Subdomain

If your backend is on a different domain or subdomain:

```bash
VITE_API_URL=https://api.yourdomain.com
# or
VITE_API_URL=https://backend.yourdomain.com
```

### Scenario 3: Backend on Different Port

If your backend runs on a different port:

```bash
VITE_API_URL=https://yourdomain.com:3001
```

### Scenario 4: Backend with Path Prefix

If your backend has a path prefix:

```bash
VITE_API_URL=https://yourdomain.com/backend
```

The code will make: `https://yourdomain.com/backend/api/contact`

---

## 🔒 Security Notes

### Important:

- ✅ `.env` files are gitignored (won't be committed)
- ✅ Only `VITE_` prefixed variables are exposed to the client
- ✅ Never put sensitive data in `VITE_` variables (they're visible in browser)
- ✅ Backend credentials (Gmail) stay in server `.env` only

### What's Safe to Put in VITE_API_URL:

- ✅ Public API URLs
- ✅ Backend server URLs
- ✅ CDN URLs

### What Should NOT Be in VITE\_ Variables:

- ❌ API keys
- ❌ Passwords
- ❌ Secret tokens
- ❌ Database credentials

---

## 🧪 Testing

### Test Local Development:

```bash
# Terminal 1: Start backend
npm run server

# Terminal 2: Start frontend
npm run dev

# Test form submission - should work
```

### Test Production Build:

```bash
# Set production env variable
export VITE_API_URL=https://your-backend-domain.com

# Build
npm run build

# Preview
npm run preview

# Test form submission - should call production API
```

---

## 📋 Environment Variable Reference

| Variable       | Description          | Example                                                              |
| -------------- | -------------------- | -------------------------------------------------------------------- |
| `VITE_API_URL` | Backend API base URL | `http://localhost:3001` (dev)<br>`https://api.yourdomain.com` (prod) |

---

## 🐛 Troubleshooting

### Issue: "Network Error" or "CORS Error"

**Solution:**

1. Check if `VITE_API_URL` is set correctly
2. Verify backend server is running
3. Check CORS settings in backend (`server/index.js`)
4. Ensure backend URL doesn't have trailing slash

### Issue: "404 Not Found"

**Solution:**

1. Verify the API endpoint path is correct
2. Check if backend is deployed and accessible
3. Test the API URL directly in browser: `https://your-api-url.com/api/health`

### Issue: Environment Variable Not Working

**Solution:**

1. Ensure variable name starts with `VITE_`
2. Restart dev server after changing `.env`
3. Rebuild after changing production env vars
4. Check browser console for actual API URL being used

### Issue: Works Locally But Not in Production

**Solution:**

1. Check if production env variable is set in hosting platform
2. Verify the backend URL is accessible from production domain
3. Check CORS allows requests from production domain
4. Ensure backend is deployed and running

---

## 🔄 Backend CORS Configuration

Make sure your backend (`server/index.js`) allows requests from your production domain:

```javascript
const cors = require("cors");

const corsOptions = {
  origin: [
    "http://localhost:5173", // Local dev
    "https://yourdomain.com", // Production
    "https://www.yourdomain.com", // WWW version
  ],
  credentials: true,
};

app.use(cors(corsOptions));
```

Or allow all origins (less secure, but easier for testing):

```javascript
app.use(cors()); // Allows all origins
```

---

## 📝 Example .env Files

### `.env` (Local Development)

```bash
VITE_API_URL=http://localhost:3001
```

### `.env.production` (Production)

```bash
VITE_API_URL=https://api.yourdomain.com
```

### `server/.env` (Backend - separate file)

```bash
GMAIL_USER=tudor.baciu1025@gmail.com
GMAIL_APP_PASSWORD=jyoxzrnapoxoxirk
PORT=3001
```

---

## ✅ Checklist for Deployment

- [ ] Set `VITE_API_URL` in production environment
- [ ] Deploy backend server
- [ ] Update backend CORS to allow production domain
- [ ] Test API endpoint: `https://your-api-url.com/api/health`
- [ ] Build frontend: `npm run build`
- [ ] Deploy frontend
- [ ] Test contact form submission
- [ ] Verify email is received

---

## 🎉 Result

Now your contact form will:

- ✅ Work locally with `http://localhost:3001`
- ✅ Work in production with your production API URL
- ✅ Be easily configurable via environment variables
- ✅ Support different environments (dev, staging, prod)

**No more hardcoded localhost! 🚀**
