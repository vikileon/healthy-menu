import styled from "styled-components";

function AboutSection() {
  return (
    <Main>
      <h2>Правильное питание — без лишних хлопот!</h2>
      <Sections>
        <Section>
          <p className="primary-text">
            <b>Healthy Menu</b> — уникальный сервис для составления недельного
            меню, которое идеально впишется в ваш распорядок и цели.
          </p>
          <img
            src="../../../public/about-section-left.png"
            alt="about-picture"
          />
        </Section>

        <Section>
          <img
            src="../../../public/about-section-right.png"
            alt="about-picture"
          />
          <p className="primary-text">
            С нами легко следовать сбалансированной диете и планировать свое
            питание — вы получите разнообразные и вкусные рецепты на каждый
            день.
          </p>
        </Section>
      </Sections>
    </Main>
  );
}

const Main = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 4rem;
  grid-gap: 50px;

  h2 {
    color: #638943;
    font-size: 2rem;
  }

  .primary-text {
    font-size: clamp(1rem, 3vw, 1.5rem);
    max-width: 500px;
    color: #6a6a6a;
    margin: 1.5rem 0;
  }
`;
const Sections = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`;
const Section = styled.div`
  position: relative;

  img {
    max-width: 80%;
    height: auto;
  }
`;

export default AboutSection;
