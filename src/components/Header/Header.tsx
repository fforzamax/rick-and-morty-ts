import s from "./Header.module.css";
import logo from "../../assets/logo-black.png";
import { Container } from "../../layouts/Container";
export const Header = () => {
  return (
    <header>
      <Container className={s.container}>
        <img className={s.logo} src={logo} alt="rick-and-morty" />

        <nav className={s.nav}>
          {/* //TODO: Вынести в отдельный компонент меню? */}
          <ul className={s.list}>
            <li className={s.listItem}>Characters</li>
            <li className={s.listItem}>Locations</li>
            <li className={s.listItem}>Episodes</li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};
