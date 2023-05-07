import Link from "next/link";

const LinkModal = () => {
  return (
    <section className="mb-6">
      <div className="flex flex-col border-[1px] border-black p-3">
        <Link href="/shop">
          <button className="uppercase">All</button>
        </Link>
        <Link href="/shop/originals">
          <button className="uppercase">Originals</button>
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
