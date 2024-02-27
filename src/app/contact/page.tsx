'use client'
import React, { useState } from 'react'
import {
  Box,
  Center,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Text,
} from '@chakra-ui/react'
import styles from './page.module.css'

const Contact = () => {
  const [firstName, setFirstName] = useState('')
  const [subject, setSubject] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        body: JSON.stringify({
          firstName,
          subject,
          email,
          message,
        }),
        headers: { 'content-type': 'application/json' },
      })
    } catch (error) {
      return {
        error:
          error instanceof Error
            ? error.message
            : 'An unexpected error occurred.',
      }
    }
  }
  return (
    <Box>
      <Text className={styles.textTitleStyle}>Contact Me!</Text>
      <Text className={styles.textDescriptionStyle}>
        If you have any questions, don&apos;t hesitate to get in touch.
      </Text>
      <Center>
        <Box
          p={8}
          width="500px"
          borderWidth={1}
          borderRadius={8}
          boxShadow="lg"
          bg="white"
          borderColor="gray.400"
        >
          <form onSubmit={handleSubmit}>
            <FormControl isRequired>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                borderColor="gray.400"
                type="text"
                id="name"
              />
            </FormControl>

            <FormControl mt={4} isRequired>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                borderColor="gray.400"
                type="email"
                id="email"
              />
            </FormControl>

            <FormControl mt={4} isRequired>
              <FormLabel htmlFor="subject">Subject</FormLabel>
              <Input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                borderColor="gray.400"
                type="text"
                id="subject"
              />
            </FormControl>

            <FormControl mt={4} isRequired>
              <FormLabel htmlFor="message">Message</FormLabel>
              <Textarea
                borderColor="gray.400"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </FormControl>

            <Button mt={6} colorScheme="gray" type="submit">
              Submit
            </Button>
          </form>
        </Box>
      </Center>
    </Box>
  )
}

export default Contact
