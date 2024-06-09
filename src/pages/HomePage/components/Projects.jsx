import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { Fade } from "react-reveal";
import ZaraHome from "../../../assets/image2.png";
import Swiss from "../../../assets/image4.png";
import Project3 from "../../../assets/image1.png";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();
  return (
    <Box id="project" {...css.box}>
      <Box className="container">
        <Heading color={"#110D60"} {...css.name}>
          {t("REAL ESTATE")}{" "}
          <Heading color={"#EDCB3F"} {...css.name}>
            {t("PROJECTS")}
          </Heading>{" "}
        </Heading>
        <Fade bottom>
          <SimpleGrid
            mt={"30px"}
            columns={{ base: 1, sm: 2, md: 3 }}
            gap={"30px"}>
            <Box>
              <Image {...css.image} src={ZaraHome} />
              <Text {...css.text}>FLORYA RESIDENCES</Text>
            </Box>
            <Box>
              <Image {...css.image} src={Swiss} />
              <Text {...css.text}>FLORYA RESIDENCES</Text>
            </Box>
            <Box>
              <Image {...css.image} src={Project3} />
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
    height: "350px",
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
