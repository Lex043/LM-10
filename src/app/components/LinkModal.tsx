"use client";
import Link from "next/link";
import { useState } from "react";

const LinkModal = () => {
  const [activeButton, setActiveButton] = useState(0);
  return (
    <section className="mb-6">
      <div className="flex flex-col border-[1px] border-black p-3">
        <Link href="/shop">
          <button
            className={
              activeButton === 1
                ? "uppercase font-bold underline"
                : "font-normal"
            }
            onClick={() => setActiveButton(1)}
          >
            All
          </button>
        </Link>
        <Link href="/shop/originals">
          <button
            className={`${
              activeButton === 2 ? "font-bold underline" : ""
            } uppercase`}
            onClick={() => setActiveButton(2)}
          >
            Originals
          </button>
        </Link>
        <Link href="/shop/limited-edition">
          <button className="uppercase">Limited Editions</button>
        </Link>
        <Link href="/shop/featured">
          <button className="uppercase">Featured</button>
        </Link>
        <Link href="/shop/latest">
          <button className="uppercase">Latest</button>
        </Link>
      </div>
    </section>
  );
};

export default LinkModal;
