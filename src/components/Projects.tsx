import { Box, Container, SimpleGrid, Heading, Image, Text, useColorModeValue, VStack, Skeleton, Flex, Tag } from '@chakra-ui/react';
import { motion } from 'framer-motion';
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
      'https://res.cloudinary.com/dmi9nfhqa/image/upload/v1744730838/main_ruiknu.png',
      'https://res.cloudinary.com/dmi9nfhqa/image/upload/v1744730837/2_xazb5x.png',
      'https://res.cloudinary.com/dmi9nfhqa/image/upload/v1744730843/1_hjbgwx.png',
      'https://res.cloudinary.com/dmi9nfhqa/image/upload/v1744730843/3_cdss5x.png',
      'https://res.cloudinary.com/dmi9nfhqa/image/upload/v1744730844/4_dybpxq.png'
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
    images: [
      'https://res.cloudinary.com/dmi9nfhqa/image/upload/v1744736107/main_qtzsd3.png'
    ],
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
      transition="all 0.3s"
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
          style={{
            transform: 'scale(1)',
            transition: 'transform 0.3s'
          }}
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
      transition="all 0.3s"
    >
      {/* Base image */}
      <Image
        src={project.images[0]}
        alt={`${project.title} preview`}
        objectFit="cover"
        w="100%"
        h="100%"
        style={{
          transform: 'scale(1)',
          transition: 'transform 0.3s'
        }}
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
        style={{
          transform: 'scale(1)',
          transition: 'transform 0.3s'
        }}
      >
        <Image
          src={project.images[0]}
          alt=""
          objectFit="cover"
          w="100%"
          h="100%"
          style={{
            transform: 'scale(1)',
            transition: 'transform 0.3s'
          }}
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
  const { project } = props;
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <MotionBox
      bg={bgColor}
      rounded="lg"
      shadow="md"
      overflow="hidden"
      whileHover={{ 
        y: -5,
        scale: 1.02
      }}
      transition={{ duration: 0.2 }}
      cursor="pointer"
      h="100%"
      display="flex"
      flexDirection="column"
      style={{
        willChange: 'transform'
      }}
    >
      {project.hasCarousel ? (
        <CarouselPreview project={project} />
      ) : (
        <StaticPreview project={project} />
      )}

      <Box p={6} flex="1" display="flex" flexDirection="column">
        <Box mb={4}>
          <Heading
            fontSize={{ base: "lg", md: "xl" }}
            mb={2}
            display="flex"
            alignItems="center"
            gap={2}
          >
            {project.title}
          </Heading>
          <Text
            fontSize={{ base: "sm", md: "md" }}
            color={textColor}
            mb={4}
            noOfLines={{ base: 2, md: 3 }}
          >
            {project.description}
          </Text>
        </Box>

        <Flex 
          wrap="wrap" 
          gap={2} 
          mt="auto"
          mb={2}
        >
          {project.tech.map((tech, index) => (
            <Tag
              key={index}
              size="sm"
              variant="subtle"
              colorScheme="blue"
              fontSize={{ base: "xs", md: "sm" }}
            >
              {tech}
            </Tag>
          ))}
        </Flex>
      </Box>
    </MotionBox>
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
                  boxShadow: '0 4px 24px rgba(0,0,0,0.16)',
                  borderColor: 'transparent',
                  cursor: 'pointer',
                }}
                style={{
                  transition: 'all 0.3s'
                }}
                onClick={() => setSelectedProject(project)}
              >
                <ProjectPreview project={project} />
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