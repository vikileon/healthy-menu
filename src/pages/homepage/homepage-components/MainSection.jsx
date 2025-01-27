import HealthyMenu from '../../../assets/HEALTHYMENU.svg?react';
import styled from 'styled-components';

function MainSection() {
  return (
    <Main>
      <Sections>
        <Section>
          <HealthyMenu />
          <h1 className='primary-heading'>
            Правильное питание – просто!
          </h1>
        </Section>

        <Section>
          <p className='primary-text'>
            Создайте свое сбалансированное меню на неделю, которое идеально подходит для вашего образа жизни. 
          </p>
          <p p className='primary-text'>
            Здесь вы найдете простые и вкусные, а главное – <b>полезные рецепты</b>.
          </p>
          <button>Начать</button>
        </Section>
      </Sections>
    </Main>
  );
};

const Main = styled.div`
  position: relative;
  display: flex;
  padding-top: 3rem;
  grid-gap: 50px;
  
  h1 {
    color: #4c4c4c;
    font-size: 2rem;
  }

  svg {
    width: 500px;
  }

  .primary-text {
    font-size: clamp(1rem, 3vw, 1.5rem);
    max-width: 500px;
    color: #6a6a6a;
    margin: 1.5rem 0rem;
  }
`
const Sections = styled.div`
  position: relative;
  display: flex;
  grid-gap: 150px;
`
const Section = styled.div`
  display: flex;
  flex-direction: column;
`


export default MainSection;