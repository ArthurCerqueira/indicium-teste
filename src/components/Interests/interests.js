import React, {useState} from 'react'
import { sliderdata } from './sliderdata'
import {ArrowLeftSquareFill, ArrowRightSquareFill} from '@styled-icons/bootstrap'
import styled from 'styled-components'

const H1 =styled.h1`
  display: flex;
  justify-content: center;
  color: #bb86fc;
  font-size: 50px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  padding: 2rem;
  text-align: center;
`
const P = styled.p`
  display: flex;
  justify-content: center;
  color:white;
` 
const Img = styled.img`
  width: 500px;
  height: 300px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  `
const Leftbutton = styled(ArrowLeftSquareFill)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 100px;
  color: white;
 
`

const Rightbutton = styled(ArrowRightSquareFill)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 100px;
  right: 2px;
  color: white;
`
const Section = styled.section `
  display:flex;
  justify-content: center;
  margin-bottom: 10px;
  align-items: center;
`
const Titulos = styled.h1`
  display: flex;
  justify-content: center;
  color: #bb86fc;;
  font-size: 35px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  
` 

const Conteudo = styled.p`
  display: flex;
  justify-content: center;
  color: white;
  font-size: 25px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  text-align: center;
  margin-bottom: 0.5rem;
`


const Interests = () => {

  const [current, setCurrent] = useState(0);
  const length = sliderdata.length;

  const nextSlide = () => {
    setCurrent (current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent (current === 0 ? length - 1 : current - 1)
  }



  if(!Array.isArray(sliderdata) || length <=0 ) {
    return null
  }

  return (
    <main>
      <H1>CONHEÇA MEUS INTERESSES NA ÁREA DE TECNOLOGIA:</H1>
      <P>Clica para o lado!</P>
      <Section>
        <Leftbutton onClick={prevSlide}/>
        <Img src={sliderdata[current].image} alt="Meus interesses!" />        
        <Rightbutton onClick={nextSlide}/>
      </Section>
      <section>
        <Titulos>CONHECIMENTO EM TODO ECOSSSISTEMA REACT</Titulos>
        <Conteudo>Um dos meus principais interesses na programação é ter um conhecimento avançado referente a um ecosistema, o do React por exemplo.</Conteudo>
        <Titulos>DADOS E IA</Titulos>
        <Conteudo>Evoluir em dados é um dos pontos importantes da jornada, imagino que assim como hoje, no futuro será uma coisa essêncial dos desenvolvedores terem em seu currículo, assim como IA que no meu ponto de vista é algo que está muito próximo de fazer parte do nosso dia a dia.</Conteudo>
        <Titulos>ME TORNAR FULL-STACK</Titulos>
        <Conteudo>Se tornar um Full-stack na área também é meu interesse, para saber e ter consciência de todo o projeto.</Conteudo>
        
      </section>
    </main>
  )
}

export default Interests