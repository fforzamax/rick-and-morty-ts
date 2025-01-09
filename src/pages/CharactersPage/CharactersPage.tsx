import { Container } from "../../layouts";
import s from "./CharactersPage.module.css";
import charactersLogo from "../../assets/images/rick-and-morty-biglogo.webp";
import { Input, Select } from "../../ui";

export const CharactersPage = () => {
  return (
    <Container className={s.container}>
      <img src={charactersLogo} className={s.logo} alt="rick and morty"></img>
      <div className={s.filters}>
        <Input />
        <Select />
        <Select />
        <Select />
      </div>
      <div className={s.characters}></div>
    </Container>
  );
};
