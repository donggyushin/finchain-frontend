import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: absolute;
  top: 30px;
  z-index: 3;
  color: white;
`;

const Text = styled.div``;

const Presenter = () => (
  <Container>
    <Link
      style={{
        color: "white"
      }}
      to={"/change-password-only-master"}
    >
      <Text>change password</Text>
    </Link>
  </Container>
);

export default Presenter;
