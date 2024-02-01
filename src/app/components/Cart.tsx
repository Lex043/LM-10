import Link from "next/link";

interface Props {
    setCartOpen: (isOpen: boolean) => void;
}

const Cart = ({ setCartOpen }: Props) => {
    return (
        <section className="">
            <div className="flex flex-col h-screen items-center justify-center">
                <h1 className="uppercase text-2xl">Your Cart is Empty</h1>

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
        </section>
    );
};

export default Cart;
