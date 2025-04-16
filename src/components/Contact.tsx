import { Box, Container, Heading, HStack, Icon, Link, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const MotionBox = motion(Box);

const Contact = () => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.400');

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/agerzon21', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/gerzon', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:agerzon21@gmail.com', label: 'Email' },
  ];

  return (
    <Box id="contact" py={12}>
      <Container maxW="container.xl">
        <VStack spacing={12} align="center">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            textAlign="center"
          >
            <Heading size="2xl" mb={4}>
              Get in Touch
            </Heading>
            <Text fontSize="xl" color={textColor} maxW="600px">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </Text>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            w="100%"
            maxW="600px"
          >
            <Box
              bg={bgColor}
              p={8}
              borderRadius="2xl"
              boxShadow="xl"
              position="relative"
              overflow="hidden"
            >
              <Box
                position="absolute"
                top="-50%"
                right="-50%"
                w="200%"
                h="200%"
                bg="linear-gradient(45deg, transparent 0%, rgba(66, 153, 225, 0.1) 100%)"
                transform="rotate(45deg)"
              />
              <VStack spacing={8} position="relative" zIndex={1}>
                <HStack spacing={8} wrap="wrap" justify="center">
                  {socialLinks.map((social, index) => (
                    <MotionBox
                      key={social.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Link
                        href={social.href}
                        isExternal
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        _hover={{ transform: 'translateY(-5px)' }}
                        transition="all 0.3s"
                      >
                        <Icon
                          as={social.icon}
                          w={8}
                          h={8}
                          color="blue.500"
                          mb={2}
                        />
                        <Text fontSize="sm" color={textColor}>
                          {social.label}
                        </Text>
                      </Link>
                    </MotionBox>
                  ))}
                </HStack>
              </VStack>
            </Box>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  );
};

export default Contact; 