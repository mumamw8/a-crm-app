"use client";

import DataTable, { type TableColumn } from "react-data-table-component";

interface DataTableProps<TData> {
  columns: TableColumn<TData>[];
  data: TData[];
}

function ReactDataTable<TData>({ columns, data }: DataTableProps<TData>) {
  return (
    <DataTable columns={columns} data={data} />
  )
}

export default ReactDataTable;