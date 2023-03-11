export type DataPointType = {
  value: number,
  label: string,
}

export interface DataPointProps {
  dataPoint: DataPointType
}

export interface DataPointArrayProps {
  dataPointArray: DataPointType[]
}