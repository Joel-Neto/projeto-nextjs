import { GetStaticProps } from "next";
import Head from "next/head";
import React, { ReactNode, useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";

type ApiResponse = {
  name: string;
  timestamp: Date;
};

export const getStaticProps: GetStaticProps = async () => {
  const staticData = await fetch(
    `${process.env.NEXT_PUBLIC_APIURL}/api/hello`
  ).then((res) => res.json());

  return {
    props: {
      staticData,
    },
    revalidate: 15,
  };
};

export default function Static(props: {
  chidren?: ReactNode;
  staticData?: ApiResponse;
}) {
  const [clientSideData, setClientSideData] = useState<ApiResponse>();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const userData = await fetch("/api/hello").then((res) => res.json());
    setClientSideData(userData);
  };

  return (
    <>
      <Head>
        <title>Static</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container tag="main">
        <h1 className="my-5">Como funcionam as renderizações do Next.js</h1>

        <Row>
          <Col>
            <h3>
              Gerado de forma estática durante o Build:{" "}
              {props.staticData?.timestamp.toString()}
            </h3>
          </Col>

          <Col>
            <h3>Gerado no cliente: {clientSideData?.timestamp.toString()}</h3>
          </Col>
        </Row>
      </Container>
    </>
  );
}
