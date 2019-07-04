import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import "./index.css";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BackgroundAbsoluteContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const AbsoluteContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
`;

const RelativeContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IMG = styled.img`
  width: 100%;
`;

const GREY_BACKGROUND = styled.div`
  width: 100%;
  background: #fafbfc;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const MainPage = () => {
  return (
    <Container>
      <RelativeContainer
        style={{
          height: 600,
          width: "100%"
        }}
      >
        <BackgroundAbsoluteContainer>
          <IMG
            style={{
              height: 600
            }}
            src={require("../../assets/bluebuildingback.png")}
          />
        </BackgroundAbsoluteContainer>
        <video
          id="vid"
          autoPlay
          muted
          controls
          style={{ zIndex: 2, marginRight: 60 }}
          width="500"
        >
          {console.log(document.getElementById("vid"))}
          <source
            type={"video/mp4"}
            src={require("../../assets/finchainvideo.mp4")}
          />
          Sorry, your browser doesn't support embedded videos
        </video>
        <div style={{ width: 700 }}>
          <Fade bottom cascade>
            <IMG src={require("../../assets/1.png")} />
          </Fade>
        </div>
      </RelativeContainer>
      <Fade bottom cascade>
        <div>
          <div
            style={{
              marginTop: 50,
              marginBottom: 90,
              width: "900px"
            }}
          >
            <IMG src={require("../../assets/2.png")} />
          </div>
        </div>
      </Fade>
      <IMG src={require("../../assets/3.png")} />

      <div
        style={{
          width: "900px",
          marginTop: 30,
          marginBottom: 50,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Fade bottom cascade>
          <IMG
            style={{
              width: 700,
              marginRight: -35
            }}
            src={require("../../assets/4.png")}
          />

          <IMG
            style={{
              marginTop: 20
            }}
            src={require("../../assets/5.png")}
          />
        </Fade>
      </div>

      <div />

      <GREY_BACKGROUND>
        <Fade bottom cascade>
          <div
            style={{
              width: "1000px",
              marginTop: 100,
              marginBottom: 100
            }}
          >
            <IMG src={require("../../assets/6.png")} />
            <div style={{ marginTop: 70 }}>
              <IMG src={require("../../assets/7.png")} />
            </div>
            <IMG
              style={{
                marginTop: 20
              }}
              src={require("../../assets/8.png")}
            />
          </div>
        </Fade>
      </GREY_BACKGROUND>
      <div
        style={{
          width: "1000px",
          marginTop: 100,
          marginBottom: 100
        }}
      >
        <Row>
          <Fade bottom cascade>
            <Column
              style={{
                marginRight: -80
              }}
            >
              <IMG
                style={{ width: "80%" }}
                src={require("../../assets/9.png")}
              />
              <IMG
                style={{
                  width: "80%",

                  marginTop: 150,
                  marginLeft: -100
                }}
                src={require("../../assets/10.png")}
              />
            </Column>
            <Column>
              <IMG
                style={{
                  marginTop: 70,
                  width: "80%",
                  marginLeft: -40
                }}
                src={require("../../assets/11.png")}
              />
            </Column>
          </Fade>
        </Row>
      </div>

      <GREY_BACKGROUND>
        <Fade bottom cascade>
          <div
            style={{
              width: "880px",
              marginTop: 100,
              marginBottom: 100,
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <IMG
              style={{ marginBottom: 70, width: "70%" }}
              src={require("../../assets/12.png")}
            />
            <IMG src={require("../../assets/13.png")} />
          </div>
        </Fade>
      </GREY_BACKGROUND>

      <div
        style={{
          width: "1000px",
          marginTop: 100,
          marginBottom: 70
        }}
      >
        <Fade bottom cascade>
          <IMG src={require("../../assets/14.png")} />
        </Fade>
      </div>
      <div
        style={{
          width: "860px",
          marginBottom: 30
        }}
      >
        <Fade bottom cascade>
          <IMG
            style={{ marginBottom: 40 }}
            src={require("../../assets/15.png")}
          />
          <IMG
            style={{ marginBottom: 40 }}
            src={require("../../assets/16.png")}
          />
          <IMG
            style={{ marginBottom: 40 }}
            src={require("../../assets/17.png")}
          />
          <IMG src={require("../../assets/18.png")} />
        </Fade>
      </div>

      <GREY_BACKGROUND
        style={{
          paddingBottom: 100
        }}
      >
        <Fade bottom cascade>
          <Row
            style={{
              width: "1000px",
              display: "flex",
              justifyContent: "flex-start",
              marginTop: 90,
              marginBottom: 50
            }}
          >
            <IMG
              style={{
                width: "30%"
              }}
              src={require("../../assets/19.png")}
            />
          </Row>
          <Row
            style={{
              width: "864px",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <IMG
              style={{
                width: "55%"
              }}
              src={require("../../assets/20.png")}
            />
            <IMG
              style={{
                width: "4%",
                marginRight: 7,
                marginLeft: 7
              }}
              src={require("../../assets/21.png")}
            />
            <IMG
              style={{
                width: "55%"
              }}
              src={require("../../assets/22.png")}
            />
          </Row>
        </Fade>
      </GREY_BACKGROUND>
      <div
        style={{
          width: "1000px"
        }}
      >
        <Fade bottom cascade>
          <Row
            style={{
              marginTop: 100
            }}
          >
            <IMG
              src={require("../../assets/23.png")}
              style={{
                width: 100,
                marginLeft: 40
              }}
            />
          </Row>
          <Row
            style={{
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <IMG
              style={{
                width: "30%",
                marginRight: 20
              }}
              src={require("../../assets/24.png")}
            />
            <IMG
              style={{
                width: "30%",
                height: "60%",
                marginTop: 20,
                marginLeft: 20
              }}
              src={require("../../assets/25.png")}
            />
          </Row>
          <Row
            style={{
              alignItems: "flex-end",
              marginBottom: 140,
              width: "100%"
            }}
          >
            <Column>
              <IMG
                style={{
                  marginRight: 20
                }}
                src={require("../../assets/26.png")}
              />
            </Column>
            <Column
              style={{
                marginRight: 10
              }}
            >
              <IMG
                style={{
                  marginBottom: 20,
                  width: "80%"
                }}
                src={require("../../assets/27.png")}
              />
              <IMG src={require("../../assets/29.png")} />
            </Column>
            <Column>
              <IMG
                style={{
                  width: "80%",
                  marginBottom: 20
                }}
                src={require("../../assets/28.png")}
              />
              <IMG src={require("../../assets/30.png")} />
            </Column>
          </Row>
        </Fade>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "860px",
          alignItems: "center"
        }}
      >
        <Fade bottom cascade>
          <IMG
            style={{
              width: "80%",
              marginBottom: 80
            }}
            src={require("../../assets/31.png")}
          />
          <IMG
            style={{
              marginBottom: 50
            }}
            src={require("../../assets/32.png")}
          />
          <IMG
            style={{
              width: "88%",
              marginLeft: 50
            }}
            src={require("../../assets/33.png")}
          />
          <IMG
            style={{
              marginTop: 50,
              marginBottom: 120
            }}
            src={require("../../assets/34.png")}
          />
        </Fade>
      </div>
      <IMG
        src={require("../../assets/bluebuildingback.png")}
        style={{ width: "100%", height: 300 }}
      />
    </Container>
  );
};

export default MainPage;
