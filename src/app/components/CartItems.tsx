import useStore from "../store/store";

const CartItems = () => {
    const cartItems = useStore((state: { cartItems: any }) => state.cartItems);
    const cartQuantity = useStore((state: any) => state.cartQuantity);
    console.log(cartItems);
    console.log(cartQuantity);
    return (
        <section>
            <h1>Hey</h1>
        </section>
    );
};

export default CartItems;
