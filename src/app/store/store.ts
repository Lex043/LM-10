import { create } from "zustand";
import { persist } from "zustand/middleware";
import { State, FirebaseData } from "@/types";

const useStore = create(
    persist<State>(
        (set) => ({
            cartItems: [],
            addItemToCart: (item: FirebaseData) => {
                set((state) => {
                    const existingItem = state.cartItems.find(
                        (cartItem) => cartItem.id === item.id
                    );
                    if (existingItem) {
                        const updatedCartItems = state.cartItems.map(
                            (cartItem) =>
                                cartItem.id === item.id
                                    ? {
                                          ...cartItem,
                                          quantity: cartItem.quantity + 1,
                                      }
                                    : cartItem
                        );
                        return { cartItems: updatedCartItems };
                    } else {
                        const updatedCartItems = [
                            ...state.cartItems,
                            { ...item },
                        ];
                        return { cartItems: updatedCartItems };
                    }
                });
            },

            removeItemFromCart: (item: string) => {
                set((state) => {
                    const updatedCartItems = state.cartItems.filter(
                        (cartItem) => cartItem.id !== item
                    );

                    return { ...state, cartItems: updatedCartItems };
                });
            },

            getCartItemsLength: () => {
                const state: State = useStore.getState();
                return state.cartItems.length;
            },

            clearCart: () => {
                localStorage.removeItem("cartItems");
                set({ cartItems: [] });
            },

            calculateSubTotal: () => {
                const state: State = useStore.getState();
                const totalPrice = state.cartItems.reduce((total, cartItem) => {
                    return total + cartItem.price * cartItem.quantity;
                }, 0);

                return totalPrice;
            },

            increaseCartItems: (itemId: string) => {
                set((state) => ({
                    ...state,
                    cartItems: state.cartItems.map((item) =>
                        item.id === itemId
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                }));
            },

            decreaseCartItems: (itemId: string) =>
                set((state) => {
                    const updatedCartItems = state.cartItems.map((cartItem) =>
                        cartItem.id === itemId
                            ? {
                                  ...cartItem,
                                  quantity:
                                      cartItem.quantity <= 1
                                          ? 1
                                          : cartItem.quantity - 1,
                              }
                            : cartItem
                    );
                    return {
                        ...state,
                        cartItems: updatedCartItems,
                    };
                }),
        }),
        {
            name: "cartItems",
            skipHydration: true,
        }
    )
);

export default useStore;
