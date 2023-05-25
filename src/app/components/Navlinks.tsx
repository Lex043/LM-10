import Link from "next/link";

const Navlinks = () => {
  return (
    <section className="fixed mt-[37px] min-h-screen backdrop-blur-xl bg-white/30 right-0 w-full ">
      <div className="relative bg-white h-full flex w-full grid-cols-2 items-center justify-between">
        <div className="uppercase w-full flex flex-col gap-3 px-4 py-10 border-b-[1px] border-black">
          <h1>Collections</h1>
          <Link href="/shop" className="text-sm">
            Originals
          </Link>
          <Link href="/shop" className="text-sm">
            Limited Editions
          </Link>
          <Link href="/shop" className="text-sm">
            Featured
          </Link>
          <Link href="/shop" className="text-sm">
            Latest
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Navlinks;
