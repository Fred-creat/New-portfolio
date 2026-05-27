import styled from 'styled-components'

export const Container = styled.section`
  width: min(
    calc(100% - ${({ theme }) => theme.layout.pageInset}),
    ${({ theme }) => theme.layout.maxWidth}
  );
  margin: 0 auto;
  padding: clamp(3rem, 8vw, 6rem) 0;
`

export const Intro = styled.div`
  max-width: 680px;
  margin-bottom: 2.5rem;

  span {
    display: inline-flex;
    margin-bottom: 0.8rem;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 0.9rem;
    font-weight: 700;
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
  font-size: clamp(2rem, 5vw, 3.25rem);
  line-height: 1.08;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 16rem), 1fr));
  gap: 1.25rem;
`
