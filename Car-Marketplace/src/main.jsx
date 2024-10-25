import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Home} from './components/home.jsx'
import './index.css'
import { createBrowserRouter ,RouterProvider} from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}


const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about',
      element: <div>About</div>,
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
     </ClerkProvider>
  </StrictMode>,
)


