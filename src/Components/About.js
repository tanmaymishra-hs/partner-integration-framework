import React from "react";
import { Link } from "react-router-dom";
import Title from "./Title";
import UList from "./UList";

export default function About(props) {
  return (
    <div>
      <Title value={props.title}></Title>
      <p>{props.description}</p>
      <UList listItems={props.listItems}></UList>
      <Link to="/">Back to Home</Link>
    </div>
  );
}
