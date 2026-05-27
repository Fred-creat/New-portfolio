import styled, { keyframes } from 'styled-components'

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const AnimatedLeft = styled.div`
  animation: ${fadeUp} 0.5s ease forwards;
`

export const AnimatedRight = styled.div`
  animation: ${fadeUp} 0.5s ease forwards;
  animation-delay: 0.12s;
`

export const Container = styled.section`
  width: min(
    calc(100% - ${({ theme }) => theme.layout.pageInset}),
    ${({ theme }) => theme.layout.maxWidth}
  );
  margin: 0 auto;
  padding: clamp(3rem, 8vw, 6rem) 0;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1fr);
  gap: clamp(2rem, 6vw, 4rem);
  align-items: start;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  span {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 0.9rem;
    font-weight: 700;
    text-transform: uppercase;
  }
`

export const Right = styled.div`
  padding: clamp(1.25rem, 4vw, 2rem);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.surface};

  @media (max-width: 420px) {
    padding: 1rem;
  }
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: clamp(2rem, 5vw, 3.25rem);
  line-height: 1.08;
`

export const Text = styled.p`
  max-width: 520px;
  color: ${({ theme }) => theme.colors.muted};
  line-height: 1.7;
`

export const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1rem;
`

export const ContactItem = styled.a`
  width: fit-content;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
`

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.45rem;

  label {
    color: ${({ theme }) => theme.colors.text};
    font-size: 0.92rem;
    font-weight: 700;
  }
`

export const HiddenInput = styled.input`
  position: absolute;
  left: -9999px;
  opacity: 0;
`

export const Input = styled.input`
  min-height: 46px;
  padding: 0.85rem 1rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};

  &::placeholder {
    color: ${({ theme }) => theme.colors.muted};
  }
`

export const TextArea = styled.textarea`
  min-height: 150px;
  padding: 0.85rem 1rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  resize: vertical;

  &::placeholder {
    color: ${({ theme }) => theme.colors.muted};
  }
`

export const Button = styled.button`
  min-height: 46px;
  margin-top: 0.25rem;
  padding: 0.9rem 1rem;
  border-radius: 8px;
  border: none;
  background: ${({ theme }) => theme.colors.primary};
  color: #03111f;
  font-weight: 800;
  cursor: pointer;
  transition: transform 0.2s ease, opacity 0.2s ease;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
  }

  &:disabled {
    cursor: wait;
    opacity: 0.7;
  }
`

export const Success = styled.p`
  color: ${({ theme }) => theme.colors.success};
  font-weight: 700;
`

export const Error = styled.p`
  color: ${({ theme }) => theme.colors.error};
  font-weight: 700;
`
