import styled from 'styled-components'

export const AboutContainer = styled.section`
  width: min(
    calc(100% - ${({ theme }) => theme.layout.pageInset}),
    ${({ theme }) => theme.layout.maxWidth}
  );
  margin: 0 auto;
  padding: clamp(3rem, 8vw, 6rem) 0;
`

export const AboutText = styled.div`
  max-width: 760px;
  padding: clamp(1.5rem, 4vw, 2.5rem);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  background: rgba(17, 24, 39, 0.72);

  span {
    display: inline-flex;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 0.9rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  h1 {
    max-width: 720px;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.white};
    font-size: clamp(2rem, 5vw, 3.25rem);
    line-height: 1.08;
  }

  p {
    max-width: 68ch;
    color: ${({ theme }) => theme.colors.muted};
    font-size: 1.05rem;
    line-height: 1.8;
  }

  p + p {
    margin-top: 1rem;
  }

  @media (max-width: 480px) {
    padding: 1.25rem;
  }
`

export const HighlightList = styled.ul`
  display: grid;
  gap: 0.8rem;
  margin-top: 2rem;
  padding-left: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
`
