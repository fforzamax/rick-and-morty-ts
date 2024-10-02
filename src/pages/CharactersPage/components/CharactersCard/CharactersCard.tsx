import s from "./CharactersCard.module.css";

interface CharactersCardProps {
  image: string;
  title: string;
  text: string;
}

export const CharactersCard = ({ image, title, text }: CharactersCardProps) => {
  return (
    <article className={s.card}>
      <div
        className={s.card__image}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className={s.card__content}>
        <h3 className={s.card__title}>{title}</h3>
        <p className={s.card__text}>{text}</p>
      </div>
    </article>
  );
};
