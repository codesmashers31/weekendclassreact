import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserProviders from './provider/UserProviders.jsx'

createRoot(document.getElementById('root')).render(


    <UserProviders>
            <App />
    </UserProviders>
   
  
)
