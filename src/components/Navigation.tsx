import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navigation: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="flex justify-left space-x-4 my-4 ml-[4rem]">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={() => navigate('/buy-tickets')}
      >
        Tickets
      </button>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={() => navigate('/results')}
      >
        Results
      </button>
    </div>
  )
}

export default Navigation
