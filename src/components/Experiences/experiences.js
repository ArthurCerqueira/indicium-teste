import React, {useState} from 'react'
import styled from 'styled-components';
import './experiences.css'

const ListItem = styled.li`
  text-align: center;
  border-radius:5px;
  padding: 15px;
  border: 1px solid #ddd;
  box-shadow: 0 0 6px 3px rgba(0,0,0,0.1);
  margin-bottom: 15px;
  transition: .3s;
  font-weight: bold;
  transition-delay: ${({delay}) => `${delay}ms`};
  opacity: ${({isVisible}) => isVisible ? 1:0};
  `;

  const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  `

  const H1 = styled.h1 `
    color: #7ac8ae;
    font-size: 50px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
  `

  const Button = styled.button `
    background: #7ac8ae;
    border-radius: 20px;
    padding: 10px;
    border: 0px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    color:black;
    &:hover {
      color: white;
    }
  `

const Experiences = () => {

  const [listVisibility, setListVisibility] = useState(false);

  function toggleListVisibility() {
    setListVisibility(!listVisibility)
  }

  return (
    <Main>
      <H1>Conheça minhas experiências!</H1>
      <Button onClick={toggleListVisibility}>
        Clique para revelar minha trajetória
      </Button>
      <ul className='listaexperiencias'>
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
      </ul>
    </Main>
    );
}

export default Experiences