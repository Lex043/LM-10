import Link from "next/link";

const Cart = () => {
  return (
    <section>
      <h1 className="uppercase">Your Cart is Empty</h1>
      <Link href="/shop">
        <button className="uppercase">Continue Shopping</button>
      </Link>
    </section>
  );
};

export default Cart;
