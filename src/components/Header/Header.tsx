import { Container } from "../../layouts";
import s from "./Header.module.css";
import logo from "../../assets/icons/logo.png";
import { NavLink } from "react-router";

export const Header = () => {
  return (
    <header className={s.header}>
      <Container className={s.header__container}>
        <NavLink to="/">
          <img src={logo} className={s.logo} alt="rick and morty" />
        </NavLink>
        <nav className={s.menu}>
          <ul className={s.list}>
            <li className={s.list_item}>
              <NavLink to="/">Characters</NavLink>
            </li>
            <li className={s.list_item}>
              <NavLink to="/locations">Locations</NavLink>
            </li>
            <li className={s.list_item}>
              <NavLink to="/episodes">Episodes</NavLink>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};
