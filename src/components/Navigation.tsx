import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const Navigation: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { pathname } = location

  return (
    <div className="flex justify-left space-x-4 my-4 ml-[4rem]">
      <button
        className={`text-white px-4 py-2 ${
          pathname === '/buy-tickets'
            ? 'text-blue-500 border-b-2 border-blue-500'
            : ''
        }`}
        onClick={() => navigate('/buy-tickets')}
      >
        BILHETES
      </button>
      <button
        className={`text-white px-4 py-2 ${
          pathname === '/results'
            ? 'text-blue-500 border-b-2 border-blue-500'
            : ''
        }`}
        onClick={() => navigate('/results')}
      >
        RESULTADOS
      </button>
    </div>
  )
}

export default Navigation
