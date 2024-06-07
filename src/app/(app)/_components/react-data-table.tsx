/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

import { useEffect, useState } from "react";
import DataTable, { type TableColumn } from "react-data-table-component";

interface DataTableProps<TData> {
  columns: TableColumn<TData>[];
  // data: TData[];
  baseURL?: string;
}

function ReactDataTable<TData>({ columns, baseURL }: DataTableProps<TData>) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [totalRows, setTotalRows] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(10);

  const fetchData = async (page: number) => {
    setLoading(true);

    const response = await fetch(
      `${baseURL}?page=${page}&pageSize=${pageSize}`
    );
    const newData = await response.json();

    setData(newData.data);
    setTotalRows(newData.count[0].count);
    console.log(newData.count[0].count);
    setLoading(false);
  }

  const handlePageChange = (page: number) => {
    void fetchData(page);
  };

  const handlePerRowsChange = async (newPerPage: number, page: number) => {
    setLoading(true);

    const response = await fetch(
      `${baseURL}?page=${page}&pageSize=${newPerPage}`
    );
    const newData = await response.json();
    // const response = await axios.get(`https://reqres.in/api/users?page=${page}&per_page=${newPerPage}&delay=1`);
    setData(newData.data);
    setPageSize(newPerPage);
    setLoading(false);
  };

  useEffect(() => {
    void fetchData(1);
  }, []);

  return <DataTable 
      columns={columns} 
      data={data} 
      progressPending={loading}
      pagination
      paginationServer
      paginationTotalRows={totalRows}
      onChangePage={handlePageChange}
      paginationPerPage={pageSize}
      onChangeRowsPerPage={handlePerRowsChange}
      paginationComponentOptions={{ noRowsPerPage: false }}
    />;
}

export default ReactDataTable;

