import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* RESET GLOBAL */
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  * {
  pointer-events: auto;
}



  html {
    font-size: 100%;
    scroll-behavior: smooth;
  }

  body {
    min-height: 100dvh; /* CORRETO PARA iOS */
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background: #020617;
    color: #e5e7eb;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  /* IMAGENS RESPONSIVAS */
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* TEXTO PADRÃO */
  p {
    line-height: 1.6;
  }

  /* LINKS */
  a {
    color: inherit;
    text-decoration: none;
  }
  
a,
button {
  pointer-events: auto;
  cursor: pointer;
}

  /* MOBILE ADJUSTMENTS */
  @media (max-width: 768px) {
    html {
      font-size: 95%;
    }
  }

  @media (max-width: 480px) {
    html {
      font-size: 90%;
    }
  }

  @media (max-width: 360px) {
    html {
      font-size: 85%;
    }
  }
`;

export default GlobalStyle;
