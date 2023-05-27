import Link from "next/link";

const Navlinks = () => {
  return (
    <section className="fixed mt-[37px] min-h-screen backdrop-blur-xl bg-white/30 right-0 w-full ">
      <div className="relative bg-white h-full flex w-full grid-cols-2 items-center justify-between">
        <div className="uppercase w-full px-4 md:px-10 py-10 border-b-[1px] border-black">
          <h1>Collections</h1>
          <div className="text-sm opacity-80 flex flex-col gap-2 mt-3">
            <Link href="/shop">Originals</Link>
            <Link href="/shop">Limited Editions</Link>
            <Link href="/shop">Featured</Link>
            <Link href="/shop">Latest</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navlinks;
