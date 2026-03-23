import { Box, Container, SimpleGrid, Heading, Image, Text, useColorModeValue, VStack, Skeleton, Flex, Tag, HStack } from '@chakra-ui/react';
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
  isMobile?: boolean;
  previewStyle?: 'mobile' | 'carousel' | 'static' | 'dashboard';
  previewBg?: string;
  logoSrc?: string;
  stats?: {
    performance?: string;
    features?: string[];
    impact?: string;
  };
}

const projects: Project[] = [
  {
    title: 'DuoTrackr',
    description: 'A Duolingo community growth automation platform with smart follow management, analytics dashboards, task scheduling, and AI-powered social engagement. Includes a web dashboard built with Next.js and a Discord bot backend for automated task execution.',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Python', 'Discord.py', 'Tailwind CSS'],
    github: 'https://github.com/agerzon21/duotrackr-web',
    live: 'https://duotrackr.com',
    images: [
      '/projects/duotrackr/logo-full.png'
    ],
    previewStyle: 'dashboard',
    previewBg: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
    logoSrc: '/projects/duotrackr/logo-full.png',
    isPrivate: false,
    stats: {
      performance: 'Real-time Analytics',
      features: ['Smart Follow System', 'Task Scheduler', 'AI Auto-Comments', 'Discord Integration'],
      impact: 'Full-stack automation platform'
    }
  },
  {
    title: 'SpySocial',
    description: 'The ultimate spy party game where everyone plays on their own device. A multiplayer social deduction game with real-time voting, private rooms, and customizable settings.',
    tech: ['React Native', 'TypeScript', 'PLpgSQL', 'Supabase'],
    github: 'https://github.com/agerzon21/spy-social-website',
    live: 'https://spysocial.app',
    images: [
      '/projects/spysocial/1.JPG',
      '/projects/spysocial/2.JPG',
      '/projects/spysocial/3.JPG',
      '/projects/spysocial/4.JPG'
    ],
    previewStyle: 'mobile',
    isPrivate: false,
    isMobile: true,
    stats: {
      performance: '3-21 Players',
      features: ['Real-time Multiplayer', 'Private Rooms', 'Multilingual Support'],
      impact: 'AI-Driven Development'
    }
  },
  {
    title: 'Vero Photography',
    description: 'A professional photography portfolio with dynamic image galleries, smooth animations, and responsive layouts. Built for fast, accessible, and visually captivating client experiences.',
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
    previewStyle: 'carousel',
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
    description: 'Co-led development of an altruism cryptocurrency platform using blockchain technology to support decentralized fundraising initiatives. Managed cloud infrastructure for scalability and security.',
    tech: ['React', 'TypeScript', 'Chakra UI', 'Blockchain'],
    live: 'https://grumpyshib.com',
    images: [
      'https://res.cloudinary.com/dmi9nfhqa/image/upload/v1744736107/main_qtzsd3.png'
    ],
    previewStyle: 'static',
    hasCarousel: false,
    isPrivate: true,
    stats: {
      performance: '99.99% Uptime',
      features: ['Blockchain Integration', 'Secure Transactions', 'Real-time Updates'],
      impact: 'Reduced transaction costs by 40%'
    }
  }
];

/* ─── Browser Window Frame ─── */
const BrowserFrame = ({ children, url }: { children: React.ReactNode; url?: string }) => (
  <Box
    borderRadius="lg"
    overflow="hidden"
    boxShadow="0 8px 32px rgba(0,0,0,0.12)"
    bg="gray.800"
  >
    {/* Title bar */}
    <Flex align="center" px={3} py={2} bg="gray.750" borderBottom="1px solid" borderColor="gray.700">
      <HStack spacing={1.5}>
        <Box w="10px" h="10px" borderRadius="full" bg="red.400" />
        <Box w="10px" h="10px" borderRadius="full" bg="yellow.400" />
        <Box w="10px" h="10px" borderRadius="full" bg="green.400" />
      </HStack>
      {url && (
        <Box
          mx={3}
          flex="1"
          bg="gray.700"
          borderRadius="md"
          px={3}
          py={0.5}
        >
          <Text fontSize="10px" color="gray.400" fontFamily="mono" isTruncated>
            {url}
          </Text>
        </Box>
      )}
    </Flex>
    {/* Content */}
    <Box position="relative" overflow="hidden">
      {children}
    </Box>
  </Box>
);

/* ─── Phone Frame ─── */
const PhoneFrame = ({ children }: { children: React.ReactNode }) => (
  <Box
    bg="gray.900"
    borderRadius="24px"
    p="6px"
    boxShadow="0 8px 24px rgba(0,0,0,0.25)"
    position="relative"
  >
    {/* Notch */}
    <Box
      position="absolute"
      top="6px"
      left="50%"
      transform="translateX(-50%)"
      w="40px"
      h="4px"
      bg="gray.700"
      borderRadius="full"
      zIndex={3}
    />
    <Box
      w="75px"
      h="155px"
      bg="white"
      borderRadius="20px"
      overflow="hidden"
      position="relative"
    >
      {children}
    </Box>
  </Box>
);

/* ─── Dashboard Preview (DuoTrackr) ─── */
const DashboardPreview = ({ project }: { project: Project }) => {
  return (
    <Box h="240px" position="relative" overflow="hidden">
      <BrowserFrame url="duotrackr.com/dashboard">
        <Box
          h="200px"
          bg={project.previewBg || 'gray.900'}
          position="relative"
          overflow="hidden"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {/* Animated dashboard-like background elements */}
          <Box position="absolute" top="0" left="0" right="0" bottom="0" opacity={0.15}>
            {/* Grid lines */}
            {[...Array(6)].map((_, i) => (
              <Box
                key={`h-${i}`}
                position="absolute"
                left="0"
                right="0"
                top={`${(i + 1) * 16}%`}
                h="1px"
                bg="blue.400"
                opacity={0.3}
              />
            ))}
            {[...Array(8)].map((_, i) => (
              <Box
                key={`v-${i}`}
                position="absolute"
                top="0"
                bottom="0"
                left={`${(i + 1) * 12}%`}
                w="1px"
                bg="blue.400"
                opacity={0.3}
              />
            ))}
          </Box>

          {/* Animated chart line */}
          <MotionBox
            position="absolute"
            bottom="20%"
            left="8%"
            right="8%"
            h="40%"
            opacity={0.2}
          >
            <svg width="100%" height="100%" viewBox="0 0 300 100" preserveAspectRatio="none">
              <motion.path
                d="M 0 80 Q 30 60 60 65 T 120 40 T 180 50 T 240 25 T 300 15"
                fill="none"
                stroke="#60a5fa"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
              />
              <motion.path
                d="M 0 90 Q 30 75 60 78 T 120 55 T 180 60 T 240 40 T 300 30"
                fill="none"
                stroke="#34d399"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, delay: 0.5, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
              />
            </svg>
          </MotionBox>

          {/* Floating stat cards */}
          <MotionBox
            position="absolute"
            top="12%"
            left="6%"
            bg="whiteAlpha.100"
            borderRadius="md"
            px={3}
            py={2}
            backdropFilter="blur(8px)"
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            display={{ base: "none", sm: "block" }}
          >
            <Text fontSize="8px" color="gray.400" fontFamily="mono">followers</Text>
            <Text fontSize="14px" color="green.400" fontWeight="bold" fontFamily="mono">+247</Text>
          </MotionBox>

          <MotionBox
            position="absolute"
            top="12%"
            right="6%"
            bg="whiteAlpha.100"
            borderRadius="md"
            px={3}
            py={2}
            backdropFilter="blur(8px)"
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 4, delay: 1, repeat: Infinity, ease: "easeInOut" }}
            display={{ base: "none", sm: "block" }}
          >
            <Text fontSize="8px" color="gray.400" fontFamily="mono">tasks</Text>
            <Text fontSize="14px" color="blue.400" fontWeight="bold" fontFamily="mono">12 active</Text>
          </MotionBox>

          {/* Logo */}
          <MotionBox
            zIndex={2}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={project.logoSrc || project.images[0]}
              alt={`${project.title} logo`}
              maxH="40px"
              maxW="180px"
              objectFit="contain"
              filter="drop-shadow(0 2px 8px rgba(0,0,0,0.4))"
            />
          </MotionBox>
        </Box>
      </BrowserFrame>
    </Box>
  );
};

/* ─── Mobile Preview (SpySocial) ─── */
const MobilePhonePreview = ({ project }: { project: Project }) => {
  const [phoneOneIndex, setPhoneOneIndex] = useState(0);
  const [phoneTwoIndex, setPhoneTwoIndex] = useState(1);

  useEffect(() => {
    const timer1 = setInterval(() => {
      setPhoneOneIndex((prev) => (prev + 2) % project.images.length);
    }, 4000);
    const timer2 = setInterval(() => {
      setPhoneTwoIndex((prev) => {
        const next = (prev + 2) % project.images.length;
        return next === 0 ? 1 : next;
      });
    }, 4000);
    return () => { clearInterval(timer1); clearInterval(timer2); };
  }, [project.images.length]);

  return (
    <Box
      h="240px"
      bg="linear-gradient(145deg, #4c1d95 0%, #6d28d9 40%, #7c3aed 100%)"
      position="relative"
      overflow="hidden"
      display="flex"
      alignItems="center"
      justifyContent="center"
      gap={4}
    >
      {/* Subtle background glow */}
      <Box
        position="absolute"
        w="200px"
        h="200px"
        borderRadius="full"
        bg="whiteAlpha.100"
        filter="blur(60px)"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
      />

      {/* Phone 1 */}
      <MotionBox
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        zIndex={2}
        transform="rotate(-4deg)"
      >
        <PhoneFrame>
          {project.images.map((image, index) => (
            <MotionImage
              key={`p1-${image}`}
              src={image}
              alt={`${project.title} screenshot`}
              objectFit="cover"
              w="100%"
              h="100%"
              position="absolute"
              top={0}
              left={0}
              animate={{ opacity: index === phoneOneIndex ? 1 : 0 }}
              transition={{ duration: 0.6 }}
            />
          ))}
        </PhoneFrame>
      </MotionBox>

      {/* Phone 2 */}
      <MotionBox
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 5, delay: 1.5, repeat: Infinity, ease: "easeInOut" }}
        zIndex={1}
        transform="rotate(4deg)"
        ml={-3}
      >
        <PhoneFrame>
          {project.images.map((image, index) => (
            <MotionImage
              key={`p2-${image}`}
              src={image}
              alt={`${project.title} screenshot`}
              objectFit="cover"
              w="100%"
              h="100%"
              position="absolute"
              top={0}
              left={0}
              animate={{ opacity: index === phoneTwoIndex ? 1 : 0 }}
              transition={{ duration: 0.6 }}
            />
          ))}
        </PhoneFrame>
      </MotionBox>
    </Box>
  );
};

/* ─── Carousel in Browser Frame (Vero Photography) ─── */
const CarouselPreview = ({ project }: { project: Project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [project.images.length]);

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
    <Box h="240px" position="relative" overflow="hidden">
      <BrowserFrame url="vero.photography">
        <Box h="200px" bg="gray.100" position="relative" overflow="hidden">
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
                scale: index === currentImageIndex ? 1 : 1.05,
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              onLoad={() => handleImageLoad(image)}
              loading={index === 0 ? "eager" : "lazy"}
            />
          ))}
          {isLoading && (
            <Skeleton position="absolute" top={0} left={0} w="100%" h="100%" />
          )}
          {/* Image counter */}
          <Box
            position="absolute"
            bottom={2}
            right={3}
            bg="blackAlpha.600"
            borderRadius="full"
            px={2}
            py={0.5}
          >
            <Text fontSize="9px" color="white" fontWeight="500">
              {currentImageIndex + 1} / {project.images.length}
            </Text>
          </Box>
        </Box>
      </BrowserFrame>
    </Box>
  );
};

/* ─── Static in Browser Frame (GrumpyShib) ─── */
const StaticPreview = ({ project }: { project: Project }) => {
  return (
    <Box h="240px" position="relative" overflow="hidden">
      <BrowserFrame url="grumpyshib.com">
        <Box h="200px" position="relative" overflow="hidden">
          <Image
            src={project.images[0]}
            alt={`${project.title} preview`}
            objectFit="cover"
            w="100%"
            h="100%"
          />
        </Box>
      </BrowserFrame>
    </Box>
  );
};

/* ─── Project Card ─── */
const ProjectPreview = (props: { project: Project }) => {
  const { project } = props;
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.500', 'gray.300');
  const borderColor = useColorModeValue('gray.100', 'gray.700');

  return (
    <MotionBox
      bg={bgColor}
      rounded="xl"
      overflow="hidden"
      borderWidth="1px"
      borderColor={borderColor}
      whileHover={{ y: -6, boxShadow: '0 12px 40px rgba(0,0,0,0.1)' }}
      transition={{ duration: 0.25 }}
      cursor="pointer"
      h="100%"
      display="flex"
      flexDirection="column"
    >
      <Box overflow="hidden" position="relative" p={3} pb={0}>
        {project.previewStyle === 'mobile' ? (
          <Box borderRadius="lg" overflow="hidden">
            <MobilePhonePreview project={project} />
          </Box>
        ) : project.previewStyle === 'carousel' ? (
          <CarouselPreview project={project} />
        ) : project.previewStyle === 'dashboard' ? (
          <DashboardPreview project={project} />
        ) : (
          <StaticPreview project={project} />
        )}
      </Box>

      <Box
        p={5}
        pt={4}
        flex="1"
        display="flex"
        flexDirection="column"
        bg={bgColor}
      >
        <Box mb={3}>
          <Heading
            fontSize="lg"
            mb={1.5}
            fontWeight="600"
          >
            {project.title}
          </Heading>
          <Text
            fontSize="sm"
            color={textColor}
            noOfLines={2}
            lineHeight="1.6"
          >
            {project.description}
          </Text>
        </Box>

        <Flex
          wrap="wrap"
          gap={1.5}
          mt="auto"
        >
          {project.tech.map((tech, index) => (
            <Tag
              key={index}
              size="sm"
              variant="subtle"
              colorScheme="gray"
              fontSize="xs"
              borderRadius="md"
            >
              {tech}
            </Tag>
          ))}
        </Flex>
      </Box>
    </MotionBox>
  );
};

/* ─── Projects Section ─── */
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <Box
      id="projects"
      py={20}
      bg={useColorModeValue('white', 'gray.900')}
    >
      <Container maxW="container.lg">
        <VStack spacing={12} align="stretch">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Heading size="xl" mb={2} fontWeight="600" letterSpacing="-0.02em">
              Projects
            </Heading>
            <Text fontSize="md" color="gray.500">
              Recent personal and side projects
            </Text>
          </MotionBox>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            {projects.map((project, index) => (
              <MotionBox
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
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
