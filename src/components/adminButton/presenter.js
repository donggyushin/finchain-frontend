import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  z-index: 3;
`;
const Text = styled.div`
  cursor: pointer;
`;

const Presenter = () => (
  <Container>
    <Link
      style={{
        color: "white"
      }}
      to={"/finchain/q1w2e3r4"}
    >
      <Text>admin button</Text>
    </Link>
  </Container>
);

export default Presenter;
