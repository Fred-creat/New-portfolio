import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.background};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export const FooterText = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.muted};
`;
