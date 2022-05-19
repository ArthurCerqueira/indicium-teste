import React, {useState} from 'react'
import styled from 'styled-components';
import './experiences.css'

const ListItem = styled.li`
  text-align: center;
  color: white;
  border-radius:5px;
  padding: 15px;
  border: 1px solid #ddd;
  box-shadow: 0 0 6px 3px rgba(0,0,0,0.1);
  margin-bottom: 15px;
  transition: .3s;
  font-weight: bold;
  transition-delay: ${({delay}) => `${delay}ms`};
  opacity: ${({isVisible}) => isVisible ? 1:0};
  margin-top: 1rem;
  `;

  const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  min-height: 10rem;
  `

  const H1 = styled.h1 `
    display: flex;
    align-items: center;
    justify-content: center;
    color: #BB86FC;
    font-size: 50px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    margin-top: 1rem;
    margin-bottom: 1rem;
    
  `

  const Button = styled.button `
    background-color: #bb86fc;;
    border-radius: 20px;
    padding: 10px;
    border: 0px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    color:white;
    margin-bottom: 1rem;
    &:hover {
      color: #3700b3;
    }
  `

  const ListWraper = styled.ul`
    text-decoration: none;
    list-style-type: none;
    max-width: 29%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-height: 0;
    transition: all 0.2s;
    display: none;
    ${props => props.isActive && `
      max-height: fit-content;
      display: block;
  `}
  `

const Titulos = styled.h1`
  display: flex;
  justify-content: center;
  color: #BB86FC;
  font-size: 35px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  text-align: center;

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
 

const Experiences = () => {

  const [listVisibility, setListVisibility] = useState(false);

  function toggleListVisibility() {
    setListVisibility(!listVisibility)

    console.log("teste")
  }




  return (
    <Main>
      <H1>Conheça minhas experiências!</H1>
      <Button onClick={toggleListVisibility}>
        Clique para revelar minha trajetória profissional!
      </Button>
      <ListWraper isActive={listVisibility}>
        {
          [
            'Auxiliar de cozinha - Camarão Express',
            'Operador de telemarketing - Unike Corretora',
            'Estágiario de TI - Pieta.tech',
            'Futuro programador! - :)'
          ].map((canal, indice) => (
            <ListItem isVisible={listVisibility} delay={indice * 100}>
              {canal}
            </ListItem>
          ))
        }
        <Titulos>Camarão Express</Titulos>
        <Conteudo>Atuava como caixa e auxiliar de cozinha. O resturante era da familia então nos ajudavamos, trabalhei lá dos 14 anos até os 17. E então aos 17 anos decidi sair de lá e ir atrás por conta própria.</Conteudo>
        <Conteudo>Minhas funções eram:</Conteudo>
        <Conteudo>-Abertura e fechamento de caixa;</Conteudo>
        <Conteudo>-Venda direta para o cliente presencial;</Conteudo>
        <Conteudo>-Apresentação de cardápio;</Conteudo>
        <Conteudo>-Auxilio na cozinha;</Conteudo>
        <Titulos>Unike Corretora de Seguros</Titulos>
        <Conteudo>Aos 17 anos após trabalhar no resturante da familia, o primeiro lugar que encontro e realizo a entrevista e passo é na Unike. Para trabalhar como operador de telemarketing, eu sabia que não estava fazendo o que eu queria para minha vida desde o momento que realizei minha primeira ligação. Em abril de 2021 a empresa fechou e todos doram mandados embora.</Conteudo>
        <Conteudo>Minhas funções eram:</Conteudo>
        <Conteudo>-Chamadas para os clientes através de script.</Conteudo>
        <Titulos>Pieta.tech</Titulos>
        <Conteudo>Um pouco antes de completar os 18 anos soube que tinha entrado para a Pieta.tech! Porém iniciei após completar 18 anos no dia 21/06/2021 e estou aqui até os dias atuais. Trabalho como estagiário em TI e infraestrutura. Aqui na Pieta.tech faço parte do TI porém dentro do time de Software e tive grandes aprendizados aqui dentro com a plataforma da alura disponibilizada aos colaboradores. Estou buscando novas oportunidades pois não vejo uma chance de acesso no time de software em si no níivel que me encontro atualmente. Aqui dentro tive oportunidade também de entender como funciona o Método Ágil SCRUM, com as dailys, sprints planning e sprint review.</Conteudo>
        <Conteudo>Minhas funções são:</Conteudo>
        <Conteudo>-Organização das planilhas de controle de estoque e acessos dos colaboradores;</Conteudo>
        <Conteudo>-Auxilio a máquina de todos os colaboradores em virtudes de quaisquer dificuldade (remoto e presencial);</Conteudo>
        <Conteudo>-Recebimento de chamados via Kanban (Pipefy);</Conteudo>
        <Conteudo>-Cuidar e gerenciar os usuários do FileServer da empresa;</Conteudo>
        <Conteudo>-Realizar avaliações de itens de tecnologia antes de serem solicitados compra;</Conteudo>
        <Conteudo>-Montagem de posto de trabalho;</Conteudo>
        <Titulos>Futuro programador</Titulos>
        <Conteudo>Ansioso para compartilhar dessa história!</Conteudo>
      </ListWraper>
    </Main>
    );
}

export default Experiences