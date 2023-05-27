import Link from "next/link";

const Cart = () => {
  return (
    <section className="mt-20 bg-white">
      <div className="flex flex-col gap-2 justify-center w-full h-screen place-items-center">
        <h1 className="uppercase text-2xl">Your Cart is Empty</h1>

        <Link href="/" className="uppercase text-white bg-black py-2 px-3">
          Continue Shopping
        </Link>
      </div>
    </section>
  );
};

export default Cart;
