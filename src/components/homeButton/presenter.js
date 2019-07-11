import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: absolute;
  top: 100px;
  right: 100px;
`;

const Button = styled.div`
  padding: 7px;
  background: #4b618b;
  color: white;
`;

const Presenter = () => (
  <Container>
    <Link to={"/"}>
      <Button>Home button</Button>
    </Link>
  </Container>
);

export default Presenter;
