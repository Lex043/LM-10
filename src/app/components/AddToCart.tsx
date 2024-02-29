"use client";

import useStore from "../store/store";
import { useState } from "react";
import { FirebaseData } from "@/types";

const AddToCart = ({ item }: any) => {
    const [qty, setQty] = useState(1);
    const addItemToCart = useStore((state: any) => state.addItemToCart);

    const increaseQty = () => {
        setQty((prev) => prev + 1);
    };
    const decreaseQty = () => {
        setQty((prevQty) => {
            let newQty = prevQty - 1;
            if (newQty < 1) {
                newQty = 1;
            }
            return newQty;
        });
    };

    const addToCart = (product: FirebaseData) => {
        const tempProduct = {
            ...product,
            quantity: qty,
            total: product.price * qty,
        };

        addItemToCart(tempProduct);
        console.log(tempProduct);
    };

    return (
        <div className="flex gap-4 items-center flex-col md:flex-row">
            <div className="flex w-full h-10">
                <button
                    onClick={decreaseQty}
                    className="border-[1px] border-black w-full"
                >
                    -
                </button>

                <span className="border-t-[1px] border-b-[1px] border-black w-full flex items-center justify-center">
                    {qty}
                </span>

                <button
                    onClick={increaseQty}
                    className="border-[1px] border-black w-full"
                >
                    +
                </button>
            </div>
            <button
                onClick={() => addToCart(item)}
                className="uppercase text-white bg-black w-full py-2 px-2"
            >
                Add To Cart
            </button>
        </div>
    );
};

export default AddToCart;
