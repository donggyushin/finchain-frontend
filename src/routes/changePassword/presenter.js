import React from "react";
import styled from "styled-components";
import { Input, Button } from "antd";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Presenter = ({ password, handleInput, changePassword }) => (
  <Container>
    <Input.Password
      value={password}
      style={{
        width: "230px"
      }}
      onChange={handleInput}
      placeholder={"변경할 비밀번호를 입력해주세요. "}
    />
    <Button onClick={changePassword}>submit</Button>
  </Container>
);

export default Presenter;
