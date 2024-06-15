import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import BgImage from "../../../assets/build.jpg";
import LogoIcon from "../../../assets/black.png";
import { useTranslation } from "react-i18next";
import { Fade } from "react-reveal";

function Main() {
  const { t } = useTranslation();
  return (
    <Box {...css.box}>
      <Box {...css.image}>
        <Image className="bg-image" src={BgImage} alt="BgImage" />
      </Box>
      <Box position={"relative"} zIndex={"2"} className="container">
        <Fade>
          <Heading {...css.title}>{t("Мы строим счастье")}</Heading>
        </Fade>
        <Flex
          justifyContent={"space-between"}
          flexDirection={{ base: "column", lg: "row" }}
          align={"center"}>
          <Box {...css.left}>
            <Image {...css.logo} src={LogoIcon} alt="LogoIcon" />
          </Box>
          <Box {...css.card}>
            <Text {...css.text}>
              {t(
                " Одна из ведущих и быстро развивающихся девелоперских компаний с 20 летним опытом на рынке. Деятельность компании направлена на создание уникальных жилых комплексов, отличающихся своей инновационностью, смарт-подходом и высоким качеством."
              )}
            </Text>
            <Text {...css.text}>
              {t(
                "Ser Energies - это также пример социального бизнеса. Благотворительность поддержка молодежи и творчества, социальные и образовательные проекты являются неотъемлемой частью деятельности компании"
              )}
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Main;

const css = {
  image: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    zIndex: 0,
    overflow: "hidden",
  },
  box: {
    padding: "6.5rem 0 9.5rem",
    position: "relative",
    overflow: "hidden",
  },
  title: {
    color: "#110D60",
    fontSize: "30px",
    lineHeight: "35px",
    fontWeight: 600,
  },
  card: {
    padding: {
      base: "1rem",
      lg: "2.5rem",
    },
    background: "#fff",
    width: {
      base: "100%",
      lg: "55%",
    },
  },
  text: {
    color: "#110D60",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 400,
    margin: "1.5rem 0",
  },
  logo: {
    maxWidth: "15rem",
    width: "100%",
  },
  left: {
    width: {
      base: "100%",
      lg: "29rem",
    },
    marginRight: {
      base: "0",
      lg: "2rem",
    },
    display: "flex",
    justifyContent: "center",
    marginTop: {
      base: "30px",
      md: 0,
    },
  },
};
