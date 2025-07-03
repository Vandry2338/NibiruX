"use client"

import type React from "react"
import {
  Box,
  Flex,
  Heading,
  Spacer,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Stack,
  Link,
} from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"
import NextLink from "next/link"

const AppHeader: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box bg="gray.100" py={4} px={6}>
      <Flex align="center">
        <Heading size="lg" fontWeight="semibold" color="blue.500">
          My App
        </Heading>
        <Spacer />

        {/* Desktop Navigation */}
        <Box display={{ base: "none", md: "block" }}>
          <Flex align="center">
            <NextLink href="/" passHref>
              <Link px={2} py={1} rounded={"md"} _hover={{ textDecoration: "none", bg: "gray.200" }}>
                Home
              </Link>
            </NextLink>
            <NextLink href="/about" passHref>
              <Link px={2} py={1} rounded={"md"} _hover={{ textDecoration: "none", bg: "gray.200" }}>
                About
              </Link>
            </NextLink>

            <Menu>
              <MenuButton as={Button} rightIcon={<HamburgerIcon />} display={{ base: "none", md: "inline-flex" }}>
                Tools
              </MenuButton>
              <MenuList>
                <NextLink href="/business-challenge-assessment" passHref>
                  <MenuItem>Business Challenge Assessment</MenuItem>
                </NextLink>
                <NextLink href="/challenge-analysis-report" passHref>
                  <MenuItem>Challenge Analysis Report</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>

            <Button colorScheme="blue" ml={4}>
              Login
            </Button>
          </Flex>
        </Box>

        {/* Mobile Navigation */}
        <IconButton
          aria-label="Open Menu"
          display={{ base: "block", md: "none" }}
          icon={<HamburgerIcon />}
          onClick={onOpen}
        />

        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
              <Stack spacing="24px">
                <NextLink href="/" passHref>
                  <Link>Home</Link>
                </NextLink>
                <NextLink href="/about" passHref>
                  <Link>About</Link>
                </NextLink>
                <NextLink href="/business-challenge-assessment" passHref>
                  <Link>Business Challenge Assessment</Link>
                </NextLink>
                <NextLink href="/challenge-analysis-report" passHref>
                  <Link>Challenge Analysis Report</Link>
                </NextLink>
                <Button colorScheme="blue">Login</Button>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  )
}

export default AppHeader
