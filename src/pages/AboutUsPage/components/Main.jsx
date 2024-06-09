import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import BgImage from "../../../assets/build.jpg";
import LogoIcon from "../../../assets/black.png";
import { useTranslation } from "react-i18next";

function Main() {
  const { t } = useTranslation();
  return (
    <Box {...css.box}>
      <Box {...css.image}>
        <Image className="bg-image" src={BgImage} alt="BgImage" />
      </Box>
      <Box position={"relative"} zIndex={"2"} className="container">
        <Heading {...css.title}>{t("Мы строим счастье")}</Heading>
        <Flex justifyContent={"space-between"} align={"center"}>
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
    padding: "2.5rem",
    background: "#fff",
    width: "55%",
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
    width: "29rem",
    marginRight: "2rem",
    display: "flex",
    justifyContent: "center",
  },
};
