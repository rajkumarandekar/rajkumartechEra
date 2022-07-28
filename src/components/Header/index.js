import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="blog-container">
      <ul className="nav-menu">
        <li>
          <Link className="nav-link" to="/">
            <img
              src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
              alt="website logo"
              className="v"
            />
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
