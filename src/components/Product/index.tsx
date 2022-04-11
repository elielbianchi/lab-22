import { useProducts } from "../../context/global.context";
import Incrementor from "../Incrementor";
import { Wrapper, Info, Column, Text, WrapperIncrementor } from "./styles";

export type ProductProps = {
  id: number;
  name: string;
  price: number;
  picture: string;
  amount: number;
  quantity: number;
};

const Product = ({ id, name, price, picture, amount }: ProductProps) => {
  const { products, setNewAmount } = useProducts();

  const handleIncrement = () => {
    let product = products.find((product) => product.id === id);
    if (product!.amount < product!.quantity) {
      product!.amount += 1;
      setNewAmount(products);
    }
  };

  const handleDecrement = () => {
    let product = products.find((product) => product.id === id);
    if (product!.amount > 0) {
      product!.amount -= 1;
      setNewAmount(products);
    }
  };

  const formattedPrice = price.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <Wrapper>
      <img src={picture} alt={`Imagem de referência ${name}`} />

      <Info>
        <Column>
          <Text>{name}</Text>
          <Text>{formattedPrice}</Text>
        </Column>

        <WrapperIncrementor>
          <Incrementor
            amount={amount}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
          />
        </WrapperIncrementor>
      </Info>
    </Wrapper>
  );
};

export default Product;
