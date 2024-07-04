import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import RocketIcon from "../assets/raketa1.png";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useTranslation } from "react-i18next";

function Statistic() {
  const [count, setCount] = useState(false);
  const { t } = useTranslation();
  return (
    <Box m="30px 0">
      <Box className="container">
        <ScrollTrigger
          onEnter={() => setCount(true)}
          onExit={() => setCount(false)}>
          <Box {...css.box}>
            <Heading {...css.title}>
              {t("hello11")} <span style={{ color: "#EDCB3F" }}></span>
            </Heading>
            <Flex {...css.list}>
              <Flex align="center" flexDirection="column">
                <Heading {...css.number}>
                  {count && (
                    <CountUp
                      className="static-number"
                      start={0}
                      duration={2.75}
                      end="10"
                      delay={0}
                    />
                  )}
                  <span style={{ color: "#110D60" }}>+</span>
                </Heading>
                <Text {...css.text}>{t("hello24")}</Text>
              </Flex>
              <Flex align="center" flexDirection="column">
                <Heading {...css.number}>
                  {count && (
                    <CountUp
                      className="static-number"
                      start={0}
                      duration={2.75}
                      end="120"
                      delay={0}
                    />
                  )}
                  <span style={{ color: "#110D60" }}>+</span>
                </Heading>
                <Text {...css.text}>{t("hello25")}</Text>
              </Flex>
              <Flex align="center" flexDirection="column">
                <Heading {...css.number}>
                  {count && (
                    <CountUp
                      className="static-number"
                      start={0}
                      duration={2.75}
                      end="60"
                      delay={0}
                    />
                  )}
                  <span style={{ color: "#110D60" }}>+</span>
                </Heading>
                <Text {...css.text}>{t("hello26")}</Text>
              </Flex>
              <Flex align="center" flexDirection="column">
                <Heading {...css.number}>
                  {count && (
                    <CountUp
                      className="static-number"
                      start={900}
                      duration={2.75}
                      end="100"
                      delay={0}
                    />
                  )}
                  <span style={{ color: "#110D60" }}>+</span>
                </Heading>
                <Text {...css.text}>{t("hello27")}</Text>
              </Flex>

              <Image
                display={{ xl: "block", sm: "none", base: "none" }}
                src={RocketIcon}
                alt="RocketIcon"
              />
            </Flex>
          </Box>
        </ScrollTrigger>
      </Box>
    </Box>
  );
}

export default Statistic;

const css = {
  box: {
    padding: {
      xl: "30px 40px",
      lg: "50px",
      md: "40px",
      sm: "30px",
      base: "15px",
    },
    background: "#fff",
    boxShadow: "0 9px 18px 0 rgba(144,173,248,0.25)",
    borderRadius: {
      xl: "24px",
      lg: "24px",
      md: "20px",
      sm: "20px",
      base: "10px",
    },
    width: "100%",
  },
  title: {
    fontSize: { xl: "32px", lg: "28px", md: "30px", sm: "26px", base: "22px" },
    lineHeight: "38px",
    fontWeight: 700,
    fontFamily: "Unbounded !important",
    color: "#110D60",
  },
  number: {
    fontSize: { xl: "62px", lg: "55px", md: "55px", sm: "45px", base: "26px" },
    lineHeight: { base: "60px", lg: "80px" },
    fontWeight: 600,
    fontFamily: "Unbounded !important",
  },
  list: {
    justifyContent: {
      xl: "space-between",
      lg: "space-between",
      md: "space-between",
      base: "center",
    },
    alignItems: "center",
    marginTop: "30px",
    flexWrap: {
      xl: "no-wrap",
      lg: "no-wrap",
      sm: "no-wrap",
      md: "no-wrap",
      base: "wrap",
    },
    gap: { xl: 0, lg: 0, md: 0, sm: "0 40px", base: "0 65px" },
  },
  text: {
    color: "#2a3437",
    fontSize: "18px",
    lineHeight: "22px",
    fontWeight: 400,
    fontFamily: "Unbounded !important",
  },
};
