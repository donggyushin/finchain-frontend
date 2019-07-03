import React from "react";
import styled from "styled-components";
import "antd/dist/antd.css";
import { Input, Tooltip, Icon, Button } from "antd";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Text = styled.div``;
const BigText = styled.div`
  color: #0a275b;
  font-size: 30px;
`;
const ImgContainer = styled.div`
  background-color: #0a275b;
  padding: 30px;
  border-radius: 50%;
  width: 200px;
`;
const IMG = styled.img`
  width: 100%;
`;

const Form = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid gainsboro;
  padding: 5px;
  border-radius: 5px;
`;

const Row = styled.div`
  display: flex;
`;

const Presenter = ({
  iconLoading,
  submitButtonClicked,
  username,
  password,
  inputChange
}) => {
  return (
    <Container>
      <ImgContainer>
        <IMG src={require("../../assets/logo.png")} />
      </ImgContainer>
      <BigText>Login</BigText>
      <Form>
        <Input
          onChange={inputChange}
          placeholder="Enter your ID"
          name={"username"}
          prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
          value={username}
          suffix={
            <Tooltip title="Extra information">
              <Icon type="info-circle" style={{ color: "rgba(0,0,0,.45)" }} />
            </Tooltip>
          }
        />
        <Input.Password
          onChange={inputChange}
          placeholder="Password"
          name={"password"}
          prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
          value={password}
          suffix={
            <Tooltip title="Extra information">
              <Icon type="info-circle" style={{ color: "rgba(0,0,0,.45)" }} />
            </Tooltip>
          }
          style={{
            marginTop: 3,
            marginBottom: 3
          }}
        />

        <Button
          style={{
            background: "#0A275B",
            border: "1px solid #0A275B",
            marginTop: "10px"
          }}
          type="primary"
          icon="poweroff"
          loading={iconLoading}
          onClick={submitButtonClicked}
        >
          Submit!
        </Button>
      </Form>
      <Row style={{ marginTop: 15 }}>
        <Link
          to={"/newaccount"}
          style={{
            color: "#535c68"
          }}
        >
          <Text>New Account</Text>
        </Link>
        <Text>|</Text>
        <Link
          to={"/"}
          style={{
            color: "#535c68"
          }}
        >
          <Text>Home</Text>
        </Link>
      </Row>
    </Container>
  );
};

export default Presenter;
