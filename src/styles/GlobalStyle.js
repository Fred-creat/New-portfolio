import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 100%;
  }

  body {
    font-family: system-ui, sans-serif;
    background: #020617;
    color: #e5e7eb;
    overflow-x: hidden; /* MUITO IMPORTANTE */
    text-align: center;



  }


  img {
    max-width: 100%;
    min-width: auto;
    width: 100%;
    height: auto;
    display: block;
  }

  text{
    align-items: center;
    margin: 0;
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    html {
      font-size: 90%;
      width: 100%;
      height: auto;
    }

    body {
      overflow-x: hidden;
      width: 100%;
      height: auto;
    }
  }

  @media (max-width: 480px) {
    html {
      font-size: 80%;
      width: 100%;
      height: auto;
    }

    
    body {
      overflow-x: hidden;
      width: 100%;
      height: auto;
    }
  }

  @media (max-width: 320px) {
    html {
      font-size: 70%;
      width: 100%;
      height: auto;
    }

    
    body {
      overflow-x: hidden;
      width: 100%;
      height: auto;

      img {
        width: 100%;
        height: auto;
      }
    }


  }

`;



export default GlobalStyle;
