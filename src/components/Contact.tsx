import { Box, Container, Heading, Icon, Link, Text, HStack, Flex, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from 'react-icons/fa';

const MotionBox = motion(Box);

const Contact = () => {
  return (
    <Box id="contact" py={20} bg="gray.900">
      <Container maxW="container.lg">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* CTA Card */}
          <Box
            bg="gray.800"
            borderRadius="2xl"
            px={{ base: 6, md: 12 }}
            py={{ base: 10, md: 14 }}
            position="relative"
            overflow="hidden"
            textAlign="center"
          >
            {/* Subtle gradient accent */}
            <Box
              position="absolute"
              top="-40%"
              left="50%"
              transform="translateX(-50%)"
              w="500px"
              h="400px"
              borderRadius="full"
              bg="blue.500"
              opacity={0.05}
              filter="blur(80px)"
            />

            <VStack spacing={5} position="relative" zIndex={1}>
              <Heading
                size="xl"
                color="white"
                fontWeight="600"
                letterSpacing="-0.02em"
              >
                Let's work together
              </Heading>
              <Text
                fontSize="md"
                color="whiteAlpha.600"
                maxW="450px"
                lineHeight="1.7"
              >
                Open to discussing new projects, creative ideas, or opportunities.
              </Text>

              <Flex
                gap={3}
                pt={4}
                flexWrap="wrap"
                justify="center"
              >
                <Link
                  href="mailto:alex@gerz.dev"
                  _hover={{ textDecoration: 'none' }}
                >
                  <HStack
                    spacing={2}
                    color="whiteAlpha.700"
                    transition="all 0.2s"
                    _hover={{ color: 'white', bg: 'whiteAlpha.200' }}
                    bg="whiteAlpha.100"
                    px={5}
                    py={3}
                    borderRadius="lg"
                  >
                    <Icon as={FaEnvelope} boxSize={4} />
                    <Text fontSize="sm" fontWeight="500">alex@gerz.dev</Text>
                    <Icon as={FaArrowRight} boxSize={3} opacity={0.5} />
                  </HStack>
                </Link>
                <Link
                  href="https://linkedin.com/in/gerzon"
                  isExternal
                  _hover={{ textDecoration: 'none' }}
                >
                  <HStack
                    spacing={2}
                    color="whiteAlpha.700"
                    transition="all 0.2s"
                    _hover={{ color: 'white', bg: 'whiteAlpha.200' }}
                    bg="whiteAlpha.100"
                    px={5}
                    py={3}
                    borderRadius="lg"
                  >
                    <Icon as={FaLinkedin} boxSize={4} />
                    <Text fontSize="sm" fontWeight="500">LinkedIn</Text>
                  </HStack>
                </Link>
                <Link
                  href="https://github.com/agerzon21"
                  isExternal
                  _hover={{ textDecoration: 'none' }}
                >
                  <HStack
                    spacing={2}
                    color="whiteAlpha.700"
                    transition="all 0.2s"
                    _hover={{ color: 'white', bg: 'whiteAlpha.200' }}
                    bg="whiteAlpha.100"
                    px={5}
                    py={3}
                    borderRadius="lg"
                  >
                    <Icon as={FaGithub} boxSize={4} />
                    <Text fontSize="sm" fontWeight="500">GitHub</Text>
                  </HStack>
                </Link>
              </Flex>
            </VStack>
          </Box>
        </MotionBox>

        {/* Footer */}
        <Flex
          mt={12}
          pt={6}
          borderTop="1px solid"
          borderColor="whiteAlpha.100"
          justify="space-between"
          align="center"
          flexWrap="wrap"
          gap={3}
        >
          <Text fontSize="xs" color="whiteAlpha.400">
            &copy; {new Date().getFullYear()} Alex Gerzon
          </Text>
          <HStack spacing={4}>
            <Link href="https://github.com/agerzon21" isExternal>
              <Icon as={FaGithub} boxSize={4} color="whiteAlpha.300" _hover={{ color: 'whiteAlpha.600' }} transition="all 0.2s" />
            </Link>
            <Link href="https://linkedin.com/in/gerzon" isExternal>
              <Icon as={FaLinkedin} boxSize={4} color="whiteAlpha.300" _hover={{ color: 'whiteAlpha.600' }} transition="all 0.2s" />
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Contact;
