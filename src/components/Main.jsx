import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #3f3f3f;
`;

const Background = styled.div`
  width: 100%;
  height: 432px;
  background: url("/your-image-path.jpg") no-repeat center/cover;
  position: relative;
  z-index: 1;
`;

const Content = styled.div`
  background: #333;
  color: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  max-width: 600px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  top: -80px;
  z-index: 2;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`;

const CardContainer = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  width: 90%;
  max-width: 800px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  top: -60px;
  z-index: 2;
`;

export default function FoodDeliveryBanner() {
  return (
    <Container>
      <Background />
      <Content>
        <Title>Delicious food, delivered to you</Title>
        <Text>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </Text>
        <Text>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </Text>
      </Content>
      <CardContainer>{/* Здесь можно добавить список еды */}</CardContainer>
    </Container>
  );
}
