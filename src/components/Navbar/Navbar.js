import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import styled from 'styled-components'
import Container from '../Container/Container'
import './Navbar.css'

const Options = styled.a`
  text-decoration: none;
  list-style-type: none;
`

const Nav = styled.nav `
  display: flex;
  justify-content: space-between;
  background-color: #BB86FC;
  padding: 0.1em;
`

const List = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
  gap: 1em;
`

const Navbar = () => {
  return (
    <Nav>
        <Container>
            <Link to ="/">
                <img src={logo} alt="Arthur Cerqueira" />
            </Link>
            <List>
                <Options>
                <Link to="/">Início</Link> 
                </Options>
                <Options>
                <Link to="/History">Minha História</Link>
                </Options>
                <Options>
                <Link to="/Experiences">Minhas Experiencias</Link>
                </Options>
                <Options>
                <Link to="/Interests">Meus Interesses</Link>
                </Options>
            </List>
        </Container>
    </Nav>
  )
}

export default Navbar