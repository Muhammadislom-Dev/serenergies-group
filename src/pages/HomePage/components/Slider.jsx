import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

import { Fade } from "react-reveal";

import Piquadro1 from "../../../assets/piquadro1.jpg";
import Piquadro2 from "../../../assets/piquadro2.jpg";
import Piquadro3 from "../../../assets/piquadro3.jpg";

import Stradivarius1 from "../../../assets/stradivarius1.jpg";
import Stradivarius2 from "../../../assets/stradivarius2.jpg";

import Colehan1 from "../../../assets/colehan1.jpg";
import Colehan2 from "../../../assets/colehan2.jpg";
import Colehan3 from "../../../assets/colehan3.jpg";

import MiniFour1 from "../../../assets/mini1.jpg";
import MiniFour2 from "../../../assets/mini2.jpg";
import MiniFour3 from "../../../assets/mini3.jpg";
import MiniFour4 from "../../../assets/mini4.jpg";
import MiniFour5 from "../../../assets/mini5.jpg";

import Lining1 from "../../../assets/lining7.jpg";
import Lining2 from "../../../assets/lining6.jpg";
import Lining3 from "../../../assets/lining5.jpg";
import Lining4 from "../../../assets/lining4.jpg";

import Oysho1 from "../../../assets/oysho1.jpg";
import Oysho2 from "../../../assets/oysho2.jpg";

import Swiss1 from "../../../assets/swiss1.jpg";
import Swiss2 from "../../../assets/swiss2.jpg";
import Swiss3 from "../../../assets/swiss3.jpg";
import Swiss4 from "../../../assets/swiss4.jpg";

import ZaraHome1 from "../../../assets/zarahome1.jpg";
import ZaraHome2 from "../../../assets/zarahome2.jpg";
import ZaraHome3 from "../../../assets/zarahome3.jpg";
import ZaraHome4 from "../../../assets/zarahome4.jpg";
import { useTranslation } from "react-i18next";

function Slider() {
  const { t } = useTranslation();
  return (
    <Box p={"35px 0"}>
      <Box className="container">
        <Flex
          flexDirection={{ base: "column-reverse", md: "row" }}
          gap={{ base: "25px", md: "70px" }}>
          <Box {...css.box}>
            <Fade left>
              <Swiper
                loop={true}
                effect="fade"
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
                keyboard={true}
                modules={[Autoplay]}
                className="mySwiper">
                <SwiperSlide>
                  <Image {...css.image} src={Piquadro1} />
                </SwiperSlide>
                <SwiperSlide>
                  <Image {...css.image} src={Piquadro2} />
                </SwiperSlide>
                <SwiperSlide>
                  <Image {...css.image} src={Piquadro3} />
                </SwiperSlide>
                <SwiperSlide>
                  <Image {...css.image} src={Stradivarius1} />
                </SwiperSlide>
                <SwiperSlide>
                  <Image {...css.image} src={Stradivarius2} />
                </SwiperSlide>
                <SwiperSlide>
                  <Image {...css.image} src={Lining1} />
                </SwiperSlide>
                <SwiperSlide>
                  <Image {...css.image} src={Lining2} />
                </SwiperSlide>
                <SwiperSlide>
                  <Image {...css.image} src={Lining3} />
                </SwiperSlide>
                <SwiperSlide>
                  <Image {...css.image} src={Lining4} />
                </SwiperSlide>
                <SwiperSlide>
                  <Image {...css.image} src={ZaraHome1} />
                </SwiperSlide>
                <SwiperSlide>
                  <Image {...css.image} src={ZaraHome2} />
                </SwiperSlide>
                <SwiperSlide>
                  <Image {...css.image} src={ZaraHome3} />
                </SwiperSlide>
                <SwiperSlide>
                  <Image {...css.image} src={ZaraHome4} />
                </SwiperSlide>
              </Swiper>
            </Fade>
          </Box>
          <Fade right>
            <Box>
              <Heading {...css.title}>{t("famousName")}</Heading>
              <Text {...css.text}>{t("famousText")}</Text>
            </Box>
          </Fade>
        </Flex>

        <Flex
          flexDirection={{ base: "column", md: "row" }}
          mt={"120px"}
          gap={{ base: "25px", md: "70px" }}>
          <Fade left>
            <Box>
              <Heading {...css.title}>{t("famousName")}</Heading>
              <Text {...css.text}>{t("famousText1")}</Text>
            </Box>
          </Fade>
          <Box {...css.box}>
            <Fade right>
              <Swiper
                loop={true}
                effect="fade"
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
                keyboard={true}
                modules={[Autoplay, EffectFade]}
                className="mySwiper">
                <SwiperSlide>
                  <Image {...css.image} src={Colehan1} />
                </SwiperSlide>
                <SwiperSlide>
                  <Image {...css.image} src={Colehan2} />
                </SwiperSlide>
                <SwiperSlide>
                  <Image {...css.image} src={Colehan3} />
                </SwiperSlide>
                <SwiperSlide>
                  <Image {...css.image} src={MiniFour1} />
                </SwiperSlide>
                <SwiperSlide>
                  <Image {...css.image} src={MiniFour2} />
                </SwiperSlide>
                <SwiperSlide>
                  <Image {...css.image} src={MiniFour3} />
                </SwiperSlide>
                <SwiperSlide>
                  <Image {...css.image} src={MiniFour4} />
                </SwiperSlide>
                <SwiperSlide>
                  <Image {...css.image} src={MiniFour5} />
                </SwiperSlide>
                <SwiperSlide>
                  <Image {...css.image} src={Oysho1} />
                </SwiperSlide>
                <SwiperSlide>
                  <Image {...css.image} src={Oysho2} />
                </SwiperSlide>
                <SwiperSlide>
                  <Image {...css.image} src={Swiss1} />
                </SwiperSlide>
                <SwiperSlide>
                  <Image {...css.image} src={Swiss2} />
                </SwiperSlide>
                <SwiperSlide>
                  <Image {...css.image} src={Swiss3} />
                </SwiperSlide>
                <SwiperSlide>
                  <Image {...css.image} src={Swiss4} />
                </SwiperSlide>
              </Swiper>
            </Fade>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Slider;

const css = {
  box: {
    width: {
      base: "100%",
      md: "55%",
    },
  },
  title: {
    fontSize: "25px",
    lineHeight: "30px",
    fontWeight: "600",
    letterSpacing: "0.5px",
    color: "#EDCB3F",
  },
  text: {
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 450,
    letterSpacing: "1px",
    marginTop: "20px",
    marginBottom: "20px",
    width: {
      base: "100%",
      md: "400px",
    },
    color: "#110D60",
  },
  image: {
    height: {
      base: "330px",
      md: "450px",
    },
    width: "100%",
    objectFit: {
      base: "cover",
      md: "cover",
    },
  },
};
