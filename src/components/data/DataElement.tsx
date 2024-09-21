import { FC, useEffect, useState } from 'react';


interface DataAttribute {
  name: string,
  value: number,
  unit: string
}
// example consuming code
export interface DataElement {
  title: string,
  attributes: DataAttribute[]
}

export type DataElementDisplayProps = {
  data: DataElement
}

const DataElementDisplay: FC<DataElementDisplayProps> = (props: DataElementDisplayProps) => {
  return (
    <div>
      <h1>{props.data.title}</h1>


    </div>
  )
}

export default DataElementDisplay