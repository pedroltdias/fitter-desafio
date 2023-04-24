import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import BuyTickets from './pages/BuyTickets'
import Results from './pages/Results'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BuyTickets />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  )
}

export default App
