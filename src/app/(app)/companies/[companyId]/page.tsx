type Props = {
  params: { companyId: string }
}

function CompanyPage({ params }: Props) {
  return (
    <div>Company Page Details:  { params.companyId }</div>
  )
}

export default CompanyPage;