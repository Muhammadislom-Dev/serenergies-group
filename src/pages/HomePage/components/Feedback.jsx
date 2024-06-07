import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Slider from "react-slick";
import AvatarIcon from "../../../assets/avatar.svg";
import FeedbackModal from "./FeedbackModal";

function Feedback() {
  var settings = {
    speed: 5000,
    dots: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    autoplaySpeed: 0,
    slidesToScroll: 1,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1060,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box {...css.box}>
        <Box className="container">
          <Flex
            flexDirection={{ base: "column", md: "row" }}
            align={{ base: "baseline", md: "center" }}
            justifyContent={"space-between"}>
            <Heading mb={"30px"} color={"#110D60"} {...css.name}>
              Reviews{" "}
              <Heading color={"#EDCB3F"} {...css.name}>
                About us
              </Heading>{" "}
            </Heading>
            <Button onClick={onOpen} {...css.button}>
              Sharh qo`shish
            </Button>
          </Flex>
          <Slider {...settings}>
            <Box {...css.list}>
              <Flex align={"center"} gap={"10px"}>
                <Image {...css.image} src={AvatarIcon} alt="AvatarIcon" />
                <Heading {...css.title}>CEO of ZARA</Heading>
              </Flex>
              <Text {...css.text}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
                placeat quos provident nisi, a sunt eius. Labore voluptate error
                placeat? Corporis fugiat vel sed et?
              </Text>
            </Box>
            <Box {...css.list}>
              <Flex align={"center"} gap={"10px"}>
                <Image {...css.image} src={AvatarIcon} alt="AvatarIcon" />
                <Heading {...css.title}>CEO of ZARA</Heading>
              </Flex>
              <Text {...css.text}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
                placeat quos provident nisi, a sunt eius. Labore voluptate error
                placeat? Corporis fugiat vel sed et?
              </Text>
            </Box>
            <Box {...css.list}>
              <Flex align={"center"} gap={"10px"}>
                <Image {...css.image} src={AvatarIcon} alt="AvatarIcon" />
                <Heading {...css.title}>CEO of ZARA</Heading>
              </Flex>
              <Text {...css.text}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
                placeat quos provident nisi, a sunt eius. Labore voluptate error
                placeat? Corporis fugiat vel sed et?
              </Text>
            </Box>
            <Box {...css.list}>
              <Flex align={"center"} gap={"10px"}>
                <Image {...css.image} src={AvatarIcon} alt="AvatarIcon" />
                <Heading {...css.title}>CEO of ZARA</Heading>
              </Flex>
              <Text {...css.text}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
                placeat quos provident nisi, a sunt eius. Labore voluptate error
                placeat? Corporis fugiat vel sed et?
              </Text>
            </Box>
          </Slider>
        </Box>
      </Box>
      <FeedbackModal onClose={onClose} isOpen={isOpen} />
    </>
  );
}

export default Feedback;

const css = {
  box: {
    padding: "40px 0",
  },
  list: {
    boxShadow: "0 9px 18px 0 rgba(144,173,248,0.25)",
    background: "#fff",
    borderRadius: "12px",
    padding: "20px",
    margin: "0 20px",
  },
  name: {
    display: "flex",
    alignItems: "center",
    fontSize: {
      base: "30px",
      md: "30px",
      xl: "45px",
    },
    lineHeight: "55px",
    letterSpacing: "1px",
    gap: "10px",
  },
  image: {
    borderRadius: "50%",
    width: "40px",
    height: "40px",
  },
  text: {
    fontSize: "16px",
    lineHeight: "25px",
    letterSpacing: "1px",
    color: "#110D60",
    fontWeight: 400,
    opacity: 0.8,
    marginTop: "10px",
    marginBottom: "20px",
  },
  title: {
    fontSize: "20px",
    lineHeight: "25px",
    letterSpacing: "1px",
    color: "#110D60",
    fontWeight: 600,
  },
  button: {
    backgroundColor: "#EDCB3F",
    border: "2px solid #EDCB3F",
    color: "#fff",
    fontSize: "18px",
    lineHeight: "25px",
    letterSpacing: "1px",
    fontWeight: 600,
    borderRadius: "12px",
    transition: "0.3s ease",
    height: "50px",
    width: "170px",

    _hover: {
      backgroundColor: "#fff",
      color: "#110D60",
      cursor: "pointer",
      boxShadow: "0 9px 18px 0 rgba(144,173,248,0.25)",
      transform: "scale(1.02)",
      transition: "0.3s ease",
    },
  },
};
