import styled from "styled-components";
import { Link } from "react-router-dom";

function FinalSection() {
  return (
    <Main>
      <h2>Что мы предлагаем:</h2>
      <Sections>
        <Section>
          <img src="../../../public/row1.png" alt="" />
          <Text>
            <b>Персонализированный план</b> на основе ваших целей и
            предпочтений.
          </Text>
        </Section>

        <Section>
          <img src="../../../public/row2.png" alt="" />
          <Text>
            <b>Подсчёт калорий и нутриентов</b>, чтобы каждый приём пищи
            приносил пользу.
          </Text>
        </Section>

        <Section>
          <img src="../../../public/row3.png" alt="" />
          <Text>
            <b>Экономия времени</b>: вы получите не только меню, но и список для
            покупки продуктов — быстро и просто!
          </Text>
        </Section>
      </Sections>

      <h2>Правильное питание, как оно должно быть — просто и вкусно!</h2>
      <p>
        Нужно просто <Link to="/recipes">начать</Link>.
      </p>
    </Main>
  );
}

const Main = styled.div`
  color: #6a6a6a;

  h2 {
    color: #638943;
    font-size: 2rem;
    padding: 2rem 0;
  }

  p {
    font-size: 1.5rem;
  }
`;
const Sections = styled.div`
  position: relative;
  display: flex;
  grid-gap: 150px;
`;

const Section = styled.div`
  position: relative;
`;

const Text = styled.div`
  font-size: clamp(1rem, 3vw, 1.5rem);
  max-width: 500px;
  color: #6a6a6a;
  margin: 1.5rem 0;
`;

export default FinalSection;
