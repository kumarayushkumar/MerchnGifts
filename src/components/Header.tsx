import { Link } from 'react-router-dom'
import Logo from './Logo'

export default function Header() {

  return (
    <header id="header" className="header">
      <div className="header-content">
        
      <Logo/>

        <nav>
          <Link to="/product">Products</Link>
          <Link to="/product">Services</Link>
          {/* <Link to="/#latest-work">Clients</Link> */}
          <Link to="/#about-us">About Us</Link>
          <Link to="/contact-us">Contact Us</Link>
        </nav>

        <Link to="/contact-us" className="downloadbtn">Download Brochure</Link>

      </div>

    </header>
  )
}