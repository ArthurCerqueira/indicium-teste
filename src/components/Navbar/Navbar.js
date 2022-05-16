import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import logo from './logo.png'

import Container from '../Container/Container'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <Container>
            <Link to ="/">
                <img src={logo} alt="Arthur Cerqueira" />
            </Link>
            <ul className='list'>
                <li>
                <Link to="/">Início</Link> 
                </li>
                <li>
                <Link to="/History">Minha História</Link>
                </li>
                <li>
                <Link to="/Experiences">Minhas Experiencias</Link>
                </li>
                <li>
                <Link to="/Interestings">Meus Interesses</Link>
                </li>
            </ul>
        </Container>
    </nav>
  )
}

export default Navbar