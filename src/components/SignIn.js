import {useState} from 'react'

function SignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const signInUser = (event) => {
        event.preventDefault()
        console.log("signing in...")
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
                  SUBMIT
              </button>
          </form>
        </div>
    )
}

export default SignIn