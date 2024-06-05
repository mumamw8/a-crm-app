import React from 'react'
import LeadsDataGrid from './_components/leads-data-grid';

function LeadsPage() {
  return (
    <div>
      <h2 className='text-2xl font-semibold mb-4'>Leads</h2>
      <LeadsDataGrid />
    </div>
  )
}

export default LeadsPage;