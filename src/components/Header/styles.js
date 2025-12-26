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
`

export const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;

  a {
    color: ${({ theme }) => theme.colors.muted};
    transition: color 0.3s;
    font-size: 1.125rem;

    &:hover {
      color: ${({ theme }) => theme.colors.text};
    }
  }
`
