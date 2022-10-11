import React from "react";
import Input from "./Input";
import Title from "./Title";

export default function APIPageComponent(props) {
  return (
    <div>
      <Title value={props.title}></Title>
      <p>{props.description}</p>
      <Input type="text" name="X-HS-IAuth" placeHolder="my placeholder text"></Input>
      <Input type="submit" value="Submit"/>
    </div>
  );
}
