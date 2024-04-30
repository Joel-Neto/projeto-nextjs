export interface ProductInterface {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  inStock: number;
}

export const fetchProducts = async () => {
  const products: ProductInterface[] = await fetch(
    `${process.env.NEXT_PUBLIC_APIURL}/api/products`
  ).then((res) => res.json());
  return products;
};

export const fetchProduct = async (id: string) => {
  const product: ProductInterface = await fetch(
    `${process.env.NEXT_PUBLIC_APIURL}/api/products/${id}`
  ).then((res) => res.json());
  return product;
}
