import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  display: flex;
  height: 70vh;
  align-items: center;
  justify-content: center;
  padding-top: 8rem;

  h1 {
    font-size: 4rem;
    font-weight: normal;
    font-style: italic;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 5rem;
    }
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: 6rem;
    }
  }

  @media (min-width: 1200px) {
    h1 {
      font-size: 7rem;
    }
  }

  @media (max-width: 425px) {
    h1 {
      font-size: 3rem;
    }
  }
`;

export const Wind = styled.img`
  margin-left: auto;

  animation: ${rotate} 6s linear infinite;

  height: 14rem;

  @media (max-width: 768px) {
    height: 10rem;
  }
`;
