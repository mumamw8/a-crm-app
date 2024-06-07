/* eslint-disable @typescript-eslint/no-unsafe-return */
import React from 'react'
import { columns } from './_components/company-columns';
import { type SelectedCompany } from '@/types';
import ReactDataTable from '../_components/react-data-table';

async function CompaniesPage() {

  return (
    <div>
      <h2 className='text-2xl font-semibold mb-4'>Companies</h2>
      {/* <DataGrid /> */}
      <ReactDataTable columns={columns} baseURL="http://localhost:3000/api/companies" />
    </div>
  )
}

export default CompaniesPage;