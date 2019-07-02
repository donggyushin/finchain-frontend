import React from 'react';
import styled from 'styled-components'
import "antd/dist/antd.css";
import { Input, Tooltip, Icon, Button } from 'antd'
import { Link } from 'react-router-dom'

const Container = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;
const Text = styled.div`
    cursor: pointer;
`
const BigText = styled.div`
    color:#0A275B;
    font-size:30px;
`;
const ImgContainer = styled.div`
    background-color:#0A275B;
    padding: 30px;
    border-radius: 50%;
    width: 200px;
`;
const IMG = styled.img`
    width:100%;
`;

const Form = styled.div`
    width:400px;
    display:flex;
    flex-direction:column;
    align-items:center;
    border: 1px solid gainsboro;
    padding: 5px;
    border-radius: 5px;
`;

const Row = styled.div`
    display:flex;
`;


const Presenter = ({ iconLoading, username,
    password1,
    password2, inputChange, submitButtonClicked }) => {
    return (
        <Container>

            <ImgContainer>
                <IMG src={require('../../assets/logo.png')} />
            </ImgContainer>
            <BigText>New Account</BigText>
            <Form>
                <Input
                    placeholder="Enter your ID"
                    name={'username'}
                    onChange={inputChange}
                    value={username}
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    suffix={
                        <Tooltip title="Extra information">
                            <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                        </Tooltip>
                    }
                />
                <Input.Password
                    placeholder="Password"
                    onChange={inputChange}
                    value={password1}
                    name={'password1'}
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    suffix={
                        <Tooltip title="Extra information">
                            <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                        </Tooltip>
                    }
                    style={{
                        marginTop: 3,
                        marginBottom: 3
                    }}
                />
                <Input.Password
                    placeholder="Double check your password"
                    onChange={inputChange}
                    name={'password2'}
                    value={password2}
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    suffix={
                        <Tooltip title="Extra information">
                            <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                        </Tooltip>
                    }
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
                <Link to={'/login'} style={{
                    color: "#535c68"
                }}>
                    <Text>Login</Text>
                </Link>
                <Text>|</Text>
                <Link to={'/'} style={{
                    color: "#535c68"
                }}>
                    <Text>Home</Text>
                </Link>
            </Row>
        </Container>
    )
}

export default Presenter;