import FirstJon from '../../public/talkdesk_logo.jpeg'
import { useToast } from '@chakra-ui/react'

const firstJob = FirstJon.src

export const navLinks = [
  {
    title: 'Personal Information',
    path: '/information',
  },
  {
    title: 'Profissional Career',
    path: '/professional',
  },
  {
    title: 'Contact Me',
    path: '/contact',
  },
]

export const professionalCards = [
  {
    id: 1,
    imageSrc: firstJob,
    title: 'Talkdesk',
    role: 'Software Engineer I',
    date: 'January 2021 - October 2023',
    cardDescription:
      'Collaborated in a team focused on integrating Talkdesk with Microsoft Teams. ' +
      'I was one of the elements of a team focused on integrations. This team was part of a critical component of the ' +
      'platform that allowed Talkdesk to integrate with important UC providers, such as Microsoft Teams.',
    modalDescription: [
      'On the team, I had the opportunity to improve the functionalities of an existing web application, built using React. These improvements resulted in a significant increase in the user experience, directly reflecting the increase in sales of this product.',
      'To improve the previously mentioned web application, I developed a new application with React, using Redux. This new implementation made it possible to obtain the real state of each user’s presence, resulting in a notable improvement in the user experience.',
      'To centralize and optimize information, I transferred all data to an existing web application. Developed in Ruby on the backend, using the Ruby on Rails framework, and JavaScript with Handlebars on the frontend, this application serves as a dedicated platform for the internal team to carry out maintenance and debug possible errors.',
      'Utilized Postman for API request simulations, ensuring smooth communication between Talkdesk and Microsoft Teams.',
      'Implemented TypeScript and JavaScript for both frontend development and test script writing, ensuring type safety and code reliability.',
    ],
  },
]

export const CreateErrorToast = () => {
  const toast = useToast()

  const showErrorToast = () => {
    toast({
      title: 'Error sending email',
      description: 'Please try again later.',
      status: 'error',
      duration: 3000,
      isClosable: true,
    })
  }

  return { showErrorToast }
}

export const CreateSuccessToast = () => {
  const toast = useToast()

  const showSuccessToast = () => {
    toast({
      title: 'Email sent successfully',
      description: 'We will get back to you soon!',
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
  }

  return { showSuccessToast }
}

export const CreateLoadingToast = () => {
  const toast = useToast()
  const loadingToastId = 'loading-toast'

  const showLoadingToast = () => {
    toast({
      id: loadingToastId,
      title: 'Email sent Loading',
      description: 'We will get back to you soon!',
      status: 'loading',
      isClosable: true,
    })
  }
  const closeLoadingToast = () => {
    if (loadingToastId) {
      toast.close(loadingToastId)
    }
  }
  return { showLoadingToast, closeLoadingToast }
}
