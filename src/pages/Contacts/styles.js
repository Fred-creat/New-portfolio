import styled, { keyframes } from 'styled-components';

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AnimatedLeft = styled.div`
  animation: ${fadeUp} 0.6s ease forwards;
`;

export const AnimatedRight = styled.div`
  animation: ${fadeUp} 0.6s ease forwards;
  animation-delay: 0.15s;
`;

/* CONTAINER GERAL */
export const Container = styled.section`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 4rem 2rem;
  
`;

/* GRID 2 COLUNAS */
export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
  margin-bottom: 6rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

/* COLUNA ESQUERDA */
export const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

`;

/* COLUNA DIREITA */
export const Right = styled.div`
  display: flex;
  flex-direction: column;
  
`;

/* TEXTOS */
export const Title = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.blue};

  @media (max-width: 480px) {
    font-size: 2rem;
    text-align: center;
  }

  @media (max-width: 320px) {
    font-size: 1.8rem;
    text-align: center;
    }
`;

export const Text = styled.p`
  max-width: 480px;
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.6;
`;

/* LINKS */
export const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  
`;

export const ContactItem = styled.a`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  transition: color 0.3s;
  color: #dbe1e9ff;
 

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

`;

/* FORM */
export const Form = styled.form`
  
  flex-direction: column;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const Input = styled.input`
 
  padding: 0.9rem 1rem;
  border-radius: 6px;
  border: 1px solid #1e293b;
 // background: #020617;
  color: ${({ theme }) => theme.colors.text};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const TextArea = styled.textarea`
  padding: 0.9rem 1rem;
  border-radius: 6px;
  border: 1px solid #1e293b;
  //background: #020617;
  color: ${({ theme }) => theme.colors.blue};
  resize: vertical;
  min-height: 140px;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Button = styled.button`
  margin-top: 0.5rem;
  padding: 0.9rem;
  border-radius: 6px;
  border: none;
  background: ${({ theme }) => theme.colors.white};
  color: #1a1b1eff;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s, opacity 0.3s;

  &:hover {
    transform: translateY(-2px);
    opacity: 0.9;
  }
`;

export const Success = styled.p`
  color: #22c55e;
`;

export const Error = styled.p`
  color: #ef4444;
`;
