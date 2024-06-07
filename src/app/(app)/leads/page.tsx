import React from 'react'
import ReactDataTable from '../_components/react-data-table';
import { columns } from './_components/lead-columns';

function LeadsPage() {
  return (
    <div>
      <h2 className='text-2xl font-semibold mb-4'>Leads</h2>
      {/* <LeadsDataGrid /> */}
      <ReactDataTable columns={columns} baseURL="http://localhost:3000/api/leads" />
    </div>
  )
}

export default LeadsPage;