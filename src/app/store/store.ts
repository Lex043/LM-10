import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { State, FirebaseData } from "@/types";

const useStore = create(
    persist<State>(
        (set) => ({
            cartItems: [],
            addItemToCart: (item: FirebaseData) => {
                set((state) => {
                    const existingItem = state.cartItems.find(
                        (cartItem) => cartItem.slug === item.slug
                    );
                    if (existingItem) {
                        const updatedCartItems = state.cartItems.map(
                            (cartItem) =>
                                cartItem.slug === item.slug
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
                        (cartItem) => cartItem.slug !== item
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
                        item.slug === itemId
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                }));
            },

            decreaseCartItems: (itemId: string) =>
                set((state) => {
                    const updatedCartItems = state.cartItems.map((cartItem) =>
                        cartItem.slug === itemId
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
            storage: createJSONStorage(() => localStorage),
        }
    )
);

export default useStore;
// return {
//     cartItems: initialCartItems,

//     addItemToCart: (item: FirebaseData) => {
//         set((state) => {
//             const existingItem = state.cartItems.find(
//                 (cartItem) => cartItem.slug === item.slug
//             );
//             if (existingItem) {
//                 const updatedCartItems = state.cartItems.map((cartItem) =>
//                     cartItem.slug === item.slug
//                         ? { ...cartItem, quantity: cartItem.quantity + 1 }
//                         : cartItem
//                 );
//                 localStorage.setItem(
//                     "cartItems",
//                     JSON.stringify(updatedCartItems)
//                 );
//                 return {
//                     ...state,
//                     cartItems: updatedCartItems,
//                 };
//             } else {
//                 const updatedCartItems = [...state.cartItems, { ...item }];
//                 localStorage.setItem(
//                     "cartItems",
//                     JSON.stringify(updatedCartItems)
//                 );
//                 return {
//                     ...state,
//                     cartItems: updatedCartItems,
//                 };
//             }
//         });
//     },

// removeItemFromCart: (item: string) => {
//     set((state) => {
//         const updatedCartItems = state.cartItems.filter(
//             (cartItem) => cartItem.slug !== item
//         );
//         localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
//         return { ...state, cartItems: updatedCartItems };
//     });
// },

// getCartItemsLength: () => {
//     const state: State = useStore.getState();
//     return state.cartItems.length;
// },

// clearCart: () => {
//     const updatedCartItems: never[] = [];
//     localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
//     set({ cartItems: updatedCartItems });
// },

// calculateSubTotal: () => {
//     const state: State = useStore.getState();
//     const totalPrice = state.cartItems.reduce((total, cartItem) => {
//         return total + cartItem.price * cartItem.quantity;
//     }, 0);
//     localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

//     return totalPrice;
// },

// increaseCartItems: (itemId) => {
//     set((state) => {
//         const updatedCartItems = state.cartItems.map((cartItem) =>
//             cartItem.slug === itemId
//                 ? { ...cartItem, quantity: cartItem.quantity + 1 }
//                 : cartItem
//         );
//         localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
//         return {
//             ...state,
//             cartItems: updatedCartItems,
//         };
//     });
// },
// decreaseCartItems: (itemId) =>
//     set((state) => {
//         const updatedCartItems = state.cartItems.map((cartItem) =>
//             cartItem.slug === itemId
//                 ? {
//                       ...cartItem,
//                       quantity:
//                           cartItem.quantity <= 1
//                               ? 1
//                               : cartItem.quantity - 1,
//                   }
//                 : cartItem
//         );
//         localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
//         return {
//             ...state,
//             cartItems: updatedCartItems,
//         };
//     }),
// };
