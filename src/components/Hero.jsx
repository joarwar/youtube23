import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";



const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const Container = styled.div`
  height: 100%;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Middle = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;


`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 60px;
  flex: 1;

`;

const Name = styled.h1`
  font-size: 44px;
  font-family: Courier New, Courier, monospace;
  color: black;
`;

const Title = styled.h2`
  font-size: 32px;
  font-family: Courier New, Courier, monospace;
  color: black;
`;
const Left = styled.div`
  flex: 1;
  opacity: 0.5;
`;
const IntroText = styled.div`
  display: flex;
  align-items: center;
  font-family: Courier New, Courier, monospace;
  padding-top: 10px;
  font-size: 28px;
  color:black;
  font-weight: 600;
  letter-spacing: 1px;
  max-width: 500px;
  

`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
  object-fit: cover;
`;





const Hero = () => {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current.scrollIntoView({ behavior: "smooth" });

  };
  return (
    <Section>
      <Navbar />
      <Container>
        <VideoBackground autoPlay loop muted playbackRate={0.5}>
          <source src="./img/bgvideo.mp4" type="video/mp4" />
        </VideoBackground>
        <Left>
        </Left>
        <Middle>
          <button onClick={handleClick}>V</button>
        </Middle>
        <Right>
          <Name>Joar Warholm</Name>
          <Title>.NET Developer</Title>
          <IntroText>
            I'm excitedly on the lookout for opportunities.
          </IntroText>
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
