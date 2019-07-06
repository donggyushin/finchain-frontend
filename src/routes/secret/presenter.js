import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const Text = styled.div``;
const Margin = styled.div`
  margin-bottom: 20px;
`;

const Presenter = ({ datas }) => (
  <Container>
    <Text>Secret page</Text>
    {datas.map(data => {
      console.log(data);
      return (
        <Container key={data.identifier}>
          <Text>user id: {data.username}</Text>
          <Text>user name: {data.name}</Text>
          <Text>user phonenumber: {data.phoneNumber}</Text>
          <Text>user created at: {data.createdAt}</Text>
          <Text>user updated at: {data.updatedAt}</Text>
          <Margin />
        </Container>
      );
    })}
  </Container>
);

export default Presenter;
