import { useState } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import { firebaseConfig } from '../config'

function SignUp({ setUser }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const signUpUser = (event) => {
        event.preventDefault()
        setLoading(true)
        console.log("signing up...")
        if(!firebase.apps.length) {
          firebase.initializeApp(firebaseConfig)
        }
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(response => {
            setLoading(false)
            setUser(response.user)
          })
          .catch(err => {
            alert(err.message)
            setLoading(false)
          })
    }

    return (
        <div className="sign-up-container">
          <h1>Sign Up</h1>
          <form onSubmit={(event) => signUpUser(event)}>
              <label className="form-label">
                  <strong>Email:&nbsp;</strong>
                  <input 
                    name="email"
                    type="text"
                    className="form-input"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                  />
              </label>
              <br/>
              <label className="form-label">
                  <strong>Password:&nbsp;</strong>
                  <input 
                    name="password"
                    type="password"
                    className="form-input"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
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

export default SignUp