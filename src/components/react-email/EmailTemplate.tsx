import * as React from 'react'
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Text,
} from '@react-email/components'

export const EmailTemplate = (firstName: string, message?: string) => {
  return (
    <Html>
      <Head />
      {!message ? (
        <Body>
          <Container style={{ textAlign: 'center' }}>
            <Heading> Hello {firstName} 🙌 </Heading>
            <Text>
              Thank you for reaching out. Your message means a lot to me, and
              I&apos;m committed to providing a timely response.
            </Text>
            <Button
              style={{
                color: 'white',
                fontSize: '16px',
                backgroundColor: 'black',
                padding: '7px',
                borderRadius: '12px',
              }}
              href="garieiro.com"
            >
              Gonçalo&apos;s portfolio
            </Button>
          </Container>
        </Body>
      ) : (
        <Body>
          <Container style={{ textAlign: 'center' }}>
            <Heading> Message From {firstName} </Heading>
            <Text> {message} </Text>
            <Button
              style={{
                color: 'white',
                fontSize: '16px',
                backgroundColor: 'black',
                padding: '7px',
                borderRadius: '12px',
              }}
              href="garieiro.com"
            >
              Gonçalo&apos;s portfolio
            </Button>
          </Container>
        </Body>
      )}
    </Html>
  )
}

export default EmailTemplate
