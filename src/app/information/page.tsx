'use client'
import React, { useState } from 'react'
import styles from './page.module.css'
import '../theme'
import {
  Box,
  Button,
  Grid,
  Image,
  Link,
  List,
  ListItem,
  Text,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Resources from '../../../public/resources.jpeg'
import SkillsModal from '../../components/SkillsModal'
import UseScreenWidth from '@/hooks/useScreenWidth'

interface Category {
  id: number
  name: string
  skills: string[]
}

function Information() {
  const isMobile = UseScreenWidth()
  const resourcesImage = Resources.src
  const [showModal, setShowModal] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  )

  const categories = [
    {
      id: 1,
      name: 'Back-End Development',
      skills: ['Java', 'Kotlin', 'Java Spring Boot', 'Ruby', 'Ruby on Rails'],
    },
    {
      id: 2,
      name: 'Front-End Development',
      skills: [
        'React',
        'JavaScript',
        'TypeScript',
        'HTML',
        'CSS',
        'Jest',
        'jQuery',
        'Handlebars',
      ],
    },
    {
      id: 3,
      name: 'Databases',
      skills: ['MySQL', 'Mongo DB', 'ElasticSearch'],
    },
    {
      id: 4,
      name: 'DevOps',
      skills: ['Jenkins', 'New Relic', 'Git', 'Jira'],
    },
  ]

  const handleShowSkills = (category: Category) => {
    setSelectedCategory(category)
    setShowModal(true)
  }

  const handleCloseSkills = () => {
    setSelectedCategory(null)
    setShowModal(false)
  }
  return (
    <React.Fragment>
      <Grid
        className={
          !isMobile
            ? styles.informationContainer
            : styles.informationContainerMobile
        }
      >
        <Box className={!isMobile ? styles.informationContentContainer : ''}>
          <Box>
            <Text className={styles.textTitleStyle}>Skills</Text>
            <ul
              style={{
                listStyleType: 'none',
                paddingTop: '20px',
              }}
            >
              {categories.map((category) => (
                <li key={category.id} style={{ paddingTop: '10px' }}>
                  <Button
                    variant="solid"
                    className={styles.buttonSkillsStyle}
                    onClick={() => handleShowSkills(category)}
                  >
                    {category.name}
                  </Button>
                </li>
              ))}
            </ul>
            {selectedCategory && (
              <SkillsModal
                category={selectedCategory.name}
                descriptions={
                  Array.isArray(selectedCategory.skills)
                    ? selectedCategory.skills
                    : [selectedCategory.skills]
                }
                showModal={showModal}
                handleClose={handleCloseSkills}
              />
            )}
          </Box>
          <Box className={styles.documentsContainer}>
            <Text className={styles.textTitleStyle}>
              Professional Resources
            </Text>
            <List className={styles.documentsLinkPadding} spacing={3}>
              <ListItem>
                <Link
                  href="/cv.pdf"
                  isExternal
                  className={styles.documentsLinkStyle}
                >
                  My Resume
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  as={NextLink}
                  href="/certificate.pdf"
                  isExternal
                  className={styles.documentsLinkStyle}
                >
                  Work Certificate at Talkdesk
                </Link>
              </ListItem>
            </List>
          </Box>
        </Box>

        <Box
          className={
            !isMobile
              ? styles.informationImageContainer
              : styles.informationImageContainerMobile
          }
        >
          <Image
            src={resourcesImage}
            className={
              !isMobile
                ? styles.imageInformation
                : styles.imageInformationMobile
            }
            alt="resources_image"
          />
        </Box>
      </Grid>
    </React.Fragment>
  )
}

export default Information
