import React from 'react'
import ReactDataTable from '../_components/react-data-table';
import { columns } from './_components/deal-columns';

function DealsPage() {
  return (
    <div>
      <h2 className='text-2xl font-semibold mb-4'>Deals</h2>
      {/* <DealsDataGrid /> */}
      <ReactDataTable columns={columns} baseURL='http://localhost:3000/api/deals' />
    </div>
  )
}

export default DealsPage;