import React from 'react'
import styled from 'styled-components'
import me from '../../assets/images/me.png'

const Titulos = styled.h1`
  display: flex;
  justify-content: center;
  color: #bb86fc;
  font-size: 35px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  margin-top: 2rem;
  margin-bottom: 2rem;
  
` 

const Conteudo = styled.p`
  display: flex;
  justify-content: center;
  color: white;
  font-size: 25px;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  margin-bottom: 2rem;

`

const Me = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  border-radius: 20px;
`

const Father = styled.section `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 1rem;
 
`

const History = () => {
  return (
      <Father>
        <Titulos>QUEM É O ARTHUR?</Titulos>
        <Me src={me} alt='Arthur Cerqueira'></Me>
        <Conteudo>Eu considero o Arthur uma pessoa extremamente esforçada e que vai atrás dos seus objetivos a todo o custo. Um jovem de 18 anos que desde os 14 anos decidiu sair de casa para iniciar sua jornada e que tem o sonho de trabalhar com programação.</Conteudo>
        <Conteudo>Como falei anteriormente sou nascido de São Paulo capital. Formado no Ensino médio e ensino fundamental todo em colégio advenstista e cursando o segundo semestre de ciências da computação!</Conteudo>
        <Conteudo>Minhas 2 primeiras oportunidade de trabalho não me trouxeram muita possibilidade de me envolver com a tecnologia, porém hoje na Pieta.tech (Empresa atual aonde trabalho) acabei finalmente entrando nesse mundo</Conteudo>
        <Conteudo>Hoje já faço parte do time de software da empresa porém na área de TI e não vejo um crescimento para área de programação lá dentro e é por isso que estou em busca de uma nova oportunidade no mercado.</Conteudo>
        <Conteudo>Já conheço toda a métodologia do método SCRUM, sabendo como funciona daily, sprints e etc. Já me considero um futuro programador, é só questão de tempo para a oportunidade chegar! E ficaria muito feliz se a oportunidade fosse como um Datanauta!!!</Conteudo>
      </Father>

  )
}

export default History