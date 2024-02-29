import { create } from "zustand";
import { State, FirebaseData } from "@/types";

const useStore = create<State>((set) => ({
    cartItems: [],

    addItemToCart: (item: FirebaseData) => {
        set((state) => {
            const existingItem = state.cartItems.find(
                (cartItem) => cartItem.slug === item.slug
            );
            if (existingItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((cartItem) =>
                        cartItem.slug === item.slug
                            ? { ...cartItem, quantity: cartItem.quantity + 1 }
                            : cartItem
                    ),
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, { ...item }],
                };
            }
        });
    },

    removeItemFromCart: (item: string) => {
        set((state) => ({
            ...state,
            cartItems: state.cartItems.filter(
                (cartItem) => cartItem.slug !== item
            ),
        }));
    },

    getCartItemsLength: () => {
        const state: State = useStore.getState();
        return state.cartItems.length;
    },

    clearCart: () => {
        set((state) => {
            return {
                ...state,
                cartItems: [],
            };
        });
    },

    calculateSubTotal: () => {
        const state: State = useStore.getState();
        const totalPrice = state.cartItems.reduce((total, cartItem) => {
            return total + cartItem.price * cartItem.quantity;
        }, 0);

        return totalPrice;
    },

    increaseCartItems: (itemId) => {
        set((state) => ({
            ...state,
            cartItems: state.cartItems.map((cartItem) =>
                cartItem.slug === itemId
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
            ),
        }));
    },
    decreaseCartItems: (itemId) =>
        set((state) => ({
            ...state,
            cartItems: state.cartItems.map((cartItem) =>
                cartItem.slug === itemId
                    ? {
                          ...cartItem,
                          quantity:
                              cartItem.quantity <= 1
                                  ? 1
                                  : cartItem.quantity - 1,
                      }
                    : cartItem
            ),
        })),
}));

export default useStore;
