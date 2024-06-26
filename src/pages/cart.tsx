import CardTotal from "@/components/CardTotal";
import CartTable from "@/components/CartTable";
import Header from "@/components/Header";
import Head from "next/head";
import React from "react";
import { Col, Container, Row } from "reactstrap";

export default function Cart() {
  return (
    <>
      <Head>
        <title>Carrinho</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header color="dark" light={true} dark={true} expand="md"/>

      <Container tag={"main"} className="mt-5">
        <Row className="mb-4">
          <Col>
            <CartTable/>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-end">
            <CardTotal/>
          </Col>
        </Row>
      </Container>
    </>
  );
}
