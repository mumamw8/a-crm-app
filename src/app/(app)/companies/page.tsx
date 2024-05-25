import React from 'react'
import CompaniesDataTable from './_components/companies-data-table';

function CompaniesPage() {
  return (
    <div>
      <h2 className='text-2xl font-semibold mb-4'>Companies</h2>
      <CompaniesDataTable />
    </div>
  )
}

export default CompaniesPage;