import { Box, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import { partnerData } from "../../../data";

function Partner() {
  return (
    <Box id="gallery" padding={"30px 0"} mt="50px">
      <Box className="container">
        <Heading {...css.title}>OUR CLIENTS</Heading>
        <SimpleGrid gap={"20px"} columns={{ base: 2, md: 3, xl: 4 }}>
          {partnerData.map((evt, index) => (
            <Box key={index} {...css.box}>
              <Image {...css.image} src={evt?.image.type} />
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Partner;

const css = {
  image: {
    objectFit: "contain",
    width: "100%",
    height: "100%",
    transition: "0.3s all",

    _hover: {
      transform: "scale(1.2)",
    },
  },
  title: {
    fontSize: {
      base: "30px",
      md: "30px",
      xl: "45px",
    },
    lineHeight: "55px",
    letterSpacing: "1px",
    fontWeight: 600,
    marginBottom: "10px",
    color: "#EDCB3F",
  },
  text: {
    color: "gray",
    fontSize: "18px",
    textAlign: "center",
    fontWeight: 400,
    marginBottom: "25px",
  },
  box: {
    height: "158px",
    width: "100%",
    padding: "20px",
    overflow: "hidden",
    boxShadow: "0 9px 18px 0 rgba(144,173,248,0.25)",
    background: "#fff",
    borderRadius: "12px",
    margin: "0 25px",
    display: "flex !important",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
};
