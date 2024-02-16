import { create } from "zustand";
import { State, FirebaseData } from "@/types";

const useStore = create<State>((set) => ({
    cartItems: [],
    cartQuantity: 1,

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
                    cartItems: [...state.cartItems, { ...item, quantity: 1 }],
                };
            }
        });
    },

    removeItemFromCart: (item: FirebaseData) => {
        set((state) => ({
            ...state,
            cartItems: state.cartItems.filter(
                (cartItem) => cartItem.id !== item.id
            ),
        }));
    },

    getCartItemsLength: () => {
        const state: State = useStore.getState();
        return state.cartItems.length;
    },

    increaseCartItems: () =>
        set((state) => ({
            ...state,
            cartQuantity: state.cartQuantity + 1,
        })),

    decreaseCartItems: () =>
        set((state) => ({
            ...state,
            cartQuantity: state.cartQuantity <= 1 ? 1 : state.cartQuantity - 1,
        })),
}));

export default useStore;
