import { DataPointProps, DataPointType } from '@/Models/ChartDataPointModel'
import React, { FC } from 'react'

const ChartBar = ({dataPoint, maxValue}: {dataPoint: DataPointType, maxValue: number}) => {
  let barFillHeight = '0%';

  if (maxValue > 0) {
    barFillHeight = Math.round((dataPoint.value / maxValue) * 100) + "%";
  }

  return (
    <div className='h-full flex flex-col items-center'>
      <div className='h-full w-full border-solid border-1 border-red-500 rounded-xl overflow-hidden flex flex-col justify-end bg-blue-300'>
        <div className="w-full transition-all ease-out duration-300 bg-purple-800" style={{ height: barFillHeight}}>

        </div>
      </div>
      <div className='font-bold text-xs text-center'>
        {dataPoint.label}
      </div>
    </div>
  )
}

export default ChartBar
