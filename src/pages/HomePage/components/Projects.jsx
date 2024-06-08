import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { Fade } from "react-reveal";
import ProjectOne from "../../../assets/project1.jpg";
import ProjectTwo from "../../../assets/project2.jpg";
import ZaraHome from "../../../assets/image2.png";
import ZaraHome1 from "../../../assets/image3.png";
import Swiss from "../../../assets/image4.png";

function Projects() {
  return (
    <Box {...css.box}>
      <Box className="container">
        <Heading color={"#110D60"} {...css.name}>
          REAL ESTATE{" "}
          <Heading color={"#EDCB3F"} {...css.name}>
            PROJECTS
          </Heading>{" "}
        </Heading>
        <Fade bottom>
          <SimpleGrid
            mt={"30px"}
            columns={{ base: 1, sm: 2 }}
            gap={"10px"}>
            <Box>
              <Image {...css.image} src={'https://avatars.mds.yandex.net/get-altay/1595534/2a0000016dabf5e33e43247ed7850cb5acbb/orig'} />
              <Text {...css.text}>FLORYA RESIDENCES</Text>
            </Box>
            <Box>
              <Image {...css.image} src={ZaraHome} />
              <Text {...css.text}>FLORYA RESIDENCES</Text>
            </Box>
            <Box>
              <Image {...css.image} src={ZaraHome1} />
              <Text {...css.text}>FLORYA RESIDENCES</Text>
            </Box>
            <Box>
              <Image {...css.image} src={Swiss} />
              <Text {...css.text}>FLORYA RESIDENCES</Text>
            </Box>
            <Box>
              <Image {...css.image} src={ProjectOne} />
              <Text {...css.text}>FLORYA RESIDENCES</Text>
            </Box>
          </SimpleGrid>
        </Fade>
      </Box>
    </Box>
  );
}

export default Projects;

const css = {
  box: {
    padding: "35px 0",
  },
  name: {
    display: "flex",
    alignItems: "center",
    fontSize: {
      base: "25px",
      md: "30px",
      xl: "45px",
    },
    lineHeight: {
      base: "30px",
      md: "55px",
    },
    letterSpacing: "1px",
    gap: "10px",
  },
  image: {
    height: "400px",
    objectFit: "cover",
    width: "100%",
  },
  text: {
    textAlign: "center",
    margin: "10px 0",
    fontSize: "20px",
    lineHeight: "25px",
    letterSpacing: "1px",
    color: "#110D60",
    fontWeight: "600",
  },
};
