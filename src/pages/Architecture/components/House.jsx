import { Box, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import House1 from "../../../assets/house1.webp";
import House2 from "../../../assets/house2.avif";
import House3 from "../../../assets/house3.webp";
import House4 from "../../../assets/house4.webp";
import House5 from "../../../assets/house5.webp";
import House6 from "../../../assets/house6.jpg";

function House() {
  return (
    <Box p={"30px 0"}>
      <Box className="container">
        <Heading {...css.title}>REAL HOUSE ARCHITECTURE</Heading>
        <SimpleGrid mt="30px" gap={"20px"} columns={3}>
          <Box>
            <Image {...css.image} src={House1} />
            <Heading {...css.name}>Modern Design</Heading>
          </Box>
          <Box>
            <Image {...css.image} src={House2} />
            <Heading {...css.name}>Classic Design</Heading>
          </Box>
          <Box>
            <Image {...css.image} src={House3} />
            <Heading {...css.name}>Modern Design</Heading>
          </Box>
          <Box>
            <Image {...css.image} src={House4} />
            <Heading {...css.name}>Modern Design</Heading>
          </Box>
          <Box>
            <Image {...css.image} src={House5} />
            <Heading {...css.name}>Modern Design</Heading>
          </Box>
          <Box>
            <Image {...css.image} src={House6} />
            <Heading {...css.name}>Modern Design</Heading>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default House;

const css = {
  image: {
    height: "300px",
    width: "100%",
    objectFit: "cover",
  },
  title: {
    fontFamily: "cursive",
    fontSize: "40px",
    lineHeight: "45px",
    fontWeight: "600",
    color: "#110D60",
  },
  name: {
    fontSize: "30px",
    lineHeight: "35px",
    fontWeight: "600",
    color: "#110D60",
    marginTop: "10px",
  },
};
