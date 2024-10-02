import s from "./CharactersPage.module.css";
import logo from "../../assets/logo-characters.png";
import { Container } from "../../layouts/Container";
import { SearchInput } from "../../ui/SearchInput";
import { useEffect, useState } from "react";
import { CharactersCard } from "./components/CharactersCard";

export const CharactersPage = () => {
  const [charactersData, setCharactersData] = useState([]);
  const [nextPage, setNextPage] = useState(
    "https://rickandmortyapi.com/api/character"
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCharacters = async () => {
    if (!nextPage) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(nextPage);
      const data = await response.json();
      setCharactersData((prevCharacters) => [
        ...prevCharacters,
        ...data.results,
      ]);
      setNextPage(data.info.next);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <>
      <Container className={s.container}>
        <img className={s.logo} src={logo} alt="rick-and-morty" />

        <div className={s.filters}>
          <SearchInput placeholder="Search" size="small" onChange={() => {}} />
        </div>

        <div className={s.charactersGrid}>
          {charactersData.map(
            (character: {
              id: number;
              image: string;
              name: string;
              species: string;
            }) => (
              <CharactersCard
                key={character.id}
                image={character.image}
                title={character.name}
                text={character.species}
              />
            )
          )}
        </div>

        {/* //TODO: Вынести в UI */}
        <button onClick={fetchCharacters} className={s.button}>
          Load more
        </button>
      </Container>
    </>
  );
};
