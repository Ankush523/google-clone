import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import './index.css'
import { StateContextProvider } from './hooks/StateContextProvider';


ReactDOM.createRoot(document.getElementById('root')).render(
  <StateContextProvider>
    <Router>
      <App />
    </Router>
  </StateContextProvider>
)







