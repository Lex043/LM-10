"use client";

import useStore from "../store/store";

const AddToCart = ({ item }: any) => {
    const cartQuantity = useStore((state: any) => state.cartQuantity);
    const increaseCartItems = useStore((state: any) => state.increaseCartItems);
    const decreaseCartItems = useStore((state: any) => state.decreaseCartItems);
    const addItemToCart = useStore((state: any) => state.addItemToCart);
    return (
        <div className="flex gap-4 items-center flex-col md:flex-row">
            <div className="flex w-full h-10">
                <button
                    onClick={decreaseCartItems}
                    className="border-[1px] border-black w-full"
                >
                    -
                </button>
                <span className="border-t-[1px] border-b-[1px] border-black w-full flex items-center justify-center">
                    {cartQuantity}
                </span>
                <button
                    onClick={increaseCartItems}
                    className="border-[1px] border-black w-full"
                >
                    +
                </button>
            </div>
            <button
                onClick={() => addItemToCart(item)}
                className="uppercase text-white bg-black w-full py-2 px-2"
            >
                Add To Cart
            </button>
        </div>
    );
};

export default AddToCart;
