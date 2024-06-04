import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import LogoIcon from "../../../assets/logo1.png";
import { Fade } from "react-reveal";

function Construction() {
  return (
    <Box p={"35px 0"}>
      <Box className="container">
        <Heading {...css.name}>CONSTRUCTION</Heading>
        <Fade bottom>
          <Flex
            flexDirection={{ base: "column-reverse", md: "row" }}
            align={"center"}
            gap={{ base: "20px", md: "50px" }}>
            <Flex
              flexDirection={{ base: "column", md: "row" }}
              mt={"25px"}
              gap={{ base: "20px", md: "40px" }}>
              <Box>
                <Text {...css.text}>Pre-Project drawings</Text>
                <Text {...css.text}>
                  Drawing construction project according the main project
                  design.
                </Text>
                <Text {...css.text}>As-Built Drawings</Text>
                <Text {...css.text}>
                  Supporting the architects, electric and mechanical teams
                </Text>
                <Text {...css.text}>
                  Drawing all shop drawings and As-Builts
                </Text>
              </Box>
              <Box>
                <Text {...css.text}>
                  Preparing letting of the contract, pre-analyzing of the
                  project, project documents, and proposal lists
                </Text>
                <Text {...css.text}>
                  Qualified furniture manufacturing and equipment sourcing
                </Text>
                <Text {...css.text}>Design and construction coordination</Text>
                <Text {...css.text}>Controlling and Supervising</Text>
                <Text {...css.text}>
                  Planning of the project and budget, reporting the processes,
                </Text>
                <Text {...css.text}>Turn-Key projects</Text>
                <Text {...css.text}>
                  Design&Build modeliyle tasarım ve uygulama hizmeti
                </Text>
                <Text {...css.text}>Mapping services</Text>
                <Text {...css.text}>
                  Occupational health and safety management
                </Text>
              </Box>
            </Flex>
            <Image src={LogoIcon} {...css.image} />
          </Flex>
        </Fade>
      </Box>
    </Box>
  );
}

export default Construction;

const css = {
  name: {
    fontSize: "45px",
    lineHeight: "55px",
    letterSpacing: "1px",
    color: "#110D60",
  },
  text: {
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 400,
    letterSpacing: "0.5px",
    width: {
      base: "100%",
      md: "430px",
    },
    margin: "10px 0",
  },
  image: {
    width: "250px",
    objectFit: "contain",
    marginTop: {
      base: "30px",
      md: "0px",
    },
  },
};
