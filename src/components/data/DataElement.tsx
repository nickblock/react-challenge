import { FC } from 'react';
import Table, { Props } from "./Table"
import BarChart from './BarChart';
import { DataElement, DataAttribute } from './DataDef';


export type DataElementDisplayProps = {
  data: DataElement
}

const DataElementDisplay: FC<DataElementDisplayProps> = (props: DataElementDisplayProps) => {

  const tableData = {
    data: props.data.attributes
  }

  const barChartData = {
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
        <Table {...tableData} />
        <BarChart<DataAttribute> {...barChartData} />
      </div>

    </div>
  )
}

export default DataElementDisplay