import React from 'react'
import DealsDataGrid from './_components/deals-data-grid';

function DealsPage() {
  return (
    <div>
      <h2 className='text-2xl font-semibold mb-4'>Deals</h2>
      <DealsDataGrid />
    </div>
  )
}

export default DealsPage;