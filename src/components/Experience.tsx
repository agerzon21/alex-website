import { Box, Container, Heading, Text, VStack, Image, useColorModeValue, Badge, Flex, HStack, Collapse } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const MotionBox = motion(Box);

interface Role {
  title: string;
  startDate: string;
  endDate: string;
  location: string;
}

interface CompanyGroup {
  company: string;
  logo: string;
  roles: Role[];
}

const calculateDuration = (startDate: string, endDate: string): string => {
  const start = new Date(startDate);
  const end = endDate === 'Present' ? new Date() : new Date(endDate);
  const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  if (months < 1) return '< 1 mo';
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  if (years === 0) return `${months} mo${months > 1 ? 's' : ''}`;
  if (remainingMonths === 0) return `${years} yr${years > 1 ? 's' : ''}`;
  return `${years} yr${years > 1 ? 's' : ''} ${remainingMonths} mo${remainingMonths > 1 ? 's' : ''}`;
};

const formatDate = (d: string) =>
  d === 'Present' ? 'Present' : new Date(d).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });

const companyGroups: CompanyGroup[] = [
  {
    company: 'SAP',
    logo: '/images/companies/sap.png',
    roles: [
      { title: 'Business Processes Consultant', startDate: 'Apr 1, 2025', endDate: 'Present', location: 'Remote' },
      { title: 'HCM Technical Consultant', startDate: 'Nov 1, 2021', endDate: 'Apr 1, 2025', location: 'Pittsburgh, PA' },
    ]
  },
  {
    company: 'OpticsPlanet',
    logo: '/images/companies/optics.png',
    roles: [
      { title: 'Software Engineer', startDate: 'Oct 1, 2019', endDate: 'Dec 1, 2021', location: 'Northbrook, IL' },
      { title: 'Junior Software Engineer', startDate: 'Jun 1, 2018', endDate: 'Oct 1, 2019', location: 'Northbrook, IL' },
      { title: 'Business Technical Analyst', startDate: 'Jul 1, 2017', endDate: 'Oct 1, 2017', location: 'Northbrook, IL' },
    ]
  },
  {
    company: 'Rutgers University',
    logo: '/images/companies/rutgers.png',
    roles: [
      { title: 'CS Teaching Assistant', startDate: 'Sep 1, 2017', endDate: 'May 1, 2018', location: 'New Brunswick, NJ' },
    ]
  },
  {
    company: 'PVH Corp.',
    logo: '/images/companies/pvh.png',
    roles: [
      { title: 'Intern (IT, Corporate Systems)', startDate: 'Jun 1, 2016', endDate: 'Sep 1, 2016', location: 'Bridgewater, NJ' },
    ]
  }
];

const CompanyCard = ({ group, index, isInitiallyOpen }: { group: CompanyGroup; index: number; isInitiallyOpen: boolean }) => {
  const [isOpen, setIsOpen] = useState(isInitiallyOpen);
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.100', 'gray.700');
  const textColor = useColorModeValue('gray.500', 'gray.400');
  const isCurrentJob = group.roles[0].endDate === 'Present';

  const totalStart = group.roles[group.roles.length - 1].startDate;
  const totalEnd = group.roles[0].endDate;
  const totalDuration = calculateDuration(totalStart, totalEnd);

  return (
    <MotionBox
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
    >
      <Box
        bg={bgColor}
        borderRadius="xl"
        borderWidth="1px"
        borderColor={borderColor}
        overflow="hidden"
        transition="all 0.2s"
        _hover={{ borderColor: useColorModeValue('gray.200', 'gray.600') }}
      >
        {/* Company header — always visible, clickable */}
        <Flex
          align="center"
          px={{ base: 4, md: 5 }}
          py={4}
          cursor="pointer"
          onClick={() => setIsOpen(!isOpen)}
          userSelect="none"
          gap={3}
        >
          {/* Logo */}
          <Box
            flexShrink={0}
            w="40px"
            h="40px"
            borderRadius="lg"
            bg={useColorModeValue('gray.50', 'gray.700')}
            display="flex"
            alignItems="center"
            justifyContent="center"
            p="6px"
          >
            <Image
              src={group.logo}
              alt={`${group.company} logo`}
              objectFit="contain"
              w="100%"
              h="100%"
            />
          </Box>

          {/* Company info */}
          <Box flex="1" minW={0}>
            <Flex align="center" gap={2} flexWrap="wrap">
              <Text fontWeight="600" fontSize={{ base: "sm", md: "md" }}>
                {group.company}
              </Text>
              {isCurrentJob && (
                <Badge
                  colorScheme="green"
                  variant="subtle"
                  fontSize="10px"
                  px={1.5}
                  py={0}
                  borderRadius="sm"
                >
                  Current
                </Badge>
              )}
            </Flex>
            <HStack spacing={2} mt={0.5} flexWrap="wrap">
              <Text fontSize="xs" color={textColor}>
                {totalDuration}
              </Text>
              <Text fontSize="xs" color={textColor} opacity={0.5}>·</Text>
              <Text fontSize="xs" color={textColor}>
                {group.roles.length} role{group.roles.length > 1 ? 's' : ''}
              </Text>
              <Text fontSize="xs" color={textColor} opacity={0.5}>·</Text>
              <Text fontSize="xs" color={textColor}>
                {formatDate(totalStart)} – {formatDate(totalEnd)}
              </Text>
            </HStack>
          </Box>

          {/* Expand icon */}
          <Box
            as={FaChevronDown}
            size="12px"
            color={textColor}
            transition="transform 0.2s"
            transform={isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}
            flexShrink={0}
          />
        </Flex>

        {/* Expanded roles */}
        <Collapse in={isOpen} animateOpacity>
          <Box
            px={{ base: 4, md: 5 }}
            pb={4}
            pt={0}
          >
            <Box
              borderTop="1px solid"
              borderColor={borderColor}
              pt={3}
            >
              <VStack spacing={3} align="stretch">
                {group.roles.map((role, roleIdx) => (
                  <Flex
                    key={`${role.title}-${role.startDate}`}
                    align="start"
                    gap={3}
                    pl={1}
                  >
                    {/* Role dot + connector */}
                    <VStack spacing={0} pt={1.5} align="center" flexShrink={0}>
                      <Box
                        w="8px"
                        h="8px"
                        borderRadius="full"
                        bg={roleIdx === 0 && isCurrentJob ? 'green.400' : useColorModeValue('gray.300', 'gray.600')}
                        flexShrink={0}
                      />
                      {roleIdx < group.roles.length - 1 && (
                        <Box w="1px" h="28px" bg={useColorModeValue('gray.200', 'gray.700')} />
                      )}
                    </VStack>

                    {/* Role info */}
                    <Box pb={roleIdx < group.roles.length - 1 ? 1 : 0}>
                      <Text fontWeight="500" fontSize={{ base: "sm", md: "sm" }}>
                        {role.title}
                      </Text>
                      <HStack spacing={2} mt={0.5} flexWrap="wrap">
                        <Text fontSize="xs" color={textColor}>
                          {role.location}
                        </Text>
                        <Text fontSize="xs" color={textColor} opacity={0.5}>·</Text>
                        <Text fontSize="xs" color={textColor}>
                          {formatDate(role.startDate)} – {formatDate(role.endDate)}
                        </Text>
                        <Text fontSize="xs" color={textColor} opacity={0.5}>·</Text>
                        <Text fontSize="xs" color={textColor} fontWeight="500">
                          {calculateDuration(role.startDate, role.endDate)}
                        </Text>
                      </HStack>
                    </Box>
                  </Flex>
                ))}
              </VStack>
            </Box>
          </Box>
        </Collapse>
      </Box>
    </MotionBox>
  );
};

const Experience = () => {
  const textColor = useColorModeValue('gray.500', 'gray.400');

  return (
    <Box id="experience" py={20} bg={useColorModeValue('gray.50', 'gray.900')}>
      <Container maxW="container.lg">
        <VStack spacing={10} align="stretch">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Heading size="xl" mb={2} fontWeight="600" letterSpacing="-0.02em">
              Experience
            </Heading>
            <Text fontSize="md" color={textColor}>
              My professional journey in technology
            </Text>
          </MotionBox>

          <VStack spacing={3} align="stretch" maxW="700px">
            {companyGroups.map((group, index) => (
              <CompanyCard
                key={group.company}
                group={group}
                index={index}
                isInitiallyOpen={index === 0}
              />
            ))}
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Experience;
