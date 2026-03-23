import { Box, Container, Heading, Text, VStack, SimpleGrid, HStack, Badge, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { SiSap, SiReact, SiTypescript, SiPython } from 'react-icons/si';

const MotionBox = motion(Box);

const About = () => {
  return (
    <Box id="about" py={20} bg="white">
      <Container maxW="container.lg">
        <VStack spacing={16} align="stretch">
          {/* Header + Bio */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Heading size="xl" mb={6} fontWeight="600" letterSpacing="-0.02em">
              About
            </Heading>
            <Text fontSize="lg" color="gray.600" lineHeight="1.8" maxW="3xl">
              I specialize in SAP SuccessFactors and Work Zone — 6+ years building custom cards,
              integrating HR systems through CPI, and improving employee experience
              at scale. Right now I lead a small dev team delivering solutions for
              enterprise clients like IBM, Lockheed Martin, ZS Associates, and Omnicom.
              Outside of work, I build side projects and tinker with AI-powered tools.
            </Text>
          </MotionBox>

          {/* Two-column layout */}
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12}>
            {/* Professional Journey */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Text
                fontSize="sm"
                fontWeight="600"
                textTransform="uppercase"
                letterSpacing="0.08em"
                color="gray.400"
                mb={5}
              >
                Background
              </Text>
              <VStack align="start" spacing={6}>
                <Box>
                  <Text fontWeight="600" fontSize="md">Business Processes Consultant (Lead Developer)</Text>
                  <Text color="gray.500" fontSize="sm" mt={1}>SAP &middot; 2021 - Present</Text>
                  <Text mt={2} color="gray.600" fontSize="sm" lineHeight="1.7">
                    Leading a technical team delivering SAP Work Zone and SuccessFactors solutions.
                    Built automated alert systems for IBM, unified portals for 122K+ Lockheed Martin users,
                    and secure PGP-encrypted data integrations for Omnicom using SAP CPI.
                  </Text>
                </Box>
                <Box>
                  <Text fontWeight="600" fontSize="md">Full Stack Software Engineer</Text>
                  <Text color="gray.500" fontSize="sm" mt={1}>OpticsPlanet &middot; 2018 - 2021</Text>
                  <Text mt={2} color="gray.600" fontSize="sm" lineHeight="1.7">
                    Developed SQL and PHP applications for e-commerce data analysis, contributing to $297.4M
                    in annual revenue. Built React-based frontend with PHP APIs, increasing site performance by 25%.
                  </Text>
                </Box>
              </VStack>
            </MotionBox>

            {/* Education & Skills */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Text
                fontSize="sm"
                fontWeight="600"
                textTransform="uppercase"
                letterSpacing="0.08em"
                color="gray.400"
                mb={5}
              >
                Education & Skills
              </Text>
              <VStack align="start" spacing={6}>
                <Box>
                  <Text fontWeight="600" fontSize="md">Rutgers University</Text>
                  <Text color="gray.500" fontSize="sm" mt={1}>B.A. Computer Science, Cum Laude</Text>
                  <Text color="gray.500" fontSize="sm">Minor in Political Science</Text>
                </Box>
                <Box width="100%">
                  <Text fontWeight="600" fontSize="sm" mb={3}>Technical Expertise</Text>
                  <Flex wrap="wrap" gap={2}>
                    <Badge variant="subtle" colorScheme="gray" px={3} py={1.5} fontSize="xs" display="flex" alignItems="center" gap={1} borderRadius="md">
                      <SiSap /> SAP Work Zone
                    </Badge>
                    <Badge variant="subtle" colorScheme="gray" px={3} py={1.5} fontSize="xs" display="flex" alignItems="center" gap={1} borderRadius="md">
                      <SiSap /> SuccessFactors
                    </Badge>
                    <Badge variant="subtle" colorScheme="gray" px={3} py={1.5} fontSize="xs" display="flex" alignItems="center" gap={1} borderRadius="md">
                      <SiSap /> CPI / Integration Suite
                    </Badge>
                    <Badge variant="subtle" colorScheme="gray" px={3} py={1.5} fontSize="xs" display="flex" alignItems="center" gap={1} borderRadius="md">
                      <SiReact /> React / React Native
                    </Badge>
                    <Badge variant="subtle" colorScheme="gray" px={3} py={1.5} fontSize="xs" display="flex" alignItems="center" gap={1} borderRadius="md">
                      <SiTypescript /> TypeScript
                    </Badge>
                    <Badge variant="subtle" colorScheme="gray" px={3} py={1.5} fontSize="xs" display="flex" alignItems="center" gap={1} borderRadius="md">
                      <SiPython /> Python / PHP / SQL
                    </Badge>
                  </Flex>
                </Box>
                <Box>
                  <Text fontWeight="600" fontSize="sm" mb={2}>SAP Certifications</Text>
                  <HStack spacing={2} wrap="wrap">
                    <Badge variant="outline" colorScheme="gray" px={3} py={1} fontSize="xs" borderRadius="md">SAP Integration Suite</Badge>
                    <Badge variant="outline" colorScheme="gray" px={3} py={1} fontSize="xs" borderRadius="md">SAP Work Zone</Badge>
                  </HStack>
                </Box>
                <Box>
                  <Text fontWeight="600" fontSize="sm" mb={2}>Languages</Text>
                  <HStack spacing={2} flexWrap="wrap">
                    <Badge variant="subtle" colorScheme="gray" px={3} py={1} fontSize="xs" borderRadius="md">Russian (Native)</Badge>
                    <Badge variant="subtle" colorScheme="gray" px={3} py={1} fontSize="xs" borderRadius="md">English (Fluent)</Badge>
                    <Badge variant="subtle" colorScheme="gray" px={3} py={1} fontSize="xs" borderRadius="md">Spanish (Basic)</Badge>
                  </HStack>
                </Box>
              </VStack>
            </MotionBox>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default About;
