import { Box, Container, Heading, Text, VStack, Image, HStack, IconButton, Button } from '@chakra-ui/react';
import { motion, Variants } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const fadeInUp: Variants = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 }
};

const MotionBox = motion(Box);

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box width="100%" position="relative" overflow="hidden">
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        bg="gray.900"
        minH="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="white"
        position="relative"
      >
        {/* Subtle radial glow - top center */}
        <Box
          position="absolute"
          top="-20%"
          left="50%"
          transform="translateX(-50%)"
          w="800px"
          h="600px"
          borderRadius="full"
          bg="blue.600"
          opacity={0.04}
          filter="blur(120px)"
        />
        {/* Subtle radial glow - bottom right */}
        <Box
          position="absolute"
          bottom="-10%"
          right="-10%"
          w="500px"
          h="500px"
          borderRadius="full"
          bg="purple.500"
          opacity={0.03}
          filter="blur(100px)"
        />

        <Container maxW="container.lg" position="relative" zIndex={1}>
          <VStack spacing={6} align="center">
            {/* Profile Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Box
                borderRadius="full"
                overflow="hidden"
                boxSize="160px"
                border="3px solid"
                borderColor="whiteAlpha.300"
                bg="gray.600"
              >
                <Image
                  src="/images/optimized/profile.JPG"
                  alt="Alex Gerzon"
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  style={{
                    transform: 'scale(1.3) translate(3px, 12px)'
                  }}
                  loading="eager"
                  decoding="async"
                  fallback={
                    <Box
                      w="100%"
                      h="100%"
                      bg="gray.700"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Text color="gray.400">Loading...</Text>
                    </Box>
                  }
                />
              </Box>
            </motion.div>

            {/* Name */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Heading
                size="2xl"
                textAlign="center"
                fontWeight="600"
                letterSpacing="-0.02em"
              >
                Alex Gerzon
              </Heading>
            </motion.div>

            {/* Description */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              <Text
                fontSize={{ base: "md", md: "lg" }}
                textAlign="center"
                maxW="600px"
                color="whiteAlpha.600"
                px={4}
                fontWeight="400"
                lineHeight="1.7"
              >
                SAP Work Zone & SuccessFactors Lead · Full-Stack Developer · Building tools with AI
              </Text>
            </motion.div>

            {/* Status line */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              <HStack
                spacing={2}
                bg="whiteAlpha.50"
                px={4}
                py={2}
                borderRadius="full"
                border="1px solid"
                borderColor="whiteAlpha.100"
              >
                <Box w="6px" h="6px" borderRadius="full" bg="green.400" />
                <Text fontSize="xs" color="whiteAlpha.500" fontWeight="500">
                  Currently building DuoTrackr
                </Text>
              </HStack>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.55 }}
            >
              <HStack spacing={3}>
                <IconButton
                  as="a"
                  href="https://linkedin.com/in/gerzon"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  icon={<FaLinkedin size={20} />}
                  size="md"
                  rounded="full"
                  bg="whiteAlpha.100"
                  color="whiteAlpha.700"
                  _hover={{
                    bg: "whiteAlpha.200",
                    color: "white",
                  }}
                  transition="all 0.2s"
                />
                <IconButton
                  as="a"
                  href="https://github.com/alexgerzon"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  icon={<FaGithub size={20} />}
                  size="md"
                  rounded="full"
                  bg="whiteAlpha.100"
                  color="whiteAlpha.700"
                  _hover={{
                    bg: "whiteAlpha.200",
                    color: "white",
                  }}
                  transition="all 0.2s"
                />
                <IconButton
                  as="a"
                  href="mailto:alex@gerz.dev"
                  aria-label="Email"
                  icon={<FaEnvelope size={20} />}
                  size="md"
                  rounded="full"
                  bg="whiteAlpha.100"
                  color="whiteAlpha.700"
                  _hover={{
                    bg: "whiteAlpha.200",
                    color: "white",
                  }}
                  transition="all 0.2s"
                />
              </HStack>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <HStack spacing={3} flexWrap="wrap" justify="center" pt={2}>
                <Button
                  size="md"
                  bg="white"
                  color="gray.900"
                  _hover={{
                    bg: "gray.100",
                  }}
                  onClick={() => scrollToSection('projects')}
                  transition="all 0.2s"
                  fontWeight="500"
                  px={6}
                >
                  View Projects
                </Button>
                <Button
                  size="md"
                  variant="outline"
                  borderColor="whiteAlpha.300"
                  color="whiteAlpha.800"
                  _hover={{
                    bg: "whiteAlpha.100",
                    borderColor: "whiteAlpha.500",
                  }}
                  onClick={() => scrollToSection('experience')}
                  transition="all 0.2s"
                  fontWeight="500"
                  px={6}
                >
                  Experience
                </Button>
              </HStack>
            </motion.div>
          </VStack>
        </Container>
      </MotionBox>
    </Box>
  );
};

export default Hero;
