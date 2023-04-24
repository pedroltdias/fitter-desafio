import React from 'react'

interface ProfileProps {
  activeBets: number
  balance: number
  profit: number
}

const Profile: React.FC<ProfileProps> = ({ activeBets, balance, profit }) => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-3 gap-4 p-6">
        <div className="bg-secondary p-4 rounded">
          <p className="text-quaternary font-semibold">Active Bets</p>
          <p className="text-tertiary">{activeBets} ATIVAS</p>
        </div>

        <div className="bg-secondary p-4 rounded">
          <p className="text-quaternary font-semibold">Balance</p>
          <p className={balance >= 0 ? 'text-green-600' : 'text-red-600'}>
            R$ {balance.toFixed(2)}
          </p>
        </div>

        <div
          className={`bg-secondary p-4 rounded ${
            profit >= 0 ? 'text-green-600' : 'text-red-600'
          }`}
        >
          <p className="text-quaternary font-semibold">Profit</p>
          <p>R$ {profit.toFixed(2)}</p>
        </div>
      </div>
    </div>
  )
}

export default Profile
