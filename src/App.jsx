import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Routes from './components/Routing'

function App() {
  const [darkTheme, setDarkTheme] = useState(false)

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className="dark:bg-gray-900 bg-gray-100 dark:text-gray-200 black min-h-screen">
        <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
        <Routes />
      </div>
    </div>
  )
}

export default App
