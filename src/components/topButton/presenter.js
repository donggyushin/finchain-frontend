import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: #1e3a6e;
  padding: 7px;
  border-radius: 40%;
  opacity: 0.8;
  cursor: pointer;
`;
const Text = styled.div`
  color: white;
`;

const Presenter = ({ topButtonClicked }) => {
  return (
    <Container onClick={topButtonClicked}>
      <Text>TOP</Text>
    </Container>
  );
};

export default Presenter;
