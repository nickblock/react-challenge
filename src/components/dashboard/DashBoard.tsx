import { FC, useEffect, useState } from 'react';
import DataElementDisplay from '../data/DataElement';
import { DataElement } from '../data/DataDef';
import RangeSlider from "./RangeSlider"

async function http<T>(
  request: RequestInfo
): Promise<T> {
  const response = await fetch(request)
  const body = await response.json()
  return body;
}

const dataUrl = "/data.json"

const DashBoard: FC = () => {

  const [data, setData] = useState<Array<DataElement>>([])
  const [item, setItem] = useState(0)

  useEffect(() => {
    async function getData() {

      try {

        const result = await http<DataElement[]>(
          dataUrl
        );

        setData(result)
      }
      catch (error) {
        let message
        if (error instanceof Error) message = error.message
        else message = String(error)
        console.log(message)
      }
    }
    if (data.length == 0) {

      getData()
    }
  });



  const rangeProps = {
    numItems: data.length - 1,
    setValue: setItem
  }

  if (data.length) {

    return (
      <div className='dashboard'>
        <DataElementDisplay data={data[item]} />
        <RangeSlider {...rangeProps} />
      </div>
    )
  }
  else {
    return (
      <></>
    )
  }
}

export default DashBoard