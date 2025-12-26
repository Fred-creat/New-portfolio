import styled from 'styled-components';

export const HeroContainer = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  width: 100%;
  padding: 0 2rem;
  margin-top: -4rem;


    @media (max-width: 768px) {
        flex-direction: column;
        padding: 0 1rem;
        margin-top: -2rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 480px) {
        flex-direction: column;
        padding: 0 1rem;
        margin-top: -2rem;
    }

    @media (max-width: 320px) {
        flex-direction: column;
        padding: 0 1rem;
        margin-top: -2rem;
        margin-bottom: 1rem;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
`;

export const HeroImage = styled.div`

    img {
        border-radius: 10px;

        width: 700px;
        height: 500px;
        margin-bottom: 2rem;
    }

    @media (max-width: 768px) {
        img {
            width: 100%;
            height: auto;
         display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 25rem;

        }
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