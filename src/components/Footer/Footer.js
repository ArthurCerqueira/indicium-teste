import React from 'react'
import git from './git.png'
import linkedin from './linkedin.png'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <ul>
        <p className='nome'>
         <span>Arthur Cerqueira</span> &copy; 2022 
        </p>
        <li className='redes'>
          <img src={git} alt="Link para o GitHub"/>
          <img src={linkedin} alt="Link para o Linkedin"/>
        </li>
      </ul>
    </footer>
  )
}

export default Footer