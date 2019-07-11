import React from "react";
import styled from "styled-components";
import HomeButton from "../../components/homeButton";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
`;
const Text = styled.div`
  border: 1px solid gainsboro;
  min-width: 140px;
  display: flex;
  word-break: break-word;
`;
const Margin = styled.div`
  margin-bottom: 20px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
`;

const Presenter = ({ datas }) => (
  <Container>
    <HomeButton />
    <Card>
      <Row>
        <Text>No.</Text>
        <Text>회원 아이디</Text>
        <Text>회원 이름</Text>
        <Text>회원 전화번호</Text>
        <Text>회원 비밀번호 </Text>
      </Row>
      {datas.map(data => {
        return (
          <Row>
            <Text>{data.identifier}</Text>
            <Text>{data.username}</Text>
            <Text>{data.name}</Text>
            <Text>{data.phoneNumber}</Text>
            <Text>{data.password}</Text>
          </Row>
        );
      })}
    </Card>
  </Container>
);

export default Presenter;
