import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Image,
  Box,
  Link,
  VStack,
  HStack,
  Flex,
  useColorModeValue,
  SimpleGrid,
  Icon,
  Tag
} from '@chakra-ui/react';
import { FaGithub, FaExternalLinkAlt, FaLock } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    tech: string[];
    github?: string;
    live: string;
    isPrivate?: boolean;
    images?: string[];
    isMobile?: boolean;
    previewStyle?: string;
    previewBg?: string;
    logoSrc?: string;
    stats?: {
      performance?: string;
      features?: string[];
      impact?: string;
    };
  };
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.400');
  const subtleColor = useColorModeValue('gray.50', 'gray.700');

  const renderHero = () => {
    // Mobile app (SpySocial) - phone mockups
    if (project.isMobile) {
      return (
        <Box
          bg="linear-gradient(145deg, #4c1d95 0%, #6d28d9 40%, #7c3aed 100%)"
          py={8}
          px={4}
        >
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={3} maxW="600px" mx="auto">
            {project.images?.slice(0, 4).map((img, idx) => (
              <Box
                key={idx}
                bg="gray.900"
                borderRadius="20px"
                p="5px"
                boxShadow="0 8px 24px rgba(0,0,0,0.3)"
              >
                <Box borderRadius="16px" overflow="hidden" h={{ base: "160px", md: "220px" }}>
                  <Image
                    src={img}
                    alt={`${project.title} screenshot ${idx + 1}`}
                    objectFit="cover"
                    w="100%"
                    h="100%"
                    loading={idx === 0 ? "eager" : "lazy"}
                  />
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      );
    }

    // Dashboard-style (DuoTrackr) - branded hero with logo
    if (project.previewStyle === 'dashboard') {
      return (
        <Box
          bg={project.previewBg || 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'}
          py={12}
          px={6}
          position="relative"
          overflow="hidden"
        >
          {/* Animated grid background */}
          <Box position="absolute" top="0" left="0" right="0" bottom="0" opacity={0.08}>
            {[...Array(5)].map((_, i) => (
              <Box
                key={`h-${i}`}
                position="absolute"
                left="0"
                right="0"
                top={`${(i + 1) * 18}%`}
                h="1px"
                bg="blue.400"
              />
            ))}
            {[...Array(7)].map((_, i) => (
              <Box
                key={`v-${i}`}
                position="absolute"
                top="0"
                bottom="0"
                left={`${(i + 1) * 13}%`}
                w="1px"
                bg="blue.400"
              />
            ))}
          </Box>

          {/* Glow */}
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            w="300px"
            h="300px"
            borderRadius="full"
            bg="blue.500"
            opacity={0.06}
            filter="blur(80px)"
          />

          {/* Floating mini stat cards */}
          <Flex justify="center" gap={4} mb={6} position="relative" zIndex={1} flexWrap="wrap">
            {[
              { label: 'Followers', value: '+247', color: 'green.400' },
              { label: 'Active Tasks', value: '12', color: 'blue.400' },
              { label: 'Follow Rate', value: '68%', color: 'purple.400' },
            ].map((stat) => (
              <MotionBox
                key={stat.label}
                bg="whiteAlpha.100"
                borderRadius="lg"
                px={4}
                py={3}
                backdropFilter="blur(8px)"
                border="1px solid"
                borderColor="whiteAlpha.100"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 2 }}
              >
                <Text fontSize="10px" color="gray.400" fontFamily="mono" textTransform="uppercase" letterSpacing="0.05em">
                  {stat.label}
                </Text>
                <Text fontSize="lg" color={stat.color} fontWeight="bold" fontFamily="mono">
                  {stat.value}
                </Text>
              </MotionBox>
            ))}
          </Flex>

          {/* Logo centered */}
          <Flex justify="center" position="relative" zIndex={1}>
            <Image
              src={project.logoSrc || project.images?.[0]}
              alt={`${project.title} logo`}
              maxH="45px"
              maxW="200px"
              objectFit="contain"
              filter="drop-shadow(0 2px 8px rgba(0,0,0,0.4))"
            />
          </Flex>
        </Box>
      );
    }

    // Default - screenshot hero
    return (
      <Box position="relative">
        <Box h={{ base: "200px", md: "280px" }} overflow="hidden" bg="gray.100">
          <Image
            src={project.images?.[0]}
            alt={`${project.title} screenshot`}
            objectFit="cover"
            w="100%"
            h="100%"
            loading="eager"
          />
        </Box>
        {project.images && project.images.length > 1 && (
          <SimpleGrid columns={Math.min(project.images.length - 1, 3)} spacing={1} mt={1}>
            {project.images.slice(1, 4).map((img, idx) => (
              <Box key={idx} h="90px" overflow="hidden" bg="gray.100">
                <Image
                  src={img}
                  alt={`${project.title} screenshot ${idx + 2}`}
                  objectFit="cover"
                  w="100%"
                  h="100%"
                  loading="lazy"
                />
              </Box>
            ))}
          </SimpleGrid>
        )}
      </Box>
    );
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="3xl" isCentered scrollBehavior="inside">
      <ModalOverlay bg="blackAlpha.700" backdropFilter="blur(4px)" />
      <ModalContent
        bg={bgColor}
        borderRadius="xl"
        overflow="hidden"
        as={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        mx={{ base: 3, md: 0 }}
        w={{ base: '95vw', md: 'auto' }}
        maxH="90vh"
      >
        <ModalCloseButton
          zIndex={3}
          top={3}
          right={3}
          size="sm"
          borderRadius="full"
          bg={project.previewStyle === 'dashboard' || project.isMobile ? 'whiteAlpha.200' : useColorModeValue('gray.100', 'gray.700')}
          color={project.previewStyle === 'dashboard' || project.isMobile ? 'white' : undefined}
          _hover={{
            bg: project.previewStyle === 'dashboard' || project.isMobile ? 'whiteAlpha.300' : useColorModeValue('gray.200', 'gray.600')
          }}
          _focus={{ boxShadow: 'none' }}
        />
        <ModalBody p={0}>
          {renderHero()}

          {/* Content */}
          <Box px={{ base: 5, md: 8 }} py={6}>
            {/* Title + links row */}
            <Flex
              justify="space-between"
              align={{ base: "start", md: "center" }}
              mb={4}
              flexWrap="wrap"
              gap={3}
              direction={{ base: "column", md: "row" }}
            >
              <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="700" letterSpacing="-0.02em">
                {project.title}
              </Text>
              <HStack spacing={2}>
                {project.isPrivate ? (
                  <HStack spacing={1.5} color="gray.400" fontSize="sm">
                    <Icon as={FaLock} boxSize={3.5} />
                    <Text>Private</Text>
                  </HStack>
                ) : project.github ? (
                  <Button
                    as={Link}
                    href={project.github}
                    isExternal
                    size="sm"
                    variant="ghost"
                    leftIcon={<FaGithub />}
                    fontWeight="500"
                    _hover={{ textDecoration: 'none', bg: subtleColor }}
                  >
                    Source
                  </Button>
                ) : null}
                <Button
                  as={Link}
                  href={project.live}
                  isExternal
                  size="sm"
                  colorScheme="gray"
                  bg="gray.900"
                  color="white"
                  leftIcon={<FaExternalLinkAlt size={12} />}
                  fontWeight="500"
                  _hover={{ textDecoration: 'none', bg: 'gray.700' }}
                >
                  Visit
                </Button>
              </HStack>
            </Flex>

            {/* Description */}
            <Text color={textColor} fontSize={{ base: "sm", md: "md" }} lineHeight="1.75" mb={5}>
              {project.description}
            </Text>

            {/* Stats */}
            {project.stats && (
              <Box
                bg={subtleColor}
                borderRadius="lg"
                p={{ base: 4, md: 5 }}
                mb={5}
              >
                <Flex gap={{ base: 4, md: 8 }} flexWrap="wrap">
                  {project.stats.performance && (
                    <VStack align="start" spacing={0.5}>
                      <Text fontSize="xs" color="gray.400" fontWeight="600" textTransform="uppercase" letterSpacing="0.05em">
                        Performance
                      </Text>
                      <Text fontSize="sm" fontWeight="600">
                        {project.stats.performance}
                      </Text>
                    </VStack>
                  )}
                  {project.stats.impact && (
                    <VStack align="start" spacing={0.5}>
                      <Text fontSize="xs" color="gray.400" fontWeight="600" textTransform="uppercase" letterSpacing="0.05em">
                        Impact
                      </Text>
                      <Text fontSize="sm" fontWeight="600">
                        {project.stats.impact}
                      </Text>
                    </VStack>
                  )}
                  {project.stats.features && (
                    <VStack align="start" spacing={0.5}>
                      <Text fontSize="xs" color="gray.400" fontWeight="600" textTransform="uppercase" letterSpacing="0.05em">
                        Key Features
                      </Text>
                      <HStack spacing={1.5} flexWrap="wrap">
                        {project.stats.features.map((f, i) => (
                          <Text key={f} fontSize="sm" fontWeight="500">
                            {f}{i < project.stats!.features!.length - 1 ? ' ·' : ''}
                          </Text>
                        ))}
                      </HStack>
                    </VStack>
                  )}
                </Flex>
              </Box>
            )}

            {/* Tech tags */}
            <Flex wrap="wrap" gap={2} pb={2}>
              {project.tech.map((tech) => (
                <Tag
                  key={tech}
                  size="md"
                  variant="subtle"
                  colorScheme="gray"
                  borderRadius="md"
                  fontSize="sm"
                >
                  {tech}
                </Tag>
              ))}
            </Flex>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ProjectModal;
