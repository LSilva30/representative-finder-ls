import { useState } from 'react'

function RepresentativeSearch() {
  const [address, setAddress] = useState('')

  const searchRepresentatives = () => {
      console.log('searching ...')
  }

  return (
    <div className="search-container">
      <input 
      name="addressSearch" 
      type="text" 
      className="search-bar" 
      value={address} 
      onChange={event => setAddress(event.target.value)} 
      />
        <div>
          <button 
            className="search-btn"
            onClick={() => searchRepresentatives()}
            >
                Submit
          </button>
        </div>
      
    </div>
  )
}

export default RepresentativeSearch
