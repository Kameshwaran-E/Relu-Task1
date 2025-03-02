# Firebase Authentication with React

![React](https://img.shields.io/badge/React-19.0.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-blue)
![Firebase](https://img.shields.io/badge/Firebase-11.4.0-orange)
![Vite](https://img.shields.io/badge/Vite-6.2.0-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0.9-38B2AC)

A modern, responsive authentication system built with React, TypeScript, Firebase, and Tailwind CSS. This project provides a complete authentication flow with login, registration, and user dashboard functionality.

## 🚀 Features

- **User Authentication**
  - Email & Password Sign Up
  - Email & Password Login
  - Secure Authentication State Management
  - Protected Routes

- **Modern UI**
  - Responsive Design with Tailwind CSS
  - Clean and Intuitive Interface
  - Toast Notifications for User Feedback
  - Loading States and Error Handling

- **Security**
  - Firebase Authentication Integration
  - Protected Routes with React Router
  - Secure Context API Implementation


## 🛠️ Technologies Used

- **Frontend**
  - React 19
  - TypeScript
  - React Router 7
  - Tailwind CSS
  - React Toastify
  - Lucide React Icons

- **Backend/Services**
  - Firebase Authentication
  - Firebase SDK

- **Development Tools**
  - Vite
  - ESLint
  - TypeScript ESLint

## 🚦 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Firebase account

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/firebase-auth-react.git
   cd firebase-auth-react
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables
   - Create a `.env` file in the root directory based on `.env.example`
   - Add your Firebase configuration values

   ```
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
   ```

4. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

```
firebase-auth-react/
├── public/
├── src/
│   ├── components/
│   │   └── PrivateRoute.tsx
│   ├── contexts/
│   │   └── AuthContext.tsx
│   ├── firebase/
│   │   └── config.ts
│   ├── pages/
│   │   ├── Dashboard.tsx
│   │   ├── Login.tsx
│   │   └── Register.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .env.example
├── .gitignore
├── package.json
├── README.md
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🔒 Authentication Flow

1. **User Registration**
   - User enters email and password
   - Firebase creates a new user account
   - User is redirected to the dashboard

2. **User Login**
   - User enters credentials
   - Firebase authenticates the user
   - User is redirected to the dashboard

3. **Protected Routes**
   - Routes are protected using the `PrivateRoute` component
   - Unauthenticated users are redirected to the login page

4. **User Logout**
   - User clicks logout
   - Firebase signs out the user
   - User is redirected to the login page

## 🧩 Key Components

### AuthContext

The `AuthContext` provides authentication state and methods throughout the application:

```tsx
// Key methods
function signup(email: string, password: string) {
  return createUserWithEmailAndPassword(auth, email, password);
}

function login(email: string, password: string) {
  return signInWithEmailAndPassword(auth, email, password);
}

function logout() {
  return signOut(auth);
}
```

### PrivateRoute

The `PrivateRoute` component protects routes from unauthorized access:

```tsx
export default function PrivateRoute({ children }: PrivateRouteProps) {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
}
```

## 🔧 Customization

### Styling

This project uses Tailwind CSS for styling. You can customize the design by:

1. Modifying the `tailwind.config.js` file
2. Adding custom CSS in `src/index.css`
3. Updating component-level styles

### Firebase Configuration

You can extend the Firebase functionality by:

1. Adding more authentication methods (Google, Facebook, etc.)
2. Integrating Firestore for data storage
3. Setting up Firebase Hosting for deployment

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

Kameshwaran - [GitHub Profile](https://github.com/Kameshwaran-E)

## 🙏 Acknowledgements

- [React](https://reactjs.org/)
- [Firebase](https://firebase.google.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [Lucide Icons](https://lucide.dev/)
