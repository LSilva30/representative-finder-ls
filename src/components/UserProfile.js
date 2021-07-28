import { useState } from 'react'

function UserProfile() {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [address, setAddress] = useState("")
    const [loading, setLoading] = useState(false)

    return (
        <div className="sign-up-container">
            <h1>User Profile</h1>
            <form>
                <label className="form-label">
                <strong>First Name:&nbsp;</strong>
                  <input 
                    name="firstName"
                    type="text"
                    className="form-input"
                    value={firstName}
                    onChange={event => setFirstName(event.target.value)}
                  />
                </label>
                <br />
                <label className="form-label">
                <strong>Last Name:&nbsp;</strong>
                  <input 
                    name="lastName"
                    type="text"
                    className="form-input"
                    value={lastName}
                    onChange={event => setLastName(event.target.value)}
                  />
                </label>
                <br />
                <label className="form-label">
                <strong>Address:&nbsp;</strong>
                  <input 
                    name="address"
                    type="text"
                    className="form-input"
                    value={address}
                    onChange={event => setAddress(event.target.value)}
                  />
                </label>
                <br />
                <button
                className="submit-btn"
                type="submit"
              >
                {loading ? 'Signing Up..' : 'SIGN UP'}
              </button>
            </form>
        </div>
    )
}

export default UserProfile