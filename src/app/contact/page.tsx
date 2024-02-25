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

function isInputNamedElement(
  e: Element
): e is HTMLInputElement & { name: string } {
  return 'value' in e && 'name' in e
}

const Contact = () => {
  const [state, setState] = useState<string>()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData: Record<string, string> = {}

    Array.from(e.currentTarget.elements)
      .filter(isInputNamedElement)
      .forEach((field) => {
        if (!field.name) return
        formData[field.name] = field.value
      })

    setState('loading')

    await fetch('/api/send', {
      method: 'POST',
      body: JSON.stringify({
        firstName: formData.firstName,
        subject: formData.subject,
        email: formData.email,
        message: formData.message,
      }),
    })

    setState('ready')
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
                borderColor="gray.400"
                type="text"
                id="name"
                name="firstName"
              />
            </FormControl>

            <FormControl mt={4} isRequired>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                borderColor="gray.400"
                type="email"
                id="email"
                name="email"
              />
            </FormControl>

            <FormControl mt={4} isRequired>
              <FormLabel htmlFor="subject">Subject</FormLabel>
              <Input
                borderColor="gray.400"
                type="text"
                id="subject"
                name="subject"
              />
            </FormControl>

            <FormControl mt={4} isRequired>
              <FormLabel htmlFor="message">Message</FormLabel>
              <Textarea borderColor="gray.400" id="message" name="message" />
            </FormControl>

            <Button
              mt={6}
              colorScheme="gray"
              type="submit"
              isDisabled={state === 'loading'}
            >
              Submit
            </Button>
          </form>
        </Box>
      </Center>
    </Box>
  )
}

export default Contact
