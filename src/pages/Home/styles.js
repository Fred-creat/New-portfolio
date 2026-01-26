import styled from 'styled-components'

export const Container = styled.section`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  margin-bottom: 1rem;
  padding: 2rem 2rem;


  @media screen and (min-width: 353px) {
    padding: 4rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`
