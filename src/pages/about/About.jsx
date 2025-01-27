import styled from 'styled-components';

function About() {
  return (
    <Main>
      <img src="../../public/process.png" alt="in progress" />
      <h1>Эта страница в разработке</h1>
      <p>Приношу извинения за неудобства :)</p>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 50px;

  h1 {
    color: #4c4c4c;
    font-size: 3rem;
  }

  p {
    color: #6a6a6a;
    font-size: 1.5rem;
  }
`;

export default About;