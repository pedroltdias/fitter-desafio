import React from 'react'
import { AiOutlineExclamationCircle } from 'react-icons/ai'

const PrizeList: React.FC = () => {
  return (
    <div className="text-quaternary p-2 flex">
      <div className="flex justify-between mx-[1rem]">
        <AiOutlineExclamationCircle size={22} color={'#177FE9'} />
        <h2 className="ml-2">VALORES BILHETES: </h2>
      </div>
      <div className="flex justify-between">
        <h2>15 NÚMEROS - R$ 3,00</h2>
        <div className="border-r border-gray-400 h-[18px] mx-[0.50rem]"></div>
        <h2>16 NÚMEROS - R$ 100,00</h2>
        <div className="border-r border-gray-400 h-[18px] mx-[0.50rem]"></div>
        <h2>17 NÚMEROS - R$ 300,00</h2>
        <div className="border-r border-gray-400 h-[18px] mx-[0.50rem]"></div>
        <h2>18 NÚMEROS - R$ 5.000,00 </h2>
        <div className="border-r border-gray-400 h-[18px] mx-[0.50rem]"></div>
        <h2>19 NÚMEROS - R$ 15.000,00</h2>
        <div className="border-r border-gray-400 h-[18px] mx-[0.50rem]"></div>
        <h2>20 NÚMEROS - R$ 25.000,00</h2>
      </div>
    </div>
  )
}

export default PrizeList
