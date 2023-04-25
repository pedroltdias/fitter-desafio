import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Profile from '../components/Profile'
import ResultsDrawn from '../components/ResultsDrawn'
import DrawResults from '../components/DrawResults'
import Navigation from '../components/Navigation'
import { iTicket } from '../types/iTicket'
import { getAllTickets } from '../services/req'

const ResultsPage: React.FC = () => {
  const balance = 1000
  const profit = 500

  const [betNumber, setBetNumber] = useState<number>(1520)
  const [drawnNumbers, setDrawnNumbers] = useState<number[]>([])
  const [prizePool, setPrizePool] = useState<number>(0)

  const [tickets, setTickets] = useState<iTicket[]>([])

  useEffect(() => {
    const fetchTickets = async () => {
      const response = await getAllTickets()
      setTickets(response)
    }

    fetchTickets()
  }, [])

  const calculatePrize = (commonNumbers: number, betAmount: number) => {
    const prizeMultipliers = [
      0, 0, 0, 0, 0, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048,
    ]
    return betAmount * prizeMultipliers[commonNumbers]
  }

  const bettingDraws = () => {
    const numbers: number[] = Array.from(
      { length: 15 },
      () => Math.floor(Math.random() * 25) + 1,
    )

    const updatedTickets = tickets.map((ticket) => {
      const commonDrawnNumbers = ticket.selectedNumbers.filter(
        (number: number) => numbers.includes(number),
      )
      const isWinning = commonDrawnNumbers.length >= 5
      const prize = isWinning
        ? calculatePrize(commonDrawnNumbers.length, ticket.betAmount)
        : 0

      return {
        ...ticket,
        drawnNumbers: commonDrawnNumbers,
        isWinning,
        prize,
      }
    })

    const newPrizePool = updatedTickets.reduce(
      (sum, ticket) => sum + ticket.prize,
      0,
    )

    setDrawnNumbers(numbers)
    setTickets(updatedTickets)
    setBetNumber(betNumber + 1)
    setPrizePool(newPrizePool)
  }

  return (
    <>
      <Header balance={balance} onBuyTicket={() => {}} onLogout={() => {}} />
      <h2 className="text-2xl font-bold ml-[4rem] pt-[3rem] text-white">
        Resultados
      </h2>
      <Profile tickets={tickets.length} balance={balance} profit={profit} />
      <div className="px-[3rem] w-full h-screen">
        <div className="bg-secondary rounded-lg shadow-lg p-3 mt-6">
          <Navigation />
          <DrawResults
            betNumber={betNumber}
            drawnNumbers={drawnNumbers}
            onBettingDraws={bettingDraws}
          />
          <ResultsDrawn tickets={tickets} prizePool={prizePool} />
        </div>
      </div>
    </>
  )
}

export default ResultsPage
