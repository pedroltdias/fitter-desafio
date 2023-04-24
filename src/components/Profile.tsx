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
          <p className="text-quaternary font-semibold">APOSTAS ATIVAS</p>
          <p className="text-tertiary">
            <span className="font-bold">{activeBets}</span> ATIVAS
          </p>
        </div>

        <div className="bg-secondary p-4 rounded">
          <p className="text-quaternary font-semibold">SALDO</p>
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
          className={`bg-secondary p-4 rounded ${
            profit >= 0 ? 'text-green-600 font-bold' : 'text-red-600 font-bold'
          }`}
        >
          <p className="text-quaternary font-semibold">LUCRO</p>
          <p>R$ {profit.toFixed(2)}</p>
        </div>
      </div>
    </div>
  )
}

export default Profile
