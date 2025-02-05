import HealthyMenu from "../../../assets/HEALTHYMENU.svg?react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function MainSection() {
  return (
    <Main>
      <Sections>
        <Section>
          <HealthyMenu />
        </Section>

        <Section>
          <h1 className="primary-heading">Правильное питание – просто!</h1>
          <p className="primary-text">
            Создайте свое сбалансированное меню на неделю, которое идеально
            подходит для вашего образа жизни.
          </p>
          <p className="primary-text">
            Здесь вы найдете простые и вкусные, а главное –{" "}
            <b>полезные рецепты</b>.
          </p>
          <Buttons>
            <Link to="/recipes" className="btn-start">
              Начать
            </Link>
            <Link to="/" className="btn-more">
              Узнать больше
            </Link>
          </Buttons>
        </Section>
      </Sections>
    </Main>
  );
}

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
    font-size: 1.5rem;
    max-width: 500px;
    color: #6a6a6a;
    margin: 1rem 0;
  }
`;
const Sections = styled.div`
  position: relative;
  display: flex;
  grid-gap: 150px;
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;

  .btn-start {
    padding: 1rem 2rem;
    background: linear-gradient(35deg, #7ab058, #408628);
    color: white;
    border: 2px solid #4c4c4c;
    border-radius: 0.5rem;
    margin-right: 2rem;
    font-weight: 600;
    font-size: 1rem;
    text-decoration: none;
  }

  .btn-more {
    padding: 1rem 2rem;
    background: white;
    color: #408628;
    border: 2px solid #4c4c4c;
    border-radius: 0.5rem;
    margin-right: 2rem;
    font-weight: 600;
    font-size: 1rem;
    text-decoration: none;
  }
`;

// const ButtonStart = styled.button`
//   padding: 1rem 2rem;
//   background: linear-gradient(35deg, #7ab058, #408628);
//   color: white;
//   border: 2px solid #4c4c4c;
//   border-radius: 0.5rem;
//   margin-right: 2rem;
//   font-weight: 600;
//   font-size: 1rem;
// `;

const ButtonMore = styled.button`
  padding: 1rem 2rem;
  background: white;
  color: #408628;
  border: 2px solid #4c4c4c;
  border-radius: 0.5rem;
  margin-right: 2rem;
  font-weight: 600;
  font-size: 1rem;
`;

export default MainSection;
