"use client";

import Link from "next/link";
import { useState } from "react";
import Navlinks from "./Navlinks";
import { useEffect } from "react";

export default function Navbar() {
  const [isShopOpen, setShopOpen] = useState(false);

  useEffect(() => {
    if (isShopOpen) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [isShopOpen]);

  return (
    <nav className="fixed backdrop-blur-xl bg-white/30 w-full flex justify-between flex-wrap border-b-[1px] border-black py-3 px-4 md:px-10 lg:px-14">
      <button className="flex items-center gap-2">
        <div className="flex flex-col gap-1">
          <div className="h-[1px] w-4 bg-black"></div>
          <div className="h-[1px] w-4 bg-black"></div>
        </div>
        <span onClick={() => setShopOpen(!isShopOpen)}>SHOP</span>
      </button>
      {isShopOpen && <Navlinks />}
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
