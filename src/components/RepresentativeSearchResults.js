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
              <strong>Phone:&nbsp;</strong>
              <a href={`tel:${official?.phones[0]}`}>{official?.phones[0]}</a>
            </label>
            <br />
            {official?.address && (
              <label>
                <strong>Address:&nbsp;</strong>
                <span>
                  {official?.address[0].line1}, 
                  &nbsp;{official?.address[0]?.city}, 
                  &nbsp;{official?.address[0]?.state}, 
                  &nbsp;{official?.address[0]?.zip}
                </span>
              </label>
            )}
            <br />
            {official?.emails && (
              <label>
                <strong>Email:&nbsp;</strong>
                <a href={`mailto:${official?.emails[0]}`}>{official?.emails[0]}</a>
              </label>
            )}
            <br/>
            {official?.urls && (
            <label>
                <strong>Website:&nbsp;</strong>
                <a href={official?.urls[0]} target="_blank" rel="noreferrer">{official?.urls[0]}</a>
            </label>
            )}
          </div>
         )}
        )}
    </div>
  )
}

export default RepresentativeSearchResults