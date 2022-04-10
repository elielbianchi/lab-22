import { useState } from "react";
import Incrementor from "../Incrementor";
import { Wrapper, Info, Column, Text, WrapperIncrementor } from "./styles";

export type ProductProps = {
  id: number;
  name: string;
  price: number;
  picture: string;
};

const Product = ({ id, name, price, picture }: ProductProps) => {
  const [quantity, setQuantity] = useState(0);
  // const { cart, setCart } = useCart();

  const priceView = price.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  function handleChange(action: string) {
    if (action === "subs" && quantity > 0) {
      setQuantity(quantity - 1);
    }
    if (action === "plus") {
      setQuantity(quantity + 1);
    }
  }

  // const handleIncrement = (amount: number) => {
  //   amount += 1;
  //   setCart(id, name, price, picture, amount)
  // }

  // const handleDecrement = (amount: number) => {
  //   amount -= 1;
  //   setCart(id, name, price, picture, amount)
  // }

  return (
    <Wrapper>
      <img src={picture} alt={`Imagem de referência ${name}`} />

      <Info>
        <Column>
          <Text>{name}</Text>
          <Text>{priceView}</Text>
        </Column>

        <WrapperIncrementor>
          <Incrementor
            id={id}
            quantity={0}
            updater={handleChange}
            // handleIncrement={handleIncrement}
            // handleDecrement={handleDecrement}
          />
        </WrapperIncrementor>
      </Info>
    </Wrapper>
  );
};

export default Product;
