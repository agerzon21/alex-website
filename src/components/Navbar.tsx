import { Box, Container, Flex, useColorModeValue, Link, Image, Text } from '@chakra-ui/react';
import { motion, useScroll } from 'framer-motion';
import { useState, useEffect } from 'react';

const MotionBox = motion(Box);
const MotionText = motion(Text);

const Navbar = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  
  const bgColor = useColorModeValue(
    'rgba(255, 255, 255, 0.85)',
    'rgba(26, 32, 44, 0.85)'
  );
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const textColor = useColorModeValue('gray.700', 'gray.300');
  const hoverColor = useColorModeValue('blue.500', 'blue.300');

  useEffect(() => {
    const unsubscribe = scrollY.onChange((y: number) => {
      setIsScrolled(y > 20);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const leftNavItems = ['About', 'Skills'];
  const rightNavItems = ['Projects', 'Contact'];

  const NavLink = ({ label }: { label: string }) => (
    <Box
      position="relative"
      cursor="pointer"
      onClick={() => scrollToSection(label.toLowerCase())}
      mx={3}
      display="flex"
      alignItems="center"
    >
      <MotionBox
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
      >
        <MotionText
          color={textColor}
          fontSize="15px"
          fontWeight="500"
          whileHover={{ color: hoverColor }}
          transition={{ duration: 0.2 }}
        >
          {label}
        </MotionText>
        <Box
          position="absolute"
          bottom="-1px"
          left={0}
          right={0}
          height="2px"
          _before={{
            content: '""',
            position: "absolute",
            left: 0,
            bottom: 0,
            height: "100%",
            width: 0,
            bg: hoverColor,
            transition: "width 0.3s ease",
          }}
          _groupHover={{
            _before: {
              width: "100%"
            }
          }}
        />
      </MotionBox>
    </Box>
  );

  return (
    <MotionBox
      as="nav"
      position="fixed"
      w="100%"
      bg={bgColor}
      backdropFilter="blur(8px)"
      boxShadow={isScrolled ? 'sm' : 'none'}
      borderBottom="1px"
      borderColor={isScrolled ? borderColor : 'transparent'}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      zIndex={1000}
      h="70px"
      style={{
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
      }}
    >
      <Container maxW="container.xl" h="100%">
        <Flex justify="center" align="center" position="relative" h="100%">
          {/* Left Navigation */}
          <Flex position="absolute" left="32%" h="100%" align="center">
            {leftNavItems.map((label, index) => (
              <Flex key={label} align="center" role="group">
                <NavLink label={label} />
                {index < leftNavItems.length - 1 && (
                  <Box
                    h="4"
                    w="1px"
                    bg="gray.300"
                    mx={3}
                  />
                )}
              </Flex>
            ))}
          </Flex>

          {/* Centered Logo */}
          <MotionBox
            initial={{ rotate: 0 }}
            whileHover={{ 
              scale: 1.05,
              rotate: [0, -2, 2, -2, 0]
            }}
            transition={{
              scale: { duration: 0.2 },
              rotate: { 
                duration: 0.5,
                ease: "easeInOut"
              }
            }}
          >
            <Link href="/" _hover={{ textDecoration: 'none' }}>
              <Image
                src="/images/main-logo.svg"
                alt="Alex Gerzon Logo"
                h="45px"
                w="auto"
                objectFit="contain"
              />
            </Link>
          </MotionBox>

          {/* Right Navigation */}
          <Flex position="absolute" right="30%" h="100%" align="center">
            {rightNavItems.map((label, index) => (
              <Flex key={label} align="center" role="group">
                <NavLink label={label} />
                {index < rightNavItems.length - 1 && (
                  <Box
                    h="4"
                    w="1px"
                    bg="gray.300"
                    mx={3}
                  />
                )}
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Container>
    </MotionBox>
  );
};

export default Navbar; 