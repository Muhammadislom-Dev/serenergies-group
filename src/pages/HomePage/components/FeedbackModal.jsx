import {
  Modal,
  ModalOverlay,
  ModalContent,
  Button,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

function FeedbackModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} {...css.buttons}>
        Sharh qo`shish
      </Button>
      <Modal
        isCentered
        size={{ base: "sm", md: "md" }}
        isOpen={isOpen}
        onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <form className="form feedback-form" action="">
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
            <Button {...css.button} type="submit">
              Yuborish
            </Button>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}

export default FeedbackModal;

const css = {
  button: {
    backgroundColor: "#EDCB3F",
    border: "2px solid #EDCB3F",
    color: "#fff",
    fontSize: "18px",
    lineHeight: "25px",
    letterSpacing: "1px",
    fontWeight: 600,
    borderRadius: "12px",
    transition: "0.3s ease",
    height: "50px",
    width: "100%",

    _hover: {
      backgroundColor: "#fff",
      color: "#110D60",
      cursor: "pointer",
      boxShadow: "0 9px 18px 0 rgba(144,173,248,0.25)",
      transform: "scale(1.02)",
      transition: "0.3s ease",
    },
  },
  buttons: {
    backgroundColor: "#EDCB3F",
    border: "2px solid #EDCB3F",
    color: "#fff",
    fontSize: "18px",
    lineHeight: "25px",
    letterSpacing: "1px",
    fontWeight: 600,
    borderRadius: "12px",
    transition: "0.3s ease",
    height: "50px",
    width: "170px",

    _hover: {
      backgroundColor: "#fff",
      color: "#110D60",
      cursor: "pointer",
      boxShadow: "0 9px 18px 0 rgba(144,173,248,0.25)",
      transform: "scale(1.02)",
      transition: "0.3s ease",
    },
  },
};
