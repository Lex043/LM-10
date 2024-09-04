"use client";

import useStore from "../store/store";
import { FirebaseData } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import getStipePromise from "@/lib/stripe";

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

    useEffect(() => {
        useStore.persist.rehydrate();
    }, []);

    const handleCheckout = async () => {
        const stripe = await getStipePromise();
        const response = await fetch("/api/stripe-session", {
            method: "POST",
            mode: "cors",
            headers: { "Content-Type": "application/json" },
            cache: "no-cache",
            body: JSON.stringify(cartItems),
        });

        console.log(response);

        const data = await response.json();
        if (data.session) {
            stripe?.redirectToCheckout({ sessionId: data.session.id });
        }
    };

    return (
        <section className="h-full w-full px-4">
            <h1 className="text-center">CART SUMMARY</h1>
            {cartItems.map((cartItem: FirebaseData) => (
                <section key={cartItem.id} className="pb-4">
                    <section className="flex items-center gap-4 p-4 shadow-lg">
                        <Image
                            src={cartItem.imageUrl}
                            height={112}
                            width={112}
                            alt={cartItem.name}
                            className="h-28 w-28 object-cover"
                        />
                        <div className="flex w-full items-center justify-between gap-2">
                            <div className="flex flex-col gap-2">
                                <h1 className="text-xs uppercase">
                                    {cartItem.name}
                                </h1>
                                <div>
                                    <p className="text-xs uppercase">
                                        Price: &#36;{cartItem.price} (
                                        {cartItem.quantity})
                                    </p>
                                </div>
                                <p className="text-xs uppercase">
                                    Sub total: &#36;
                                    {cartItem.price * cartItem.quantity}
                                </p>

                                <div className="flex">
                                    <button
                                        onClick={() => {
                                            decreaseCartItems(cartItem.id);
                                        }}
                                        className="w-full border-[1px] border-black"
                                    >
                                        -
                                    </button>
                                    <span className="flex w-full items-center justify-center border-b-[1px] border-t-[1px] border-black">
                                        {cartItem.quantity}
                                    </span>
                                    <button
                                        onClick={() => {
                                            increaseCartItems(cartItem.id);
                                        }}
                                        className="w-full border-[1px] border-black"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <p
                                onClick={() => {
                                    removeItemFromCart(cartItem.id);
                                }}
                                className="cursor-pointer text-xs uppercase text-red-700 underline"
                            >
                                Remove
                            </p>
                        </div>
                    </section>
                </section>
            ))}
            <section className="flex w-full flex-col gap-4 py-20">
                <div className="flex justify-between gap-4">
                    <h1>Subtotal Total: {cartItemsLength} Item (s) </h1>
                    <p> ${calculateSubTotal().toFixed(2)}</p>
                </div>
                <button
                    onClick={clearCart}
                    className="w-full bg-black py-2 uppercase text-white"
                >
                    clear cart
                </button>
                <div className="flex items-center gap-2">
                    <Link
                        href="/shop"
                        className="w-full flex-1 cursor-pointer bg-black py-2 text-center uppercase text-white"
                    >
                        Continue Shopping
                    </Link>
                    <button
                        onClick={handleCheckout}
                        className="w-full flex-1 border-[1px] border-black py-2 uppercase"
                    >
                        checkout
                    </button>
                </div>
            </section>
        </section>
    );
};

export default CartItems;
