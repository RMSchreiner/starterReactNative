import React from "react";
import Rating from "./Rating";
import { Container, Header, Content, Body, Title } from "native-base";
import ProductList from "./ProductList";

export default function App() {
  return (
    <Container>
      <Header>
        <Body>
          <Title>Product List</Title>
        </Body>
      </Header>
      <Content>
        <ProductList />
      </Content>
    </Container>
  );
}
