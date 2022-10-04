import React from "react";
import Title from "./Title";

export default function APIPageComponent(props) {
  return (
    <div>
      <Title value={props.title}></Title>
      <p>{props.description}</p>
    </div>
  );
}
