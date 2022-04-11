import axios from "axios";
import create from "zustand";
import { ProductProps } from "../components/Product";

type Product = {
  products: ProductProps[];
  setProducts: () => void;
  setNewAmount: (productsList: ProductProps[]) => void;
};

export const useProducts = create<Product>((set) => ({
  products: [],
  setProducts: async () => {
    const response = await axios.get("http://localhost:3001/products");
    response.data.map((product: ProductProps) => (product.amount = 0));
    set(() => ({ products: response.data }));
  },
  setNewAmount: (productsList) => set({ products: productsList }),
}));