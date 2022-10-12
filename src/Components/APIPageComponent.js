import React from "react";
import Input from "./Input";
import Title from "./Title";

export default function APIPageComponent(props) {
  return (
    <div>
<<<<<<< HEAD
      {/* <Title value={props.title}></Title> */}
      {/* <p>{props.description}</p> */}
      {/* <Input type="text" name="X-HS-IAuth" placeHolder="my placeholder text"></Input>
      <Input type="submit"/> */}
=======
      <Title value={props.title}></Title>
      <p>{props.description}</p>
      <Input type="text" name="X-HS-IAuth" placeHolder="my placeholder text"></Input>
      <Input type="submit" value="Submit"/>
>>>>>>> 32b9b3cfb392def8759eb7df6bb4f2cc4d0a46d5
    </div>
  );
}
