'use client'
import React from 'react'
import './theme'
import styles from './page.module.css'
import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react'
import imageInformation from '../../public/me.png'
import UseScreenWidth from '@/hooks/useScreenWidth'

function Home() {
  const isMobile = UseScreenWidth()
  const imageInformationUrl = imageInformation.src
  const textToType = [
    "Hello! I'm Gonçalo, a 26-year-old technology enthusiast currently based in the vibrant city of Barcelona, Spain.",
    'I completed my degree in Computer and Telematics Engineering at the prestigious University of Aveiro, where I gained a solid and diverse foundation in technology.',
    "With two-years of professional experience, I accumulated valuable experience and contributed to significant projects. Now, I'm eager to take on new challenges and explore exciting opportunities.",
    "In my free time, I engage in personal projects to broaden my knowledge in various aspects of the technology field. I'm a fan of series, enjoy playing video games, and, spending time in nature, specially at the beach or any sea-related activity. On weekends, I don't miss the chance to unwind and socialize over a good beer.",
    "I'm thrilled about the prospect of contributing to innovative projects and continuously learning. If you're looking for a dedicated professional passionate about technology, I'm open to new opportunities and ready to make a difference.",
  ]

  return (
    <React.Fragment>
      <Grid
        className={
          !isMobile ? styles.homeContainer : styles.homeContainerMobile
        }
      >
        <Box
          className={
            !isMobile
              ? styles.homeContentContainer
              : styles.homeContentContainerMobile
          }
        >
          <Text className={styles.textTitleStyle}>Welcome to My Portfolio</Text>
          <Flex className={styles.homeDescriptionContainer}>
            {textToType.map((description, index) => (
              <Text
                className={styles.textDescriptionStyle}
                align="justify"
                key={index}
              >
                {description}
              </Text>
            ))}
          </Flex>
        </Box>
        <Box
          className={
            !isMobile
              ? styles.homeImageContainer
              : styles.homeImageContainerMobile
          }
        >
          <Image
            className={!isMobile ? styles.homeImage : styles.homeImageMobile}
            src={imageInformationUrl}
            alt="owner_image"
          />
        </Box>
      </Grid>
    </React.Fragment>
  )
}

export default Home
