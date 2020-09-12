import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

 body, html, #root {
    height: 100vh;
    font-size: 10px;
  }

  #root {
    display: flex;
    justify-content: center;
  }

  body {
    background: #040404;
    color: #fff;
    font-family: Georgia, 'Times New Roman', Times, serif;
    -webkit-font-smoothing: antialiased;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  img {
    display: block;
    height: auto;
  }

  button {
    cursor: pointer;
  }


`;

export const Wrapper = styled.div`
  width: 90vw;
  max-width: 1200px;
  position: relative;
`;
