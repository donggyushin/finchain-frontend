import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  z-index: 2;
  display: flex;
  align-items: center;
  width: 1000px;
  justify-content: space-between;
`;

const Text = styled.div`
  color: white;
  font-size: 12px;
  margin-right: 25px;
  text-decoration: none;
  cursor: pointer;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const IMG = styled.img`
  width: 100%;
`;

const Presenter = ({ login, logoutButtonClicked, navItemClicked }) => {
  return (
    <Container>
      <Row>
        <IMG
          style={{
            width: 150,
            marginRight: 60
          }}
          src={require("../../assets/logo.png")}
        />
        <Text onClick={navItemClicked} id={"1"}>
          Finchain 소개
        </Text>
        <Text onClick={navItemClicked} id={"2"}>
          시장 현황 및 전략
        </Text>
        <Text onClick={navItemClicked} id={"3"}>
          주요 서비스
        </Text>
        <Text onClick={navItemClicked} id={"4"}>
          BANK ISSUE COIN
        </Text>
        <Text onClick={navItemClicked} id={"5"}>
          VISION & GOAL
        </Text>
      </Row>
      <Row>
        {login ? (
          <Link
            to={"#"}
            style={{
              textDecoration: "none"
            }}
          >
            <Text onClick={logoutButtonClicked} style={{ marginRight: 3 }}>
              로그아웃
            </Text>
          </Link>
        ) : (
          <Row>
            <Link
              to={"/newaccount"}
              style={{
                textDecoration: "none"
              }}
            >
              <Text style={{ marginRight: 3 }}>회원가입</Text>
            </Link>
            <Text style={{ marginRight: 3 }}>|</Text>
            <Link
              to={"/login"}
              style={{
                textDecoration: "none"
              }}
            >
              <Text>로그인</Text>
            </Link>
          </Row>
        )}
      </Row>
    </Container>
  );
};

export default Presenter;
