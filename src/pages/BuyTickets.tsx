import React from 'react'
import Header from '../components/Header'
import Profile from '../components/Profile'
import TicketPurchase from '../components/TicketPurchase'
import Navigation from '../components/Navigation'

const BuyTickets: React.FC = () => {
  // Replace these values with actual data or state
  const balance = 1000
  const activeBets = 3
  const profit = 500

  return (
    <>
      <Header balance={balance} onBuyTicket={() => {}} onLogout={() => {}} />
      <h2 className="text-2xl font-bold ml-[4rem] pt-[3rem] text-white">
        Profile
      </h2>
      <Profile activeBets={activeBets} balance={balance} profit={profit} />
      <div className="px-[3rem] w-full h-screen">
        <div className="bg-secondary rounded-lg shadow-lg py-[2rem]">
          <Navigation />
          <TicketPurchase />
        </div>
      </div>
    </>
  )
}

export default BuyTickets
