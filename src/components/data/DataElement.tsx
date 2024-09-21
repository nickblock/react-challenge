import { FC } from 'react';
import Table, { Props } from "./Table"
import { DataElement } from './DataDef';

export type DataElementDisplayProps = {
  data: DataElement
}

const DataElementDisplay: FC<DataElementDisplayProps> = (props: DataElementDisplayProps) => {

  const tableProps = {
    data: props.data.attributes
  }
  return (
    <div>
      <h1>{props.data.title}</h1>

      <Table {...tableProps} />

    </div>
  )
}

export default DataElementDisplay