import styled from 'styled-components'

export const FooterContainer = styled.footer`
  width: min(
    calc(100% - ${({ theme }) => theme.layout.pageInset}),
    ${({ theme }) => theme.layout.maxWidth}
  );
  margin: 0 auto;
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  nav {
    display: flex;
    gap: 1rem;
  }

  a {
    color: ${({ theme }) => theme.colors.text};
    font-size: 0.85rem;
    font-weight: 700;
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  @media (max-width: 620px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 1rem;
  }
`

export const FooterText = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.muted};
`
