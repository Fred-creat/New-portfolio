import styled from 'styled-components';

export const HeroContainer = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  width: 100%;
  padding: 0 2rem;
  margin-top: -4rem;
`;

export const HeroImage = styled.div`

    img {
        border-radius: 10px;

        width: 500px;
        height: 400px;
        margin-bottom: 2rem;
    }
`;

export const HeroText = styled.div`
  text-align: center;
  max-width: 800px;
  margin-left: 2rem;


    h1 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        color: ${({ theme }) => theme.colors.blue};
    }

    h2 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        color: ${({ theme }) => theme.colors.white};
    }

    p {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        line-height: 1.6;
        font-size: 1.125rem;
        color: #dde1e8ff;
    }
`;