import s from "./SearchInput.module.css";
import searchIcon from "../../assets/search-icon.svg";
import clsx from "clsx";

interface SearchInputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  size: "small" | "medium" | "large";
}

export const SearchInput = ({
  onChange,
  placeholder,
  size,
}: SearchInputProps) => {
  return (
    <div className={s.inputContainer}>
      <label className={s.icon} htmlFor="search">
        <img src={searchIcon} alt="search" />
        {/* //TODO: Может по другому иконку         загрузить?*/}
      </label>

      <input
        className={clsx(s.input, {
          [s.inputSmall]: size === "small",
          [s.inputMedium]: size === "medium",
          [s.inputLarge]: size === "large",
        })}
        type="text"
        id="search"
        aria-label="Search"
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};
