import styled from 'styled-components'

export const HeaderContainer = styled.header`
  max-width: 100%;
  
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
   background-color: ${({ theme }) => theme.colors.background};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
 //outline: none;

`

export const Nav = styled.nav`
  display: flex;
  gap: 1.9rem;

  a {
    color: ${({ theme }) => theme.colors.muted};
    transition: color 0.3s;
    font-size: 2.125rem;
    text-decoration: none;
    outline: none;

    &:hover {
      color: ${({ theme }) => theme.colors.text};
    }
  }

  
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (max-width: 480px) {
    gap: 1rem;
    a {
      font-size: 1rem;
    }
  }

  @media (min-width: 320px) {
    gap: 0.5rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      font-size: 0.875rem;
    }
  }
`
