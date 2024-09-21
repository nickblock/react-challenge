import { FC, useEffect, useState } from 'react';
import DataElementDisplay from '../data/DataElement';
import { DataElement } from '../data/DataDef';

async function http<T>(
  request: RequestInfo
): Promise<T> {
  const response = await fetch(request);
  const body = await response.json();
  return body;
}

const dataUrl = "/data.json"

const DashBoard: FC = () => {

  const [data, setData] = useState<Array<DataElement>>([]);

  useEffect(() => {
    async function getData() {

      try {

        const result = await http<DataElement[]>(
          dataUrl
        );

        setData(result);
      }
      catch (error) {
        let message
        if (error instanceof Error) message = error.message
        else message = String(error)
        console.log(message)
      }
    }
    getData();
  });



  let element: any
  if (data.length) {
    element = <DataElementDisplay data={data[0]} />
  }

  return (
    <div>
      {element}
    </div>
  )
}

export default DashBoard