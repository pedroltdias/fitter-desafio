// Ticket.tsx
import React, { useState } from 'react'

interface TicketProps {
  ticketNumber: number
}

const Ticket: React.FC<TicketProps> = ({ ticketNumber }) => {
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([])

  const toggleNumber = (number: number) => {
    if (selectedNumbers.includes(number)) {
      setSelectedNumbers(selectedNumbers.filter((num) => num !== number))
    } else {
      setSelectedNumbers([...selectedNumbers, number])
    }
  }

  return (
    <div className="bg-white p-4 rounded shadow">
      Ticket #{ticketNumber}
      <p>Selected: {selectedNumbers.join(', ')}</p>
      <div className="grid grid-cols-5 gap-2 mt-2">
        {Array.from({ length: 25 }, (_, index) => (
          <button
            key={index}
            className={`w-8 h-8 rounded-full border ${
              selectedNumbers.includes(index + 1)
                ? 'bg-blue-500'
                : 'bg-gray-200'
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
