'use client'
import React, { ChangeEvent, useState } from 'react'
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
import {
  CreateErrorToast,
  CreateLoadingToast,
  CreateSuccessToast,
} from '@/utils/utils'

const Contact = () => {
  const { showLoadingToast, closeLoadingToast } = CreateLoadingToast()
  const { showSuccessToast } = CreateSuccessToast()
  const { showErrorToast } = CreateErrorToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    subject: '',
    email: '',
    message: '',
  })

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      showLoadingToast()
      setIsSubmitting(true)
      const response = await fetch('api/send', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'content-type': 'application/json' },
      })

      if (response.ok) {
        showSuccessToast()
        setFormData({
          firstName: '',
          subject: '',
          email: '',
          message: '',
        })
      } else {
        showErrorToast()
      }
    } catch (error) {
      showErrorToast()
      console.log('Error sending the e-mail.')
    } finally {
      setIsSubmitting(false)
      closeLoadingToast()
    }
  }
  return (
    <Box className={styles.contactContainer}>
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
                name="firstName"
                value={formData.firstName}
                onChange={(e) => handleChange(e)}
                borderColor="gray.400"
                type="text"
                id="name"
              />
            </FormControl>

            <FormControl mt={4} isRequired>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                name="email"
                value={formData.email}
                onChange={(e) => handleChange(e)}
                borderColor="gray.400"
                type="email"
                id="email"
              />
            </FormControl>

            <FormControl mt={4} isRequired>
              <FormLabel htmlFor="subject">Subject</FormLabel>
              <Input
                name="subject"
                value={formData.subject}
                onChange={(e) => handleChange(e)}
                borderColor="gray.400"
                type="text"
                id="subject"
              />
            </FormControl>

            <FormControl mt={4} isRequired>
              <FormLabel htmlFor="message">Message</FormLabel>
              <Textarea
                name="message"
                value={formData.message}
                borderColor="gray.400"
                id="message"
                onChange={(e) => handleChange(e)}
              />
            </FormControl>

            <Button
              mt={6}
              colorScheme="gray"
              type="submit"
              isDisabled={
                !formData.firstName ||
                !formData.email ||
                !formData.subject ||
                !formData.message ||
                isSubmitting
              }
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
