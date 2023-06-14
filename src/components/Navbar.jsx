import React from "react";
import styled from "styled-components";
import { CiLinkedin, CiMail } from "react-icons/ci";
import { AiFillGithub } from "react-icons/ai";

const Section = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
`;
const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;

`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  color:black;
`;
const ListItem = styled.li`
  cursor: pointer;
  font-size: 16px;
  color:black;
  :hover{
    color:#d1d4f5;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  }
  margin-left: 10px;
  margin-right: 10px;
`;
const List = styled.ul`
  display: flex;
  gap: 10px;
  list-style: none;
`;
const Logo = styled.img`
  padding-top: 20px;
  height: auto;
  width: 120px;
  
`;
const GithubIcon = styled(AiFillGithub)`
  cursor: pointer;
  font-size: 40px;
  color:black; 
  :hover{
    color:#d1d4f5;
    font-weight:600;
  }
`;
const LinkedinIcon = styled(CiLinkedin)`
  cursor: pointer;
  font-size: 40px;
  color:black;  
  :hover{
    color:#d1d4f5;
    font-weight:600;
  }

`;

const MailIcon = styled(CiMail)`
  cursor: pointer;
  font-size: 40px;
  color:black;  
    :hover{
    color:#d1d4f5;
    font-weight:600;
  }
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logo1.png" />
          <List>
            <ListItem>Home</ListItem>
            /
            <ListItem>Projects</ListItem>
            /
            <ListItem>About Me</ListItem>
            /
            <ListItem>Skills</ListItem>
            /
            <ListItem>Resume</ListItem>
            /
            <ListItem>Contact</ListItem>
          </List>
        </Links>

        <Icons>
          <GithubIcon />
          <LinkedinIcon />
          <MailIcon />
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
