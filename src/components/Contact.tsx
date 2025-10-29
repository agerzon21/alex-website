import { Box, Container, Heading, Icon, Link, Text, useColorModeValue, VStack, SimpleGrid } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const MotionBox = motion(Box);

const Contact = () => {
  const textColor = useColorModeValue('gray.600', 'gray.400');

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/agerzon21', label: 'GitHub', color: 'gray.700' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/gerzon', label: 'LinkedIn', color: 'blue.600' },
    { icon: FaEnvelope, href: 'mailto:alex@gerz.dev', label: 'Email', color: 'red.500' },
  ];

  return (
    <Box id="contact" py={20} bg={useColorModeValue('gray.50', 'gray.900')}>
      <Container maxW="container.xl">
        <VStack spacing={12}>
          {/* Header */}
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
            <Text fontSize="xl" color={textColor} maxW="700px">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </Text>
          </MotionBox>

          {/* Social Links Grid */}
          <MotionBox
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            w="100%"
            maxW="700px"
          >
            <Box
              bg={useColorModeValue('white', 'gray.800')}
              p={10}
              borderRadius="2xl"
              boxShadow="xl"
            >
              <SimpleGrid columns={3} spacing={8}>
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
                      _hover={{ textDecoration: 'none' }}
                    >
                      <VStack
                        spacing={3}
                        p={4}
                        borderRadius="lg"
                        transition="all 0.3s"
                        _hover={{ 
                          transform: 'translateY(-8px)',
                          bg: useColorModeValue('gray.50', 'gray.700')
                        }}
                      >
                        <Icon
                          as={social.icon}
                          boxSize={12}
                          color={social.color}
                        />
                        <Text 
                          fontSize="md" 
                          fontWeight="semibold"
                          color={textColor}
                        >
                          {social.label}
                        </Text>
                      </VStack>
                    </Link>
                  </MotionBox>
                ))}
              </SimpleGrid>
            </Box>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  );
};

export default Contact; 