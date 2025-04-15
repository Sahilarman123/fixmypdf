'use client'
import { useState } from 'react'
import Link from 'next/link'
import { 
  Box, 
  Flex, 
  Text, 
  Button, 
  Stack, 
  IconButton, 
  Collapse, 
  useDisclosure,
  Container
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

export default function Header() {
  const { isOpen, onToggle } = useDisclosure()
  
  return (
    <Box as="header" bg="white" boxShadow="sm" position="sticky" top="0" zIndex="1000">
      <Container maxW="container.xl" py={4}>
        <Flex justify="space-between" align="center">
          <Link href="/" passHref>
            <Text fontSize="2xl" fontWeight="bold" color="primary.600">FixMyPDF</Text>
          </Link>
          
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <Stack direction="row" spacing={8}>
              <Link href="/" passHref>
                <Text color="gray.600" _hover={{ color: 'primary.600' }}>Home</Text>
              </Link>
              <Link href="/tools" passHref>
                <Text color="gray.600" _hover={{ color: 'primary.600' }}>FixMyPDF</Text>
              </Link>
              <Link href="/pricing" passHref>
                <Text color="gray.600" _hover={{ color: 'primary.600' }}>Pricing</Text>
              </Link>
              <Link href="/blog" passHref>
                <Text color="gray.600" _hover={{ color: 'primary.600' }}>Blog</Text>
              </Link>
            </Stack>
          </Flex>
          
          <Stack
            direction="row"
            spacing={4}
            display={{ base: 'none', md: 'flex' }}
          >
            <Link href="/login" passHref>
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/signup" passHref>
              <Button variant="primary">Sign Up Free</Button>
            </Link>
          </Stack>
          
          <IconButton
            display={{ base: 'flex', md: 'none' }}
            onClick={onToggle}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            variant="ghost"
            aria-label="Toggle Navigation"
          />
        </Flex>
        
        <Collapse in={isOpen} animateOpacity>
          <Box py={4} display={{ md: 'none' }}>
            <Stack spacing={4}>
              <Link href="/" passHref>
                <Text py={2} color="gray.600">Home</Text>
              </Link>
              <Link href="/tools" passHref>
                <Text py={2} color="gray.600">FixMyPDF</Text>
              </Link>
              <Link href="/pricing" passHref>
                <Text py={2} color="gray.600">Pricing</Text>
              </Link>
              <Link href="/blog" passHref>
                <Text py={2} color="gray.600">Blog</Text>
              </Link>
              <Link href="/login" passHref>
                <Text py={2} color="gray.600">Login</Text>
              </Link>
              <Link href="/signup" passHref>
                <Button variant="primary" width="fit-content">Sign Up Free</Button>
              </Link>
            </Stack>
          </Box>
        </Collapse>
      </Container>
    </Box>
  )
}