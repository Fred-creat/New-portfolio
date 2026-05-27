import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.header`
  width: min(
    calc(100% - ${({ theme }) => theme.layout.pageInset}),
    ${({ theme }) => theme.layout.maxWidth}
  );
  margin: 0 auto;
  padding: 1.25rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  gap: 1.5rem;

  @media screen and (max-width: 640px) {
    flex-direction: column;
    justify-content: center;
    padding: 1rem 0;
    gap: 0.85rem;
  }
`

export const Brand = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  font-weight: 800;
  letter-spacing: 0;
  text-decoration: none;
`

export const Nav = styled.nav`
  display: flex;
  gap: clamp(0.35rem, 2vw, 1.25rem);
  justify-content: center;
  align-items: center;
  font-weight: 500;
  flex-wrap: wrap;

  a {
    color: ${({ theme }) => theme.colors.muted};
    transition: color 0.2s ease, background-color 0.2s ease;
    font-size: 1rem;
    text-decoration: none;
    padding: 0.45rem clamp(0.55rem, 2.5vw, 0.75rem);
    border-radius: 999px;

    &:hover,
    &.active {
      color: ${({ theme }) => theme.colors.text};
      background: rgba(148, 163, 184, 0.12);
    }
  }

  @media screen and (max-width: 360px) {
    width: 100%;

    a {
      flex: 1 1 calc(50% - 0.5rem);
      text-align: center;
    }
  }
`
