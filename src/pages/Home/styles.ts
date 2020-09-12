import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80vh;

  h1 {
    font-size: 12rem;
    font-weight: normal;
    font-style: italic;
  }

  h2 {
    position: relative;
    left: 9rem;
    bottom: 2rem;
    color: #da2c33;
    font-size: 4.5rem;
    font-weight: bold;
    font-style: italic;
  }

  @media (max-width: 375px) {
    h1 {
      font-size: 9.6rem;
    }

    h2 {
      font-size: 2.4rem;
    }
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 18rem;
    }

    h2 {
      font-size: 6rem;
      left: 15rem;
      bottom: 3rem;
    }
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: 22rem;
    }

    h2 {
      font-size: 6rem;
      left: 24rem;
      bottom: 4rem;
    }
  }
`;
