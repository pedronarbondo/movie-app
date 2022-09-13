import React from "react";
import classes from "./movieBox.module.css";

export default function MovieBox(props) {
  const { image } = props;
  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <img src={image} />
      </div>
    </div>
  );
}
