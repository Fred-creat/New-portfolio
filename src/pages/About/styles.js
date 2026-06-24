import styled from 'styled-components'

export const AboutContainer = styled.section`
  width: min(
    calc(100% - ${({ theme }) => theme.layout.pageInset}),
    ${({ theme }) => theme.layout.maxWidth}
  );
  margin: 0 auto;
  padding: clamp(4rem, 9vw, 7rem) 0;
`

export const AboutText = styled.div`
  display: grid;
  gap: clamp(4rem, 10vw, 7rem);

  h1,
  h2 {
    color: ${({ theme }) => theme.colors.white};
    letter-spacing: -0.04em;
  }

  p {
    color: ${({ theme }) => theme.colors.muted};
    font-size: 1.05rem;
    line-height: 1.8;
  }

  p + p {
    margin-top: 1rem;
  }
`

export const Intro = styled.header`
  max-width: 940px;

  > span,
  & + section > div:first-child > span {
    color: ${({ theme }) => theme.colors.primary};
  }

  > span {
    display: inline-block;
    margin-bottom: 1rem;
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  h1 {
    max-width: 900px;
    font-size: clamp(2.6rem, 7vw, 5.4rem);
    line-height: 0.98;
  }

  p {
    max-width: 72ch;
    margin-top: 2rem;
  }
`

export const Section = styled.section`
  display: grid;
  grid-template-columns: minmax(14rem, 0.7fr) minmax(0, 1.3fr);
  gap: clamp(2rem, 7vw, 6rem);
  padding-top: clamp(2rem, 5vw, 3rem);
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  > div:first-child > span {
    display: inline-block;
    margin-bottom: 0.75rem;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 0.75rem;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  h2 {
    max-width: 480px;
    font-size: clamp(1.7rem, 4vw, 2.6rem);
    line-height: 1.08;
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`

export const CapabilityGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 18px;
  overflow: hidden;

  @media (max-width: 540px) {
    grid-template-columns: 1fr;
  }
`

export const CapabilityItem = styled.article`
  min-height: 140px;
  padding: 1.25rem;
  background: rgba(17, 24, 39, 0.72);
  border: 0 solid ${({ theme }) => theme.colors.border};
  border-right-width: 1px;
  border-bottom-width: 1px;

  &:nth-child(even) {
    border-right-width: 0;
  }

  &:nth-last-child(-n + 2) {
    border-bottom-width: 0;
  }

  small {
    color: ${({ theme }) => theme.colors.primary};
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  }

  p {
    margin-top: 2rem;
    color: ${({ theme }) => theme.colors.text};
    font-size: 0.95rem;
    font-weight: 700;
    line-height: 1.5;
  }

  @media (max-width: 540px) {
    border-right-width: 0;

    &:nth-last-child(2) {
      border-bottom-width: 1px;
    }
  }
`

export const TechList = styled.ul`
  display: flex;
  gap: 0.65rem;
  flex-wrap: wrap;
  list-style: none;

  li {
    padding: 0.65rem 0.85rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 999px;
    background: rgba(17, 24, 39, 0.72);
    color: ${({ theme }) => theme.colors.text};
    font-size: 0.85rem;
    font-weight: 700;
  }
`

export const ClosingText = styled.section`
  padding: clamp(2rem, 6vw, 4rem);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 22px;
  background:
    radial-gradient(circle at 100% 0, rgba(56, 189, 248, 0.16), transparent 24rem),
    ${({ theme }) => theme.colors.surface};

  span {
    display: inline-block;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 0.75rem;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  h2 {
    max-width: 700px;
    font-size: clamp(2rem, 5vw, 3.5rem);
    line-height: 1.05;
  }

  p {
    max-width: 75ch;
    margin-top: 1.5rem;
  }
`
