# Deployment Guide

## Quick Deploy to Vercel

### Option 1: Manual Deploy (Recommended)

#### Frontend (Client)
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import from GitHub: `lms-full-stack`
4. Set Root Directory: `client`
5. Framework Preset: `Vite`
6. Add Environment Variables:
   ```
   VITE_CLERK_PUBLISHABLE_KEY=pk_test_YXNzdXJlZC1jYWxmLTk4LmNsZXJrLmFjY291bnRzLmRldiQ
   VITE_CURRENCY=$
   VITE_BACKEND_URL=https://lms-full-stack-five-liard.vercel.app
   ```
   ⚠️ **Important:** Use your actual backend URL from step 1
7. Deploy

#### Backend (Server)
1. Create another Vercel project
2. Import same repository: `lms-full-stack`
3. Set Root Directory: `server`
4. Framework Preset: `Other`
5. Add all Environment Variables from your .env file
6. Deploy

### Option 2: Deploy Button

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/iamyadavsaurabh/lms-full-stack)

### Option 3: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy frontend
cd client
vercel --prod

# Deploy backend
cd ../server
vercel --prod
```

## Environment Variables Checklist

### Frontend (.env)
- [ ] VITE_CLERK_PUBLISHABLE_KEY
- [ ] VITE_CURRENCY
- [ ] VITE_BACKEND_URL

### Backend (.env)
- [ ] CURRENCY
- [ ] MONGODB_URI
- [ ] CLERK_WEBHOOK_SECRET
- [ ] CLERK_PUBLISHABLE_KEY
- [ ] CLERK_SECRET_KEY
- [ ] CLOUDINARY_NAME
- [ ] CLOUDINARY_API_KEY
- [ ] CLOUDINARY_SECRET_KEY
- [ ] STRIPE_PUBLISHABLE_KEY
- [ ] STRIPE_SECRET_KEY
- [ ] STRIPE_WEBHOOK_SECRET

## Post-Deployment Steps

1. **Update Frontend Backend URL**
   - Copy backend deployment URL
   - Update `VITE_BACKEND_URL` in frontend environment variables
   - Redeploy frontend

2. **Test the Application**
   - Test user registration/login
   - Test course creation
   - Test payment flow
   - Test file uploads

3. **Configure Webhooks**
   - Update Clerk webhook URL to your backend URL
   - Update Stripe webhook URL to your backend URL

## Troubleshooting

### ⚠️ "Function Property Cannot be Reused" Error Fix
This error occurs when you have duplicate Vercel projects. Follow these steps:

1. **Delete All Existing LMS Projects:**
   - Go to https://vercel.com/dashboard
   - Find ALL projects related to your LMS (usually 2 projects)
   - For each project: Click → Settings → Advanced → Delete Project
   - Type project name to confirm deletion

2. **Create Fresh Backend Project:**
   - Go to https://vercel.com/new
   - Import: `lms-full-stack` repository
   - **IMPORTANT:** Use a NEW project name like `lms-backend-v2`
   - Root Directory: `server`
   - Framework: `Other`
   - Add all environment variables
   - Deploy

3. **Create Fresh Frontend Project:**
   - Go to https://vercel.com/new (again)
   - Import: same `lms-full-stack` repository  
   - **IMPORTANT:** Use a NEW project name like `lms-frontend-v2`
   - Root Directory: `client`
   - Framework: `Vite`
   - Add environment variables with NEW backend URL
   - Deploy

### 🔄 Deployment Rollback Fix
If your deployment was rolled back, follow these steps:

1. **Check Deployment Logs:**
   - Go to your Vercel project dashboard
   - Click on "Functions" or "Deployments" tab
   - Look for error messages in the failed deployment

2. **Common Rollback Causes:**
   - Missing environment variables
   - Build errors
   - Runtime errors during deployment
   - CORS configuration issues

3. **Quick Fix:**
   - Ensure all environment variables are set correctly
   - Redeploy by pushing a new commit or manually triggering deployment
   - Use the specific URLs below:

**Your Working URLs:**
- Frontend: `https://lms-full-stack-xvml.vercel.app`  
- Backend: `https://lms-full-stack-five-liard.vercel.app`

⚠️ **If you get "function property cannot be reused" error, you MUST delete these projects and create new ones with different names.**

### Network Errors Fix 🔧
If you're getting network errors, try these solutions:

1. **CORS Issues**: 
   - Make sure your backend URL is correct in frontend env
   - Backend is configured with proper CORS origins
   - Both frontend and backend are deployed

2. **Environment Variables**: 
   - Double-check `VITE_BACKEND_URL` points to your deployed backend
   - Example: `VITE_BACKEND_URL=https://your-backend-name.vercel.app`
   - No trailing slash in the URL

3. **Quick Test**: 
   - Visit your backend URL directly (should show "API Working")
   - Visit `your-backend-url/api/course/all` (should return JSON)

### Common Issues:
1. **CORS Errors**: Ensure backend CORS is configured for your frontend domain
2. **Environment Variables**: Double-check all environment variables are set correctly
3. **Database Connection**: Ensure MongoDB URI is accessible from Vercel
4. **File Uploads**: Verify Cloudinary credentials are correct

### Logs:
- Check Vercel deployment logs for errors
- Use `vercel logs <deployment-url>` to see runtime logs
