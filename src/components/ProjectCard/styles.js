import styled from 'styled-components';

export const Card = styled.div`
  background: #5f0f57ff;
  //color: #f5f5f5;
  min-height: 120px;
  padding: 1.5rem;
  border-radius: 8px;
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.white};
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.5;
`;

export const Techs = styled.span`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.white };
`;

export const Links = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  a {
    font-size: 0.9rem;
    color: white;

    &:hover {
      text-decoration: underline;
      color: #7657ffff;
    }
  }
`;
