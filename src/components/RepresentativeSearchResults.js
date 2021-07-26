function RepresentativeSearchResults(props) {

    const {offices, officials} =props;

    return (
        <div>
            {offices.map(office => 
                <div>{office.name}</div>
            )}
        </div>
    )
}

export default RepresentativeSearchResults