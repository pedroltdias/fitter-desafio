import React, { useEffect, useState } from 'react'
import Ticket from '../components/Ticket'
import { AiOutlinePlus } from 'react-icons/ai'
import PrizeList from './PrizeList'
import { getAllTickets } from '../services/req'
import { iTicket } from '../pages/types'

const TicketPurchase: React.FC = () => {
  const [tickets, setTickets] = useState<iTicket[]>([])
  useEffect(() => {
    async function fetchData() {
      const allTickets = await getAllTickets()
      setTickets(allTickets)
      console.log('oi')
    }
    fetchData()
  }, [])

  return (
    <>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-4 gap-4 mb-6">
          {tickets.map((ticket) => (
            <Ticket key={ticket.id} ticket={ticket} />
          ))}
          <div className="p-4 rounded shadow flex items-center justify-center border-2 border-dashed border-[#EA8E41] text-[#EA8E41] text-lg font-bold">
            <AiOutlinePlus className="mr-2" />
            ADICIONAR BILHETE
          </div>
        </div>
        <div className="mb-6 flex flex-col justify-between">
          <p className="text-quaternary">Valor : R$ 0.00</p>
          <button
            className="bg-[#2C3CCB] text-white w-[259px] h-[65px] rounded-xl hover:bg-blue-600 text-lg font-bold"
            style={{ margin: 'auto' }}
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
