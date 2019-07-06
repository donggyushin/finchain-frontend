import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 10px;
  height: 10px;
`;

const Presenter = ({ secretButtonClicked }) => (
  <Container onClick={secretButtonClicked} />
);

export default Presenter;
