import React from 'react'
import './Header'
import Logo from './finallogo.png'
import {Link} from 'react-router-dom'
// import {imSearch} from 'react-icons/im'

import {ImSearch} from 'react-icons/im'
const Header = () => {

    console.log(Logo);
  return (
    <div className='header'>
        <img src={Logo} alt="#" />

        <div>
          <Link to="/tvshows">Tv Shows</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/recent">Recently Added</Link>
          <Link to="/list">My List</Link>
        </div>

        <ImSearch/>



    </div>
  )
}

export default Header
