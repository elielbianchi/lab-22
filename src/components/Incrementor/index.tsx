import { Plus as PlusIcon } from "@styled-icons/boxicons-regular/Plus";
import { Subtract as SubtractIcon } from "@styled-icons/remix-fill/Subtract";

import { Wrapper, IconWrapper, Quantity } from "./styles";

type IncrementorProps = {
  amount: number;
  handleIncrement: () => void;
  handleDecrement: () => void;
};

const Incrementor = ({
  amount,
  handleIncrement,
  handleDecrement,
}: IncrementorProps) => (
  <Wrapper>
    <IconWrapper>
      <SubtractIcon
        aria-label="Subtract item"
        onClick={() => handleDecrement()}
      />
    </IconWrapper>

    <Quantity>{amount}</Quantity>

    <IconWrapper>
      <PlusIcon aria-label="Add item" onClick={() => handleIncrement()} />
    </IconWrapper>
  </Wrapper>
);

export default Incrementor;
