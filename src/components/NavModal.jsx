import {
  Box,
  Flex,
  Link,
  Modal,
  useDisclosure,
  ModalContent,
  ModalCloseButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Instagram from "../assets/Instagram";
import Telegram from "../assets/Telegram";
import Facebook from "../assets/Facebook";
import Phone from "../assets/Phone";
import { useTranslation } from "react-i18next";
import { Link as Alink } from "react-router-dom";

function NavModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t } = useTranslation();
  return (
    <>
      <HamburgerIcon
        className="modal-button"
        color={"white"}
        fontSize={"30px"}
        onClick={onOpen}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent className="navbar-modal">
          <ModalCloseButton color={"white"} fontSize={"25px"} />
          <Box>
            <Flex
              justifyContent={"center"}
              align={"center"}
              mt={"80px"}
              flexDirection={"column"}
              gap={"20px"}>
              <Alink to={"/about"}>
                <Link {...css.link} href="/">
                  {t("About Us")}
                </Link>
              </Alink>
              <Link {...css.link} href="/">
                {t("Projects")}
              </Link>
              <Alink to={"/news"}>
                <Link {...css.link} href="/">
                  {t("News")}
                </Link>
              </Alink>
              <Link {...css.link} href="/">
                {t("Contact")}
              </Link>
              <Flex align={"center"} gap={"25px"}>
                <Link className="navbar-link" href="#">
                  <Instagram />
                </Link>
                <Link className="navbar-link" href="#">
                  <Telegram />
                </Link>
                <Link className="navbar-link" href="#">
                  <Facebook />
                </Link>
                <Link className="navbar-link" href="tel:+998958437717">
                  <Phone />
                </Link>
              </Flex>
              <Link
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
                {...css.link}
                href="tel:tel:+998958437717">
                +998 95 843 77 17
                <Box {...css.links}>
                  <Phone />
                </Box>
              </Link>
            </Flex>
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
}

export default NavModal;

const css = {
  link: {
    color: "#fff",
    fontSize: "24px",
    lineHeight: "30px",
    transition: "0.3s all",
    fontWeight: "600",
    width: "auto",
    position: "relative",
    paddingBottom: "3px",

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
  links: {
    backgroundColor: "#EDCB3F",
    width: "2.6rem",
    height: "2.6rem",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};
