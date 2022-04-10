import { useEffect, useState } from "react";
import Cart from "../components/Cart";
import { Container } from "../components/Container";
import Header from "../components/Header";
import Product, { ProductProps } from "../components/Product";
import { useProduct } from "../context/global.context";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { products, setProducts } = useProduct();

  useEffect(() => {
    setProducts();
  }, []);

  return (
    <>
      <Header setIsOpen={setIsOpen} />
      <Container>
        {products.map((product: ProductProps) => {
          return (
            <Product
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              picture={product.picture}
            />
          );
        })}
        <Cart isOpen={isOpen} setIsOpen={setIsOpen} />
      </Container>
    </>
  );
};

export default Home;
