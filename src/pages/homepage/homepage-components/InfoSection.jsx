import styled from 'styled-components';

function InfoSection() {
  return (
    <Main>
      <h2>
        На нашем сайте вы можете:
      </h2>
      <Sections>
        <Section>
          <img src="../../../public/01.png" alt="" />
          <p className='section-text'>Подобрать блюда по калориям и личным предпочтениям.</p>
        </Section>

        <Section>
          <img src="../../../public/02.png" alt="" />
          <p className='section-text'>Составить план питания, который легко встроится в ваш график.</p>
        </Section>

        <Section>
          <img src="../../../public/03.png" alt="" />
          <p className='section-text'>Не беспокойтесь о списке необходимых покупок — создайте его в пару кликов!</p>
        </Section>
      </Sections>
      <p className='primary-text'>Каждое блюдо на нашем сайте отобрано с учётом баланса и разнообразия, чтобы питание было не только полезным, но и вкусным.</p>
    </Main>
  );
};

const Main = styled.div`
  position: relative;
  padding-top: 3rem;
  
  h2 {
    color: #6f994a;
    font-size: 2rem;
    padding: 2rem 0;
  }

  .primary-text {
    font-size: clamp(1rem, 3vw, 1.5rem);
    max-width: 100%;
    color: #6a6a6a;
    margin: 1.5rem 0rem;
  }

  img {
    max-width: 30%;
    height: auto;
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
  padding: 2rem 0;

  .section-text {
    font-size: clamp(1rem, 3vw, 1.5rem);
    max-width: 500px;
    color: #6a6a6a;
    margin: 1.5rem 0rem;
  }
`

export default InfoSection;