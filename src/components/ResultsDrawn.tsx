import React from 'react'
import { ResultsDrawnProps } from '../types/bets'

const ResultsDrawn: React.FC<ResultsDrawnProps> = ({
  activeBets,
  prizePool,
}) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(amount)
  }

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
          {activeBets.map((bet) => (
            <tr key={bet.id}>
              <td className="px-6 py-4 whitespace-nowrap text-quaternary">
                #{bet.id}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-quaternary text-left">
                {formatCurrency(bet.amount)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-quaternary">
                {new Date(bet.date)
                  .toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                  })
                  .replace(/\//g, '.')}
              </td>
              <td className="px-6 py-4 whitespace-nowrap flex">
                <span className="mr-4 text-quaternary">
                  {bet.numbers.length}
                </span>
                {bet.numbers.map((number) => (
                  <span
                    key={number}
                    className={`text-white w-6 h-6 flex items-center justify-center rounded-full mr-2 ${
                      bet.numbers.includes(number)
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
