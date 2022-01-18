import styled from "styled-components";
import Search from "../img/search.png";
const Container = styled.div`
  width: 150px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  @media only screen and (max-width: 780px) {
    width: 100px;
  }
`;

const Image = styled.img`
  width: 20px;
`;

const Text = styled.span`
  margin-top: 10px;
  text-align: center;
  @media only screen and (max-width: 780px) {
    font-size: 14px;
  }
`;

const MiniCard = () => {
  return (
    <Container>
      <Image src={Search} />
      <Text>Lorem ipsum dolor sit amet</Text>
    </Container>
  );
};

export default MiniCard;
