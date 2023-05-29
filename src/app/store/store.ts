import { create } from "zustand";

const useStore = create((set) => ({
  carts: [],
  cartItems: 1,
  increaseCartItems: () =>
    set((state: any) => ({ cartItems: state.cartItems + 1 })),
  decreaseCartItems: () =>
    set((state: any) => ({
      cartItems: state.cartItems <= 1 ? 1 : state.cartItems - 1,
    })),
}));

export default useStore;
