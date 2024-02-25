import { Box, Flex, Grid, GridItem, Image, Link } from '@chakra-ui/react'
import React from 'react'
import styles from './page.module.css'
import GithubIcon from '../../public/github-icon.svg'
import LinkedinIcon from '../../public/linkedin-icon.svg'
import Home from '../../public/home.svg'
import Me from '../../public/me.png'
import DropDown from '@/components/DropDown'
import useScreenWidth from '@/hooks/useScreenWidth'
import { usePathname } from 'next/navigation'

const navLinks = [
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

const Header = () => {
  const isMobile = useScreenWidth()
  const homeIcon = Home.src
  const ownerIcon = Me.src
  const githubIcon = GithubIcon.src
  const linkedinIcon = LinkedinIcon.src
  const pathname = usePathname()

  return (
    <Grid className={!isMobile ? styles.headerStyle : styles.headerStyleMobile}>
      <GridItem className={styles.homeStyle}>
        <Link href={'/'}>
          <Image src={homeIcon} alt="Home Icon" />
        </Link>
      </GridItem>
      {!isMobile ? (
        <GridItem as={Flex}>
          {navLinks.map((link, index) => (
            <Flex className={styles.tabSpaceStyle} key={index}>
              <Link
                className={`${styles.linkHeaderStyle} ${pathname === link.path ? styles.activeLink : ''}`}
                href={link.path}
                title={link.title}
              >
                {link.title}
              </Link>
            </Flex>
          ))}
        </GridItem>
      ) : (
        <GridItem className={styles.menuSection}>
          {' '}
          <DropDown links={navLinks} />{' '}
        </GridItem>
      )}
      <GridItem className={styles.sectionLogoStyle}>
        <Box>
          <Image
            className={styles.logoStyle}
            src={ownerIcon}
            boxSize="60px"
            alt="owner_Logo"
          />
        </Box>
      </GridItem>
      <GridItem>
        <Flex className={styles.socialSection}>
          <Link
            className={styles.socialStyle}
            href="https://github.com/garieiro"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={githubIcon} alt="github_icon" />
          </Link>
          <Link
            className={styles.socialStyle}
            href="https://www.linkedin.com/in/arieiro97/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={linkedinIcon} alt="linkedin_icon" />
          </Link>
        </Flex>
      </GridItem>
    </Grid>
  )
}

export default Header
