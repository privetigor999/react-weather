import React from "react";
import styles from "./Header.module.scss";

const Header = ({ cities }) => {
  return (
    <header>
      {cities.map((city) => (
        <div>{city.city}</div>
      ))}
    </header>
  );
};

export default Header;
