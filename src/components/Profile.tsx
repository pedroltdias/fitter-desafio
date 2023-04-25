import React from 'react'
import ticket from '../assets/icons/ticket.svg'
import cash from '../assets/icons/cash.svg'
import lucro from '../assets/icons/lucro.svg'

interface ProfileProps {
  tickets: number
  balance: number
  profit: number
}

const Profile: React.FC<ProfileProps> = ({ tickets, balance, profit }) => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-3 gap-4 p-6">
        <div className="bg-secondary p-4 rounded flex flex-col items-center">
          <div className="flex items-center mb-2">
            <p className="text-quaternary font-semibold">APOSTAS ATIVAS</p>
            <img src={ticket} alt="Ticket" className="w-8 h-8 ml-2" />
          </div>
          <p className="text-tertiary">
            <span className="font-bold">{tickets}</span> ATIVAS
          </p>
        </div>

        <div className="bg-secondary p-4 rounded flex flex-col items-center">
          <div className="flex items-center mb-2">
            <p className="text-quaternary font-semibold">SALDO</p>
            <img src={cash} alt="Ticket" className="w-8 h-8 ml-2" />
          </div>
          <p
            className={
              balance >= 0
                ? 'text-green-600 font-bold'
                : 'text-red-600 font-bold'
            }
          >
            R$ {balance.toFixed(2)}
          </p>
        </div>

        <div
          className={`bg-secondary p-4 rounded flex flex-col items-center ${
            profit >= 0 ? 'text-green-600 font-bold' : 'text-red-600 font-bold'
          }`}
        >
          <div className="flex items-center mb-2">
            <p className="text-quaternary font-semibold">LUCRO</p>
            <img src={lucro} alt="Ticket" className="w-8 h-8 ml-2" />
          </div>
          <p>R$ {profit.toFixed(2)}</p>
        </div>
      </div>
    </div>
  )
}

export default Profile
