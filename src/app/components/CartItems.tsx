import useStore from "../store/store";
import { FirebaseData } from "@/types";
import Image from "next/image";
import Link from "next/link";

const CartItems = () => {
    const cartItems = useStore((state) => state.cartItems);
    const increaseCartItems = useStore((state: any) => state.increaseCartItems);
    const decreaseCartItems = useStore((state: any) => state.decreaseCartItems);
    const cartItemsLength = useStore(
        (state: { getCartItemsLength: () => any }) => state.getCartItemsLength()
    );
    const clearCart = useStore((state: any) => state.clearCart);
    const removeItemFromCart = useStore(
        (state: any) => state.removeItemFromCart
    );
    const calculateSubTotal = useStore((state: any) => state.calculateSubTotal);

    console.log(cartItems);

    return (
        <section className="h-full px-4 w-full">
            <h1 className="text-center">CART SUMMARY</h1>
            {cartItems.map((cartItem: FirebaseData, index: number) => (
                <section key={index} className="pb-4">
                    <section className="flex items-center gap-4 shadow-lg p-4">
                        <Image
                            src={cartItem.imageUrl}
                            height={112}
                            width={112}
                            alt={cartItem.name}
                            className="object-cover"
                        />
                        <div className="flex items-center justify-between w-full gap-2">
                            <div className="flex flex-col gap-2">
                                <h1 className="uppercase text-xs">
                                    {cartItem.name}
                                </h1>
                                <div>
                                    <p className="uppercase text-xs">
                                        Price: &#36;{cartItem.price} (
                                        {cartItem.quantity})
                                    </p>
                                </div>
                                <p className="uppercase text-xs">
                                    Sub total: &#36;
                                    {cartItem.price * cartItem.quantity}
                                </p>

                                <div className="flex">
                                    <button
                                        onClick={() => {
                                            decreaseCartItems(cartItem.slug);
                                        }}
                                        className="border-[1px] border-black w-full"
                                    >
                                        -
                                    </button>
                                    <span className="border-t-[1px] border-b-[1px] border-black w-full flex items-center justify-center">
                                        {cartItem.quantity}
                                    </span>
                                    <button
                                        onClick={() => {
                                            increaseCartItems(cartItem.slug);
                                        }}
                                        className="border-[1px] border-black w-full"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <p
                                onClick={() => {
                                    removeItemFromCart(cartItem.slug);
                                }}
                                className="uppercase text-red-700 underline cursor-pointer text-xs"
                            >
                                Remove
                            </p>
                        </div>
                    </section>
                </section>
            ))}
            <section className="py-20 w-full flex flex-col gap-4">
                <div className="flex justify-between gap-4">
                    <h1>Subtotal Total: {cartItemsLength} Item (s) </h1>
                    <p> ${calculateSubTotal().toFixed(2)}</p>
                </div>
                <button
                    onClick={clearCart}
                    className="bg-black text-white w-full uppercase py-2"
                >
                    clear cart
                </button>
                <div className="flex items-center gap-2">
                    <Link
                        href="/shop"
                        className="uppercase w-full text-center text-white bg-black py-2 flex-1 cursor-pointer"
                    >
                        Continue Shopping
                    </Link>
                    <button className="uppercase w-full border-black border-[1px] py-2 flex-1">
                        checkout
                    </button>
                </div>
            </section>
        </section>
    );
};

export default CartItems;
