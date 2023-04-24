import React from 'react'

interface DrawResultsProps {
  betNumber: number
  drawnNumbers: number[]
  onBettingDraws: () => void
}

const DrawResults: React.FC<DrawResultsProps> = ({
  betNumber,
  drawnNumbers,
  onBettingDraws,
}) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="w-full pl-4 border-2 border-dashed border-[#EA8E41] text-[#EA8E41] text-center py-5 px-10">
          <div className="flex flex-col justify-between">
            <div className="text-2xl font-bold">APOSTA #{betNumber}</div>
            <div className="flex flex-col items-center">
              <div className="text-xl mb-2 py-[1rem] font-semibold">
                NÚMEROS SORTEADOS:
              </div>
              <div className="flex flex-wrap">
                {drawnNumbers.map((number) => (
                  <div
                    key={number}
                    className="bg-[#EA8E41] text-white text-center w-8 h-8 rounded-full flex items-center justify-center mx-1 mb-1"
                  >
                    {number}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-orange-500 w-72 h-12 rounded-2xl flex justify-center items-center text-center text-white text-lg font-bold mt-5">
          <button onClick={onBettingDraws}>SORTEAR APOSTAS</button>
        </div>
      </div>
    </>
  )
}

export default DrawResults
