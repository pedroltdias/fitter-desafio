import React from 'react'
import Ticket from '../components/Ticket'
import { AiOutlinePlus } from 'react-icons/ai'
import PrizeList from './PrizeList'

const TicketPurchase: React.FC = () => {
  return (
    <>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-4 gap-4 mb-6">
          {Array.from({ length: 3 }, (_, index) => (
            <Ticket key={index} ticketNumber={index + 1} />
          ))}
          <div className="bg-white p-4 rounded shadow flex items-center justify-center">
            <AiOutlinePlus className="mr-2" />
            Add Ticket
          </div>
        </div>
        <div className="mb-6 flex flex-col justify-between">
          <p className="text-quaternary">TOTAL VALUE: R$ 0.00</p>
          <button
            className="bg-[#2C3CCB] text-white w-[259px] h-[65px] rounded-xl hover:bg-blue-600"
            style={{ margin: 'auto' }}
          >
            Buy Tickets
          </button>
        </div>
        <PrizeList />
      </div>
    </>
  )
}

export default TicketPurchase
