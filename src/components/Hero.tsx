import { Box, Container, Heading, Text, VStack, Image } from '@chakra-ui/react';
import { motion, Variants } from 'framer-motion';

const floatingAnimation: Variants = {
  animate: {
    y: [0, -20, 0],
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

const Hero = () => {
  return (
    <Box width="100%">
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
      >
        <Container maxW="container.xl">
          <VStack spacing={8} align="center">
            <motion.div
              variants={floatingAnimation}
              initial="animate"
              animate="animate"
            >
              <Box
                borderRadius="full"
                overflow="hidden"
                boxSize="200px"
                boxShadow="2xl"
              >
                <Image
                  src="https://res.cloudinary.com/dmi9nfhqa/image/upload/v1744736526/profile_voc2kq.jpg"
                  alt="Alex Gerzon"
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  style={{
                    transform: 'scale(1.2) translateX(5px)'
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
              </Box>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Heading
                size="2xl"
                textAlign="center"
              >
                Hi, I'm Alex Gerzon
              </Heading>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <Text
                fontSize="xl"
                textAlign="center"
                maxW="600px"
              >
                Welcome to my personal website. I'm passionate about technology, design, and creating amazing digital experiences.
              </Text>
            </motion.div>
          </VStack>
        </Container>
      </MotionBox>
    </Box>
  );
};

export default Hero; 