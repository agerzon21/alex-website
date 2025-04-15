import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Image,
  Box,
  Link,
  VStack,
  HStack,
  useColorModeValue,
  SimpleGrid,
  Icon,
  Badge,
  Divider
} from '@chakra-ui/react';
import { FaGithub, FaExternalLinkAlt, FaLock, FaRocket, FaShieldAlt, FaChartLine } from 'react-icons/fa';
import { motion } from 'framer-motion';

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

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="4xl" isCentered>
      <ModalOverlay />
      <ModalContent
        bg={bgColor}
        borderRadius={{ base: '2xl', md: 'xl' }}
        overflow="hidden"
        as={motion.div}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        position="relative"
        zIndex={1}
        mx={{ base: 2, md: 0 }}
        w={{ base: '95vw', md: 'auto' }}
        minW={0}
      >
        <ModalHeader 
          fontSize="2xl" 
          fontWeight="bold"
          position="sticky"
          top={0}
          bg={bgColor}
          zIndex={2}
          borderBottom="1px"
          borderColor={useColorModeValue('gray.200', 'gray.700')}
        >
          {project.title}
        </ModalHeader>
        <ModalCloseButton
          zIndex={3}
          top={{ base: '16px', md: '20px' }}
          right={{ base: '16px', md: '24px' }}
          size={{ base: 'lg', md: 'md' }}
          w={{ base: '40px', md: '32px' }}
          h={{ base: '40px', md: '32px' }}
          borderRadius="full"
          bg={{ base: 'whiteAlpha.800', md: 'transparent' }}
          _hover={{ bg: 'whiteAlpha.900' }}
          _focus={{ boxShadow: 'none', outline: 'none' }}
        />
        <ModalBody pb={8} position="relative" zIndex={1} px={{ base: 2, md: 8 }}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            <VStack spacing={6} align="stretch">
              <Text color={textColor} fontSize="lg">
                {project.description}
              </Text>
              
              {project.stats && (
                <VStack spacing={4} align="stretch">
                  <Box>
                    <HStack mb={2}>
                      <Icon as={FaShieldAlt} color="green.500" />
                      <Text fontWeight="bold">Performance</Text>
                    </HStack>
                    <Badge colorScheme="green" fontSize="md" p={2} borderRadius="md">
                      {project.stats.performance}
                    </Badge>
                  </Box>

                  <Box>
                    <HStack mb={2}>
                      <Icon as={FaRocket} color="blue.500" />
                      <Text fontWeight="bold">Key Features</Text>
                    </HStack>
                    <SimpleGrid columns={2} spacing={2}>
                      {project.stats.features?.map((feature) => (
                        <Badge key={feature} colorScheme="blue" p={2} borderRadius="md">
                          {feature}
                        </Badge>
                      ))}
                    </SimpleGrid>
                  </Box>

                  <Box>
                    <HStack mb={2}>
                      <Icon as={FaChartLine} color="purple.500" />
                      <Text fontWeight="bold">Impact</Text>
                    </HStack>
                    <Badge colorScheme="purple" fontSize="md" p={2} borderRadius="md">
                      {project.stats.impact}
                    </Badge>
                  </Box>
                </VStack>
              )}

              <Divider />

              <Box>
                <Text fontWeight="bold" mb={2}>Technologies Used</Text>
                <HStack spacing={2} wrap="wrap">
                  {project.tech.map((tech) => (
                    <Text
                      key={tech}
                      fontSize="sm"
                      color="blue.500"
                      bg="blue.50"
                      px={2}
                      py={1}
                      borderRadius="md"
                    >
                      {tech}
                    </Text>
                  ))}
                </HStack>
              </Box>

              <HStack spacing={2}>
                {project.isPrivate ? (
                  <>
                    <Icon as={FaLock} color="gray.500" />
                    <Text color="gray.500">Private Repository</Text>
                  </>
                ) : (
                  <Link href={project.github} isExternal>
                    <HStack spacing={2}>
                      <Icon as={FaGithub} w={5} h={5} />
                      <Text>View Source Code</Text>
                    </HStack>
                  </Link>
                )}
              </HStack>
            </VStack>

            <VStack spacing={4} align="stretch">
              <Box position="relative" h="300px" borderRadius="lg" overflow="hidden">
                <Image
                  src={project.title === 'Vero Photography' 
                    ? 'https://res.cloudinary.com/dmi9nfhqa/image/upload/v1744730845/screenshot-main_x8eg1w.png'
                    : project.title === 'GrumpyShib'
                    ? 'https://res.cloudinary.com/dmi9nfhqa/image/upload/v1744736106/screenshot-main_qfqdih.png'
                    : `/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}/optimized/screenshot-main.png`}
                  alt={`${project.title} screenshot`}
                  objectFit="cover"
                  w="100%"
                  h="100%"
                  loading="eager"
                  transition="all 0.3s ease-in-out"
                  style={{
                    filter: 'blur(0px)',
                  }}
                  _loading={{
                    opacity: 0.7,
                    style: {
                      filter: 'blur(10px)',
                    }
                  }}
                  fallback={
                    <Box
                      w="100%"
                      h="300px"
                      bg="gray.100"
                      borderRadius="lg"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Text color="gray.500">Loading image...</Text>
                    </Box>
                  }
                />
              </Box>
              <SimpleGrid columns={2} spacing={4}>
                <Box position="relative" h="150px" borderRadius="lg" overflow="hidden">
                  <Image
                    src={project.title === 'Vero Photography'
                      ? 'https://res.cloudinary.com/dmi9nfhqa/image/upload/v1744730840/screenshot-1_ek1hhn.png'
                      : project.title === 'GrumpyShib'
                      ? 'https://res.cloudinary.com/dmi9nfhqa/image/upload/v1744736106/screenshot-1_aaacjv.png'
                      : `/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}/optimized/screenshot-1.png`}
                    alt={`${project.title} screenshot 1`}
                    objectFit="cover"
                    w="100%"
                    h="100%"
                    loading="lazy"
                    transition="all 0.3s ease-in-out"
                    style={{
                      filter: 'blur(0px)',
                    }}
                    _loading={{
                      opacity: 0.7,
                      style: {
                        filter: 'blur(10px)',
                      }
                    }}
                    fallback={
                      <Box
                        w="100%"
                        h="150px"
                        bg="gray.100"
                        borderRadius="lg"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Text color="gray.500">Loading image...</Text>
                      </Box>
                    }
                  />
                </Box>
                <Box position="relative" h="150px" borderRadius="lg" overflow="hidden">
                  <Image
                    src={project.title === 'Vero Photography'
                      ? 'https://res.cloudinary.com/dmi9nfhqa/image/upload/v1744730840/screenshot-2_erbqrm.png'
                      : project.title === 'GrumpyShib'
                      ? 'https://res.cloudinary.com/dmi9nfhqa/image/upload/v1744736106/screenshot-2_xooeut.png'
                      : `/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}/optimized/screenshot-2.png`}
                    alt={`${project.title} screenshot 2`}
                    objectFit="cover"
                    w="100%"
                    h="100%"
                    loading="lazy"
                    transition="all 0.3s ease-in-out"
                    style={{
                      filter: 'blur(0px)',
                    }}
                    _loading={{
                      opacity: 0.7,
                      style: {
                        filter: 'blur(10px)',
                      }
                    }}
                    fallback={
                      <Box
                        w="100%"
                        h="150px"
                        bg="gray.100"
                        borderRadius="lg"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Text color="gray.500">Loading image...</Text>
                      </Box>
                    }
                  />
                </Box>
              </SimpleGrid>
              <Button
                as={Link}
                href={project.live}
                isExternal
                colorScheme="blue"
                size="lg"
                rightIcon={<FaExternalLinkAlt />}
              >
                Visit Website
              </Button>
            </VStack>
          </SimpleGrid>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ProjectModal; 