import React, { useState } from 'react'
import { iTicket } from '../pages/types'

interface TicketProps {
  ticket: iTicket
}

const Ticket: React.FC<TicketProps> = ({ ticket }) => {
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([])

  const toggleNumber = (number: number) => {
    if (selectedNumbers.includes(number)) {
      setSelectedNumbers(selectedNumbers.filter((num) => num !== number))
    } else {
      setSelectedNumbers([...selectedNumbers, number])
    }
  }

  return (
    <div className="bg-secondary p-4 rounded shadow border border-blue-500">
      <div className="flex justify-between space-x-4 text-lg font-medium text-quaternary">
        <p>Bilhete #{ticket.id}</p>
        <p>
          Valor:{' '}
          <span className="text-green-600">
            R${ticket.betAmount.toFixed(2)}
          </span>
        </p>
      </div>

      <hr className="border-blue-500 my-4" />

      <div className="text-quaternary">
        <p>Selecionados: {selectedNumbers.length}</p>
      </div>
      <div className="grid grid-cols-5 gap-2 mt-2">
        {Array.from({ length: 25 }, (_, index) => (
          <button
            key={index}
            className={`w-8 h-8 rounded-full text-white ${
              selectedNumbers.includes(index + 1)
                ? 'bg-orange-500'
                : 'bg-quinary'
            }`}
            onClick={() => toggleNumber(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Ticket
