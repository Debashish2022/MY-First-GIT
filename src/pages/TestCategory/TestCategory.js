import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../../components/Header/Header";
import TestCategoryCard from "../../components/TestCategoryCard/TestCategoryCard";

export default function TestCategory() {
  return (
    <div>
      <Header />
      <Container fluid>
        <TestCategoryCard />
      </Container>
    </div>
  );
}
