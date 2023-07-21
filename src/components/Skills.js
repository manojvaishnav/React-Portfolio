import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Card,
  CardBody,
  Flex,
  Button,
  ButtonGroup,
  Center,
} from "@chakra-ui/react";
import { Fade } from "react-awesome-reveal";
import { useState } from "react";
import SkillsArray from "./DataArray/SkillsArray";

export default function Skills({ color }) {
  const skills = SkillsArray;
  const options = ["Web Technology", "Programming", "Tools & Software"];
  const [selected, setSelected] = useState(0);

  const handleSelected = (value) => {
    setSelected(value);
  };

  return (
    <>
      <Container maxW={"3xl"} id="skills">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" px={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                03
              </Text>
              <Text fontWeight={800}>Skills</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Center px={4}>
            <ButtonGroup
              variant="outline"
              display={"flex"}
              flexWrap={"wrap"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              {options.map((option, index) => (
                <Button
                  colorScheme={selected === index ? `${color}` : "gray"}
                  onClick={() => handleSelected(index)}
                  mb={"10px"}
                >
                  {option}
                </Button>
              ))}
            </ButtonGroup>
          </Center>
          <Stack px={4} spacing={4}>
            <Fade bottom>
              <Card size="sm">
                <CardBody>
                  <Flex
                    flexWrap={"wrap"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    {skills[selected].name.map((value, index) => {
                      return (
                        <Button disabled margin={"10px"}>
                          {value}
                        </Button>
                      );
                    })}
                  </Flex>
                </CardBody>
              </Card>
            </Fade>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
