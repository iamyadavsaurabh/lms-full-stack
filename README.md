# LMS Full Stack Application

A complete Learning Management System built with React (Frontend) and Node.js/Express (Backend).

## 🚀 Features

- User authentication with Clerk
- Course creation and management
- Payment processing with Stripe
- File uploads with Cloudinary
- Student enrollment and progress tracking
- Responsive design with Tailwind CSS

## 🛠️ Tech Stack

### Frontend (Client)
- **React + Vite** - Fast development build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Clerk** - Authentication and user management
- **Axios** - HTTP client for API requests

### Backend (Server)
- **Node.js + Express** - Server framework
- **MongoDB** - Database
- **Cloudinary** - Media management
- **Stripe** - Payment processing
- **Clerk** - Authentication middleware

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB database
- Clerk account
- Stripe account
- Cloudinary account

### 1. Clone the repository
```bash
git clone https://github.com/iamyadavsaurabh/lms-full-stack.git
cd lms-full-stack
```

### 2. Backend Setup
```bash
cd server
npm install
```

Create a `.env` file in the server directory and add your environment variables:
```bash
cp .env.example .env
```

Fill in your actual values in the `.env` file:
- `MONGODB_URI` - Your MongoDB connection string
- `CLERK_*` - Your Clerk API keys
- `CLOUDINARY_*` - Your Cloudinary credentials
- `STRIPE_*` - Your Stripe API keys

### 3. Frontend Setup
```bash
cd ../client
npm install
```

Create a `.env` file in the client directory:
```bash
cp .env.example .env
```

Fill in your actual values in the client `.env` file.

### 4. Run the application

#### Development Mode
```bash
# Start backend (from server directory)
cd server
npm run dev

# Start frontend (from client directory)
cd client
npm run dev
```

#### Production Mode
```bash
# Build frontend
cd client
npm run build

# Start backend in production
cd ../server
npm start
```

## 🌐 Deployment

### Deploy to Vercel

#### Frontend Deployment
1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Set up environment variables in Vercel dashboard
4. Deploy

#### Backend Deployment
1. You can deploy the backend to Vercel as well, or use services like Railway, Heroku, or DigitalOcean
2. Set up environment variables in your deployment platform
3. Update the `VITE_BACKEND_URL` in your frontend environment variables

### Environment Variables for Deployment

#### Frontend (Vercel)
```
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_CURRENCY=$
VITE_BACKEND_URL=your_deployed_backend_url
```

#### Backend (Vercel/Railway/Heroku)
```
CURRENCY=USD
MONGODB_URI=your_mongodb_connection_string
CLERK_WEBHOOK_SECRET=your_clerk_webhook_secret
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
```

## 📁 Project Structure

```
lms-full-stack/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── context/       # React context
│   │   └── assets/        # Static assets
│   ├── public/            # Public assets
│   └── package.json
├── server/                 # Express backend
│   ├── controllers/       # Route controllers
│   ├── models/           # Database models
│   ├── routes/           # API routes
│   ├── middlewares/      # Custom middlewares
│   ├── configs/          # Configuration files
│   └── package.json
└── README.md
```

## 🔧 API Endpoints

### Authentication
- `POST /api/users/register` - Register new user
- `POST /api/users/login` - User login

### Courses
- `GET /api/courses` - Get all courses
- `POST /api/courses` - Create new course
- `GET /api/courses/:id` - Get course details
- `PUT /api/courses/:id` - Update course
- `DELETE /api/courses/:id` - Delete course

### Enrollments
- `POST /api/courses/:id/enroll` - Enroll in course
- `GET /api/users/:id/enrollments` - Get user enrollments

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 📞 Support

For support, email your-email@example.com or create an issue on GitHub.
