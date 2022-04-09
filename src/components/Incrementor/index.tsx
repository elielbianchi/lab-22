import { Plus as PlusIcon } from "@styled-icons/boxicons-regular/Plus";
import { Subtract as SubtractIcon } from "@styled-icons/remix-fill/Subtract";

import { Wrapper, IconWrapper, Quantity } from "./styles";

type IncrementorProps = {
  id: number;
  quantity: number;
  updater: (action: string) => void;
};

const Incrementor = ({ id, quantity, updater }: IncrementorProps) => (
  <Wrapper>
    <IconWrapper>
      <SubtractIcon aria-label="Subtract item" onClick={ () => updater("subs") } />
    </IconWrapper>

    <Quantity>{quantity}</Quantity>

    <IconWrapper>
      <PlusIcon aria-label="Add item" onClick={ () => updater("plus") } />
    </IconWrapper>
  </Wrapper>
);

export default Incrementor;
