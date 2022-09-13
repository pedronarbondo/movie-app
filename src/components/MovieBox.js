import React from "react";
import classes from "./movieBox.module.css";
import { Link } from "react-router-dom";

export default function MovieBox(props) {
  const { image, id } = props;
  return (
    <Link to={`movie-app/${id}`}>
      <div className={classes.container}>
        <div className={classes.box}>
          <img src={image} />
        </div>
      </div>
    </Link>
  );
}
