import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Add from './Components/Add.jsx'
import { Toaster } from 'react-hot-toast'
import Update from './Components/Update.jsx'

const router  = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/add',
    element:<Add/>
  },
  {
    path:'/update/:id',
    element:<Update/>
  }
 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <Toaster/>
  </React.StrictMode>,
)
