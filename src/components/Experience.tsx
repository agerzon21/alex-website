import { useRef } from 'react';
import { Box, Container, Heading, Text, HStack, VStack, Image, useColorModeValue, Badge, IconButton } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useEffect, useState } from 'react';

const MotionBox = motion(Box);

interface Experience {
  company: string;
  logo: string;
  title: string;
  duration: string;
  location: string;
  startDate: string;
  endDate: string;
}

const experiences: Experience[] = [
  {
    company: 'SAP',
    logo: '/images/companies/sap.png',
    title: 'Business Processes Consultant',
    duration: '1 mo',
    location: 'Remote',
    startDate: 'Apr 2025',
    endDate: 'Present'
  },
  {
    company: 'SAP',
    logo: '/images/companies/sap.png',
    title: 'HCM Technical Consultant',
    duration: '3 yrs 6 mos',
    location: 'Pittsburgh, Pennsylvania',
    startDate: 'Nov 2021',
    endDate: 'Apr 2025'
  },
  {
    company: 'OpticsPlanet, Inc.',
    logo: '/images/companies/optics.png',
    title: 'Software Engineer',
    duration: '2 yrs 3 mos',
    location: 'Northbrook, Illinois',
    startDate: 'Oct 2019',
    endDate: 'Dec 2021'
  },
  {
    company: 'OpticsPlanet, Inc.',
    logo: '/images/companies/optics.png',
    title: 'Junior Software Engineer',
    duration: '1 yr 5 mos',
    location: 'Northbrook, Illinois',
    startDate: 'Jun 2018',
    endDate: 'Oct 2019'
  },
  {
    company: 'Rutgers University',
    logo: '/images/companies/rutgers.png',
    title: 'CS Teaching Assistant',
    duration: '9 mos',
    location: 'New Brunswick, New Jersey',
    startDate: 'Sep 2017',
    endDate: 'May 2018'
  },
  {
    company: 'OpticsPlanet, Inc.',
    logo: '/images/companies/optics.png',
    title: 'Business Technical Analyst',
    duration: '4 mos',
    location: 'Northbrook, Illinois',
    startDate: 'Jul 2017',
    endDate: 'Oct 2017'
  },
  {
    company: 'PVH Corp.',
    logo: '/images/companies/pvh.png',
    title: 'Intern (IT, Corporate Systems)',
    duration: '4 mos',
    location: 'Bridgewater, New Jersey',
    startDate: 'Jun 2016',
    endDate: 'Sep 2016'
  }
];

const Experience = () => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const textColor = useColorModeValue('gray.600', 'gray.400');
  const timelineColor = useColorModeValue('blue.500', 'blue.400');
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const [lineWidths, setLineWidths] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const startSentinelRef = useRef<HTMLDivElement>(null);
  const endSentinelRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, experiences.length);
  }, []);

  useEffect(() => {
    const calculateLineWidths = () => {
      const newWidths = experiences.slice(0, -1).map((_, index) => {
        if (cardRefs.current[index] && cardRefs.current[index + 1]) {
          return cardRefs.current[index]!.offsetWidth / 2 + 
                 cardRefs.current[index + 1]!.offsetWidth / 2 + 32;
        }
        return 320; // Default width for initial render
      });
      setLineWidths(newWidths);
    };

    calculateLineWidths();
    window.addEventListener('resize', calculateLineWidths);
    
    // Recalculate after a short delay to ensure proper rendering
    const timeout = setTimeout(calculateLineWidths, 100);

    return () => {
      window.removeEventListener('resize', calculateLineWidths);
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const startSentinel = startSentinelRef.current;
    const endSentinel = endSentinelRef.current;

    if (container && startSentinel && endSentinel) {
      const options = {
        root: container,
        threshold: 1.0,
      };

      const startObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          setCanScrollLeft(!entry.isIntersecting);
        });
      }, options);

      const endObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          setCanScrollRight(!entry.isIntersecting);
        });
      }, options);

      startObserver.observe(startSentinel);
      endObserver.observe(endSentinel);

      return () => {
        startObserver.disconnect();
        endObserver.disconnect();
      };
    }
  }, []);

  return (
    <Box id="experience" py={12} bg={useColorModeValue('gray.50', 'gray.900')}>
      <Container maxW="container.xl">
        <VStack spacing={6} align="stretch">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Heading size="2xl" mb={4}>
              Experience
            </Heading>
            <Text fontSize="xl" color={textColor}>
              My professional journey in technology
            </Text>
          </MotionBox>

          <Box position="relative">
            {/* Navigation Controls */}
            <IconButton
              aria-label="Scroll left"
              icon={<FiChevronLeft size={24} />}
              position="absolute"
              left={0}
              top="160px"
              zIndex={2}
              display={['flex', null, 'flex']}
              rounded="full"
              size="lg"
              colorScheme="blue"
              variant="ghost"
              isDisabled={!canScrollLeft}
              opacity={canScrollLeft ? 1 : 0.3}
              onClick={() => {
                if (containerRef.current) {
                  const scrollAmount = window.innerWidth < 768 ? -288 : -300;
                  containerRef.current.scrollBy({ 
                    left: scrollAmount, 
                    behavior: 'smooth' 
                  });
                }
              }}
              _hover={{
                bg: ['transparent', null, 'blue.50']
              }}
              _active={{
                bg: ['transparent', null, 'blue.100']
              }}
              _focus={{
                boxShadow: 'none'
              }}
              sx={{
                WebkitTapHighlightColor: 'transparent',
                '-webkit-tap-highlight-color': 'transparent',
                '&:disabled': {
                  backgroundColor: 'transparent !important'
                }
              }}
            />

            <IconButton
              aria-label="Scroll right"
              icon={<FiChevronRight size={24} />}
              position="absolute"
              right={0}
              top="160px"
              zIndex={2}
              display={['flex', null, 'flex']}
              rounded="full"
              size="lg"
              colorScheme="blue"
              variant="ghost"
              isDisabled={!canScrollRight}
              opacity={canScrollRight ? 1 : 0.3}
              onClick={() => {
                if (containerRef.current) {
                  const scrollAmount = window.innerWidth < 768 ? 288 : 300;
                  containerRef.current.scrollBy({ 
                    left: scrollAmount, 
                    behavior: 'smooth' 
                  });
                }
              }}
              _hover={{
                bg: ['transparent', null, 'blue.50']
              }}
              _active={{
                bg: ['transparent', null, 'blue.100']
              }}
              _focus={{
                boxShadow: 'none'
              }}
              sx={{
                WebkitTapHighlightColor: 'transparent',
                '-webkit-tap-highlight-color': 'transparent',
                '&:disabled': {
                  backgroundColor: 'transparent !important'
                }
              }}
            />

            {/* Timeline Container */}
            <Box
              ref={containerRef}
              id="timeline-scroll"
              overflowX="auto"
              mx={[4, null, 12]}
              sx={{
                scrollSnapType: ['x mandatory', null, 'none'],
                scrollBehavior: 'smooth',
                '&::-webkit-scrollbar': {
                  display: 'none',
                },
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              <Box position="relative" px={6} py={12}>
                <HStack spacing={8} minW="max-content" position="relative">
                  {/* Sentinel for detecting start */}
                  <Box
                    ref={startSentinelRef}
                    position="absolute"
                    left={0}
                    top="50%"
                    width="1px"
                    height="1px"
                    visibility="hidden"
                  />

                  {experiences.map((exp, index) => (
                    <MotionBox
                      key={`${exp.company}-${exp.startDate}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      position="relative"
                      minW="280px"
                      sx={{
                        scrollSnapAlign: ['center', null, 'none'],
                        scrollSnapStop: ['always', null, 'none'],
                        '& .timeline-line': {
                          transition: 'transform 0.3s',
                        }
                      }}
                      ref={el => cardRefs.current[index] = el as HTMLElement}
                    >
                      {/* Horizontal Timeline Line */}
                      {index < experiences.length - 1 && (
                        <Box
                          position="absolute"
                          bottom="32px"
                          left="50%"
                          height="3px"
                          bg={timelineColor}
                          zIndex={2}
                          className="timeline-line"
                          sx={{
                            width: `${lineWidths[index] || 320}px`,
                            transform: 'none',
                          }}
                        />
                      )}

                      {/* Card */}
                      <Box
                        bg={bgColor}
                        p={6}
                        borderRadius="xl"
                        boxShadow="lg"
                        borderWidth="1px"
                        borderColor={borderColor}
                        mb={16}
                        position="relative"
                        transition="all 0.3s"
                        className="experience-card"
                        zIndex={1}
                        _hover={{
                          transform: 'translateY(-8px)',
                          boxShadow: '2xl',
                          '& + .timeline-line, & ~ .timeline-node': {
                            transform: 'translateY(-8px)',
                          },
                        }}
                      >
                        <VStack spacing={4} align="start">
                          <Box 
                            borderRadius="xl"
                            overflow="hidden" 
                            w="64px" 
                            h="64px"
                            bg="white"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            boxShadow="sm"
                            p={2}
                          >
                            <Image
                              src={exp.logo}
                              alt={`${exp.company} logo`}
                              objectFit="contain"
                              w="100%"
                              h="100%"
                              loading="eager"
                            />
                          </Box>
                          
                          <VStack align="start" spacing={2}>
                            <Text fontWeight="bold" fontSize="lg" lineHeight="short">
                              {exp.title}
                            </Text>
                            <Text color={timelineColor} fontWeight="semibold">
                              {exp.company}
                            </Text>
                            <Text fontSize="sm" color={textColor}>
                              {exp.location}
                            </Text>
                          </VStack>

                          <Badge 
                            colorScheme="blue" 
                            px={3} 
                            py={1} 
                            borderRadius="full"
                            fontSize="sm"
                          >
                            {exp.startDate} - {exp.endDate}
                          </Badge>
                        </VStack>

                        {/* Connecting Line */}
                        <Box
                          position="absolute"
                          bottom="-32px"
                          left="50%"
                          transform="translateX(-50%)"
                          width="3px"
                          height="32px"
                          bg={timelineColor}
                          zIndex={2}
                        />

                        {/* Timeline Node */}
                        <Box
                          position="absolute"
                          bottom="12px"
                          left="50%"
                          transform="translate(-50%, 50%)"
                          width="16px"
                          height="16px"
                          borderRadius="full"
                          bg={timelineColor}
                          boxShadow={`0 0 0 4px ${bgColor}`}
                          zIndex={3}
                          className="timeline-node"
                          transition="transform 0.3s"
                        >
                          {/* Pulse Animation */}
                          <Box
                            position="absolute"
                            top="50%"
                            left="50%"
                            transform="translate(-50%, -50%)"
                            width="24px"
                            height="24px"
                            borderRadius="full"
                            border="2px solid"
                            borderColor={timelineColor}
                            opacity={0.3}
                            animation="pulse 2s infinite"
                            sx={{
                              '@keyframes pulse': {
                                '0%': {
                                  transform: 'translate(-50%, -50%) scale(1)',
                                  opacity: 0.3,
                                },
                                '70%': {
                                  transform: 'translate(-50%, -50%) scale(2)',
                                  opacity: 0,
                                },
                                '100%': {
                                  transform: 'translate(-50%, -50%) scale(1)',
                                  opacity: 0,
                                },
                              },
                            }}
                          />
                        </Box>
                      </Box>
                    </MotionBox>
                  ))}

                  {/* Sentinel for detecting end */}
                  <Box
                    ref={endSentinelRef}
                    position="absolute"
                    right={0}
                    top="50%"
                    width="1px"
                    height="1px"
                    visibility="hidden"
                  />
                </HStack>
              </Box>
            </Box>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Experience; 