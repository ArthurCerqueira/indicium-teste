import React from 'react'
import './home.css'
import profile from './profile.png'

const Home = () => {
  return (
    <div className='home'>
      <ul className='home1'>
       <img src={profile} alt="Foto de perfil"/>
       <ul className='lista'>
         <li>Arthur Cerqueira Farias</li>
         <li>18 anos</li>
         <li>Estudante de Ciencias da Computação</li>
         <li>Aspirante em desenvolvimento Front-end</li>
         <li>Apaixonado por tecnologia</li>
       </ul>
       </ul>
      <p className='quemsoueutitulo'>Um pouco sobre mim...</p>
      <p className='quemsoueuparagrafo'>Me chamo <b>Arthur Cerqueira Farias</b> e sou natural de <b>São Paulo capital. </b>Em busca de uma vida melhor a seis anos atrás minha familia decidiu vir morar em <b>Florianópolis.</b>Mas bom acho que aqui não é o lugar ideal para falar da minha história. Mas seja bem vindo ao meu site!</p>
    </div>
    

  )
}

export default Home