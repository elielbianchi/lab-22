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

  function handleChange(action: string) {
    if (action === "subs" && quantity > 0) {
      setQuantity(quantity - 1);
    }
    if (action === "plus") {
      setQuantity(quantity + 1);
    }
  }

  return (
    <Wrapper>
      <img src={picture} alt={`Imagem de referência ${name}`} />

      <Info>
        <Column>
          <Text>{name}</Text>
          <Text>{price}</Text>
        </Column>

        <WrapperIncrementor>
          <Incrementor id={id} quantity={quantity} updater={handleChange}/>
        </WrapperIncrementor>
      </Info>
    </Wrapper>
  );
};

export default Product;
