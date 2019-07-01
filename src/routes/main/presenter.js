import React from 'react'
import styled from 'styled-components'
import "./index.css"

const Container = styled.div`
    width:100vw;
    min-height:100vh;
    display:flex;
    flex-direction:column;
    align-items:center;
`
const AbsoluteContainer = styled.div`
    position:absolute;
    top: 50%;
    left:50%;
    transform: translate(-50%,-50%);
    width:70%;
`

const RelativeContainer = styled.div`
    position:relative;
`;

const IMG = styled.img`
    width:100%;
`

const GREY_BACKGROUND = styled.div`
    width:100%;
    background:#ebeced;
    display:flex;
    flex-direction:column;
    align-items:center;
`;

const Column = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`;

const Row = styled.div`
    display:flex;
    justify-content:center;
    width:100%;
`

const MainPage = () => {
    return (
        <Container>
            <RelativeContainer>
                <IMG src={require('../../assets/bluebuildingback.png')} />
                <AbsoluteContainer>
                    <div style={{ width: "100%" }} >
                        <IMG src={require('../../assets/1.png')} />
                    </div>
                </AbsoluteContainer>
            </RelativeContainer>
            <div style={{
                marginTop: 50,
                marginBottom: 90,
                width: "70%"
            }}>
                <IMG src={require('../../assets/2.png')} />
            </div>
            <IMG src={require('../../assets/3.png')} />
            <div style={{
                width: "65%",
                marginTop: 30,
                marginBottom: 50

            }}>
                <IMG src={require('../../assets/4.png')} />
                <IMG src={require('../../assets/5.png')} />
            </div>

            <div />
            <GREY_BACKGROUND>
                <div style={{
                    width: "70%",
                    marginTop: 100,
                    marginBottom: 100
                }}>
                    <IMG src={require('../../assets/6.png')} />
                    <div style={{ marginTop: 70 }}>

                        <IMG src={require('../../assets/7.png')} />
                    </div>
                    <IMG src={require('../../assets/8.png')} />
                </div>
            </GREY_BACKGROUND>
            <div style={{
                width: "70%",
                marginTop: 100,
                marginBottom: 100
            }}>

                <Row>
                    <Column style={{
                        marginRight: -80
                    }}>
                        <IMG style={{ width: "80%" }} src={require('../../assets/9.png')} />
                        <IMG style={{
                            width: "80%",

                            marginTop: 150,
                            marginLeft: -100
                        }} src={require('../../assets/10.png')} />
                    </Column>
                    <Column>
                        <IMG style={{
                            marginTop: 70,
                            width: "80%",
                            marginLeft: -40
                        }} src={require('../../assets/11.png')} />
                    </Column>
                </Row>
            </div>

            <GREY_BACKGROUND>
                <div style={{
                    width: "60%",
                    marginTop: 100,
                    marginBottom: 100,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}>
                    <IMG style={{ marginBottom: 70, width: "70%" }} src={require('../../assets/12.png')} />
                    <IMG src={require('../../assets/13.png')} />
                </div>
            </GREY_BACKGROUND>

            <div style={{
                width: "70%",
                marginTop: 100,
                marginBottom: 70
            }}>
                <IMG src={require('../../assets/14.png')} />
            </div>
            <div style={{
                width: "60%",
                marginBottom: 30
            }}>
                <IMG src={require('../../assets/15.png')} />
                <IMG src={require('../../assets/16.png')} />
                <IMG src={require('../../assets/17.png')} />
                <IMG src={require('../../assets/18.png')} />
            </div>
            <GREY_BACKGROUND style={{
                paddingBottom: 100
            }}>
                <Row style={{
                    width: "70%",
                    display: "flex",
                    justifyContent: "flex-start",
                    marginTop: 90,
                    marginBottom: 50
                }}>
                    <IMG style={{
                        width: "30%"
                    }} src={require('../../assets/19.png')} />
                </Row>
                <Row style={{
                    width: "60%",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <IMG style={{
                        width: "55%"
                    }} src={require('../../assets/20.png')} />
                    <IMG
                        style={{
                            width: "4%",
                            marginRight: 7,
                            marginLeft: 7
                        }}
                        src={require('../../assets/21.png')} />
                    <IMG
                        style={{
                            width: "55%"
                        }}
                        src={require('../../assets/22.png')} />
                </Row>
            </GREY_BACKGROUND>
            <div style={{
                width: "70%"
            }}>
                <Row style={{
                    marginTop: 100
                }}>
                    <IMG src={require('../../assets/23.png')} style={{
                        width: 100
                    }} />
                </Row>
                <Row style={{
                    alignItems: "center",
                    justifyContent: "space-between"
                }}>
                    <IMG style={{
                        width: "30%",
                        marginRight: 20
                    }} src={require('../../assets/24.png')} /><IMG
                        style={{
                            width: "30%",
                            height: "60%",
                            marginTop: 20,
                            marginLeft: 20
                        }}
                        src={require('../../assets/25.png')} />
                </Row>
                <Row style={{
                    alignItems: "flex-end",
                    marginBottom: 140,
                    width: "100%"
                }}>
                    <Column>
                        <IMG style={{
                            marginRight: 20
                        }} src={require('../../assets/26.png')} />
                    </Column>
                    <Column style={{
                        marginRight: 10
                    }}>
                        <IMG style={{
                            marginBottom: 20,
                            width: "80%"
                        }} src={require('../../assets/27.png')} />
                        <IMG src={require('../../assets/29.png')} />
                    </Column>
                    <Column>
                        <IMG style={{
                            width: "80%",
                            marginBottom: 20
                        }} src={require('../../assets/28.png')} />
                        <IMG src={require('../../assets/30.png')} />
                    </Column>
                </Row>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                width: "60%",
                alignItems: "center"
            }}>
                <IMG style={{
                    width: "80%",
                    marginBottom: 80
                }} src={require('../../assets/31.png')} />
                <IMG style={{
                    marginBottom: 50
                }} src={require('../../assets/32.png')} />
                <IMG style={{
                    width: "90%"
                }} src={require('../../assets/33.png')} />
                <IMG style={{
                    marginTop: 50,
                    marginBottom: 120
                }} src={require('../../assets/34.png')} />
            </div>
            <IMG style={{
                height: 300
            }} src={require('../../assets/bluebuildingback.png')} />
        </Container>
    )
}

export default MainPage