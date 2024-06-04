import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { Fade } from "react-reveal";

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
            columns={{ base: 1, sm: 2, md: 3, xl: 4 }}
            gap={"10px"}>
            <Box>
              <Image
                {...css.image}
                src="https://nivakgroup.com/construction/wp-content/uploads/2022/04/04web-768x432.jpg"
              />
              <Text {...css.text}>FLORYA RESIDENCES</Text>
            </Box>
            <Box>
              <Image
                {...css.image}
                src="https://nivakgroup.com/construction/wp-content/uploads/2022/05/kayasehir-790x400.jpg"
              />
              <Text {...css.text}>FLORYA RESIDENCES</Text>
            </Box>
            <Box>
              <Image
                {...css.image}
                src="https://nivakgroup.com/construction/wp-content/uploads/2022/04/05-1-768x543.jpg"
              />
              <Text {...css.text}>FLORYA RESIDENCES</Text>
            </Box>
            <Box>
              <Image
                {...css.image}
                src="https://nivakgroup.com/construction/wp-content/uploads/2022/04/04-768x543.jpg"
              />
              <Text {...css.text}>FLORYA RESIDENCES</Text>
            </Box>
            <Box>
              <Image
                {...css.image}
                src="https://nivakgroup.com/construction/wp-content/uploads/2022/04/02-1-463x400.jpg"
              />
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
      base: "30px",
      md: "30px",
      xl: "45px",
    },
    lineHeight: "55px",
    letterSpacing: "1px",
    gap: "10px",
  },
  image: {
    height: "230px",
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
