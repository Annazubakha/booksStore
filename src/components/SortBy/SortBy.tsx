import { useState } from "react";
import { Icon } from "../index";
import s from "./SortBy.module.css";

export const SortBy: React.FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState("Show all");

  const toggleDropdown = () => {
    setIsOpen((prevState: boolean) => !prevState);
  };
  const closeDropdown = () => {
    setIsOpen(false);
  };
  const handleFilter = (filter: string) => {
    setFilter(filter);
    setIsOpen(false);
  };
  const handleResetFilter = () => {
    setFilter("Show all");
  };

  return (
    <div className={s.wrapper}>
      <p className={s.text}>Sort by:</p>
      <div className={s.inside_wrapper}>
        <button className={s.dropdown_btn} onClick={toggleDropdown}>
          {filter}
          <Icon id="arrow-down" size={28} className={s.icon} />
        </button>
        {isOpen && (
          <ul className={s.dropdown_list} onMouseLeave={closeDropdown}>
            <li
              className={`${s.dropdown_list_item} ${
                filter === "Price - high" && s.active
              }`}
              onClick={() => handleFilter("Price - high")}
            >
              Price - high
            </li>
            <li
              className={`${s.dropdown_list_item} ${
                filter === "Price - low" && s.active
              }`}
              onClick={() => handleFilter("Price - low")}
            >
              Price - low
            </li>
            <li
              className={`${s.dropdown_list_item} ${
                filter === "Categoty A to Z" && s.active
              }`}
              onClick={() => handleFilter("Categoty A to Z")}
            >
              Categoty A to Z
            </li>
            <li
              className={`${s.dropdown_list_item} ${
                filter === "Categoty Z to A" && s.active
              }`}
              onClick={() => handleFilter("Categoty Z to A")}
            >
              Categoty Z to A
            </li>
            <li
              className={`${s.dropdown_list_item} ${
                filter === "Show all" && s.active
              }`}
              onClick={() => handleFilter("Show all")}
            >
              Show all
            </li>
          </ul>
        )}
        <button className={s.reset_wrapper} onClick={handleResetFilter}>
          <Icon id="reload" size={18} className={s.icon_reset} />
        </button>
      </div>
    </div>
  );
};
