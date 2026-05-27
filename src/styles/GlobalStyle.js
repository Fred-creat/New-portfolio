import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 100%;
    scroll-behavior: smooth;
  }

  body {
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    background:
      radial-gradient(circle at top left, rgba(56, 189, 248, 0.16), transparent 32rem),
      ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    overflow-x: hidden;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  #root {
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
  }

  main {
    flex: 1;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  a {
    color: inherit;
    overflow-wrap: anywhere;
  }

  button,
  input,
  textarea {
    font: inherit;
    max-width: 100%;
  }

  h1,
  h2,
  h3,
  p,
  li {
    overflow-wrap: anywhere;
  }

  a:focus-visible,
  button:focus-visible,
  input:focus-visible,
  textarea:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 3px;
  }

  ::selection {
    background: ${({ theme }) => theme.colors.primary};
    color: #03111f;
  }

  @media (max-width: 768px) {
    html {
      font-size: 95%;
    }
  }
`

export default GlobalStyle
