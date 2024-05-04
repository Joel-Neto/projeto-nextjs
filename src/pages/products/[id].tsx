import Header from "@/components/Header";
import ProductDetails from "@/components/ProductDetails";
import {
  ProductInterface,
  fetchProduct,
  fetchProducts,
} from "@/services/products";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import React, { ReactNode } from "react";
import { Container } from "reactstrap";

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;

  if (typeof id === "string") {
    const product = await fetchProduct(id);
    return {
      props: {
        product,
      },
    };
  }

  return {
    redirect: {
      destination: "/products",
      permanent: false,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await fetchProducts();

  const paths = products.map((product) => {
    return {
      params: {
        id: product.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

const Product = (props: {
  children?: ReactNode;
  product?: ProductInterface;
}) => {
  return (
    <div>
      <Head>
        <title>{props.product && props.product.name}</title>
        <meta name="description" content={props.product && props.product.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header color="dark" light={true} dark={true} expand="md" />

      <Container tag="main" className="mt-5 mb-1">
        {props.product && <ProductDetails product={props.product} />}
      </Container>
    </div>
  );
};

export default Product;
