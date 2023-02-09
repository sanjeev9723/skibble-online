import React from 'react'
import { Link } from 'react-router-dom'
// import Header from './Header'
const Navbar = () => {
  return (
    <div>
        <nav className='navbar'>
          
            {/* <Link to="/">
           Home
            </Link> */}
           
            {/* <Link to="/">Course</Link> */}
            <ul className="nav nav-pills">
            <li className="nav-item"><a href="#" className="nav-link active" aria-current="page"> <Link to="/">Home</Link></a></li>
            <li className="nav-item"><a href="#" className="nav-link"><Link to="/about">About</Link></a></li>
            {/* <li className="nav-item"><a href="#" className="nav-link">FAQs</a></li> */}
            <li className="nav-item"><a href="#" className="nav-link"><Link to="/login">Login</Link></a></li>
          </ul>
        </nav>
      
      
     
    </div>
  )
}

export default Navbar
