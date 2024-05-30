type Props = {
  params: { dealId: string }
}

function DealPage({ params }: Props) {
  return (
    <div>DealPage { params.dealId }</div>
  )
}

export default DealPage;