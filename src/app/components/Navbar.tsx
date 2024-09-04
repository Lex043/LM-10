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
            className="fixed z-50 w-full border-b-[1px] border-black bg-white"
        >
            <div className="mx-auto flex w-full max-w-screen-2xl flex-wrap justify-between px-4 py-3 md:px-10 lg:px-14">
                <div
                    onClick={() => {
                        setShopOpen(!isShopOpen);
                        setCartOpen(false);
                    }}
                    className="flex cursor-pointer items-center gap-2"
                >
                    <div className="flex flex-col gap-1">
                        <div className="h-[1px] w-4 bg-black"></div>
                        <div className="h-[1px] w-4 bg-black"></div>
                    </div>
                    <span>{isShopOpen ? "CLOSE" : "SHOP"}</span>
                </div>
                {isShopOpen && (
                    <section className="fixed right-0 mt-[37px] w-full">
                        <div className="relative flex grid-cols-2 items-center justify-between opacity-100 backdrop-blur-lg">
                            <div className="w-full border-b-[1px] border-black px-4 py-10 uppercase md:px-10 lg:px-14">
                                <h1>Collections</h1>
                                <div className="mt-2 flex flex-col gap-2 text-sm opacity-80">
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
                                    <Link
                                        onClick={handleClick}
                                        href="/shop/latest"
                                    >
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
                    <h3 className="hidden uppercase md:block">
                        Lionel Andrés Messi
                    </h3>
                </Link>
                <div
                    onClick={() => {
                        setCartOpen(!isCartOpen);
                        setShopOpen(false);
                    }}
                    className="flex cursor-pointer items-center gap-1"
                >
                    <span>{isCartOpen ? "CLOSE" : "CART"}</span>
                    <span className="flex h-5 w-8 items-center justify-center rounded-full bg-black p-2 text-white">
                        {cartItemsLength}
                    </span>
                </div>
                {isCartOpen && (
                    <section className="fixed right-0 mt-[37px] w-full overflow-scroll border-l-[1px] border-black opacity-100 backdrop-blur-lg md:max-w-[45%]">
                        <Cart setCartOpen={setCartOpen} />
                    </section>
                )}
            </div>
        </nav>
    );
}
