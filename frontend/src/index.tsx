import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './routes/Home/Home';
import Sabatina from './routes/Sabatina/Sabatina';
import Login from './routes/Login/Login';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider/AuthContext';
import { ProtectedLayout } from './context/AuthProvider/ProtectedLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/sabatina',
    element: <ProtectedLayout>
      <Sabatina />
    </ProtectedLayout>
  },
  {
    path: '/login',
    element: <Login />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
