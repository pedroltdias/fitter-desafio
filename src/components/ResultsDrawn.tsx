import React from 'react'
import { Table } from 'react-bootstrap'

interface Bet {
  id: number
  date: string
  amount: number
  numbers: number[]
  drawnNumbers: number[]
  isWinning: boolean
  prize: number
}

interface ResultsDrawnProps {
  activeBets: Bet[]
  prizePool: number
}

const ResultsDrawn: React.FC<ResultsDrawnProps> = ({
  activeBets,
  prizePool,
}) => {
  return (
    <div className="d-flex align-items-center m-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Lottery ID</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Numbers</th>
            <th>Drawn Numbers</th>
            <th>Winning</th>
            <th>Prize</th>
          </tr>
        </thead>
        <tbody>
          {activeBets.map((bet) => (
            <tr key={bet.id}>
              <td>{bet.id}</td>
              <td>{bet.date}</td>
              <td>{bet.amount}</td>
              <td>
                {bet.numbers.map((number) => (
                  <span key={number} className="mr-2">
                    {number}
                  </span>
                ))}
              </td>
              <td>
                {bet.drawnNumbers.map((number) => (
                  <span
                    key={number}
                    className={
                      bet.isWinning
                        ? 'bg-green-500 text-white mr-2 p-2'
                        : 'mr-2'
                    }
                  >
                    {number}
                  </span>
                ))}
              </td>
              <td>{bet.isWinning ? 'Yes' : 'No'}</td>
              <td>{bet.prize}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="m-5 text-right">Prize Pool: {prizePool}</div>
    </div>
  )
}

export default ResultsDrawn
