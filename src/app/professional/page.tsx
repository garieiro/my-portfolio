'use client'
import React, { useState } from 'react'
import { Card, CardBody, CardFooter, CardHeader } from '@chakra-ui/card'
import {
  Button,
  Divider,
  Flex,
  Heading,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react'
import FirstJon from '../../../public/talkdesk_logo.jpeg'
import SkillsModal from '../../components/SkillsModal'
import Image from 'next/image'

interface ProfessionalCardProps {
  id: number
  imageSrc: string
  title: string
  role: string
  date: string
  cardDescription: string
  modalDescription: string[]
}

function Professional() {
  const firstJob = FirstJon.src
  const [showModal, setShowModal] = useState(false)
  const [selectedCard, setSelectedCard] =
    useState<ProfessionalCardProps | null>(null)

  const professionalCards = [
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

  const handleShowModal = (card: ProfessionalCardProps) => {
    setSelectedCard(card)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setSelectedCard(null)
    setShowModal(false)
  }
  return (
    <React.Fragment>
      <Flex>
        {professionalCards.map((card: ProfessionalCardProps) => (
          <Flex key={card.id} paddingTop="50px" paddingLeft="50px">
            <Card width="250px" variant="solid" backgroundColor="white">
              <CardHeader display="flex" justifyContent="center">
                <Image
                  width="200"
                  height="200"
                  src={card.imageSrc}
                  alt="Green double couch with wooden legs"
                />
              </CardHeader>
              <CardBody>
                <Stack divider={<StackDivider borderColor="gray.500" />}>
                  <Heading size="md">{card.title}</Heading>
                  <Heading size="ms">{card.role}</Heading>
                  <Text>{card.date}</Text>
                  <Text>{card.cardDescription}</Text>
                </Stack>
              </CardBody>
              <Divider borderColor="gray.500" />
              <CardFooter>
                <Button
                  onClick={() => handleShowModal(card)}
                  colorScheme="gray"
                >
                  Read More
                </Button>
              </CardFooter>
            </Card>
          </Flex>
        ))}
      </Flex>
      {selectedCard && (
        <SkillsModal
          category={selectedCard.title}
          descriptions={selectedCard.modalDescription}
          showModal={showModal}
          handleClose={handleCloseModal}
        />
      )}
    </React.Fragment>
  )
}

export default Professional
