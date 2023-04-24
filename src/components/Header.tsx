import React from 'react'
import { useNavigate } from 'react-router-dom'
import { LogoutIcon, Logo } from '../assets/icons'

interface HeaderProps {
  balance: number
  onBuyTicket: () => void
  onLogout: () => void
}

const Header: React.FC<HeaderProps> = ({ balance, onBuyTicket, onLogout }) => {
  const balanceColorClass = balance >= 0 ? 'text-green-500' : 'text-red-500'
  const formattedBalance = new Intl.NumberFormat('pt-BR', {
    style: 'decimal',
    minimumFractionDigits: 2,
  }).format(balance)
  const navigate = useNavigate()

  return (
    <header className="shadow-md py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Logo className="ml-4" />

        {/* Profile and actions */}
        <div className="flex items-center">
          {/* Profile */}
          <div className="flex items-center mr-4">
            <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden mr-2">
              <img
                src="https://via.placeholder.com/40" // Replace this with the profile image URL
                alt="Profile"
              />
            </div>
            <div>
              <p className="text-[#0D67BD]">ID: 3bg45a...</p>
              <p className={balanceColorClass}>R$ {formattedBalance}</p>
            </div>
          </div>

          {/* Logout button */}
          <button
            className="text-gray-700 p-1 rounded hover:bg-gray-200 mr-4"
            onClick={onLogout}
          >
            <LogoutIcon className="w-6 h-6" />
          </button>

          {/* Straight bar */}
          <div className="border-r border-gray-400 h-8 mr-4"></div>

          {/* Buy tickets button */}
          <button
            className="bg-[#2C3CCB] text-white px-4 py-2 rounded-xl hover:bg-blue-600"
            onClick={() => navigate('/buy-tickets')}
          >
            COMPRE TICKET
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
