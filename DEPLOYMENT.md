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
   VITE_BACKEND_URL=https://your-backend-url.vercel.app
   ```
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

### Common Issues:
1. **CORS Errors**: Ensure backend CORS is configured for your frontend domain
2. **Environment Variables**: Double-check all environment variables are set correctly
3. **Database Connection**: Ensure MongoDB URI is accessible from Vercel
4. **File Uploads**: Verify Cloudinary credentials are correct

### Logs:
- Check Vercel deployment logs for errors
- Use `vercel logs <deployment-url>` to see runtime logs
