import React from 'react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Box,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Link {
  path: string
  title: string
}

interface DropdownProps {
  links: Link[]
}

const DropDown = ({ links }: DropdownProps) => {
  const pathname = usePathname()
  return (
    <Box style={{ width: '30px' }}>
      <Menu isLazy={true} autoSelect={false}>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon style={{ width: '30px', height: '30px' }} />}
          variant="outline"
          backgroundColor="transparent"
          borderColor="transparent"
        />
        <MenuList>
          {links.map((link, index) => (
            <React.Fragment key={index}>
              <MenuItem
                key={index}
                as="a"
                href={link.path}
                isDisabled={pathname === link.path}
              >
                {link.title}
              </MenuItem>
            </React.Fragment>
          ))}
        </MenuList>
      </Menu>
    </Box>
  )
}

export default DropDown
