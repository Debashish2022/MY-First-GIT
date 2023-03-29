import React from "react";
import { Spinner } from "react-bootstrap";

export default function Loader({ size }) {
  return <Spinner animation="border" size={size} />;
}
