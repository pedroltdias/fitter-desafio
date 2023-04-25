import React, { useState } from 'react'
import Header from '../components/Header'
import Profile from '../components/Profile'
import ResultsDrawn from '../components/ResultsDrawn'
import DrawResults from '../components/DrawResults'
import Navigation from '../components/Navigation'
import { iBet } from '../types/bets'

const ResultsPage: React.FC = () => {
  const balance = 1000
  const profit = 500

  const [betNumber, setBetNumber] = useState<number>(1520)
  const [drawnNumbers, setDrawnNumbers] = useState<number[]>([])
  const [prizePool, setPrizePool] = useState<number>(0)

  const [activeBets, setActiveBets] = useState<iBet[]>([])

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
      const commonDrawnNumbers = bet.numbers.filter((number: number) =>
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
        Resultados
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
        </div>
      </div>
    </>
  )
}

export default ResultsPage
