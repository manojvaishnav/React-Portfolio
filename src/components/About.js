import { Divider, Stack, Text, Container, Box, HStack } from "@chakra-ui/react";

export default function About({ color }) {
  return (
    <>
      <Container maxW={"3xl"} id="about">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" px={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                01
              </Text>
              <Text fontWeight={800}>About</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Text color={"gray.600"} fontSize={"xl"} px={4}>
            As a prefinal year student pursuing Computer Science at Government
            Engineering College Ajmer, I am a passionate and dedicated
            individual with a strong interest in MERN (MongoDB, Express.js,
            React, and Node.js) stack development. With a solid foundation in
            computer science principles and a keen enthusiasm for web
            development. I am currently seeking internship and full-time
            opportunities to further enhance my skills and contribute to
            real-world projects.
          </Text>
        </Stack>
      </Container>
    </>
  );
}
