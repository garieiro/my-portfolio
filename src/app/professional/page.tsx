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
import SkillsModal from '../../components/SkillsModal'
import Image from 'next/image'
import styles from './page.module.css'
import { professionalCards } from '@/utils/utils'

interface ProfessionalCardProps {
  id: number
  imageSrc: string
  title: string
  role: string
  date: string
  cardDescription: string
  modalDescription: string[]
}

const Professional = () => {
  const [showModal, setShowModal] = useState(false)
  const [selectedCard, setSelectedCard] =
    useState<ProfessionalCardProps | null>(null)

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
      <Flex className={styles.professionalContainer}>
        {professionalCards.map((card: ProfessionalCardProps) => (
          <Flex key={card.id} className={styles.professionalContentContainer}>
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
