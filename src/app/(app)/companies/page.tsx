/* eslint-disable @typescript-eslint/no-unsafe-return */
import React from 'react'
import { columns } from './_components/company-columns';
import { type SelectedCompany } from '@/types';
import ReactDataTable from '../_components/react-data-table';

async function getData(): Promise<{ data: SelectedCompany[] }> {
  const res = await fetch("http://localhost:3000/api/companies");

  if (!res.ok) {
    throw new Error("Fetch error");
  }

  return res.json();
}

async function CompaniesPage() {
  const data = await getData();

  return (
    <div>
      <h2 className='text-2xl font-semibold mb-4'>Companies</h2>
      {/* <DataGrid /> */}
      <ReactDataTable columns={columns} data={data.data} />
    </div>
  )
}

export default CompaniesPage;