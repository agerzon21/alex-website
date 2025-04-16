import { Box, Container, Heading, Text, VStack, SimpleGrid, Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaCode, FaGraduationCap, FaMapMarkerAlt } from 'react-icons/fa';

const MotionBox = motion(Box);

const About = () => {
  return (
    <Box id="about" py={12} bg="gray.50">
      <Container maxW="container.xl">
        <VStack spacing={12} align="stretch">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Heading size="2xl" mb={4}>
              About Me
            </Heading>
            <Text fontSize="xl" color="gray.600">
              I'm a passionate developer with a keen interest in creating beautiful and functional web applications.
              My journey in technology started with a curiosity about how things work, and it has evolved into
              a career focused on building innovative solutions.
            </Text>
          </MotionBox>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              p={6}
              bg="white"
              borderRadius="lg"
              boxShadow="sm"
            >
              <Icon as={FaCode} w={8} h={8} color="blue.500" mb={4} />
              <Heading size="md" mb={2}>Development</Heading>
              <Text color="gray.600">
                Specializing in modern web technologies and frameworks, creating responsive and user-friendly applications.
              </Text>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              p={6}
              bg="white"
              borderRadius="lg"
              boxShadow="sm"
            >
              <Icon as={FaGraduationCap} w={8} h={8} color="blue.500" mb={4} />
              <Heading size="md" mb={2}>Education</Heading>
              <Text color="gray.600">
                Continuous learning and staying updated with the latest technologies and best practices.
              </Text>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              p={6}
              bg="white"
              borderRadius="lg"
              boxShadow="sm"
            >
              <Icon as={FaMapMarkerAlt} w={8} h={8} color="blue.500" mb={4} />
              <Heading size="md" mb={2}>Location</Heading>
              <Text color="gray.600">
                Based in [Your Location], open to remote opportunities and collaborations.
              </Text>
            </MotionBox>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default About; 