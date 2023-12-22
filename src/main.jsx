import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import MainLayout from './layout/MainLayout';
import ErrorPage from './pages/ErrorPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AuthProvider from './provider/AuthProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashboardHome from './pages/Dashboard/DashboardHome';
import MyTasks from './pages/Dashboard/MyTasks';

// dnd durg and drop
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'


// route
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <Register></Register>
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            index: true,
            element: <DashboardHome ></DashboardHome>
          },
          {
            path: "/dashboard/mytasks",
            element: <MyTasks></MyTasks>
          }
        ]
      }

    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
      <ToastContainer />
    </DndProvider>
  </React.StrictMode>,
)
