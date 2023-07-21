import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Button,
  Card,
  CardBody,
  Image,
  Heading,
  SimpleGrid,
  Link,
} from "@chakra-ui/react";
import { Fade } from "react-awesome-reveal";
import OtherProjectsArray from "./DataArray/OtherProjectsArray";
import ProjectArray from "./DataArray/ProjectsArray";

export default function Projects({ color }) {
  const others = OtherProjectsArray;
  const projects = ProjectArray;

  return (
    <>
      <Container maxW={"3xl"} id="projects">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" p={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                04
              </Text>
              <Text fontWeight={800}>Projects</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Stack px={4} spacing={4}>
            {projects.map((project) => (
              <Fade bottom>
                <Card
                  key={project.name}
                  direction={{
                    base: "column",
                  }}
                  overflow="hidden"
                >
                  <Image objectFit="cover" src={project.image} />

                  <Stack>
                    <CardBody align="left">
                      <Heading size="md">{project.name}</Heading>

                      <Text py={2}>{project.description}</Text>

                      <HStack py={2}>
                        {project.buttons.map((button) => (
                          <a key={button.text} href={button.href}>
                            <Button color={`${color}.400`}>
                              {button.text}
                            </Button>
                          </a>
                        ))}
                      </HStack>
                    </CardBody>
                  </Stack>
                </Card>
              </Fade>
            ))}
          </Stack>
          <Text color={"gray.600"} fontSize={"xl"} px={4}>
            Other Projects
          </Text>
          <SimpleGrid columns={[1, 2, 3]} px={4} spacing={4}>
            {others.map((value, index) => (
              <Fade bottom>
                <Card key={index}>
                  <Stack>
                    <CardBody align="left" h={[null, "40vh"]}>
                      <Heading size="sm">{value.name}</Heading>

                      <Text fontSize="sm" py={2}>
                        {value.techstack}
                      </Text>

                      <HStack spacing={2}>
                        {value.links.map((link) => (
                          <Link
                            key={link.text}
                            href={link.href}
                            color={`${color}.400`}
                          >
                            {link.text}
                          </Link>
                        ))}
                      </HStack>
                    </CardBody>
                  </Stack>
                </Card>
              </Fade>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </>
  );
}
