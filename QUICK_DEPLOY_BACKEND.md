# 🚀 Quick Guide: Deploy Backend Server Online

## ✅ Yes, You Need an Online Server!

Your backend Express.js server needs to be deployed separately from your frontend. Here's the easiest way:

---

## 🎯 Recommended: Railway (Easiest & Free)

### Step 1: Prepare Backend Folder

Your `server/` folder is already set up! Just make sure you have:

- ✅ `server/index.js` (your backend code)
- ✅ `server/package.json` (I just created this for you)
- ✅ `server/.env` (with your Gmail credentials)

### Step 2: Deploy to Railway

1. **Go to Railway:** https://railway.app
2. **Sign up** (free with GitHub)
3. **Click "New Project"**
4. **Choose "Deploy from GitHub repo"** OR **"Empty Project"**

#### Option A: Deploy from GitHub (Recommended)

- Connect your GitHub account
- Select your repository
- Railway will detect it's a Node.js project
- Set root directory to `server` (important!)
- Add environment variables (see below)
- Deploy!

#### Option B: Deploy Empty Project

- Click "Empty Project"
- Click "Add Service" → "GitHub Repo"
- Select your repo
- Set root directory to `server`
- Add environment variables
- Deploy!

### Step 3: Set Environment Variables in Railway

In Railway dashboard, go to your service → Variables tab, add:

```
GMAIL_USER=tudor.baciu1025@gmail.com
GMAIL_APP_PASSWORD=jyoxzrnapoxoxirk
PORT=3001
FRONTEND_URL=https://www.devcorp.solutions
```

### Step 4: Get Your Backend URL

After deployment, Railway will give you a URL like:

```
https://your-app-name.railway.app
```

### Step 5: Update Frontend

1. **Go to your frontend hosting** (wherever `www.devcorp.solutions` is hosted)
2. **Add environment variable:**
   ```
   VITE_API_URL=https://your-app-name.railway.app
   ```
3. **Redeploy frontend**

---

## 🔄 Alternative: Render.com (Also Free)

### Steps:

1. Go to https://render.com
2. Sign up
3. Click "New +" → "Web Service"
4. Connect GitHub repo
5. Settings:
   - **Name:** devcorp-backend
   - **Root Directory:** `server`
   - **Build Command:** (leave empty or `npm install`)
   - **Start Command:** `npm start`
6. Add environment variables (same as Railway)
7. Deploy!
8. Get URL: `https://your-app.onrender.com`
9. Update frontend `VITE_API_URL`

---

## 📋 Environment Variables Checklist

### Backend Server (Railway/Render):

```bash
GMAIL_USER=tudor.baciu1025@gmail.com
GMAIL_APP_PASSWORD=jyoxzrnapoxoxirk
PORT=3001
FRONTEND_URL=https://www.devcorp.solutions
```

### Frontend (Your hosting platform):

```bash
VITE_API_URL=https://your-backend-url.railway.app
```

---

## ✅ After Deployment

1. **Test backend health:**

   ```
   https://your-backend-url.railway.app/api/health
   ```

   Should return: `{"status":"ok","message":"Server is running"}`

2. **Test contact endpoint:**

   ```
   https://your-backend-url.railway.app/api/contact
   ```

   (Use Postman or curl to test POST request)

3. **Update frontend** with new `VITE_API_URL`

4. **Redeploy frontend**

5. **Test contact form** on your website

---

## 🎯 Quick Summary

**What you need to do:**

1. ✅ Deploy `server/` folder to Railway/Render
2. ✅ Set environment variables
3. ✅ Get backend URL
4. ✅ Set `VITE_API_URL` in frontend
5. ✅ Redeploy frontend
6. ✅ Done! 🎉

**Time needed:** ~10-15 minutes

---

## 🆘 Need Help?

### Railway Issues:

- Make sure root directory is set to `server`
- Check that `package.json` is in `server/` folder
- Verify environment variables are set
- Check Railway logs for errors

### Still Getting 404?

- Verify backend URL is correct
- Check `VITE_API_URL` is set in frontend
- Test backend directly: `https://your-backend-url.com/api/health`
- Check browser console for actual API URL being called

---

**Your backend server needs to run online 24/7 to handle contact form submissions!** 🚀
