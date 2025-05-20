import React from "react";
import classes from "./Message.module.css";

console.log(classes);

export default function Message() {
  return (
    <div>
      <h1>Message Component with Module css</h1>

      <h2 className={classes.heading2}>THis is heading 2</h2>
      <h2 className={classes.heading2}>THis is heading 2</h2>

      <p className={classes.productDescription}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod soluta
        maiores fugit hic ullam recusandae dolorem reiciendis saepe cupiditate,
        illo amet necessitatibus consequatur ipsum mollitia delectus odit?
        Earum, facilis soluta!
      </p>
    </div>
  );
}
