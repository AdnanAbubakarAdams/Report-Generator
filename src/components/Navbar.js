import React from 'react'
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <Link to="/">
        <div className='logo'>
            REPORT-GENERATOR
        </div>
        </Link>
        {/* <Link to="/barchart">
            Barchart
        </Link>
        <Link to="/linechart">
            Linechart
        </Link>
        <Link to="/piechart">
            Piechart
        </Link> */}
    </div>
  )
}

export default Navbar;