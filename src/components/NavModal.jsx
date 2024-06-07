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

function NavModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <HamburgerIcon className="modal-button" color={"white"} fontSize={"30px"} onClick={onOpen} />
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
                <Link className="navbar-link" href="#">
                  <Phone />
                </Link>
              </Flex>
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
};
