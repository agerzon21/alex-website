import React, { useState, useEffect, useRef } from 'react';
import { Box, Flex, useColorModeValue, useMediaQuery, Image } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCompact] = useMediaQuery('(max-width: 1024px)');
  const bgColor = useColorModeValue(
    'rgba(255, 255, 255, 0.85)',
    'rgba(26, 32, 44, 0.85)'
  );

  // Store the initial scroll position
  const scrollPosition = useRef(0);

  const lockScroll = () => {
    scrollPosition.current = window.pageYOffset;
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPosition.current}px`;
    document.body.style.width = '100%';
  };

  const unlockScroll = () => {
    document.body.style.removeProperty('overflow');
    document.body.style.removeProperty('position');
    document.body.style.removeProperty('top');
    document.body.style.removeProperty('width');
    window.scrollTo(0, scrollPosition.current);
  };

  useEffect(() => {
    if (isMenuOpen) {
      lockScroll();
    } else {
      unlockScroll();
    }

    // Cleanup function to ensure scroll is unlocked when component unmounts
    return () => {
      if (document.body.style.position === 'fixed') {
        unlockScroll();
      }
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false); // This will trigger the useEffect to unlock scroll
    
    // Small delay to ensure scroll is unlocked before scrolling
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else if (id === 'hero') {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    }, 10);
  };

  return (
    <>
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={1000}
        bg={isMenuOpen ? 'black' : bgColor}
        transition="background-color 0.3s ease"
        backdropFilter="blur(6px)"
        boxShadow="0 2px 6px rgba(0,0,0,0.18)"
      >
        <Flex
          maxW="1600px"
          mx="auto"
          px={10}
          py={2.5}
          justify="center"
          align="center"
          position="relative"
          h="70px"
        >
          {!isCompact && (
            <Flex position="absolute" left="30%" align="center" gap={6}>
              <Box
                as="button"
                color="gray.800"
                fontSize="15px"
                fontWeight="500"
                onClick={() => scrollToSection('about')}
                _hover={{ color: 'blue.500' }}
                _focus={{ outline: 'none' }}
                _active={{ outline: 'none' }}
              >
                About
              </Box>
              <Box h="4" w="0.5px" bg="gray.400" opacity={0.5} />
              <Box
                as="button"
                color="gray.800"
                fontSize="15px"
                fontWeight="500"
                onClick={() => scrollToSection('experience')}
                _hover={{ color: 'blue.500' }}
                _focus={{ outline: 'none' }}
                _active={{ outline: 'none' }}
              >
                Experience
              </Box>
            </Flex>
          )}

          {/* Logo */}
          <Box 
            as="button"
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation();
              scrollToSection('hero');
            }}
            _focus={{ outline: 'none' }}
            _active={{ outline: 'none', bg: 'transparent' }}
            _hover={{ bg: 'transparent' }}
            mx="auto"
            userSelect="none"
            position="relative"
            zIndex={1002}
            sx={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <Image
              src={isCompact ? "/images/main-logo@2x.png" : "/images/main-logo.svg"}
              alt="Alex Gerzon Logo"
              h={{ base: "46px", md: "45px" }}
              w="auto"
              objectFit="contain"
              filter={isMenuOpen ? "brightness(0) invert(1)" : "none"}
              transition="filter 0.3s ease"
              userSelect="none"
              loading="eager"
              style={{
                imageRendering: 'auto',
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale'
              }}
              draggable={false}
            />
          </Box>

          {!isCompact && (
            <Flex position="absolute" right="30%" align="center" gap={6}>
              <Box
                as="button"
                color="gray.800"
                fontSize="15px"
                fontWeight="500"
                onClick={() => scrollToSection('projects')}
                _hover={{ color: 'blue.500' }}
                _focus={{ outline: 'none' }}
                _active={{ outline: 'none' }}
              >
                Projects
              </Box>
              <Box h="4" w="0.5px" bg="gray.400" opacity={0.5} />
              <Box
                as="button"
                color="gray.800"
                fontSize="15px"
                fontWeight="500"
                onClick={() => scrollToSection('contact')}
                _hover={{ color: 'blue.500' }}
                _focus={{ outline: 'none' }}
                _active={{ outline: 'none' }}
              >
                Contact
              </Box>
            </Flex>
          )}

          {/* Burger Menu */}
          {isCompact && (
            <Box
              position="absolute"
              right={4}
              cursor="pointer"
              onClick={toggleMenu}
              zIndex={1001}
              color={isMenuOpen ? "white" : "currentColor"}
              transition="color 0.3s ease"
              w="24px"
              h="18px"
              _focus={{ outline: 'none' }}
              _active={{ outline: 'none', bg: 'transparent' }}
              _hover={{ bg: 'transparent' }}
              tabIndex={-1}
              userSelect="none"
              sx={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <Box
                position="absolute"
                top="0"
                w="24px"
                h="2px"
                bg="currentColor"
                transformOrigin="center"
                transform={isMenuOpen ? 'translateY(8px) rotate(45deg)' : 'none'}
                transition="transform 0.3s ease"
                userSelect="none"
              />
              <Box
                position="absolute"
                top="8px"
                w="24px"
                h="2px"
                bg="currentColor"
                opacity={isMenuOpen ? 0 : 1}
                transition="all 0.3s ease"
                userSelect="none"
              />
              <Box
                position="absolute"
                top="16px"
                w="24px"
                h="2px"
                bg="currentColor"
                transformOrigin="center"
                transform={isMenuOpen ? 'translateY(-8px) rotate(-45deg)' : 'none'}
                transition="transform 0.3s ease"
                userSelect="none"
              />
            </Box>
          )}
        </Flex>
      </Box>

      {/* Full Screen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'black',
              zIndex: 999,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
              touchAction: 'none',
              overflowY: 'hidden'
            }}
          >
            {/* Mobile menu items */}
            {['About', 'Experience', 'Projects', 'Contact'].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ 
                  delay: 0.2 + index * 0.1,
                  duration: 0.3
                }}
                style={{
                  position: 'relative',
                  zIndex: 1000
                }}
              >
                <Box
                  color="white"
                  fontSize="xl"
                  fontWeight="medium"
                  textAlign="center"
                  cursor="pointer"
                  mb={index < 3 ? 4 : 0}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  _focus={{ outline: 'none' }}
                  _active={{ outline: 'none', bg: 'transparent' }}
                  _hover={{ bg: 'transparent' }}
                  userSelect="none"
                  sx={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  {item}
                </Box>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar; 