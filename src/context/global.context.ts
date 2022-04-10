import axios from "axios";
import create from "zustand";
import { ProductProps } from "../components/Product";

type Product = {
  products: ProductProps[];
  setDatabase: () => void;
};

export const useProduct = create<Product>((set) => ({
  products: [],
  setDatabase: async () => {
    const response = await axios.get("http://localhost:3001/products");
    console.log(response.data);
    set(() => ({ products: response.data }));
  },
}));

type CartProps = ProductProps & { amount: number };

type Cart = {
  cart: CartProps[];
  setCart: (
    id: number,
    name: string,
    price: number,
    picture: string,
    amount: number
  ) => void;
};

export const useCart = create<Cart>((set) => ({
  cart: [],
  setCart: (id, name, price, picture, amount) => {
    set(({ cart }) => ({
      cart: [...cart, { id, name, price, picture, amount }],
    }));
  },
}));
