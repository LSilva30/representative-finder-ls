import {Link} from 'react-router-dom'

function Header() {
  return (
    <div className="header">
      <ul>
        <li className="menu-item">
          <Link to="/">
            Representative Finder
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/signup">
            <span>Sign Up</span>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
