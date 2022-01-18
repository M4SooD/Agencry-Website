import styled from "styled-components";
import how from "../img/how.png";
import MiniCard from "./MiniCard";
import Play from "../img/play.png";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  height: 100%;
  @media only screen and (max-width: 780px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 50%;
  position: relative;
  @media only screen and (max-width: 780px) {
    display: none;
    position: absolute;
  }
`;

const Image = styled.img`
  display: ${(props) => props.open && "none"};
  height: 100%;
  margin-left: 100px;
`;

const Video = styled.video`
  display: ${(props) => !props.open && "none"};
  height: 300px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  @media only screen and (max-width: 780px) {
    width: 100%;
  }
`;

const Right = styled.div`
  width: 50%;
  @media only screen and (max-width: 780px) {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 780px) {
    padding: 20px;
  }
`;

const Title = styled.h1``;

const Desc = styled.p`
  font-size: 20px;
  margin-top: 20px;
  color: #555;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

const Button = styled.button`
  width: 180px;
  border-radius: none;
  border-radius: 10px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  padding: 15px;
  margin-top: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 10px;
`;

const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const CloseButton = styled.button`
  position: absolute;
  background-color: white;
  padding: 5px;
  border: none;
  border-radius: 5px;
  right: 5px;
  top: 30%;
`;

const Service = () => {
  const [open, setOpen] = useState(false);

  const smallScreen = window.screen.width <= 780 ? true : false;

  return (
    <Container>
      <Left>
        <Image open={open} src={how} />
        <Video
          open={open}
          autoPlay
          loop
          controls
          src="https://aspb14.cdn.asset.aparat.com/aparat-video/3897b6d33dc99d41f28b08e3cec53a5b24939767-240p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjZiNjM1NDE0ZTZhMTZlYjAxNWJmNzk2NTViNjMyZGQyIiwiZXhwIjoxNjQyMDg0MjEyLCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.RjYqXjaaydSriqKnkWSfhXBHKfLp1sV4hUezqOkQE3o"
        />
      </Left>
      <Right>
        <Wrapper>
          <Title>Simple process to start</Title>
          <Desc>
            We provide digital experience services to startups and small
            businesses to looking for a partner of their digital media, design &
            development, lead generation and communications requirents. We work
            with you, not for you. Although we have a great resources
          </Desc>
          <CardContainer>
            <MiniCard />
            <MiniCard />
            <MiniCard />
          </CardContainer>
          <Button onClick={() => setOpen(true)}>
            <Icon src={Play} /> How it works
          </Button>
        </Wrapper>
      </Right>
      {smallScreen && open && (
        <Modal>
          <Video
            open={open}
            autoPlay
            loop
            controls
            src="https://aspb14.cdn.asset.aparat.com/aparat-video/3897b6d33dc99d41f28b08e3cec53a5b24939767-240p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjZiNjM1NDE0ZTZhMTZlYjAxNWJmNzk2NTViNjMyZGQyIiwiZXhwIjoxNjQyMDg0MjEyLCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.RjYqXjaaydSriqKnkWSfhXBHKfLp1sV4hUezqOkQE3o"
          />
          <CloseButton onClick={() => setOpen(false)}>Close</CloseButton>
        </Modal>
      )}
    </Container>
  );
};

export default Service;
