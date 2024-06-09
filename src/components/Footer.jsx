import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import Instagram from "../assets/Instagram";
import Telegram from "../assets/Telegram";
import Facebook from "../assets/Facebook";
import Phone from "../assets/Phone";
import Iframe from "react-iframe";
import OfficeImage from "../assets/05.svg";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <Box {...css.box}>
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={"space-between"}>
        <Box padding={{ base: "20px 30px", md: "20px 120px" }}>
          <Heading {...css.title}>{t("Contact")}</Heading>
          <Text {...css.name}>
            {t("Company address / Central Sales Office:")}
          </Text>
          <Text {...css.text}>Tashkent, Olmazor district, Kokzor Tor 15</Text>
          <Text {...css.name}>
            {t("Sales office on the territory of the project:")}
          </Text>
          <Text {...css.text}>Tashkent, Olmazor district, Kokzor Tor 15</Text>
          <Text {...css.name}>Phone:</Text>
          <Link {...css.text} href="tel:+998935527217">
            +998 93 552 72 17
          </Link>
          <Link {...css.text} pl={"20px"} href="tel:+998958437717">
            +998 95 843 77 17
          </Link>
          <Text {...css.name}>{t("Mail:")}</Text>
          <Link {...css.text} href="#">
            info@group.uz
          </Link>
          <Text {...css.name}>{t("Working schedule:")}</Text>
          <Text {...css.text}>Monday - Friday: 9:00 - 18:00</Text>
          <Text {...css.name}>{t("We are in social networks")}</Text>
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
        </Box>
        <Iframe
          url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.641822092033!2d69.2459091758749!3d41.31665497130886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b40d847941d%3A0x5765a18b352df71e!2sTashkent%20City%20Park!5e0!3m2!1sen!2s!4v1717142347970!5m2!1sen!2s"
          width="640px"
          height="100%"
          id=""
          className="footer-location"
        />
      </Flex>
      <div className="footer-svg">
        <img src={OfficeImage} alt="" />
      </div>
    </Box>
  );
}

export default Footer;

const css = {
  box: {
    backgroundColor: "#110D60",
    position: "relative",
  },
  title: {
    color: "#fff",
    marginBottom: "50px",
    marginTop: "20px",
  },
  name: {
    color: "#EDCB3F",
    fontWeight: 600,
    margin: "8px 0",
    fontSize: "18px",
    lineHeight: "24px",
  },
  text: {
    color: "#fff",
    marginBottom: "25px",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 400,
    letterSpacing: "0.5px",
  },
};
