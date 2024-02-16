import Link from "next/link";
import useStore from "../store/store";
import CartItems from "./CartItems";

interface Props {
    setCartOpen: (isOpen: boolean) => void;
}

const Cart = ({ setCartOpen }: Props) => {
    const cartItems = useStore((state) => state.cartItems);
    console.log(cartItems);
    return (
        <section className="">
            <div className="flex flex-col h-screen items-center justify-center">
                {cartItems.length === 0 ? (
                    <div className="flex flex-col items-center">
                        <h1 className="uppercase text-2xl">
                            Your Cart is Empty
                        </h1>

                        <Link
                            href="/shop"
                            onClick={() => {
                                setCartOpen(false);
                            }}
                            className="uppercase text-white bg-black mt-4 py-2 px-3"
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
