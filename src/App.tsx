import React from 'react'
import { Box, Container, Heading, Text } from '@chakra-ui/react'

const App: React.FC = () => {
  return (
    <Box minH="100vh" bg="gray.50">
      <Container maxW="container.xl" py={8}>
        <Heading as="h1" size="2xl" mb={4}>
          Welcome to My Website
        </Heading>
        <Text fontSize="xl">
          This is the beginning of something great!
        </Text>
      </Container>
    </Box>
  )
}

export default App 