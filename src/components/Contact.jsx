import { Box, Flex, Heading, Image } from "@chakra-ui/react";

function Contact() {
  return (
    <Box p={"35px 0"} >
      <Box className="container">
        <Flex
          flexDirection={{ base: "column-reverse", md: "row" }}
          justifyContent={"space-evenly"}>
          <Box>
            <Heading {...css.title}>Bizga qanday savolingiz bor?</Heading>
            <form className="form" action="">
              <label htmlFor="username">
                Ism
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="contact-input"
                  placeholder="Ismingizni kiriting"
                />
              </label>
              <label htmlFor="email">
                Elektron pochta yoki Telegram
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="contact-input"
                  placeholder="Elektron pochtangizni yoki Telegramni kiriting"
                />
              </label>
              <label htmlFor="phone">
                Telefon raqami
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  className="contact-input"
                  placeholder="+998"
                />
              </label>
              <label htmlFor="text">
                Sizning xabaringiz
                <textarea
                  name="text"
                  className="contact-input"
                  placeholder="Sizning xabaringiz"
                  rows="5"
                  cols="50"
                  id="text"></textarea>
              </label>
            </form>
          </Box>
          <Image
            {...css.image}
            src="http://alstar.uz/assets/contact-527c043b.png"
          />
        </Flex>
      </Box>
    </Box>
  );
}

export default Contact;

const css = {
  image: {
    width: "600px",
  },
  title: {
    fontSize: {
      base: "23px",
      md: "35px",
    },
    lineHeight: {
      base: "30px",
      md: "55px",
    },
    letterSpacing: "1px",
    color: "#110D60",
  },
};
