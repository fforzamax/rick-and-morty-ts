import { Container } from "../../layouts/Container";
import s from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer>
      <Container className={s.container}>
        <p className={s.text}>Made with ❤️ by fforzamax</p>
      </Container>
    </footer>
  );
};
