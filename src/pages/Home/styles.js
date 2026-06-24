import styled from 'styled-components'

export const Container = styled.div`
  width: min(
    calc(100% - ${({ theme }) => theme.layout.pageInset}),
    ${({ theme }) => theme.layout.maxWidth}
  );
  margin: 0 auto;
`

export const Section = styled.section`
  padding: clamp(4rem, 9vw, 7rem) 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`

export const ProofGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  border-block: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`

export const ProofItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  padding: clamp(1.25rem, 4vw, 1.8rem);

  & + & {
    border-left: 1px solid ${({ theme }) => theme.colors.border};
  }

  strong {
    color: ${({ theme }) => theme.colors.white};
    font-size: clamp(1.2rem, 3vw, 1.6rem);
  }

  span {
    color: ${({ theme }) => theme.colors.muted};
    font-size: 0.82rem;
  }

  @media (max-width: 680px) {
    & + & {
      border-top: 1px solid ${({ theme }) => theme.colors.border};
      border-left: 0;
    }
  }
`

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 2rem;
  margin-bottom: clamp(2rem, 5vw, 3.25rem);

  > div > span {
    display: inline-block;
    margin-bottom: 0.75rem;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  h2 {
    max-width: 700px;
    color: ${({ theme }) => theme.colors.white};
    font-size: clamp(1.9rem, 5vw, 3.25rem);
    line-height: 1.08;
  }

  > a {
    flex: 0 0 auto;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 750;
    text-decoration: none;

    span {
      color: ${({ theme }) => theme.colors.primary};
    }

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  @media (max-width: 700px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 1.25rem;
  }
`

export const FeaturedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem;

  @media (max-width: 940px) {
    grid-template-columns: 1fr;
  }
`

export const ExpertiseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  border-block: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`

export const ExpertiseItem = styled.article`
  padding: clamp(1.5rem, 4vw, 2.25rem);

  & + & {
    border-left: 1px solid ${({ theme }) => theme.colors.border};
  }

  > span {
    color: ${({ theme }) => theme.colors.primary};
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-size: 0.75rem;
  }

  h3 {
    margin: 2.5rem 0 0.75rem;
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.25rem;
  }

  p {
    color: ${({ theme }) => theme.colors.muted};
    line-height: 1.7;
  }

  @media (max-width: 760px) {
    & + & {
      border-top: 1px solid ${({ theme }) => theme.colors.border};
      border-left: 0;
    }

    h3 {
      margin-top: 1.5rem;
    }
  }
`
