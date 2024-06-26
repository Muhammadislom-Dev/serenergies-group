import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  return (
    <Box {...css.box}>
      <Box className="container">
        <Flex>
          <Box>
            <Heading {...css.name}>
              {t("Приветственное слово руководителя компании")}
            </Heading>
            <Heading {...css.title}>
              {t(
                "Уважаемый посетитель! Добро пожаловать на нашу виртуальную территорию!"
              )}
            </Heading>
            <Text {...css.text}>
              {t(
                "“Здесь Вы сможете ознакомиться с нашей компанией, а также с миссией и ценностями, по которым мы живём. Изначально наша компания выбрала путь откровенности и прозрачности во всех наших делах, и это наш приоритет - всегда оставаться в тесных отношениях с нашими гостями, клиентами и партнерами."
              )}
            </Text>
            <Text {...css.text}>
              {t(
                "Мы строим счастье, и это выражается в нашем желании сделать всё, чтобы потребитель нашей недвижимости оставался довольным и благодарным за то, что мы смогли помочь ему сделать лучший выбор и предложить достойные решения, максимально отвечающие изъявленным запросам и пожеланиям."
              )}
            </Text>
            <Text {...css.text}>
              {t(
                "Мы будем благодарны, если Вы сообщите нам о возможных ошибках или поделитесь своими рекомендациями по улучшению нашей деятельности по всем направлениям. Пишите нам, звоните, ну и, конечно, заезжайте к нам в офис, а мы, в свою очередь, обещаем чистосердечный сервис, чашку настоящего кофе и самую искреннюю консультацию по приобретению недвижимости!”"
              )}
            </Text>
          </Box>
          <Box></Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default About;

const css = {
  box: {
    backgroundColor: "#110D60",
    padding: "50px 0",
  },
  name: {
    color: "#fff",
    fontSize: {
      base: "22px",
      md: "30px",
    },
    marginBottom: "20px",
    fontWeight: 600,
    lineHeight: "35px",
    letterSpacing: "1px",
  },
  title: {
    color: "#EDCB3F",
    fontSize: {
      base: "25px",
      md: "35px",
    },
    marginBottom: "20px",
    fontWeight: 600,
    lineHeight: {
      base: "30px",
      md: "45px",
    },
    letterSpacing: "1px",
    width: {
      base: "100%",
      md: "750px",
    },
  },
  text: {
    color: "#fff",
    fontFamily: "sans-serif",
    fontSize: "16px",
    marginBottom: "26px",
    fontWeight: 400,
    lineHeight: "25px",
    letterSpacing: "1px",
    width: {
      base: "100%",
      md: "650px",
    },
    textAlign: "justify",
  },
};
