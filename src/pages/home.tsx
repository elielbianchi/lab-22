import { useEffect, useState } from "react";
import Cart from "../components/Cart";
import { Container } from "../components/Container";
import Header from "../components/Header";
import Product, { ProductProps } from "../components/Product";
import axios from "axios";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [productData, setProductData] = useState([]);

  async function dataSearch() {
    const database = "http://localhost:3001/products";
    const response = await axios.get(database);
    setProductData(response.data);
  }

  useEffect(() => {
    dataSearch();
  }, []);

  return (
    <>
      <Header setIsOpen={setIsOpen} />
      <Container>
        {productData.map((product: ProductProps) => {
          return <Product {...product} />;
        })}
        <Cart isOpen={isOpen} setIsOpen={setIsOpen} />
      </Container>
    </>
  );
};

export default Home;
