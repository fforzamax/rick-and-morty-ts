import s from "./Input.module.css";
import searchIcon from "../../assets/icons/icon-search.svg";
import clsx from "clsx";

interface InputProps {
  placeholder?: string;
  size: "small" | "medium" | "large";
}

export const Input = ({ placeholder, size = "small" }: InputProps) => {
  return (
    <div className={clsx(s.inputContainer, s[size])}>
      <button className={s.button}>
        <img src={searchIcon} alt="search icon" />
      </button>
      <input className={s.input} type="text" placeholder={placeholder} />
    </div>
  );
};
