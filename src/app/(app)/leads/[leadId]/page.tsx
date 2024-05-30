type Props = {
  params: { leadId: string }
}

function LeadPage({ params }: Props) {
  return (
    <div>LeadPage { params.leadId }</div>
  )
}

export default LeadPage;