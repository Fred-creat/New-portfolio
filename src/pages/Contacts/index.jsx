import React, { useState } from 'react';

import {
  Container,
  Grid,
  Left,
  Right,
  Title,
  Text,
  ContactList,
  ContactItem,
  Form,
  Input,
  TextArea,
  Button,
  Success,
  Error,
  AnimatedLeft,
  AnimatedRight,
} from './styles';

function Contact() {
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;

    const response = await fetch(
      'https://formspree.io/f/xbdjrolr',
      {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      }
    );

    if (response.ok) {
      setStatus('success');
      form.reset();
    } else {
      setStatus('error');
    }
  }

  return (
    <Container>
      <Grid>
        {/* COLUNA ESQUERDA */}
        <AnimatedLeft>
          <Left>
            <Title>Contato</Title>

            <Text>
              Quer conversar sobre um projeto, oportunidade ou colaboração?
              Entre em contato comigo ou envie uma mensagem.
            </Text>

            <ContactList>
              <ContactItem href="mailto:fredsonsouzalemos@gmail.com">
                📧 fredsonsouzalemos@gmail.com
              </ContactItem>

              <ContactItem
                href="https://www.linkedin.com/in/fredsonlemos"
                target="_blank"
                rel="noopener noreferrer"
              >
                💼 LinkedIn
              </ContactItem>

              <ContactItem
                href="https://github.com/fred-creat"
                target="_blank"
                rel="noopener noreferrer"
              >
                💻 GitHub
              </ContactItem>
            </ContactList>
          </Left>
        </AnimatedLeft>

        {/* COLUNA DIREITA */}
        <AnimatedRight>
          <Right>
            <Form onSubmit={handleSubmit}>
              <Input name="name" placeholder="Seu nome" required />
              <Input type="email" name="email" placeholder="Seu e-mail" required />
              <TextArea name="message" placeholder="Sua mensagem" required />
              <Button type="submit">Send</Button>

              {status === 'success' && (
                <Success>Mensagem enviada com sucesso!</Success>
              )}

              {status === 'error' && (
                <Error>Erro ao enviar. Tente novamente.</Error>
              )}
            </Form>
          </Right>
        </AnimatedRight>
      </Grid>
    </Container>
  );
}

export default Contact;
