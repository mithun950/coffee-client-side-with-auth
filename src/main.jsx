import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './Components/AddCoffee.jsx';
import UpdateCoffee from './Components/UpdateCoffee.jsx';
import SignIn from './Components/SignIn.jsx';
import SignUp from './Components/SignUp.jsx';
import Header from './Header.jsx';
import MainLayout from './MainLayout/MainLayout.jsx';
import AuthProvider, { AuthContext } from './Provider/AuthProvider.jsx';
import Users from './Components/Users.jsx';
const router = createBrowserRouter([
  {
     path: "/",
     element: <MainLayout></MainLayout>,
     children:[
      {
        path: "/",
        element: <App></App>,
        loader: () => fetch('http://localhost:3000/coffee')
      },
     
  
 
  {
    path: "addCoffee",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "updateCoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({params}) => fetch(`http://localhost:3000/coffee/${params.id}`)
  },
  {
    path: "/signin",
    element: <SignIn></SignIn>,

  },
  {
    path: "/signUp",
    element: <SignUp></SignUp>,
  },
  {
      path: '/users',
      element: <Users></Users>,
      loader: () => fetch('http://localhost:3000/users')
  },
]
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
  </StrictMode>,
)
