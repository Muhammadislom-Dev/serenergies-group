import { Box, Flex, Heading, Text } from "@chakra-ui/react";

function About() {
  return (
    <Box {...css.box}>
      <Box className="container">
        <Flex>
          <Box>
            <Heading {...css.name}>
              Приветственное слово руководителя компании
            </Heading>
            <Heading {...css.title}>
              Уважаемый посетитель! Добро пожаловать на нашу виртуальную
              территорию!
            </Heading>
            <Text {...css.text}>
              “Здесь Вы сможете ознакомиться с нашей компанией, а также с
              миссией и ценностями, по которым мы живём. Изначально наша
              компания выбрала путь откровенности и прозрачности во всех наших
              делах, и это наш приоритет - всегда оставаться в тесных отношениях
              с нашими гостями, клиентами и партнерами.
            </Text>
            <Text {...css.text}>
              Мы строим счастье, и это выражается в нашем желании сделать всё,
              чтобы потребитель нашей недвижимости оставался довольным и
              благодарным за то, что мы смогли помочь ему сделать лучший выбор и
              предложить достойные решения, максимально отвечающие изъявленным
              запросам и пожеланиям.
            </Text>
            <Text {...css.text}>
              Мы будем благодарны, если Вы сообщите нам о возможных ошибках или
              поделитесь своими рекомендациями по улучшению нашей деятельности
              по всем направлениям. Пишите нам, звоните, ну и, конечно,
              заезжайте к нам в офис, а мы, в свою очередь, обещаем
              чистосердечный сервис, чашку настоящего кофе и самую искреннюю
              консультацию по приобретению недвижимости!”
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
    margin: "20px 0",
  },
  name: {
    color: "#fff",
    fontSize: "30px",
    marginBottom: "20px",
    fontWeight: 600,
    lineHeight: "35px",
    letterSpacing: "1px",
  },
  title: {
    color: "#EDCB3F",
    fontSize: "35px",
    marginBottom: "20px",
    fontWeight: 600,
    lineHeight: "45px",
    letterSpacing: "1px",
    width: "750px",
  },
  text: {
    color: "#fff",
    fontFamily: "sans-serif",
    fontSize: "16px",
    marginBottom: "26px",
    fontWeight: 400,
    lineHeight: "25px",
    letterSpacing: "1px",
    width: "650px",
    textAlign: "justify",
  },
};
