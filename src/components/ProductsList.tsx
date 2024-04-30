import { ProductInterface } from "@/services/products"
import React from "react"
import { Col, Row } from "reactstrap"
import ProductCard from "./ProductCard"

type ProductsListProps = {
  products: ProductInterface[]
}

const ProductsList: React.FC<ProductsListProps> = ({products}) => {

  return (
    <>
      <Row className="g-5">
        {
          products.map(product => (
            <Col key={product.id} className="d-flex justify-content-center">
              <ProductCard product={product}/>
            </Col>
          ))
        }
      </Row>
    </>
  )
}

export default ProductsList;