function RepresentativeSearchResults(props) {
  const { offices, officials } = props

  return (
    <div>
      {offices.map(office => {
        const official = officials[office.officialIndices[0]]
        return (
          <div className="representative-info">
            <div className="office-title">{office.name}</div>
            <p>{official?.name}</p>
            <label>
              Phone:&nbsp;<span>{official?.phones[0]}</span>
            </label>
          </div>
        )
      })}
    </div>
  )
}

export default RepresentativeSearchResults
