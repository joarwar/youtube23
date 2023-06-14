import React, { useRef, useState } from "react";
import styled from "styled-components";
import { CiLinkedin, CiMail } from "react-icons/ci";
import { AiFillGithub, AiOutlinePhone } from "react-icons/ai";
import emailjs from "@emailjs/browser";



const PhoneIcon = styled(AiOutlinePhone)`
  cursor: pointer;
  font-size: 60px;
  object-fit: contain;
  position: absolute;
  top: 50%;
  bottom: 0;
  left: 70%;
  right: 0;
`;

const LinkedinIcon = styled(CiLinkedin)`
  cursor: pointer;
  font-size: 60px;
  object-fit: contain;
  position: absolute;
  top: 50%;
  bottom: 0;
  left: 10%;
  right: 0;
`;
const MailIcon = styled(CiMail)`
  cursor: pointer;
  font-size: 60px;
  object-fit: contain;
  position: absolute;
  top: 50%;
  bottom: 0;
  left: 50%;
  right: 0;
`;
const GithubIcon = styled(AiFillGithub)`
  cursor: pointer;
  font-size: 60px;
  object-fit: contain;
  position: absolute;
  top: 50%;
  bottom: 0;
  left: 30%;
  right: 0;
`;

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Right = styled.div`
  flex: 1;
  position: relative;
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Input = styled.input`
  padding: 20px;
  background-color: white;
  border: 4px solid #ae99f2;
  border-radius: 5px;
`;
const Textarea = styled.textarea`
  padding: 20px;
  background-color: white;
  border: 4px solid #ae99f2;
  border-radius: 5px;
`;
const Button = styled.button`
  background-color: #ae99f2;
  color: white;
  border: none;
  padding: 15px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
`;
const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const Icons = styled.div`
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  gap: 40px;

  font-size: 40px;
  padding-bottom: 20px;
`;
const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_zij2m3q",
        "template_m2junfs",
        ref.current,
        "O0V02mojZd3xK8OOT"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Let's Talk!</Title>
            <Input placeholder="Name" name="name" />
            <Input placeholder="Email" name="email" />
            <Textarea
              placeholder="Write your message"
              name="message"
              rows={10}
            />
            <Button type="submit">Send</Button>
            {success && "Thanks for your message! I will get back to you soon."}
          </Form>
        </Left>
        <Right>
       

          <LinkedinIcon />
          <GithubIcon />
          <MailIcon />
          <PhoneIcon />
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;
