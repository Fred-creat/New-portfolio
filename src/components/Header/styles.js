import styled from 'styled-components'

export const HeaderContainer = styled.header`
  max-width: 100%;
  max-height: 100dvh;
  
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
   background-color: ${({ theme }) => theme.colors.background};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
 //outline: none;

 
  @media screen and (min-width: 353px) {
    gap: 1.5rem;
    font-size: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

`

export const Nav = styled.nav`
  display: flex;
  gap: 2.5rem;
  justify-content: center;
  align-items: center;

  font-weight: 500;
  width: 80%;

  a {
    color: ${({ theme }) => theme.colors.muted};
    transition: color 0.3s;
    font-size: 1.150rem;
    text-decoration: none;
    outline: none;

    &:hover {
      color: ${({ theme }) => theme.colors.text};
    }
  }

  @media screen and (min-width: 353px) {
    gap: 1.5rem;
    font-size: 1rem;
  }

`
