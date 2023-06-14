import React from "react";
import styled from "styled-components";

import { AiOutlineCheck } from "react-icons/ai";

const Check = styled(AiOutlineCheck)`
  height: auto;
  width: 22px;
`;
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;
const Name = styled.h1`
  font-size: 44px;
  font-family: "monospace";
  font-weight: 800;
  text-shadow: 2px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;
  -webkit-text-stroke: 1px #ae99f2;
`;

const Text = styled.p`
  color: white;
  letter-spacing: 1px;
  font-size: 20px;
  text-shadow: 2px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;
`;

const Image = styled.img`
  height: 50%;
  width: 70%;
  object-fit: cover;
  border-radius: 60%;
  border: 5px solid black;
  box-shadow: 0px 0px 10px 0px black;
  justify-content: center;
  margin-top: 250px;
`;

const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Image src="./img/joarbild.jpg" />
        </Left>
        <Right>
          <Name>Biography</Name>
          <Text>
            Hello, I'm Joar Gunnar Warholm, a native of Gothenburg, Sweden. I'm
            an enthusiastic aspiring full-stack developer, actively seeking
            exciting opportunities that will allow me to thrive and further
            develop my skills in the field.
            <br /> <br />
            I possess proficiency in both front-end and back-end development,
            and I maintain a constant desire to expand my knowledge further.
            Collaboration is a key aspect of my work style, as I thoroughly
            enjoy being part of teams.
            <br />
            My skillset can be found <a href="www.google.com">here.</a>
            <br /> <br />In my free time I'm always up for a
            good session of boardgames, also former dancer who stills enjoy to break
            out in dance every now and then.
          </Text>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
