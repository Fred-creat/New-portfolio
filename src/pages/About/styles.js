import styled from 'styled-components';

export const AboutContainer = styled.section`
display: flex;
background-color: #441b37ff;
flex-direction: column;
justify-content: center;
align-items: center;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 4rem 2rem;
  border-radius: 8px;
  width: 70%;
  height: 70%;
`;

export const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  color: #dde1e8ff;
    line-height: 1.6;
    margin-bottom: 20rem;

    h2 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.125rem;
      line-height: 1.6;
      margin-bottom: 1rem;
    }
`;