import { Box, Heading, Image } from "@chakra-ui/react";
import CityMallImage from "../../../assets/city.jpeg";
import { useTranslation } from "react-i18next";

function Main() {
  const { t } = useTranslation();
  return (
    <Box p={"30px 0"}>
      <Box {...css.box}>
        <Image {...css.image} src={CityMallImage} alt="CityMallImage" />
      </Box>
      <Box className="container">
        <Heading {...css.title}>{t("Architecture")}</Heading>
      </Box>
    </Box>
  );
}

export default Main;

const css = {
  image: {
    width: "100%",
    height: "460px",
    position: "absolute",
    left: 0,
    top: "110px",
    objectFit: "cover",
  },
  box: {
    height: "460px",
    _before: {
      content: '""',
      backgroundColor: "rgba(0,0,0,.35)",
      zIndex: 1,
      position: "absolute",
      top: "110px",
      left: 0,
      width: "100%",
      height: "460px",
    },
  },
  title: {
    position: "absolute",
    top: "300px",
    color: "white",
    zIndex: 2,
    fontFamily: "cursive",
    fontSize: "50px",
    lineHeight: "55px",
  },
};
