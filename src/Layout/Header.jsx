import React from "react";
import classes from "./Header.module.css";
import mealsImage from "../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Table full of meals" />
      </div>
    </>
  );
};

export default Header;