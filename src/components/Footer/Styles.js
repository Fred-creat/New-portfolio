import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  
    @media (max-width: 768px) {
        flex-direction: column;
        padding: 0 1rem;
        margin-top: -2rem;
    }

    @media (max-width: 480px) {
        flex-direction: column;
        padding: 0 1rem;
        margin-top: 25.5rem;
    }

    @media (max-width: 320px) {
        flex-direction: column;
        padding: 0 1rem;
        margin-top: 31rem;
    }
       
`;

export const FooterText = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.muted};

  
    @media (max-width: 320px) {
        flex-direction: column;
        padding: 0 1rem;
       margin-top: 1rem;  ;
        text-align: center;
    }
`;
