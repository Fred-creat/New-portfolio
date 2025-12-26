import styled from 'styled-components';

export const AboutContainer = styled.section`
display: flex;
background-color: #441b37ff;
flex-direction: column;
justify-content: center;
position: relative;
align-items: center;
  max-width: ${({ theme }) => theme.layout.minWidth};
  margin: 0 auto;
  padding: 4rem 2rem;
  border-radius: 8px;
  width: 70%;
  height: 600px;

  @media screen and (min-width: 320px) {
    width: 90%;
    height: 100%;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

  }
`;

export const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  max-width: 600px;
  color: #dde1e8ff;
    line-height: 1.6;
    margin-top: 15rem;
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