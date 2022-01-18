import styled from "styled-components";
import PriceCard from "./PriceCard";

const Price = () => {
  const Container = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 780px) {
      flex-direction: column;
    }
  `;
  return (
    <Container>
      <PriceCard price="10" type="Basic" />
      <PriceCard price="20" type="Premium" />
      <PriceCard price="30" type="Advanced" />
    </Container>
  );
};

export default Price;
