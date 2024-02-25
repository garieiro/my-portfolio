import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Divider,
} from '@chakra-ui/react'
import React from 'react'

interface SkillsModalProps {
  category: string
  descriptions: string[]
  showModal: boolean
  handleClose: () => void
}

const SkillsModal = ({
  category,
  descriptions,
  showModal,
  handleClose,
}: SkillsModalProps) => {
  return (
    <Modal isOpen={showModal} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{category}</ModalHeader>
        <Divider />
        <ModalBody>
          {descriptions.map((description, index) => (
            <p key={index} style={{ textAlign: 'justify' }}>
              {description}
            </p>
          ))}
        </ModalBody>
        <Divider />
        <ModalFooter>
          <Button mr={3} onClick={handleClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default SkillsModal
