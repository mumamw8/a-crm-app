type Props = {
  params: { companyId: string }
}

function CompanyPage({ params }: Props) {
  return (
    <div>CompanyPage { params.companyId }</div>
  )
}

export default CompanyPage;