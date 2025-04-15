import { Box, Container, SimpleGrid, Heading, Image, Link, Text, useColorModeValue, VStack, Icon, Tooltip, Skeleton } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaLock } from 'react-icons/fa';
import ProjectModal from './ProjectModal';
import { useState, useEffect } from 'react';

const MotionBox = motion(Box);
const MotionImage = motion(Image);

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live: string;
  images: string[];
  hasCarousel?: boolean;
  isPrivate?: boolean;
  stats?: {
    performance?: string;
    features?: string[];
    impact?: string;
  };
}

const projects: Project[] = [
  {
    title: 'Vero Photography',
    description: 'A professional photography portfolio website showcasing stunning visual work',
    tech: ['React', 'TypeScript', 'Chakra UI'],
    github: 'https://github.com/agerzon21/veronica-website',
    live: 'https://vero.photography',
    images: [
      '/projects/veronica-photography/optimized/main.png',
      '/projects/veronica-photography/optimized/1.png',
      '/projects/veronica-photography/optimized/2.png',
      '/projects/veronica-photography/optimized/3.png',
      '/projects/veronica-photography/optimized/4.png'
    ],
    hasCarousel: true,
    isPrivate: false,
    stats: {
      performance: '99% Lighthouse Score',
      features: ['Responsive Gallery', 'Contact Form', 'SEO Optimization'],
      impact: 'Increased client inquiries by 300%'
    }
  },
  {
    title: 'GrumpyShib',
    description: 'Co-led development of the world\'s first altruism cryptocurrency platform, utilizing blockchain technology to support decentralized fundraising initiatives. Managed cloud infrastructure to ensure scalability and security.',
    tech: ['React', 'TypeScript', 'Chakra UI', 'Blockchain', 'Cloud Infrastructure'],
    live: 'https://grumpyshib.com',
    images: ['/projects/grumpyshib/optimized/main.png'],
    hasCarousel: false,
    isPrivate: true,
    stats: {
      performance: '99.99% Uptime',
      features: ['Blockchain Integration', 'Secure Transactions', 'Real-time Updates'],
      impact: 'Reduced transaction costs by 40%'
    }
  }
];

const CarouselPreview = ({ project }: { project: Project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
      }, 3000);

      return () => clearInterval(timer);
    }
  }, [isPaused, project.images.length]);

  const handleImageLoad = (src: string) => {
    setLoadedImages(prev => {
      const newSet = new Set(prev);
      newSet.add(src);
      return newSet;
    });
    if (loadedImages.size === project.images.length - 1) {
      setIsLoading(false);
    }
  };

  return (
    <Box
      h="200px"
      bg="gray.100"
      position="relative"
      overflow="hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {project.images.map((image, index) => (
        <MotionImage
          key={image}
          src={image}
          alt={`${project.title} preview ${index + 1}`}
          objectFit="cover"
          w="100%"
          h="100%"
          position="absolute"
          top={0}
          left={0}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: index === currentImageIndex ? 1 : 0,
            zIndex: index === currentImageIndex ? 1 : 0
          }}
          transition={{ 
            duration: 0.8,
            ease: "easeInOut",
            opacity: { duration: 0.5 }
          }}
          onLoad={() => handleImageLoad(image)}
          loading={index === 0 ? "eager" : "lazy"}
        />
      ))}
      {isLoading && (
        <Skeleton
          position="absolute"
          top={0}
          left={0}
          w="100%"
          h="100%"
        />
      )}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="linear-gradient(to bottom, rgba(0,0,0,0.05), rgba(0,0,0,0.15))"
      />
    </Box>
  );
};

const StaticPreview = ({ project }: { project: Project }) => {
  return (
    <Box
      h="200px"
      position="relative"
      overflow="hidden"
    >
      {/* Base image */}
      <Image
        src={project.images[0]}
        alt={`${project.title} preview`}
        objectFit="cover"
        w="100%"
        h="100%"
      />
      
      {/* Main glitch effect */}
      <MotionBox
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        animate={{
          x: [0, -8, 8, -4, 0],
          filter: [
            'hue-rotate(0deg)',
            'hue-rotate(-20deg) saturate(150%)',
            'hue-rotate(15deg) saturate(200%)',
            'hue-rotate(-10deg) saturate(125%)',
            'hue-rotate(0deg)'
          ]
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatDelay: 5,
          times: [0, 0.2, 0.4, 0.6, 1]
        }}
      >
        <Image
          src={project.images[0]}
          alt=""
          objectFit="cover"
          w="100%"
          h="100%"
        />
      </MotionBox>

      {/* Quick glitch overlay */}
      <MotionBox
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        animate={{
          opacity: [0, 0.8, 0],
          x: [0, -15, 15, 0],
          clipPath: [
            'inset(0% 0% 0% 0%)',
            'inset(20% -20% 30% 0%)',
            'inset(50% 0% 20% 0%)',
            'inset(0% 0% 0% 0%)'
          ]
        }}
        transition={{
          duration: 0.4,
          repeat: Infinity,
          repeatDelay: 5,
          times: [0, 0.2, 0.4, 1]
        }}
      >
        <Image
          src={project.images[0]}
          alt=""
          objectFit="cover"
          w="100%"
          h="100%"
          style={{
            filter: 'hue-rotate(90deg) saturate(200%) brightness(1.2)'
          }}
        />
      </MotionBox>

      {/* Subtle scan line */}
      <MotionBox
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        initial={{ scaleY: 0 }}
        animate={{
          scaleY: [0, 1],
          opacity: [0, 0.03, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatDelay: 3
        }}
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, white 50%, transparent 100%)',
          transformOrigin: 'top',
        }}
      />

      {/* Overlay gradient */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="linear-gradient(to bottom, rgba(0,0,0,0.05), rgba(0,0,0,0.2))"
      />
    </Box>
  );
};

const ProjectPreview = (props: { project: Project }) => {
  return props.project.hasCarousel ? (
    <CarouselPreview project={props.project} />
  ) : (
    <StaticPreview project={props.project} />
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const cardBg = useColorModeValue('white', 'gray.800');
  const cardBorder = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box 
      id="projects" 
      py={20} 
      bg="gray.50"
      position="relative"
      zIndex={1}
    >
      <Container maxW="container.xl">
        <VStack spacing={12} align="stretch">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Heading size="2xl" mb={4}>
              Featured Projects
            </Heading>
            <Text fontSize="xl" color="gray.600">
              A selection of my recent work
            </Text>
          </MotionBox>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            {projects.map((project, index) => (
              <MotionBox
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                bg={cardBg}
                borderRadius="lg"
                overflow="hidden"
                border="1px"
                borderColor={cardBorder}
                _hover={{
                  transform: 'translateY(-5px)',
                  boxShadow: 'lg',
                  cursor: 'pointer'
                }}
                style={{
                  transition: 'all 0.3s'
                }}
                onClick={() => setSelectedProject(project)}
              >
                <ProjectPreview project={project} />
                <Box p={6} position="relative" minH="250px">
                  <Box position="absolute" bottom={6} left={6} right={6}>
                    <Box display="flex" flexWrap="wrap" gap={2} mb={4}>
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
                    </Box>
                    <Box display="flex" gap={4}>
                      {project.isPrivate ? (
                        <Tooltip label="Private Repository" placement="top">
                          <Box display="flex" alignItems="center" gap={2}>
                            <Icon as={FaLock} w={5} h={5} color="gray.500" />
                            <Text fontSize="sm" color="gray.500">Private</Text>
                          </Box>
                        </Tooltip>
                      ) : (
                        <Link href={project.github} isExternal>
                          <Icon as={FaGithub} w={5} h={5} />
                        </Link>
                      )}
                      <Link href={project.live} isExternal>
                        <Icon as={FaExternalLinkAlt} w={5} h={5} />
                      </Link>
                    </Box>
                  </Box>
                  <Box pb="100px">
                    <Heading size="md" mb={2}>
                      {project.title}
                    </Heading>
                    <Text color="gray.600">
                      {project.description}
                    </Text>
                  </Box>
                </Box>
              </MotionBox>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject || projects[0]}
      />
    </Box>
  );
};

export default Projects; 