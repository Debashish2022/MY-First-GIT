import React from "react";
import { Spinner } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";

export default function Loader(props) {
  return (
    <div>
      <Spinner animation={props.animation} size= {props.size} variant={props.variant} />
    </div>
  );
}
