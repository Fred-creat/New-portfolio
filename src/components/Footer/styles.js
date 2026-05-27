import styled from 'styled-components'

export const FooterContainer = styled.footer`
  width: min(
    calc(100% - ${({ theme }) => theme.layout.pageInset}),
    ${({ theme }) => theme.layout.maxWidth}
  );
  margin: 0 auto;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`

export const FooterText = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.muted};
  text-align: center;
`
