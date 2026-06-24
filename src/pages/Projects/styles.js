import styled from 'styled-components'

export const Container = styled.section`
  width: min(
    calc(100% - ${({ theme }) => theme.layout.pageInset}),
    ${({ theme }) => theme.layout.maxWidth}
  );
  margin: 0 auto;
  padding: clamp(4rem, 9vw, 7rem) 0;
`

export const Intro = styled.div`
  max-width: 820px;
  margin-bottom: clamp(2.5rem, 6vw, 4rem);

  span {
    display: inline-flex;
    margin-bottom: 0.8rem;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  p {
    color: ${({ theme }) => theme.colors.muted};
    font-size: 1.05rem;
    line-height: 1.7;
  }
`

export const Title = styled.h1`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: clamp(2.35rem, 6vw, 4.5rem);
  letter-spacing: -0.04em;
  line-height: 1.02;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`
