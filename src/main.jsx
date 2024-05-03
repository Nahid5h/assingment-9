import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/Routes.jsx'
import AuthPrider from './AuthPrider/AuthPrider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthPrider>
   <RouterProvider router={routes}></RouterProvider>
   </AuthPrider>
  </React.StrictMode>,
)
