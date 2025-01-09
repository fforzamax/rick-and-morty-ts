import s from "./Select.module.css";
import ReactSelect, { components, StylesConfig } from "react-select";
import dropdownArrowIcon from "../../assets/icons/arrow-drop-down.svg";

/*!TODO: Вынести в отдельный файл. Кастомные стили для дропдауна */
const customStyles: StylesConfig = {
  control: (base, state) => ({
    ...base,
    width: 212,
    height: 56,
    paddingHorizontal: 14,
    borderRadius: 8,
    /*   border: state.isFocused ? "1px solid #00B0C8" : "1px solid #D9D9D9",  */
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "Roboto",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "19px",
    cursor: "pointer",
    /*   outline: state.menuIsOpen ? "1px solid #00B0C8" : "", */
    boxShadow: state.isFocused ? "0 0 0 1px rgb(98, 227, 245, 0.5)" : "none",
  }),
  option: (base, state) => ({
    ...base,
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "Roboto",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "19px",
    cursor: "pointer",
    backgroundColor: state.isSelected
      ? "rgba(98, 228, 245, 0.5)"
      : "transparent",
  }),
  singleValue: (base, state) => ({
    ...base,
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "Roboto",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "19px",
    cursor: "pointer",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  dropdownIndicator: (base) => ({
    ...base,
    backgroundImage: `url(${dropdownArrowIcon})`,
  }),
};

/* Кастомная дропдаун-стрелка */
const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <img src={dropdownArrowIcon} />
    </components.DropdownIndicator>
  );
};

export const Select = () => {
  return (
    <ReactSelect
      options={[
        { value: "1", label: "Option 1" },
        { value: "2", label: "Option 2" },
        { value: "3", label: "Option 3" },
      ]}
      styles={customStyles}
      components={{ DropdownIndicator }}
    ></ReactSelect>
  );
};
