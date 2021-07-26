import { useState } from 'react'

function RepresentativeSearch() {
  const [address, setAddress] = useState('')

  return (
    <div className="search-container">
      <input 
      name="addressSearch" 
      type="text" 
      className="search-bar" 
      value={address} 
      onChange={event => setAddress(event.target.value)} 
      />
    </div>
  )
}

export default RepresentativeSearch
