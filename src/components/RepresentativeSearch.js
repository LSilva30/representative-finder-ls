import { useState } from 'react'
import {APIKEY} from "../config"
import RepresentativeSearchResults from './RepresentativeSearchResults'

function RepresentativeSearch() {
  const [address, setAddress] = useState('')
  const [offices, setOffices] = useState([])
  const [officials, setOfficials] = useState([])

  const searchRepresentatives = () => {
      console.log('searching ...')
      fetch(`https://civicinfo.googleapis.com/civicinfo/v2/representatives?address=${address}&key=${APIKEY}`)
      .then(response => response.json())
      .then(json => {
          setOffices(json.offices)
          setOfficials(json.officials)
          return 
      })
      .catch(error => console.log(error))
  }

  return (
    <div className="search-container">
      <h1>Search For Representatives By Your Address</h1>
      <br />
      <p>Address <span style={{color: "red"}}>(*Required)</span></p>
      <input 
      name="addressSearch" 
      type="text" 
      className="search-bar" 
      value={address} 
      onChange={event => setAddress(event.target.value)} 
      />
        <div>
          <button 
            className="submit-btn"
            onClick={() => searchRepresentatives()}
            >
                SUBMIT
          </button>
        </div>
      <RepresentativeSearchResults offices={offices} officials={officials} />
    </div>
  )
}

export default RepresentativeSearch
