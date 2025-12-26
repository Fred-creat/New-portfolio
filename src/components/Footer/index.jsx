


import { FooterContainer, FooterText } from './styles';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterText>
        © {year} Fred — Todos os direitos reservados.
      </FooterText>
    </FooterContainer>
  );
}

export default Footer;

