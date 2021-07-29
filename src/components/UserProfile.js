import { useEffect, useState } from 'react'

function UserProfile({ user, userProfile, setUserProfile }) {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [address, setAddress] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
     if (userProfile !== undefined) {
       setFirstName(userProfile.firstName)
       setLastName(userProfile.lastName)
       setAddress(userProfile.address)
     } 
    }, [userProfile])

    const getUser = () => {
      fetch(`https://representative-finder-mb-api.web.app/users/${user?.email}`)
        .then(response => response.json())
        .then(json => {
          console.log('user json --->', json)
            setUserProfile(json.data)
            localStorage.setItem('user', JSON.stringify(json.data))
        })
        .catch(error => alert(error))
    }

    const updateUser = (event) => {
        event.preventDefault()
        const formValues = {
            firstName: firstName,
            lastName: lastName,
            address: address,
        }
        
        fetch(`https://representative-finder-mb-api.web.app/users/${userProfile.id}`, {
            method: 'PATCH',
            body: JSON.stringify(formValues),
            headers: {"Content-type": "application/json; charset=UTF-8"},
            
        }).then(response => response.json())
            .then(json => {
              console.log('json -->', json)
              getUser()
            })
            .catch(error => alert(error))
    }

    return (
        <div className="sign-up-container">
            <h1>User Profile</h1>
            <br />
            <h4><em>"Update your profile here"</em></h4>
            <br/>
            <form onSubmit={(event) => updateUser(event)}>
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
                {loading ? 'Signing Up..' : 'UPDATE'}
              </button>
            </form>
        </div>
    )
}

export default UserProfile