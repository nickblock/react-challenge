import { FC, useEffect, useState } from 'react';

async function http<T>(
  request: RequestInfo
): Promise<T> {
  const response = await fetch(request);
  const body = await response.json();

  console.log(body)
  return body;
}

interface DataAttribute {
  name: string,
  value: number,
  unit: string
}
// example consuming code
interface DataElement {
  title: string,
  attributes: DataAttribute[]
}

const dataUrl = "/data.json"

const DashBoard: FC = () => {

  const [data, setData] = useState("No data");

  useEffect(() => {
    async function getData() {

      try {

        const result = await http<DataElement[]>(
          dataUrl
        );

        setData(result[0].title);
      }
      catch (error) {
        let message
        if (error instanceof Error) message = error.message
        else message = String(error)
        setData(message)
      }
    }
    getData();
  });



  return (
    <div>
      DashBoard {data}
    </div>
  )
}

export default DashBoard