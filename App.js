import React from "react";
import Rating from "./Rating";
import { Container, Header, Content, Body, Title } from "native-base";
import ProductList from "./ProductList";
import MyCard from './MyCard';
import MyForm from './MyForm';

export default function App() {
  return (
    <Container>
      <Header>
        <Body>
          <Title>Product List</Title>
        </Body>
      </Header>
      <Content>
        <MyForm/>
        <ProductList />
      </Content>
      <MyCard>
        This is a long sentence. This is added to the Component of MyCard with props.children
      </MyCard>
    </Container>
  );
}
