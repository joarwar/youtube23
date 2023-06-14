import React from "react";
import styled from "styled-components";
import Projects from "./Projects";


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  background-color: #f5f5f5;
`;


const Works = () => {
  return (
    <Section>
      <Container>
      <Projects />
      </Container>
    </Section>
  );
};

export default Works;
