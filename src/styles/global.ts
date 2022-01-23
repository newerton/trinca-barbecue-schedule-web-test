import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 20%, #FFD836 40%), #FFD836 url('./images/background.png') top center repeat-x;
    color: #000;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Raleway', serif;
    font-size: 14px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

`;
