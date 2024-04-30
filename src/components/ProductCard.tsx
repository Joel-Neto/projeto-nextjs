import { ProductInterface } from "@/services/products";
import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import SuccessToast from "./SuccessToast";
import Link from "next/link";
import Image from "next/image";

type ProductCardProps = {
  product: ProductInterface;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [toastIsOpen, setToastIsOpen] = useState(false);

  return (
    <>
      <Card
        color="light"
        style={{
          width: "18rem",
        }}
      >
        <Link href={`products/${product.id}`}>
          <Image src={product.imageUrl} alt="Product" height={220} width={286.5}></Image>
        </Link>
        <CardBody>
          <CardTitle tag="h5">{product.name}</CardTitle>
          <CardSubtitle className="mb-3 text-muted" tag="h6">
            R$ {product.price.toFixed(2)}
          </CardSubtitle>
          <Button
            color="dark"
            className="pb-2 mb-2"
            block
            onClick={() => {
              setToastIsOpen(true);
              setTimeout(() => setToastIsOpen(false), 1000 * 3);
            }}
          >
            Adicionar ao Carrinho
          </Button>
        </CardBody>
      </Card>

      <SuccessToast toastIsOpen={toastIsOpen} setToastIsOpen={setToastIsOpen} />
    </>
  );
};

export default ProductCard;
