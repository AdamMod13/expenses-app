import { DataPointArrayProps, DataPointType } from '@/Models/ChartDataPointModel'
import React, { FC } from 'react'
import ChartBar from './ChartBar'

const Chart: FC<DataPointArrayProps> = ({dataPointArray}) => {
  const dataPointValues: number[] = dataPointArray.map((dataPoint: DataPointType) => dataPoint.value);

  console.log(dataPointArray)

  const totalMaximum: number = Math.max(...dataPointValues);

  return (
    <div className='p-1 rounded-xl text-center flex justify-around h-40'>
      {dataPointArray.map((dataPoint: DataPointType) => (
        <ChartBar 
          key={dataPoint.label}
          dataPoint={dataPoint}
          maxValue={totalMaximum}  
        />
      ))}
    </div>
  )
}

export default Chart
