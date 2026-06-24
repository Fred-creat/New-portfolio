import styled from 'styled-components'

const accentColors = {
  violet: '#a78bfa',
  blue: '#60a5fa',
  orange: '#fb923c',
  green: '#34d399',
  rose: '#fb7185',
  cyan: '#22d3ee',
}

export const Card = styled.article`
  --card-accent: ${({ $accent }) => accentColors[$accent] || accentColors.blue};
  position: relative;
  min-height: 100%;
  padding: clamp(1.25rem, 4vw, 1.75rem);
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background:
    radial-gradient(circle at 100% 0, color-mix(in srgb, var(--card-accent) 15%, transparent), transparent 15rem),
    ${({ theme }) => theme.colors.surface};
  display: flex;
  flex-direction: column;
  gap: 1.15rem;
  overflow: hidden;
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;

  &::before {
    content: '';
    position: absolute;
    inset: 0 auto auto 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, var(--card-accent), transparent 70%);
  }

  &:hover {
    transform: translateY(-5px);
    border-color: color-mix(in srgb, var(--card-accent) 55%, transparent);
    box-shadow: 0 22px 50px rgba(0, 0, 0, 0.24);
  }
`

export const ProjectMeta = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.muted};
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 0.75rem;
  letter-spacing: 0.08em;
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;

  @media (max-width: 420px) {
    flex-direction: column;
  }
`

export const Category = styled.p`
  margin-bottom: 0.5rem;
  color: var(--card-accent);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: clamp(1.35rem, 3vw, 1.65rem);
  line-height: 1.15;
`

export const Status = styled.span`
  flex: 0 0 auto;
  padding: 0.4rem 0.65rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 999px;
  color: ${({ theme }) => theme.colors.muted};
  background: rgba(8, 11, 18, 0.48);
  font-size: 0.72rem;
  font-weight: 700;
`

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  line-height: 1.7;
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
  background: rgba(255, 255, 255, 0.055);
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.76rem;
  font-weight: 650;
`

export const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-top: auto;
  padding-top: 0.35rem;
  flex-wrap: wrap;

  a,
  > span {
    color: ${({ theme }) => theme.colors.muted};
    font-size: 0.9rem;
    font-weight: 750;
    text-decoration: none;
  }

  a {
    color: ${({ theme }) => theme.colors.white};
    transition: color 0.2s ease;

    span {
      color: var(--card-accent);
    }

    &:hover {
      color: var(--card-accent);
    }
  }
`
