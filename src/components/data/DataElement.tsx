import { FC } from 'react';
import Table, { Props } from "./Table"
import BarGraph from './BarGraph';
import { DataElement, DataAttribute } from './DataDef';


export type DataElementDisplayProps = {
  data: DataElement
}

const DataElementDisplay: FC<DataElementDisplayProps> = (props: DataElementDisplayProps) => {

  const propsData = {
    data: props.data.attributes
  }

  const barGraphData = {
    values: props.data.attributes,
    yValueFn: (value: DataAttribute) => {
      return value.value
    },
    xLabelFn: (value: DataAttribute) => {
      return value.name
    }
  }
  return (
    <div className='data-display'>
      <h1>{props.data.title}</h1>

      <div className="two-columns">
        <Table {...propsData} />
        <BarGraph<DataAttribute> {...barGraphData} />
      </div>

    </div>
  )
}

export default DataElementDisplay