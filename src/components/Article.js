import React from "react";
import { minutesToRead } from "../Utility";

const Article = ({ title, date = "January 1, 1970", minutes, preview }) => {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      {minutesToRead(minutes)}
      <p>{preview}</p>
    </article>
  );
};

export default Article;
