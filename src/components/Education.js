import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Card,
  CardHeader,
  CardBody,
  Flex,
  Image,
  List,
  ListItem,
  ListIcon,
  Button,
  ButtonGroup,
  Center,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Fade } from "react-awesome-reveal";
import { useState } from "react";
import EducationArray from "./DataArray/EducationArray";

export default function Education({ color }) {
  const education = EducationArray;
  const options = ["Graduation", "12th", "10th"];
  const [selected, setSelected] = useState(0);

  const handleSelected = (value) => {
    setSelected(value);
  };

  return (
    <>
      <Container maxW={"3xl"} id="education">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" px={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                02
              </Text>
              <Text fontWeight={800}>Education</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Center px={4}>
            <ButtonGroup variant="outline">
              {options.map((option, index) => (
                <Button
                  colorScheme={selected === index ? `${color}` : "gray"}
                  onClick={() => handleSelected(index)}
                >
                  {option}
                </Button>
              ))}
            </ButtonGroup>
          </Center>
          <Stack px={4} spacing={4}>
            <Fade bottom>
              <Card key={education[selected].name} size="sm">
                <CardHeader>
                  <Flex justifyContent="space-between">
                    <HStack>
                      <Image src={education[selected].image} h={50} />
                      <Box px={2} align="left">
                        <Text fontWeight={600}>{education[selected].name}</Text>
                        <Text>{education[selected].position}</Text>
                      </Box>
                    </HStack>
                    <Text px={2} fontWeight={300}>
                      {education[selected].duration}
                    </Text>
                  </Flex>
                </CardHeader>
                <CardBody>
                  <Flex>
                    <List align="left" spacing={3}>
                      {education[selected].listItems.map((item, index) => (
                        <ListItem key={index}>
                          <ListIcon
                            boxSize={6}
                            as={ChevronRightIcon}
                            color={`${color}.500`}
                          />
                          {item}
                        </ListItem>
                      ))}
                    </List>
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
