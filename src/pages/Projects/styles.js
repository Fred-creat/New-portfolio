import styled from 'styled-components';

export const Container = styled.section`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 4rem 2rem;
  margin-bottom: 13rem;
  
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 3rem;

  color: ${({ theme }) => theme.colors.blue};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export const Grid = styled.div`
  display: grid;
  background-color: #020617;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  color: ${({ theme }) => theme.colors.text};
  
`;


