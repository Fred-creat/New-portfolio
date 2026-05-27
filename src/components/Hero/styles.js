import styled from 'styled-components'

export const HeroContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: min(760px, calc(100dvh - 6rem));
  width: 100%;
  gap: clamp(2rem, 6vw, 5rem);
  padding: clamp(3rem, 7vw, 6rem) 0;

  @media (max-width: 820px) {
    flex-direction: column-reverse;
    justify-content: center;
    text-align: center;
    min-height: auto;
  }
`

export const HeroImage = styled.div`
  flex: 0 1 420px;
  width: min(100%, clamp(14rem, 55vw, 420px));

  img {
    width: 100%;
    aspect-ratio: 4 / 5;
    object-fit: cover;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    box-shadow: 0 24px 70px rgba(0, 0, 0, 0.32);
  }

  @media (max-width: 820px) {
    flex: none;
    width: min(100%, 22rem);
  }

  @media (max-width: 380px) {
    width: min(100%, 18rem);
  }
`

export const HeroText = styled.div`
  max-width: 620px;

  span {
    display: inline-flex;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 0.9rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  h1 {
    color: ${({ theme }) => theme.colors.white};
    font-size: clamp(2.15rem, 10vw, 4.8rem);
    line-height: 1;
    margin-bottom: 1.5rem;
  }

  p {
    max-width: 58ch;
    line-height: 1.75;
    font-size: clamp(1rem, 2.5vw, 1.1rem);
    color: ${({ theme }) => theme.colors.muted};
  }

  @media (max-width: 820px) {
    p {
      margin: 0 auto;
    }
  }
`

export const HeroActions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;

  a {
    flex: 0 1 auto;
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.8rem 1.1rem;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    font-weight: 700;
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

  @media (max-width: 820px) {
    justify-content: center;
  }

  @media (max-width: 420px) {
    a {
      width: 100%;
    }
  }
`
