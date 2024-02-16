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
    cartQuantity: number;
    addItemToCart: (item: FirebaseData) => void;
    removeItemFromCart: (item: FirebaseData) => void;
    getCartItemsLength: () => number;
    increaseCartItems: () => void;
    decreaseCartItems: () => void;
};
