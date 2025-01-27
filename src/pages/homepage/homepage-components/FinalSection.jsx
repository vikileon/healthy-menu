import styled from 'styled-components';

function FinalSection() {
  return (
    <Main>
      <h2>Что мы предлагаем:</h2>
      <Sections>
        <Section>
          <img src="../../../public/row1.png" alt="" />
          <p className='primary-text'><b>Персонализированный план</b> на основе ваших целей и предпочтений.</p>
        </Section>

        <Section>
          <img src="../../../public/row2.png" alt="" />
          <p className='primary-text'><b>Подсчёт калорий и нутриентов</b>, чтобы каждый приём пищи приносил пользу.</p>
        </Section>

        <Section>
          <img src="../../../public/row3.png" alt="" />
          <p className='primary-text'><b>Экономия времени</b>: вы получите не только меню, но и список для покупки продуктов — быстро и просто!</p>
          </Section>
      </Sections>

      <h2>Правильное питание, как оно должно быть — просто и вкусно!</h2>
      <div className='primary-text'>Нужно просто <button className='special-button'>начать.</button></div>
    </Main>
  );
};

const Main = styled.div`
  h2 {
    color: #6f994a;
    font-size: 2rem;
    padding: 2rem 0;
  }
`
const Sections = styled.div`
  position: relative;
  display: flex;
  grid-gap: 150px;
`

const Section = styled.div`
  position: relative;
`

export default FinalSection;