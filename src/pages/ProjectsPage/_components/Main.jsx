import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import { dataProject } from "../../../services/data";
import { useParams } from "react-router-dom";

function Main() {
  const { id } = useParams();
  const data = dataProject;
  const about = data?.find((item) => item.id === Number(id));
  return (
    <Box position={"relative"} overflow={"hidden"}>
      <Image {...css.image} alt="NewProjectFive" src={about?.image} />
      <Box {...css.linear}></Box>
      <Box className="container">
        <Flex justify={"flex-end"}>
          <Box {...css.right}>
            <Image {...css.logo} alt="Logo3" src={about?.logo} />
          </Box>
        </Flex>
        <Heading {...css.title}>{about?.title}</Heading>
        <Box {...css.door}>{about.door}</Box>
      </Box>
    </Box>
  );
}

export default Main;

const css = {
  linear: {
    background: "linear-gradient(180deg,rgba(26,33,47,0),#1a212f)",
    position: "absolute",
    bottom: "0",
    left: "0",
  },
  image: {
    height: "550px",
    width: "100%",
    objectFit: "cover",
  },
  right: {
    width: "300px",
    position: "relative",
    top: "-500px",
    // background: "#fff",
  },
  logo: {
    width: "100%",
    height: "100px",
    objectFit: "contain",
  },
  title: {
    color: "#fff",
    fontSize: {
      base: "2rem",
      md: "4rem",
    },
    fontWeight: "bold",
    position: "relative",
    top: "-260px",
    textTransform: "uppercase",
    letterSpacing: "2px",
    lineHeight: "1.2rem",
  },
  door: {
    fontSize: "14px",
    color: "#000",
    background: "#fff",
    position: "relative",
    top: "-200px",
    width: "90px",
    textAlign: "center",
    borderRadius: "10px",
    padding: "6px 4px",
    fontWeight: "bold",
    lineHeight: "1.2rem",
  },
};
