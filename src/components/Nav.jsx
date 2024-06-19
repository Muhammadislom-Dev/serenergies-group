import { Box, Flex, Image, Link } from "@chakra-ui/react";
import LogoIcon from "../assets/logo1.png";
import Instagram from "../assets/Instagram";
import Telegram from "../assets/Telegram";
import Facebook from "../assets/Facebook";
import Phone from "../assets/Phone";
import NavModal from "./NavModal";
import { Link as Alink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Whatsapp from "../assets/Whatsapp";

function Nav() {
  const { t } = useTranslation();
  return (
    <>
      <Box p={"10px 0"}>
        <Box className="container">
          <Box className="row">
            <Flex {...css.list}>
              <Flex gap={"30px"}>
                <Alink to={"/about"}>
                  <Link {...css.link} href="/">
                    {t("About Us")}
                  </Link>
                </Alink>
                <Link {...css.link} href="#project">
                  {t("Projects")}
                </Link>
                <Alink to={"/news"}>
                  <Link {...css.link} href="/">
                    {t("News")}
                  </Link>
                </Alink>
                <Link {...css.link} href="#contact">
                  {t("Contact")}
                </Link>
              </Flex>
              <Alink to="/">
                <Image {...css.image} src={LogoIcon} />
              </Alink>
              <Flex gap={"15px"} align={"center"}>
                <Link className="navbar-links nav-link" href="#">
                  <Instagram />
                </Link>
                <Link className="navbar-links nav-link" href="#">
                  <Telegram />
                </Link>
                <Link className="navbar-links nav-link" href="#">
                  <Facebook />
                </Link>
                <Link
                  className="navbar-links nav-link"
                  href="tel:+998958437717">
                  <Phone />
                </Link>
                <Link
                  className="navbar-links nav-link"
                  href="tel:+998958437717">
                  <Whatsapp />
                </Link>
                <NavModal />
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
    </>
  );
}

export default Nav;

const css = {
  image: {
    width: "100px",
    objectFit: "contain",
    position: "relative",
    right: "90px",
  },
  link: {
    color: "#110D60",
    fontSize: "16px",
    lineHeight: "24px",
    transition: "0.3s all",
    fontWeight: "600",
    width: "auto",
    position: "relative",
    paddingBottom: "3px",
    display: {
      xl: "flex",
      lg: "flex",
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
