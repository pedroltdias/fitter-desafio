import React from 'react'
import { iTicket } from '../types/iTicket'

interface ResultsDrawnProps {
  tickets: iTicket[]
  prizePool: number
}

const ResultsDrawn: React.FC<ResultsDrawnProps> = ({ tickets, prizePool }) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(amount)
  }

  const currentDate = new Date()
  const formattedDate = currentDate
    .toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })
    .replace(/\//g, '.')

  return (
    <div className="flex flex-col m-5">
      <table className="min-w-full divide-y divide-[#212144]">
        <thead className="bg-secondary text-left">
          <tr>
            <th className="px-6 py-3 text-md font-medium text-quaternary tracking-wider">
              APOSTA
            </th>
            <th className="px-6 py-3 text-md font-medium text-quaternary tracking-wider">
              PREÇO
            </th>
            <th className="px-6 py-3 text-md font-medium text-quaternary tracking-wider">
              DATA
            </th>
            <th className="px-6 py-3 text-md font-medium text-quaternary tracking-wider">
              SELECIONADOS
            </th>
          </tr>
        </thead>
        <tbody className="bg-secondary divide-y divide-black">
          {tickets.map((ticket: iTicket) => (
            <tr key={ticket.id}>
              <td className="px-6 py-4 whitespace-nowrap text-quaternary">
                #{ticket.id}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-quaternary text-left">
                {formatCurrency(ticket.betAmount)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-quaternary">
                {formattedDate}
              </td>
              <td className="px-6 py-4 whitespace-nowrap flex">
                <span className="mr-4 text-quaternary">
                  {ticket.selectedNumbers.length}
                </span>
                {ticket.selectedNumbers.map((number: number) => (
                  <span
                    key={number}
                    className={`text-white w-6 h-6 flex items-center justify-center rounded-full mr-2 ${
                      ticket.selectedNumbers.includes(number)
                        ? 'bg-[#5bd4d9]'
                        : 'bg-[#313051]'
                    }`}
                  >
                    {number}
                  </span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex text-tertiary font-bold pt-8">
        <h2 className="mr-8">BILHETES PREMIADOS: </h2>
        <h2>TOTAL DO PRÊMIO: {formatCurrency(prizePool)}</h2>
      </div>
    </div>
  )
}

export default ResultsDrawn
