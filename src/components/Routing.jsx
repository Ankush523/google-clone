import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Results from './Results'
import Search from './Search'

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Search/>}/>
        <Route path="/search" element={<Results/>}/>
        <Route path="/images" element={<Results/>}/>
        <Route path="/news" element={<Results/>}/>
        <Route path="/videos" element={<Results/>}/>
      </Routes>
    </div>
  )
}

export default Routing