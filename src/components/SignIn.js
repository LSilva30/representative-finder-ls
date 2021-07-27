import {useState} from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import { firebaseConfig } from '../config'

function SignIn({ setUser }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const signInUser = (event) => {
        event.preventDefault()
        setLoading(true)
        console.log("signing in...")
        if(!firebase.apps.length) {
          firebase.initializeApp(firebaseConfig)
        }
        firebase.auth().signInWithEmailAndPassword(email, password)
          .then(response => {
            setLoading(false)
            setUser(response.user)
          })
          .catch(err => {
            setLoading(false)
            alert(err.message)
          })
    }

    return (
        <div className="sign-up-container">
          <h1>Sign In</h1>
          <form onSubmit={(event) => signInUser(event)}>
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
                  {loading ? 'Signing In..' : 'SIGN IN'}
              </button>
          </form>
        </div>
    )
}

export default SignIn