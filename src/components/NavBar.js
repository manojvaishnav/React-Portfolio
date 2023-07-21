import {
  Flex,
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useColorModeValue,
  Stack,
  useColorMode,
  IconButton,
  useMediaQuery,
  useDisclosure,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  PopoverBody,
  Box,
  PopoverCloseButton,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useState } from "react";

export default function Nav({ onSelectColor }) {
  const [scroll, setScroll] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isLargerThanMD] = useMediaQuery("(min-width: 48em)");
  const scrollToHero = () => {
    const heroSection = document.querySelector("#hero");
    heroSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToExperience = () => {
    const experienceSection = document.querySelector("#education");
    experienceSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToProjects = () => {
    const projectsSection = document.querySelector("#projects");
    projectsSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToSkills = () => {
    const skillsSection = document.querySelector("#skills");
    skillsSection.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };
  const changeScroll = () =>
    document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
      ? setScroll(true)
      : setScroll(false);

  window.addEventListener("scroll", changeScroll);

  const colors = [
    "teal",
    "blue",
    "cyan",
    "green",
    "orange",
    "pink",
    "purple",
    "red",
    "yellow",
  ];

  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const handleTheme = (item) => {
    setSelectedColor(item);
    onSelectColor(item);
  };

  return (
    <>
      <Flex
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        h={16}
        boxShadow={scroll ? "base" : "none"}
        zIndex="sticky"
        position="fixed"
        as="header"
        alignItems={"center"}
        justifyContent={"space-between"}
        w="100%"
      >
        <Link
          style={{ fontWeight: "600", color: selectedColor }}
          onClick={scrollToHero}
        >
          Portfolio
        </Link>

        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7}>
            {isLargerThanMD ? (
              <>
                <Button variant="ghost" onClick={scrollToAbout}>
                  About
                </Button>
                <Button variant="ghost" onClick={scrollToExperience}>
                  Education
                </Button>
                <Button variant="ghost" onClick={scrollToSkills}>
                  Skills
                </Button>
                <Button variant="ghost" onClick={scrollToProjects}>
                  Projects
                </Button>
                <Button variant="ghost" onClick={scrollToContact}>
                  Contact
                </Button>
                <Popover>
                  <PopoverTrigger>
                    <Button>Theme</Button>
                  </PopoverTrigger>
                  <PopoverContent bg="gray.500" color="white">
                    <PopoverHeader fontWeight="semibold">
                      Customization
                    </PopoverHeader>
                    <PopoverArrow bg="pink.500" />
                    <PopoverCloseButton bg="purple.500" />
                    <PopoverBody>
                      <Box display={"flex"} flexWrap={"wrap"} gap={"20px"}>
                        {colors.map((item) => (
                          <span
                            key={item}
                            style={{
                              backgroundColor: item,
                              height: "25px",
                              width: "25px",
                              borderRadius: "50%",
                              cursor: "pointer",
                            }}
                            onClick={() => handleTheme(item)}
                          />
                        ))}
                      </Box>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </>
            ) : (
              <></>
            )}
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>

            {isLargerThanMD ? (
              <></>
            ) : (
              <>
                <Button
                  as={IconButton}
                  icon={<HamburgerIcon />}
                  onClick={onOpen}
                ></Button>
                <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
                  <DrawerOverlay />
                  <DrawerContent>
                    <DrawerBody>
                      <Button variant="ghost" onClick={scrollToAbout}>
                        About
                      </Button>
                      <Button variant="ghost" onClick={scrollToExperience}>
                        Education
                      </Button>
                      <Button variant="ghost" onClick={scrollToSkills}>
                        Skills
                      </Button>
                      <Button variant="ghost" onClick={scrollToProjects}>
                        Projects
                      </Button>
                      <Button variant="ghost" onClick={scrollToContact}>
                        Contact
                      </Button>
                      <Popover>
                        <PopoverTrigger>
                          <Button>Theme</Button>
                        </PopoverTrigger>
                        <PopoverContent bg="gray.500" color="white">
                          <PopoverHeader fontWeight="semibold">
                            Customization
                          </PopoverHeader>
                          <PopoverArrow bg="pink.500" />
                          <PopoverCloseButton bg="purple.500" />
                          <PopoverBody>
                            <Box
                              display={"flex"}
                              flexWrap={"wrap"}
                              gap={"20px"}
                            >
                              {colors.map((item) => (
                                <span
                                  key={item}
                                  style={{
                                    backgroundColor: item,
                                    height: "25px",
                                    width: "25px",
                                    borderRadius: "50%",
                                    cursor: "pointer",
                                  }}
                                  onClick={() => handleTheme(item)}
                                />
                              ))}
                            </Box>
                          </PopoverBody>
                        </PopoverContent>
                      </Popover>
                    </DrawerBody>
                  </DrawerContent>
                </Drawer>
              </>
            )}
          </Stack>
        </Flex>
      </Flex>
    </>
  );
}
