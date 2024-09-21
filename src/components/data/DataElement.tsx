import { FC, useEffect, useState } from 'react';
import {
  SortingState,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

const columnHelper = createColumnHelper<DataAttribute>();

const columns = [
  columnHelper.accessor("name", {
    header: () => "Name",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("value", {
    header: () => "Value",
    cell: (info) => info.getValue(),
  }),
];

interface DataAttribute {
  name: string,
  value: number,
  unit: string
}

export interface DataElement {
  title: string,
  attributes: DataAttribute[]
}

export type DataElementDisplayProps = {
  data: DataElement
}

const DataElementDisplay: FC<DataElementDisplayProps> = (props: DataElementDisplayProps) => {

  const attributeData = props.data.attributes

  const table = useReactTable({
    data: props.data.attributes,
    columns,
    debugTable: true,
    getCoreRowModel: getCoreRowModel()
  });

  return (
    <div>
      <h1>{props.data.title}</h1>
      <table className="data-table">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="data-table-cell">
                  <div
                    {...{
                      className: header.column.getCanSort()
                        ? "cursor-pointer select-none"
                        : "",
                      onClick: header.column.getToggleSortingHandler(),
                    }}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {{
                      asc: " 🔼",
                      desc: " 🔽",
                    }[header.column.getIsSorted() as string] ?? null}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="data-table-cell">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default DataElementDisplay