import { Box, Container, Heading, Text, VStack, SimpleGrid, HStack, Stat, StatLabel, StatNumber, StatHelpText, Badge, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaRocket, FaGraduationCap } from 'react-icons/fa';
import { SiSap, SiReact, SiTypescript, SiPython } from 'react-icons/si';

const MotionBox = motion(Box);

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <Box id="about" py={20} bg="gray.50">
      <Container maxW="container.xl">
        <VStack spacing={12} align="stretch">
          {/* Header Section */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            textAlign="center"
          >
            <Heading size="2xl" mb={6}>
              About Me
            </Heading>
            <Text fontSize="xl" color="gray.700" maxW="3xl" mx="auto" lineHeight="tall">
              SAP SuccessFactors + SAP Work Zone specialist with hands-on expertise developing custom Work Zone cards, 
              integrating HR systems using <strong>SAP Cloud Integration (CPI)</strong>, and improving employee experience 
              technology at scale. Currently managing a small technical team as <strong>lead developer</strong>, delivering 
              high-impact HR technology solutions for enterprise clients including <strong>IBM</strong>, <strong>Lockheed Martin</strong>, 
              <strong> ZS Associates</strong>, and <strong>Omnicom</strong>.
            </Text>
          </MotionBox>

          {/* Impact Stats */}
          <MotionBox
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SimpleGrid columns={{ base: 1, md: 4 }} spacing={6}>
              <MotionBox
                variants={itemVariants}
                p={6}
                bg="white"
                borderRadius="xl"
                boxShadow="md"
                borderTop="4px solid"
                borderColor="blue.500"
                textAlign="center"
                _hover={{ transform: 'translateY(-4px)', boxShadow: 'xl', transition: 'all 0.3s' }}
              >
                <Stat>
                  <StatLabel fontSize="sm" color="gray.600">Professional Experience</StatLabel>
                  <StatNumber fontSize="3xl" color="blue.600">6+ Years</StatNumber>
                  <StatHelpText>Since 2018</StatHelpText>
                </Stat>
              </MotionBox>

              <MotionBox
                variants={itemVariants}
                p={6}
                bg="white"
                borderRadius="xl"
                boxShadow="md"
                borderTop="4px solid"
                borderColor="green.500"
                textAlign="center"
                _hover={{ transform: 'translateY(-4px)', boxShadow: 'xl', transition: 'all 0.3s' }}
              >
                <Stat>
                  <StatLabel fontSize="sm" color="gray.600">Major Clients</StatLabel>
                  <StatNumber fontSize="3xl" color="green.600">4 Enterprise</StatNumber>
                  <StatHelpText>IBM, Lockheed, ZS, Omnicom</StatHelpText>
                </Stat>
              </MotionBox>

              <MotionBox
                variants={itemVariants}
                p={6}
                bg="white"
                borderRadius="xl"
                boxShadow="md"
                borderTop="4px solid"
                borderColor="purple.500"
                textAlign="center"
                _hover={{ transform: 'translateY(-4px)', boxShadow: 'xl', transition: 'all 0.3s' }}
              >
                <Stat>
                  <StatLabel fontSize="sm" color="gray.600">Technical Leadership</StatLabel>
                  <StatNumber fontSize="3xl" color="purple.600">Team Lead</StatNumber>
                  <StatHelpText>Managing Developers</StatHelpText>
                </Stat>
              </MotionBox>

              <MotionBox
                variants={itemVariants}
                p={6}
                bg="white"
                borderRadius="xl"
                boxShadow="md"
                borderTop="4px solid"
                borderColor="orange.500"
                textAlign="center"
                _hover={{ transform: 'translateY(-4px)', boxShadow: 'xl', transition: 'all 0.3s' }}
              >
                <Stat>
                  <StatLabel fontSize="sm" color="gray.600">Development Approach</StatLabel>
                  <StatNumber fontSize="3xl" color="orange.600">AI-Driven</StatNumber>
                  <StatHelpText>Modern Workflows</StatHelpText>
                </Stat>
              </MotionBox>
            </SimpleGrid>
          </MotionBox>

          {/* Background Cards */}
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            <MotionBox
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              p={8}
              bg="white"
              borderRadius="xl"
              boxShadow="lg"
              position="relative"
              overflow="hidden"
            >
              <Box position="absolute" top="0" right="0" opacity="0.1" fontSize="120px">
                <FaRocket />
              </Box>
              <Heading size="md" mb={4} color="blue.600">
                Professional Journey
              </Heading>
              <VStack align="start" spacing={4}>
                <Box>
                  <Text fontWeight="bold" fontSize="lg">Business Processes Consultant (Lead Developer)</Text>
                  <Text color="gray.600" fontSize="sm">SAP | December 2021 - Present</Text>
                  <Text mt={2} color="gray.700">
                    Leading a technical team to deliver SAP Work Zone and SuccessFactors solutions. Built automated 
                    alert systems for IBM (30%+ response boost), unified portals for 122K+ Lockheed Martin users, 
                    and secure PGP-encrypted data integrations for Omnicom using SAP CPI. Leveraging AI-assisted 
                    workflows to accelerate development cycles for ZS Associates.
                  </Text>
                </Box>
                <Box>
                  <Text fontWeight="bold" fontSize="lg">Full Stack Software Engineer</Text>
                  <Text color="gray.600" fontSize="sm">OpticsPlanet | June 2018 - December 2021</Text>
                  <Text mt={2} color="gray.700">
                    Developed SQL and PHP applications for e-commerce data analysis, contributing to $297.4M 
                    in annual revenue. Built React-based frontend with PHP APIs, increasing site performance by 25%.
                  </Text>
                </Box>
              </VStack>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              p={8}
              bg="white"
              borderRadius="xl"
              boxShadow="lg"
              position="relative"
              overflow="hidden"
            >
              <Box position="absolute" top="0" right="0" opacity="0.1" fontSize="120px">
                <FaGraduationCap />
              </Box>
              <Heading size="md" mb={4} color="green.600">
                Education & Skills
              </Heading>
              <VStack align="start" spacing={4}>
                <Box>
                  <Text fontWeight="bold" fontSize="lg">Rutgers University</Text>
                  <Text color="gray.600" fontSize="sm">Bachelor of Arts in Computer Science</Text>
                  <HStack mt={2} spacing={2}>
                    <Badge colorScheme="green">Cum Laude</Badge>
                    <Badge colorScheme="blue">Minor: Political Science</Badge>
                  </HStack>
                </Box>
                <Box width="100%">
                  <Text fontWeight="bold" mb={3}>Technical Expertise</Text>
                  <Flex wrap="wrap" gap={2}>
                    <Badge colorScheme="blue" p={2} fontSize="sm" display="flex" alignItems="center" gap={1}>
                      <SiSap /> SAP Work Zone
                    </Badge>
                    <Badge colorScheme="blue" p={2} fontSize="sm" display="flex" alignItems="center" gap={1}>
                      <SiSap /> SAP SuccessFactors
                    </Badge>
                    <Badge colorScheme="purple" p={2} fontSize="sm" display="flex" alignItems="center" gap={1}>
                      <SiSap /> SAP CPI/Integration Suite
                    </Badge>
                    <Badge colorScheme="cyan" p={2} fontSize="sm" display="flex" alignItems="center" gap={1}>
                      <SiReact /> React/React Native
                    </Badge>
                    <Badge colorScheme="blue" p={2} fontSize="sm" display="flex" alignItems="center" gap={1}>
                      <SiTypescript /> TypeScript/JavaScript
                    </Badge>
                    <Badge colorScheme="yellow" p={2} fontSize="sm" display="flex" alignItems="center" gap={1}>
                      <SiPython /> Python/PHP/SQL
                    </Badge>
                  </Flex>
                  <Text fontWeight="bold" mt={3} mb={2}>SAP Certifications</Text>
                  <HStack spacing={2} wrap="wrap">
                    <Badge colorScheme="teal">SAP Integration Suite</Badge>
                    <Badge colorScheme="teal">SAP Work Zone</Badge>
                  </HStack>
                </Box>
                <Box>
                  <Text fontWeight="bold" mb={2}>Languages</Text>
                  <HStack spacing={2} flexWrap="wrap">
                    <Badge colorScheme="purple">🇷🇺 Russian (Native)</Badge>
                    <Badge colorScheme="red">🇺🇸 English (Fluent)</Badge>
                    <Badge colorScheme="orange">🇪🇸 Spanish (Basic)</Badge>
                  </HStack>
                </Box>
              </VStack>
            </MotionBox>
          </SimpleGrid>

          {/* What Drives Me */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            p={8}
            bg="gradient-to-r"
            bgGradient="linear(to-r, blue.500, purple.600)"
            borderRadius="xl"
            boxShadow="2xl"
            color="white"
            textAlign="center"
          >
            <Heading size="lg" mb={4}>What Drives Me</Heading>
            <Text fontSize="lg" lineHeight="tall" maxW="4xl" mx="auto">
              I'm passionate about improving employee experience through technology and leading teams to deliver 
              scalable HR solutions. From architecting secure data integrations with PGP encryption to building 
              custom Work Zone cards that serve 100K+ users, I focus on solutions that create measurable impact. 
              As a technical lead, I combine hands-on development with team mentorship, and I'm always exploring 
              cutting-edge tools—whether it's leveraging generative AI to accelerate development cycles or 
              experimenting with React Native multiplayer games in my free time.
            </Text>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  );
};

export default About; 