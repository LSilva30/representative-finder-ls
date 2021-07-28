import { useState } from 'react'

function UserProfile({user}) {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [address, setAddress] = useState("")
    const [loading, setLoading] = useState(false)

    const createUser = (event) => {
        event.preventDefault()
        const formValues = {
            firstName: firstName,
            lastName: lastName,
            address: address,
            email: user.email
        }
        
        fetch('https://representative-finder-mb-api.web.app/users', {
            method: 'POST',
            body: JSON.stringify(formValues),
            headers: {"Content-type": "application/json; charset=UTF-8"},
            
        }).then(response => response.json())
            .then(json => console.log('json -->', json))
            .catch(error => alert(error))
    }

    return (
        <div className="sign-up-container">
            <h1>User Profile</h1>
            <form onSubmit={(event) => createUser(event)}>
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
                {loading ? 'Signing Up..' : 'SUBMIT'}
              </button>
            </form>
        </div>
    )
}

export default UserProfile