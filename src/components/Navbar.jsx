import { Box, Flex, Image, Link } from "@chakra-ui/react";
import LogoIcon from "../assets/logo1.png";
import Instagram from "../assets/Instagram";
import Telegram from "../assets/Telegram";
import Facebook from "../assets/Facebook";
import Phone from "../assets/Phone";

function Navbar() {
  return (
    <Box {...css.box}>
      <Box className="container">
        <Box className="row">
          <Flex {...css.list}>
            <Flex gap={"30px"}>
              <Link {...css.link} href="/">
                About Us
              </Link>
              <Link {...css.link} href="/">
                Projects
              </Link>
              <Link {...css.link} href="/">
                News
              </Link>
              <Link {...css.link} href="/">
                Contact
              </Link>
            </Flex>
            <Link href="/">
              <Image {...css.image} src={LogoIcon} />
            </Link>
            <Flex gap={"15px"} align={"center"}>
              <Link className="navbar-link" href="#">
                <Instagram />
              </Link>
              <Link className="navbar-link" href="#">
                <Telegram />
              </Link>
              <Link className="navbar-link" href="#">
                <Facebook />
              </Link>
              <Link className="navbar-link" href="#">
                <Phone />
              </Link>
            </Flex>
            <Link
              display={"flex"}
              alignItems={"center"}
              gap={"10px"}
              {...css.link}
              href="tel:+998935527217">
              +998 93 552 72 17
              <Box {...css.links}>
                <Phone />
              </Box>
            </Link>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;

const css = {
  image: {
    width: "100px",
    objectFit: "contain",
  },
  link: {
    color: "#fff",
    fontSize: "16px",
    lineHeight: "24px",
    transition: "0.3s all",
    fontWeight: "bold",
    width: "auto",
    position: "relative",
    paddingBottom: "3px",
    display: {
      xl: "inline-block",
      lg: "inline-block",
      md: "none",
      sm: "none",
      base: "none",
    },

    _hover: {
      color: "#EDCB3F",
      _before: {
        transform: "scaleX(1)",
      },
    },
    _before: {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "2px",
      transform: "scaleX(0)",
      background: "#EDCB3F",
      borderRadius: "23px 10px 0px 0px",
      transition: "0.3s",
    },
  },
  list: {
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgba(0,0,0,0.9)",
    borderRadius: "0 0 1.5rem 1.5rem",
    boxShadow: "0px 0.2rem 1.5rem rgba(0, 0, 0, 0.25)",
    padding: "10px 25px",
    fontWeight: "500",
    position: "relative",
    zIndex: "9999",
  },
  links: {
    backgroundColor: "#EDCB3F",
    width: "2.6rem",
    height: "2.6rem",
    borderRadius: "50%",
    display: {
      base: "none",
      md: "flex",
    },
    alignItems: "center",
    justifyContent: "center",
  },
};
