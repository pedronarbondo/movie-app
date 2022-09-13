import React from "react";
import classes from "./header.module.css";

export default function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.headerLeft}>
        <p className={classes.title}>MOVIE APP</p>
        <p>About</p>
      </div>
      <div className={classes.headerRight}></div>
    </div>
  );
}
