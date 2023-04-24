import React from 'react'
import { useNavigate } from 'react-router-dom'
import { LogoutIcon, Logo } from '../assets/icons'
import Image from '../components/Image'

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

        <div className="flex items-center">
          <div className="flex items-center mr-4">
            <Image src={'https://via.placeholder.com/40'} alt={'placeholder'} />
            <div>
              <p className="text-[#0D67BD]">ID: 3bg45a...</p>
              <p className={balanceColorClass}>R$ {formattedBalance}</p>
            </div>
          </div>

          <button
            className="text-gray-700 p-1 rounded hover:bg-gray-200 mr-4"
            onClick={onLogout}
          >
            <LogoutIcon className="w-6 h-6" />
          </button>

          <div className="border-r border-gray-400 h-8 mr-4"></div>

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
