import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './layout/appLayout'
import Landing from './pages/Landing'
import OnBoarding from './pages/OnBoarding'
import JobListing from './pages/JobListing'
import MyJobs from './pages/MyJobs'
import PostJobs from './pages/PostJobs'
import SavedJobs from './pages/SavedJobs'
import { ThemeProvider } from "@/components/theme-provider"
import './index.css';
import AuthProvider from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import Job from './pages/Job'


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Landing />
      },
      {
        path: "/onboarding",
        element: <ProtectedRoute>  <OnBoarding /></ProtectedRoute>
      },
      {
        path: "/jobs",
        element: <ProtectedRoute> <JobListing /> </ProtectedRoute>
      },
      {
        path: "/my-jobs",
        element: <ProtectedRoute><MyJobs /></ProtectedRoute>
      },
      {
        path: "/post-job",
        element: <ProtectedRoute> <PostJobs /></ProtectedRoute>
      },
      {
        path: "/saved-jobs",
        element: <ProtectedRoute> <SavedJobs /></ProtectedRoute>
      },

      {
        path: "/job/:id",
        element: <ProtectedRoute> <Job /></ProtectedRoute>
      },
    ]
  }
])

function App() {
  return <AuthProvider>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </AuthProvider>

}

export default App
