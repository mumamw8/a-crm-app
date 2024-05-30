type Props = {
  params: { personId: string }
}

function PersonPage({ params }: Props) {
  return (
    <div>PersonPage { params.personId }</div>
  )
}

export default PersonPage;