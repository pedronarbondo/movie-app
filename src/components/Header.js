import React from "react";
import classes from "./header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.headerLeft}>
        <Link className={classes.links} to="/movie-app">
          <p className={classes.title}>MOVIE APP</p>
        </Link>
        <Link className={classes.links} to="/movie-app/about">
          <p>About</p>
        </Link>
      </div>
      <div className={classes.headerRight}></div>
    </div>
  );
}
