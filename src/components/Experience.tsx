import { Box, Container, Heading, Text, VStack, Image, useColorModeValue, Badge, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

interface Experience {
  company: string;
  logo: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string;
}

// Function to calculate duration dynamically
const calculateDuration = (startDate: string, endDate: string): string => {
  const start = new Date(startDate);
  const end = endDate === 'Present' ? new Date() : new Date(endDate);
  
  const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  
  if (months < 1) {
    return '< 1 mo';
  }
  
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  
  if (years === 0) {
    return `${months} mo${months > 1 ? 's' : ''}`;
  } else if (remainingMonths === 0) {
    return `${years} yr${years > 1 ? 's' : ''}`;
  } else {
    return `${years} yr${years > 1 ? 's' : ''} ${remainingMonths} mo${remainingMonths > 1 ? 's' : ''}`;
  }
};

const experiences: Experience[] = [
  {
    company: 'SAP',
    logo: '/images/companies/sap.png',
    title: 'Business Processes Consultant',
    location: 'Remote',
    startDate: 'Apr 1, 2025',
    endDate: 'Present'
  },
  {
    company: 'SAP',
    logo: '/images/companies/sap.png',
    title: 'HCM Technical Consultant',
    location: 'Pittsburgh, Pennsylvania',
    startDate: 'Nov 1, 2021',
    endDate: 'Apr 1, 2025'
  },
  {
    company: 'OpticsPlanet, Inc.',
    logo: '/images/companies/optics.png',
    title: 'Software Engineer',
    location: 'Northbrook, Illinois',
    startDate: 'Oct 1, 2019',
    endDate: 'Dec 1, 2021'
  },
  {
    company: 'OpticsPlanet, Inc.',
    logo: '/images/companies/optics.png',
    title: 'Junior Software Engineer',
    location: 'Northbrook, Illinois',
    startDate: 'Jun 1, 2018',
    endDate: 'Oct 1, 2019'
  },
  {
    company: 'Rutgers University',
    logo: '/images/companies/rutgers.png',
    title: 'CS Teaching Assistant',
    location: 'New Brunswick, New Jersey',
    startDate: 'Sep 1, 2017',
    endDate: 'May 1, 2018'
  },
  {
    company: 'OpticsPlanet, Inc.',
    logo: '/images/companies/optics.png',
    title: 'Business Technical Analyst',
    location: 'Northbrook, Illinois',
    startDate: 'Jul 1, 2017',
    endDate: 'Oct 1, 2017'
  },
  {
    company: 'PVH Corp.',
    logo: '/images/companies/pvh.png',
    title: 'Intern (IT, Corporate Systems)',
    location: 'Bridgewater, New Jersey',
    startDate: 'Jun 1, 2016',
    endDate: 'Sep 1, 2016'
  }
];

const Experience = () => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const textColor = useColorModeValue('gray.600', 'gray.400');
  const timelineColor = useColorModeValue('blue.500', 'blue.400');

  return (
    <Box id="experience" py={20} bg={useColorModeValue('gray.50', 'gray.900')}>
      <Container maxW="container.xl">
        <VStack spacing={12} align="stretch">
          {/* Header */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            textAlign="center"
          >
            <Heading size="2xl" mb={4}>
              Experience
            </Heading>
            <Text fontSize="xl" color={textColor}>
              My professional journey in technology
            </Text>
          </MotionBox>

          {/* Vertical Timeline */}
          <Box position="relative" maxW="800px" mx="auto" w="100%">
            {/* Timeline Line */}
            <Box
              position="absolute"
              left={{ base: "32px", md: "50%" }}
              top="0"
              bottom="0"
              width="3px"
              bg={useColorModeValue('gray.200', 'gray.700')}
              transform={{ base: "none", md: "translateX(-50%)" }}
            />

            {/* Timeline Items */}
            <VStack spacing={8} align="stretch">
              {experiences.map((exp, index) => (
                <MotionBox
                  key={`${exp.company}-${exp.startDate}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  position="relative"
                >
                  {/* Timeline Dot */}
                  <Box
                    position="absolute"
                    left={{ base: "32px", md: "50%" }}
                    top="24px"
                    transform={{ base: "translateX(-50%)", md: "translateX(-50%)" }}
                    width="48px"
                    height="48px"
                    borderRadius="full"
                    bg="white"
                    border="3px solid"
                    borderColor={timelineColor}
                    boxShadow="0 0 0 4px rgba(66, 153, 225, 0.1)"
                    zIndex={2}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    p={1}
                  >
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      objectFit="contain"
                      w="100%"
                      h="100%"
                    />
                  </Box>

                  {/* Content Card */}
                  <Flex
                    direction={{ base: "row", md: index % 2 === 0 ? "row-reverse" : "row" }}
                    align="start"
                    justify="space-between"
                  >
                    {/* Spacer for desktop alternating layout */}
                    <Box 
                      display={{ base: "none", md: "block" }}
                      width="calc(50% - 40px)"
                    />

                    {/* Card */}
                    <Box
                      ml={{ base: "80px", md: "0" }}
                      width={{ base: "calc(100% - 80px)", md: "calc(50% - 40px)" }}
                      bg={bgColor}
                      p={6}
                      borderRadius="xl"
                      boxShadow="lg"
                      borderWidth="1px"
                      borderColor={borderColor}
                      transition="all 0.3s"
                      _hover={{
                        transform: { base: "translateX(4px)", md: index % 2 === 0 ? "translateX(-8px)" : "translateX(8px)" },
                        boxShadow: "2xl",
                      }}
                    >
                      <VStack align="start" spacing={3}>
                        <Flex justify="space-between" w="100%" flexWrap="wrap" gap={2}>
                          <Text 
                            fontWeight="bold" 
                            fontSize={{ base: "lg", md: "xl" }}
                            color={timelineColor}
                          >
                            {exp.company}
                          </Text>
                          {exp.endDate === 'Present' && (
                            <Badge 
                              colorScheme="green" 
                              fontSize="sm"
                              px={3}
                              py={1}
                            >
                              Current
                            </Badge>
                          )}
                        </Flex>

                        <Text 
                          fontWeight="semibold" 
                          fontSize={{ base: "md", md: "lg" }}
                        >
                          {exp.title}
                        </Text>

                        <VStack align="start" spacing={1} w="100%">
                          <Text fontSize="sm" color={textColor}>
                            📍 {exp.location}
                          </Text>
                          <Text fontSize="sm" color={textColor}>
                            📅 {new Date(exp.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - {exp.endDate === 'Present' ? 'Present' : new Date(exp.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                          </Text>
                          <Text fontSize="sm" color={textColor} fontWeight="medium">
                            ⏱️ {calculateDuration(exp.startDate, exp.endDate)}
                          </Text>
                        </VStack>
                      </VStack>
                    </Box>
                  </Flex>
                </MotionBox>
              ))}
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Experience; 