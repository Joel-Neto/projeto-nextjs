import { useCart } from "@/hooks/useCart";
import { ProductInterface } from "@/services/products";
import React, { useEffect, useState } from "react";
import { Button, Table } from "reactstrap";

type CartEntry = {
  product: ProductInterface;
  quantity: number;
};

export default function CartTable() {
  const { cart, addProduct, removeProduct } = useCart();
  const [productsForTable, setProductsForTable] = useState<CartEntry[]>();

  useEffect(() => {
    const productsList: CartEntry[] = cart.reduce((list, product) => {
      const isProductAtList = list.findIndex(
        (p) => p.product.id === product.id
      );

      if (isProductAtList === -1) {
        return [
          ...list,
          {
            product,
            quantity: 1,
          },
        ];
      }

      list[isProductAtList].quantity++;
      return list;
    }, [] as CartEntry[]);

    productsList.sort(
      (a: CartEntry, b: CartEntry) => a.product.id - b.product.id
    );
    setProductsForTable(productsList);
  }, [cart]);

  return (
    <Table hover responsive className="align-middle">
      <thead>
        <tr>
          <th>Produto</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>Total</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {productsForTable &&
          productsForTable.map(({ product, quantity }) => (
            <tr key={product.id}>
              <th scope="row">{product.name}</th>
              <td>R$ {product.price.toFixed(2)}</td>
              <td>{quantity}</td>
              <td>R$ {(product.price * quantity).toFixed(2)}</td>
              <td>
                <Button
                  color="primary"
                  className="my-3 pb-2"
                  onClick={() => {
                    addProduct(product);
                  }}
                >
                  +
                </Button>
                {" "}
                <Button
                  color="danger"
                  className="my-3 pb-2"
                  onClick={() => {
                    removeProduct(product.id);
                  }}
                >
                  -
                </Button>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}
