export type FirebaseData = {
    quantity: number;
    id: string;
    imageUrl: string;
    name: string;
    slug: string;
    price: number;
    category: string;
};

export type State = {
    cartItems: FirebaseData[];
    addItemToCart: (item: FirebaseData) => void;
    removeItemFromCart: (item: string) => void;
    getCartItemsLength: () => number;
    clearCart: () => void;
    increaseCartItems: (itemId: string) => void;
    decreaseCartItems: (itemId: string) => void;
};
