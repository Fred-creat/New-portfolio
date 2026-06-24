import styled from 'styled-components'

export const HeroContainer = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(17rem, 0.75fr);
  align-items: center;
  min-height: min(820px, calc(100dvh - 5rem));
  gap: clamp(2.5rem, 8vw, 7rem);
  padding: clamp(3.5rem, 8vw, 7rem) 0;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    min-height: auto;
  }
`

export const Availability = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.8rem;
  font-weight: 700;

  i {
    width: 0.55rem;
    height: 0.55rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.success};
    box-shadow: 0 0 0 5px rgba(34, 197, 94, 0.12);
  }
`

export const HeroText = styled.div`
  position: relative;
  z-index: 1;

  h1 {
    max-width: 820px;
    color: ${({ theme }) => theme.colors.white};
    font-size: clamp(2.75rem, 7.2vw, 6rem);
    font-weight: 760;
    letter-spacing: -0.055em;
    line-height: 0.95;
  }

  h1 em {
    color: ${({ theme }) => theme.colors.primary};
    font-family: Georgia, 'Times New Roman', serif;
    font-weight: 500;
  }

  > p {
    max-width: 61ch;
    margin-top: 1.75rem;
    color: ${({ theme }) => theme.colors.muted};
    font-size: clamp(1rem, 2vw, 1.12rem);
    line-height: 1.75;
  }
`

export const HeroActions = styled.div`
  display: flex;
  gap: 0.9rem;
  margin-top: 2rem;
  flex-wrap: wrap;

  a {
    min-height: 48px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    padding: 0.85rem 1.15rem;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    font-weight: 750;
    transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
  }

  a:first-child {
    background: ${({ theme }) => theme.colors.primary};
    color: #03111f;
    border-color: transparent;
  }

  a:hover {
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 420px) {
    a {
      width: 100%;
    }
  }
`

export const Stack = styled.div`
  display: flex;
  gap: 0.65rem 1.1rem;
  margin-top: 2.5rem;
  flex-wrap: wrap;
  color: ${({ theme }) => theme.colors.muted};
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 0.72rem;
  text-transform: uppercase;

  span::before {
    content: '/';
    margin-right: 0.4rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`

export const HeroImage = styled.div`
  width: 100%;
  max-width: 390px;
  justify-self: end;

  > div {
    position: relative;
    padding: 0.65rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 180px 180px 22px 22px;
    background: rgba(255, 255, 255, 0.025);
  }

  > div::after {
    content: '';
    position: absolute;
    inset: 10% -10% auto auto;
    z-index: -1;
    width: 60%;
    aspect-ratio: 1;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
    opacity: 0.15;
    filter: blur(50px);
  }

  img {
    width: 100%;
    aspect-ratio: 4 / 5;
    object-fit: cover;
    object-position: center top;
    border-radius: 170px 170px 14px 14px;
    filter: saturate(0.86) contrast(1.04);
  }

  > p {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin-top: 0.8rem;
    color: ${({ theme }) => theme.colors.muted};
    font-size: 0.72rem;
    text-transform: uppercase;
  }

  @media (max-width: 820px) {
    max-width: 340px;
    justify-self: center;
    grid-row: 1;
  }
`
