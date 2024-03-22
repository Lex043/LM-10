"use client";

import Link from "next/link";
import Cart from "./Cart";
import { useState, useEffect, useRef, useMemo } from "react";
import useStore from "../store/store";

export default function Navbar() {
    const [isShopOpen, setShopOpen] = useState<boolean>(false);
    const [isCartOpen, setCartOpen] = useState<boolean>(false);

    const cartItemsLength = useStore(
        (state: { getCartItemsLength: () => any }) => state.getCartItemsLength()
    );

    let menuRef = useRef<HTMLDivElement>(null);
    let shopButtonRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        useStore.persist.rehydrate();
        if (isShopOpen) {
            document.body.classList.add("overflow-y-hidden");
        } else {
            document.body.classList.remove("overflow-y-hidden");
        }

        if (isCartOpen) {
            document.body.classList.add("overflow-y-hidden");
        } else {
            document.body.classList.remove("overflow-y-hidden");
        }

        const handler = (e: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(e.target as Node)
            ) {
                setCartOpen(false);
                setShopOpen(false);
            }
        };

        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        };
    }, []);

    // close cart modal whenever i click on navlinks
    const handleClick = () => {
        setShopOpen(false);
        setCartOpen(false);
    };

    return (
        <nav
            ref={menuRef}
            className="fixed bg-white w-full flex justify-between
     flex-wrap border-b-[1px] border-black py-3 px-4 md:px-10 lg:px-14 z-50"
        >
            <div
                onClick={() => {
                    setShopOpen(!isShopOpen);
                    setCartOpen(false);
                }}
                className="flex items-center gap-2 cursor-pointer"
            >
                <div className="flex flex-col gap-1">
                    <div className="h-[1px] w-4 bg-black"></div>
                    <div className="h-[1px] w-4 bg-black"></div>
                </div>
                <span>{isShopOpen ? "CLOSE" : "SHOP"}</span>
            </div>
            {isShopOpen && (
                <section className="fixed mt-[37px] right-0 w-full ">
                    <div className="relative flex grid-cols-2 backdrop-blur-lg opacity-100 items-center justify-between">
                        <div className="uppercase w-full px-4 md:px-10 lg:px-14 py-10 border-b-[1px] border-black">
                            <h1>Collections</h1>
                            <div className="text-sm opacity-80 flex flex-col gap-2 mt-2">
                                <Link
                                    onClick={handleClick}
                                    href="/shop/originals"
                                >
                                    Originals
                                </Link>
                                <Link
                                    onClick={handleClick}
                                    href="/shop/limitedEdition"
                                >
                                    Limited Editions
                                </Link>
                                <Link
                                    onClick={handleClick}
                                    href="/shop/featured"
                                >
                                    Featured
                                </Link>
                                <Link onClick={handleClick} href="/shop/latest">
                                    Latest
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            )}
            <Link
                onClick={() => {
                    setCartOpen(false);
                    setShopOpen(false);
                }}
                href="/"
            >
                <h3 className="md:hidden lg:hidden">LM10</h3>
                <h3 className="hidden md:block uppercase">
                    Lionel Andrés Messi
                </h3>
            </Link>
            <div
                onClick={() => {
                    setCartOpen(!isCartOpen);
                    setShopOpen(false);
                }}
                className="flex items-center gap-1 cursor-pointer"
            >
                <span>{isCartOpen ? "CLOSE" : "CART"}</span>
                <span className="text-white bg-black rounded-full w-8 h-5 flex justify-center items-center p-2">
                    {cartItemsLength}
                </span>
            </div>
            {isCartOpen && (
                <section
                    className="fixed mt-[37px] border-l-[1px] backdrop-blur-lg opacity-100  border-black
                 right-0 w-full md:max-w-[45%] overflow-scroll"
                >
                    <Cart setCartOpen={setCartOpen} />
                </section>
            )}
        </nav>
    );
}
