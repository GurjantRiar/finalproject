import { classes } from "istanbul-lib-coverage";
import React, { Fragment } from "react";
import Images from "../../assets/meal.jpg";
// import classes from "./header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Meals</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={Images} alt="A table full of delicious food !" />
      </div>
    </Fragment>
  );
};

export default Header;
