export type Bet = {
  id: number
  date: string
  numbers: number[]
  amount: number
  drawnNumbers: number[]
  isWinning: boolean
  prize: number
}

export interface iTicket {
  id: number
  selectedNumbers: number[]
  betAmount: number
}

export interface ResultsDrawnProps {
  activeBets: Bet[]
  prizePool: number
}
