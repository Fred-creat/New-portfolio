import styled from 'styled-components';

export const AboutContainer = styled.section`
display: flex;
//background-color: #441b37ff;
flex-direction: column;
justify-content: center;
position: relative;
align-items: center;
  max-width: ${({ theme }) => theme.layout.minWidth};
  margin: 0 auto;
 // padding: 4rem 2rem;
 // border-radius: 8px;
  width: 60%;
  height: 300px;
  margin-top: 2rem;
  margin-bottom: 1rem;

  @media screen and (min-width: 320px) {
    width: 90%;
    background-color: #441b37ff;
   
   height: 500px;
   display: flex;
   position: relative;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   text-align: center;
   margin-top: 2rem;
   margin-bottom: 2rem;
  }

   @media screen and (min-width: 353px) {
    width: 90%;
    background-color: #441b37ff;
   height: 600px;
   display: flex;
   position: relative;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   text-align: center;
   margin-top: 2rem;
   margin-bottom: 2rem;

   h2 {
      font-size: 2.2rem;
      margin-top: 1.5;
   }
  }
`;

export const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center; 
  max-width: 600px;
  color: #dde1e8ff;
    line-height: 1.6;
    //margin-top: 1rem;
   // margin-bottom: 10rem;

    h2 {
      font-size: 2rem;
      
    }

    p {
      font-size: 1.150rem;
      line-height: 1.8;
    }
`;