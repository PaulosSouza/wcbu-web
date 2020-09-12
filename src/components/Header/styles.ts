import styled, { css } from 'styled-components';

interface ContainerProps {
  location: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-top: 2.4rem;
  height: 10vh;

  div {
    display: flex;

    a {
      color: #fff;
      font-size: 2.4rem;
      font-weight: bold;
      font-style: italic;
      padding-bottom: 0.8rem;

      border-bottom: 1px solid #000;

      &:hover {
        border-bottom-width: 0.2rem;
        border-bottom-color: #f9c800;
        border-bottom-style: solid;
      }

      & + a {
        margin-left: 30px;
      }
    }

    @media (max-width: 375px) {
      a {
        font-size: 2rem;
      }
    }

    ${props =>
      props.location &&
      css`
        a[href='${props.location}'] {
          border-bottom-width: 0.2rem;
          border-bottom-color: #f9c800;
          border-bottom-style: solid;
        }
      `}
  }
`;
