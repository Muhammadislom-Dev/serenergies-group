import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import LogoIcon from "../../../assets/black.png";
import { Fade } from "react-reveal";
import { useTranslation } from "react-i18next";

function Construction() {
  const { t } = useTranslation();
  return (
    <Box p={"35px 0"}>
      <Box className="container">
        <Heading {...css.name}>{t("CONSTRUCTION")}</Heading>
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
                <Text {...css.text}>{t("Pre-Project drawings")}</Text>
                <Text {...css.text}>
                  {t(
                    "Drawing construction project according the main project design."
                  )}
                </Text>
                <Text {...css.text}>{t("As-Built Drawings")}</Text>
                <Text {...css.text}>
                  {t(
                    "Supporting the architects, electric and mechanical teams"
                  )}
                </Text>
                <Text {...css.text}>
                  {t("Drawing all shop drawings and As-Builts")}
                </Text>
              </Box>
              <Box>
                <Text {...css.text}>
                  {t(
                    "Preparing letting of the contract, pre-analyzing of the project, project documents, and proposal lists"
                  )}
                </Text>
                <Text {...css.text}>
                  {t(
                    "Qualified furniture manufacturing and equipment sourcing"
                  )}
                </Text>
                <Text {...css.text}>
                  {t("Design and construction coordination")}
                </Text>
                <Text {...css.text}>{t("Controlling and Supervising")}</Text>
                <Text {...css.text}>
                  {t(
                    "Planning of the project and budget, reporting the processes,"
                  )}
                </Text>
                <Text {...css.text}>{t("Turn-Key projects")}</Text>
                <Text {...css.text}>
                  {t("Design&Build modeliyle tasarım ve uygulama hizmeti")}
                </Text>
                <Text {...css.text}>{t("Mapping services")}</Text>
                <Text {...css.text}>
                  {t("Occupational health and safety management")}
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
    fontSize: {
      base: "30px",
      md: "30px",
      xl: "45px",
    },
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
