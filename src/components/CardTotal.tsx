import { useCart } from "@/hooks/useCart";
import React from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";

export default function CardTotal() {
  const { cart } = useCart();

  return (
    <Card
      style={{
        width: "13rem",
      }}
    >
      <CardBody>
        <CardTitle tag="h5">Total:</CardTitle>
        <CardText>
          R$
          {cart.reduce((total, product) => total + product.price, 0).toFixed(2)}
        </CardText>
      </CardBody>
    </Card>
  );
}
