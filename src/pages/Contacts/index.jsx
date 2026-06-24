import React, { useState } from 'react'

import {
  AnimatedLeft,
  AnimatedRight,
  Button,
  ContactItem,
  ContactList,
  Container,
  Error,
  Field,
  Form,
  Grid,
  HiddenInput,
  Input,
  Left,
  Right,
  Success,
  Text,
  TextArea,
  Title,
} from './styles'

const FORM_ENDPOINT = 'https://formspree.io/f/xbdjrolr'
const WHATSAPP_URL = 'https://wa.me/5575998892484'

function Contact() {
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()

    if (status === 'sending') {
      return
    }

    const form = e.currentTarget
    const formData = new FormData(form)

    if (formData.get('_gotcha')) {
      return
    }

    setStatus('sending')

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })

      if (!response.ok) {
        throw new Error('Form submission failed')
      }

      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <Container>
      <Grid>
        <AnimatedLeft>
          <Left>
            <span>Contato</span>
            <Title>Tem um produto para lançar ou um sistema para escalar?</Title>

            <Text>
              Posso ajudar a transformar sua ideia em uma aplicação completa, modernizar
              um produto existente ou integrar automações e inteligência artificial à sua
              operação. Conte-me sobre o desafio.
            </Text>

            <ContactList aria-label="Links de contato">
              <ContactItem href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </ContactItem>

              <ContactItem href="mailto:fredsonsouzalemos@gmail.com">
                fredsonsouzalemos@gmail.com
              </ContactItem>

              <ContactItem
                href="https://www.linkedin.com/in/fredsonlemos"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </ContactItem>

              <ContactItem
                href="https://github.com/fred-creat"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </ContactItem>
            </ContactList>
          </Left>
        </AnimatedLeft>

        <AnimatedRight>
          <Right>
            <Form onSubmit={handleSubmit}>
              <HiddenInput
                type="text"
                name="_gotcha"
                tabIndex="-1"
                autoComplete="off"
                aria-hidden="true"
              />

              <Field>
                <label htmlFor="name">Nome</label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Seu nome"
                  autoComplete="name"
                  maxLength="80"
                  required
                />
              </Field>

              <Field>
                <label htmlFor="email">E-mail</label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="seu@email.com"
                  autoComplete="email"
                  maxLength="120"
                  required
                />
              </Field>

              <Field>
                <label htmlFor="message">Mensagem</label>
                <TextArea
                  id="message"
                  name="message"
                  placeholder="Qual problema ou oportunidade você quer transformar em software?"
                  minLength="10"
                  maxLength="1200"
                  required
                />
              </Field>

              <Button type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Enviando...' : 'Enviar mensagem'}
              </Button>

              {status === 'success' && <Success role="status">Mensagem enviada com sucesso.</Success>}
              {status === 'error' && <Error role="alert">Erro ao enviar. Tente novamente.</Error>}
            </Form>
          </Right>
        </AnimatedRight>
      </Grid>
    </Container>
  )
}

export default Contact
