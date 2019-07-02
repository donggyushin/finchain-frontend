import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
    z-index:2;
    display:flex;
    align-items:center;
    width:1000px;
    justify-content:space-between;
`

const Text = styled.div`
    color:white;
    font-size:12px;
    margin-right:25px;
    text-decoration:none;
    cursor: pointer;
`;

const Row = styled.div`
    display:flex;
    align-items:center;
`;

const IMG = styled.img`
    width:100%;
`;

const Presenter = () => {
    return (
        <Container>
            <Row>
                <IMG style={{
                    width: 150,
                    marginRight: 60
                }} src={require('../../assets/logo.png')} />
                <Text>Finchain 소개</Text>
                <Text>시장 현황 및 전략</Text>
                <Text>주요 서비스</Text>
                <Text>BANK ISSUE COIN</Text>
                <Text>VISION & GOAL</Text>
            </Row>
            <Row>
                <Link to={'/newaccount'} style={{
                    textDecoration: "none"
                }}>
                    <Text style={{ marginRight: 3 }}>회원가입</Text>
                </Link>
                <Text style={{ marginRight: 3 }}>|</Text>
                <Link to={'/login'} style={{
                    textDecoration: "none"
                }}><Text>로그인</Text></Link>
            </Row>
        </Container>
    )
}

export default Presenter;