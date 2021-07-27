import {useState} from 'react'

function SignUp() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className="sign-up-container">
          <form>
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
              <button
                className="submit-btn"
              >
                  SUBMIT
              </button>
          </form>
        </div>
    )
}

export default SignUp