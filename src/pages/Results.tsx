import React, { useState } from 'react'
import Header from '../components/Header'
import Profile from '../components/Profile'
import ResultsDrawn from '../components/ResultsDrawn'
import DrawResults from '../components/DrawResults'
import Navigation from '../components/Navigation'
import { Bet } from './types'
import TicketPurchase from '../components/TicketPurchase'

const ResultsPage: React.FC = () => {
  const balance = 1000
  const profit = 500

  const [betNumber, setBetNumber] = useState<number>(1520)
  const [drawnNumbers, setDrawnNumbers] = useState<number[]>([])
  const [prizePool, setPrizePool] = useState<number>(0)

  const [activeBets, setActiveBets] = useState<Bet[]>([
    {
      id: 1,
      date: '2023-04-22',
      numbers: [1, 2, 3, 4, 5],
      amount: 10,
      drawnNumbers: [],
      isWinning: false,
      prize: 0,
    },
    {
      id: 2,
      date: '2023-04-22',
      numbers: [12, 15, 19, 22, 25],
      amount: 15,
      drawnNumbers: [],
      isWinning: false,
      prize: 0,
    },
    {
      id: 3,
      date: '2023-04-22',
      numbers: [6, 8, 11, 14, 20],
      amount: 20,
      drawnNumbers: [],
      isWinning: false,
      prize: 0,
    },
  ])

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

    const updatedActiveBets = activeBets.map((bet) => {
      const commonDrawnNumbers = bet.numbers.filter((number) =>
        numbers.includes(number),
      )
      const isWinning = commonDrawnNumbers.length >= 5
      const prize = isWinning
        ? calculatePrize(commonDrawnNumbers.length, bet.amount)
        : 0

      return {
        ...bet,
        drawnNumbers: commonDrawnNumbers,
        isWinning,
        prize,
      }
    })

    const newPrizePool = updatedActiveBets.reduce(
      (sum, bet) => sum + bet.prize,
      0,
    )

    setDrawnNumbers(numbers)
    setActiveBets(updatedActiveBets)
    setBetNumber(betNumber + 1)
    setPrizePool(newPrizePool)
  }

  return (
    <>
      <Header balance={balance} onBuyTicket={() => {}} onLogout={() => {}} />
      <h2 className="text-2xl font-bold ml-[4rem] pt-[3rem] text-white">
        Results
      </h2>
      <Profile
        activeBets={activeBets.length}
        balance={balance}
        profit={profit}
      />
      <div className="px-[3rem] w-full h-screen">
        <div className="bg-secondary rounded-lg shadow-lg p-3 mt-6">
          <Navigation />
          <DrawResults
            betNumber={betNumber}
            drawnNumbers={drawnNumbers}
            onBettingDraws={bettingDraws}
          />
          <ResultsDrawn activeBets={activeBets} prizePool={prizePool} />
          <TicketPurchase />
        </div>
      </div>
    </>
  )
}

export default ResultsPage
