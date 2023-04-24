import React, { useState } from 'react'
import Ticket from '../components/Ticket'
import { AiOutlinePlus } from 'react-icons/ai'
import PrizeList from './PrizeList'
import { iTicket } from '../pages/types'
import { buyTickets } from '../services/req'

const TicketPurchase: React.FC = () => {
  const [tickets, setTickets] = useState<iTicket[]>([])

  const totalBetAmount = tickets.reduce(
    (accumulator, ticket) => accumulator + ticket.betAmount,
    0,
  )

  const addTicket = () => {
    const newTicket: iTicket = {
      id: tickets.length + 1,
      betAmount:
        tickets.length === 0
          ? 5.0
          : tickets[tickets.length - 1].betAmount + 5.0,
      selectedNumbers: [],
    }
    setTickets([...tickets, newTicket])
  }

  return (
    <>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-4 gap-4 mb-6">
          {tickets.map((ticket) => (
            <Ticket key={ticket.id} ticket={ticket} />
          ))}
          <button
            className="p-4 rounded shadow flex items-center justify-center border-2 border-dashed border-[#EA8E41] text-[#EA8E41] text-lg font-bold"
            onClick={addTicket}
          >
            <AiOutlinePlus className="mr-2" />
            ADICIONAR BILHETE
          </button>
        </div>
        <div className="mb-6 flex flex-col justify-between">
          <p className="text-quaternary font-bold">
            VALOR TOTAL:{' '}
            <span className="text-green-600">
              R${totalBetAmount.toFixed(2)}
            </span>
          </p>
          <button
            className="bg-[#2C3CCB] text-white w-[259px] h-[65px] rounded-xl hover:bg-blue-600 text-lg font-bold"
            style={{ margin: 'auto' }}
            onClick={async () => {
              await buyTickets(tickets)
            }}
          >
            COMPRAR TICKETS
          </button>
        </div>
        <PrizeList />
      </div>
    </>
  )
}

export default TicketPurchase
