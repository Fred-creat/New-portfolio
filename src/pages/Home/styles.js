import styled from 'styled-components'

export const Container = styled.section`
  width: min(
    calc(100% - ${({ theme }) => theme.layout.pageInset}),
    ${({ theme }) => theme.layout.maxWidth}
  );
  margin: 0 auto;
`
