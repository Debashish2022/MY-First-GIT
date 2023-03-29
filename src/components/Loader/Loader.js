import React from "react";
import { Spinner } from "react-bootstrap";

export default function Loader(props) {
  return  <Spinner animation={props.animation} variant={props.variant}  size={props.size}/>;
}
