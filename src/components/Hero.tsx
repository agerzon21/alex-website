import { Box, Container, Heading, Text, VStack, Image, HStack, IconButton, Button } from '@chakra-ui/react';
import { motion, Variants } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const glowAnimation = {
  animate: {
    boxShadow: [
      '0 0 20px rgba(255, 255, 255, 0.3), 0 0 40px rgba(66, 153, 225, 0.2)',
      '0 0 30px rgba(255, 255, 255, 0.5), 0 0 60px rgba(66, 153, 225, 0.4)',
      '0 0 20px rgba(255, 255, 255, 0.3), 0 0 40px rgba(66, 153, 225, 0.2)',
    ],
    scale: [1, 1.02, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const fadeInUp: Variants = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 }
};

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box width="100%" position="relative" overflow="hidden">
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        bgGradient="linear(to-br, purple.500, blue.500)"
        minH="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="white"
        position="relative"
      >
        {/* Floating Particles Background */}
        {[...Array(20)].map((_, i) => (
          <MotionBox
            key={i}
            position="absolute"
            borderRadius="full"
            bg="whiteAlpha.200"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear",
            }}
            width={`${Math.random() * 6 + 2}px`}
            height={`${Math.random() * 6 + 2}px`}
            opacity={0.3}
          />
        ))}

        <Container maxW="container.xl" position="relative" zIndex={1}>
          <VStack spacing={8} align="center">
            {/* Profile Image */}
            <MotionBox
              borderRadius="full"
              overflow="hidden"
              boxSize="200px"
              border="4px solid"
              borderColor="whiteAlpha.400"
              variants={glowAnimation}
              initial="animate"
              animate="animate"
            >
                <Image
                  src="/images/optimized/profile.JPG"
                  alt="Alex Gerzon"
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  style={{
                    transform: 'scale(1.2) translate(5px, 15px)'
                  }}
                  loading="eager"
                  decoding="async"
                  fallback={
                    <Box
                      w="100%"
                      h="100%"
                      bg="gray.200"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Text color="gray.500">Loading...</Text>
                    </Box>
                  }
                />
            </MotionBox>

            {/* Animated Gradient Name */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <MotionHeading
                size="2xl"
                textAlign="center"
                bgGradient="linear(to-r, white, cyan.200, white)"
                bgClip="text"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                sx={{
                  backgroundSize: '200% auto',
                }}
              >
                Hi, I'm Alex Gerzon
              </MotionHeading>
            </motion.div>

            {/* Description */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                textAlign="center"
                maxW="900px"
                color="whiteAlpha.900"
                px={4}
                whiteSpace={{ base: "normal", md: "nowrap" }}
              >
                SAP Work Zone & SuccessFactors Lead | Generative AI Automation | Full-Stack Developer
              </Text>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              <HStack spacing={4}>
                <IconButton
                  as="a"
                  href="https://linkedin.com/in/gerzon"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  icon={<FaLinkedin size={24} />}
                  size="lg"
                  rounded="full"
                  bg="whiteAlpha.200"
                  color="white"
                  _hover={{
                    bg: "whiteAlpha.300",
                    transform: "translateY(-4px)",
                    boxShadow: "xl",
                  }}
                  transition="all 0.3s"
                />
                <IconButton
                  as="a"
                  href="https://github.com/alexgerzon"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  icon={<FaGithub size={24} />}
                  size="lg"
                  rounded="full"
                  bg="whiteAlpha.200"
                  color="white"
                  _hover={{
                    bg: "whiteAlpha.300",
                    transform: "translateY(-4px)",
                    boxShadow: "xl",
                  }}
                  transition="all 0.3s"
                />
                <IconButton
                  as="a"
                  href="mailto:alex@gerz.dev"
                  aria-label="Email"
                  icon={<FaEnvelope size={24} />}
                  size="lg"
                  rounded="full"
                  bg="whiteAlpha.200"
                  color="white"
                  _hover={{
                    bg: "whiteAlpha.300",
                    transform: "translateY(-4px)",
                    boxShadow: "xl",
                  }}
                  transition="all 0.3s"
                />
              </HStack>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.3, delay: 0.8 }}
            >
              <HStack spacing={4} flexWrap="wrap" justify="center">
                <Button
                  size="lg"
                  bg="white"
                  color="purple.600"
                  _hover={{
                    transform: "translateY(-4px)",
                    boxShadow: "xl",
                    bg: "whiteAlpha.900",
                  }}
                  onClick={() => scrollToSection('projects')}
                  transition="all 0.3s"
                  fontWeight="bold"
                >
                  Personal Projects
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  borderColor="white"
                  color="white"
                  _hover={{
                    bg: "whiteAlpha.200",
                    transform: "translateY(-4px)",
                    boxShadow: "xl",
                  }}
                  onClick={() => scrollToSection('about')}
                  transition="all 0.3s"
                  fontWeight="bold"
                >
                  Work Experience
                </Button>
              </HStack>
            </motion.div>
          </VStack>
        </Container>
      </MotionBox>
    </Box>
  );
};

export default Hero; 