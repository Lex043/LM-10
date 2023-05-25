const Cart = () => {
  return (
    <section className="fixed mt-10 bg-white z-[999] w-full right-0">
      <div className="flex flex-col gap-2 justify-center w-full h-screen place-items-center">
        <h1 className="uppercase text-2xl">Your Cart is Empty</h1>

        <button className="uppercase text-white bg-black py-2 px-3">
          Continue Shopping
        </button>
      </div>
    </section>
  );
};

export default Cart;
