import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { Fade } from "react-reveal";
import ZaraHome from "../../../assets/image2.png";
import Swiss from "../../../assets/image4.png";
import Project3 from "../../../assets/image1.png";
import { useTranslation } from "react-i18next";
import Oysho from "../../../assets/oysho.png";
import Stradivarius from "../../../assets/stradivarius.png";
import Kids from "../../../assets/kids.png";
import OyshoOne from "../../../assets/oysho1.png";
import Piquadro from "../../../assets/piquadro.png";
import { ViewIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

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
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={"30px"}>
            <Box>
              <Link to={"/project/1"}>
                <Box {...css.view}>
                  <ViewIcon color={"#fff"} fontSize={"18px"} />
                </Box>
              </Link>
              <Box {...css.new}>New</Box>
              <Image {...css.image} src={ZaraHome} />
              <Text {...css.text}>ZARA HOME</Text>
            </Box>
            <Box>
              <Link to={"/project/2"}>
                <Box {...css.view}>
                  <ViewIcon color={"#fff"} fontSize={"18px"} />
                </Box>
              </Link>
              <Box {...css.new}>New</Box>
              <Image {...css.image} src={Swiss} />
              <Text {...css.text}>SWISS</Text>
            </Box>
            <Box>
              <Link to={"/project/3"}>
                <Box {...css.view}>
                  <ViewIcon fontSize={"18px"} color={"#fff"} />
                </Box>
              </Link>
              <Box {...css.new}>New</Box>
              <Image {...css.image} src={Project3} />
              <Text {...css.text}>LI-NING</Text>
            </Box>
            <Box mt={"-40px"}>
              <Link to={"/project/4"}>
                <Box {...css.view}>
                  <ViewIcon fontSize={"18px"} color={"#fff"} />
                </Box>
              </Link>
              <Box {...css.new}>New</Box>
              <Image {...css.image} src={Oysho} />
              <Text {...css.text}>OYSHO</Text>
            </Box>
            <Box mt={"-40px"}>
              <Link to={"/project/5"}>
                <Box {...css.view}>
                  <ViewIcon fontSize={"18px"} color={"#fff"} />
                </Box>
              </Link>
              <Box {...css.new}>New</Box>
              <Image {...css.image} src={Stradivarius} />
              <Text {...css.text}>STRADIVARIUS</Text>
            </Box>
            <Box mt={"-40px"}>
              <Box {...css.view}>
                <ViewIcon fontSize={"18px"} color={"#fff"} />
              </Box>
              <Box {...css.soon}>Soon</Box>
              <Image {...css.image} src={Kids} />
              <Text {...css.text}>MINI4KIDS</Text>
            </Box>
            <Box mt={"-40px"}>
              <Link to={"/project/6"}>
                <Box {...css.view}>
                  <ViewIcon fontSize={"18px"} color={"#fff"} />
                </Box>
              </Link>
              <Box {...css.new}>New</Box>
              <Image {...css.image} src={Piquadro} />
              <Text {...css.text}>PIQUADRO</Text>
            </Box>
            <Box mt={"-40px"}>
              <Link to={"/project/4"}>
                <Box {...css.view}>
                  <ViewIcon fontSize={"18px"} color={"#fff"} />
                </Box>
              </Link>
              <Box {...css.new}>New</Box>
              <Image {...css.image} src={OyshoOne} />
              <Text {...css.text}>OYSHO</Text>
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
    height: "380px",
    objectFit: "cover",
    width: "100%",
    borderRadius: "10px",
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
  view: {
    backgroundColor: "rgb(183,122,104)",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    position: "relative",
    top: "75px",
    left: "5px",
  },
  new: {
    backgroundColor: "rgb(183,122,104)",
    color: "#fff",
    padding: "4px 12px",
    fontSize: "12px",
    width: "60px",
    textAlign: "center",
    borderRadius: "20px",
    position: "relative",
    top: "15px",
    left: "85%",
    cursor: "pointer",
  },
  soon: {
    backgroundColor: "#000",
    color: "#fff",
    padding: "4px 12px",
    fontSize: "12px",
    width: "60px",
    textAlign: "center",
    borderRadius: "20px",
    position: "relative",
    top: "15px",
    left: "85%",
    cursor: "pointer",
  },
};
