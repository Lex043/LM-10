"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
// import useStore from "../store/store";

export default function Navbar() {
  const [isShopOpen, setShopOpen] = useState(false);

  // const cartLength = useStore((state) => state.cartLength);

  useEffect(() => {
    if (isShopOpen) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [isShopOpen]);

  // close cart modal whenever i click on navlinks
  const handleClick = () => {
    setShopOpen(false);
  };

  return (
    <nav className="fixed backdrop-blur-xl bg-white/30 w-full flex justify-between flex-wrap border-b-[1px] border-black py-3 px-4 md:px-10 lg:px-14 z-50">
      <button
        onClick={() => setShopOpen(!isShopOpen)}
        className="flex items-center gap-2"
      >
        <div className="flex flex-col gap-1">
          <div className="h-[1px] w-4 bg-black"></div>
          <div className="h-[1px] w-4 bg-black"></div>
        </div>
        <span>{isShopOpen ? "CLOSE" : "SHOP"}</span>
      </button>
      {isShopOpen && (
        <section className="fixed mt-[37px] min-h-screen backdrop-blur-xl bg-white/30 right-0 w-full ">
          <div className="relative bg-white h-full flex grid-cols-2 items-center justify-between">
            <div className="uppercase w-full px-4 md:px-10 lg:px-14 py-10 border-b-[1px] border-black">
              <h1>Collections</h1>
              <div className="text-sm opacity-80 flex flex-col gap-2 mt-2">
                <Link onClick={handleClick} href="/shop">
                  Originals
                </Link>
                <Link onClick={handleClick} href="/shop">
                  Limited Editions
                </Link>
                <Link onClick={handleClick} href="/shop">
                  Featured
                </Link>
                <Link onClick={handleClick} href="/shop">
                  Latest
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
      <Link href="/">
        <h3 className="md:hidden lg:hidden">LM10</h3>
        <h3 className="hidden md:block uppercase">Lionel Andrés Messi</h3>
      </Link>
      <Link href="/cart" className="flex items-center gap-1">
        <span>CART</span>
        <span className="text-white bg-black rounded-full w-8 h-5 flex justify-center items-center p-2">
          0
        </span>
      </Link>
    </nav>
  );
}
