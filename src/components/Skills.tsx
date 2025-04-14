import { Box, Container, Heading, Text, VStack, Progress, SimpleGrid } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const skills = [
  { name: 'React', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'JavaScript', level: 90 },
  { name: 'HTML/CSS', level: 95 },
  { name: 'Node.js', level: 80 },
  { name: 'Python', level: 75 },
  { name: 'Git', level: 85 },
  { name: 'UI/UX Design', level: 70 },
];

const Skills = () => {
  return (
    <Box id="skills" py={20}>
      <Container maxW="container.xl">
        <VStack spacing={12} align="stretch">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Heading size="2xl" mb={4}>
              Skills & Technologies
            </Heading>
            <Text fontSize="xl" color="gray.600">
              Here are some of the technologies and tools I work with
            </Text>
          </MotionBox>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            {skills.map((skill, index) => (
              <MotionBox
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Text mb={2}>{skill.name}</Text>
                <Progress
                  value={skill.level}
                  colorScheme="blue"
                  size="sm"
                  borderRadius="full"
                />
              </MotionBox>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Skills; 