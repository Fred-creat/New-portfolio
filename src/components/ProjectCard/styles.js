import styled from 'styled-components'

export const Card = styled.article`
  min-height: 100%;
  padding: clamp(1rem, 4vw, 1.5rem);
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: transform 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.colors.primary};
  }
`

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.25rem;
`

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  line-height: 1.6;
`

export const TechList = styled.ul`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  list-style: none;
`

export const Tech = styled.li`
  padding: 0.35rem 0.55rem;
  border-radius: 999px;
  background: rgba(56, 189, 248, 0.1);
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.8rem;
  font-weight: 700;
`

export const Links = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
  flex-wrap: wrap;

  a {
    color: ${({ theme }) => theme.colors.white};
    font-size: 0.95rem;
    font-weight: 700;
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: underline;
    }
  }
`
