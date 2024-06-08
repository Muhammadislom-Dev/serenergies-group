import { Box, Heading, Image } from "@chakra-ui/react";
import NewsBgImage from "../../../assets/news-bg.jpg";

function Main() {
  return (
    <Box p={'6.5rem 0'} m={'15px 0'} position={"relative"}>
      <Box {...css.box}>
        <Image {...css.image} src={NewsBgImage} alt="news-bg" className="news-bg-image" />
      </Box>
      <Box className="container">
        <Heading {...css.title}>Новости</Heading>
      </Box>
    </Box>
  );
}

export default Main;

const css = {
  title: {
    color: "#ffff",
    fontSize: "25px",
    lineHeight: "30px",
    letterSpacing: "1px",
    fontWeight: 600,
  },
  box: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: "-1",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
};
