import Link from "next/link";
import useStore from "../store/store";
import CartItems from "./CartItems";

interface Props {
    setCartOpen: (isOpen: boolean) => void;
}

const Cart = ({ setCartOpen }: Props) => {
    const cartItems = useStore((state) => state.cartItems);
    return (
        <section className="w-full">
            <div className="flex h-screen flex-col items-center justify-center">
                {cartItems.length === 0 ? (
                    <div className="flex flex-col items-center">
                        <h1 className="text-2xl uppercase">
                            Your Cart is Empty
                        </h1>

                        <Link
                            href="/shop"
                            onClick={() => {
                                setCartOpen(false);
                            }}
                            className="mt-4 bg-black px-3 py-2 uppercase text-white"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                ) : (
                    <CartItems />
                )}
            </div>
        </section>
    );
};

export default Cart;
