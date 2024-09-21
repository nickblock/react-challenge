import { FC } from 'react';
import Table, { Props } from "./Table"
import BarGraph from './BarGraph';
import { DataElement } from './DataDef';


export type DataElementDisplayProps = {
  data: DataElement
}

const DataElementDisplay: FC<DataElementDisplayProps> = (props: DataElementDisplayProps) => {

  const propsData = {
    data: props.data.attributes
  }
  return (
    <div>
      <h1>{props.data.title}</h1>

      <Table {...propsData} />
      <BarGraph {...propsData} />

    </div>
  )
}

export default DataElementDisplay