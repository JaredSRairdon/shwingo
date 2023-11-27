import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { APIDataContextProvider } from './providers/APIDataContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <APIDataContextProvider>
      <App />
    </APIDataContextProvider>
  </React.StrictMode>,
)
