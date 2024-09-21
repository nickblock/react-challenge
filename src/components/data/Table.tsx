import { FC } from 'react';
import { DataAttribute } from "./DataDef"


import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React from 'react';

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

export type Props = {
  data: DataAttribute[]
}

const Table: FC<Props> = ({ data }: Props) => {

  const memoData = React.useMemo(() => {
    return Array.isArray(data) ? data : [];
  }, [data]);

  const table = useReactTable({
    data: memoData,
    columns,
    debugTable: true,
    getCoreRowModel: getCoreRowModel()
  });

  return (
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

  )
}

export default Table