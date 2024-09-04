"use client";

import useStore from "../store/store";
import { useState } from "react";
import { FirebaseData } from "@/types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        toast.success(`${product.name} item added to cart`, {
            position: "bottom-right",
            style: {
                background: "#000",
                color: "#FFF",
            },
        });
    };

    return (
        <div className="flex flex-col items-center gap-4 md:flex-row">
            <div className="flex h-10 w-full">
                <button
                    onClick={decreaseQty}
                    className="w-full border-[1px] border-black"
                >
                    -
                </button>

                <span className="flex w-full items-center justify-center border-b-[1px] border-t-[1px] border-black">
                    {qty}
                </span>

                <button
                    onClick={increaseQty}
                    className="w-full border-[1px] border-black"
                >
                    +
                </button>
            </div>
            <button
                onClick={() => addToCart(item)}
                className="w-full bg-black px-2 py-2 uppercase text-white"
            >
                Add To Cart
            </button>
            <ToastContainer />
        </div>
    );
};

export default AddToCart;
