import React from 'react'
import './home.css'
import profile from '../../assets/images/profile.png'
import styled from 'styled-components'

const Line1 = styled.section `
  display: flex;
  justify-content: center;
  align-items: center;
`

const Home1 = styled.ul `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 1px;
  margin-left: 200px;
  margin-right: 200px;
  animation-name: slide;
  animation-duration: 1s;
  text-align: start;
  gap: 3rem;
`

const Titulo = styled.p `
  color: #BB86FC;
  font-size: 50px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  display:flex;
  justify-content: center;
  animation-name: slide;
  animation-duration: 1s;
  margin-top: 1rem;
`

const SobreMim = styled.p `
  font-size: 25px;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  border: 10px;
  border-color: #7ac8ae;
  border-radius: 20px;
  border-style: none;
  padding: 10px;
  animation-name: slide;
  animation-duration: 1s;
  margin: 1rem 18.75rem 1rem 18.75rem;
  color: white;
`

const Lista = styled.ul `
  font-family: 'Montserrat', sans-serif;
  font-size: 25px;
  color: white;
`

const Home = () => {
  return (
    <div className='home'>
      <Line1>
      <Home1>
       <img src={profile} alt="Foto de perfil"/>
       <Lista>
         <li>Arthur Cerqueira Farias</li>
         <li>18 anos</li>
         <li>Estudante de Ciencias da Computação</li>
         <li>Aspirante em desenvolvimento Front-end</li>
         <li>Apaixonado por tecnologia</li>
       </Lista>
       </Home1>
       </Line1>
      <section>
        <Titulo>Um pouco sobre mim...</Titulo>
        <SobreMim>Me chamo <b>Arthur Cerqueira Farias</b> e sou natural de <b>São Paulo capital. </b>Em busca de uma vida melhor a seis anos atrás minha familia decidiu vir morar em <b>Florianópolis.</b>Mas bom acho que aqui não é o lugar ideal para falar da minha história. Mas seja bem vindo ao meu site!</SobreMim>
      </section>
    </div>
  )
}

export default Home