import Link from "next/link";

import Originals from "./components/Originals";
import LimitedEdition from "./components/LimitedEdition";
import Featured from "./components/Featured";
import Latest from "./components/Latest";
import MailingList from "./components/MailingList";

export default function Home() {
  return (
    <section className="px-4 md:px-10 mt-6 lg:px-14">
      <header className="text-center flex flex-col gap-4 place-items-center">
        <h1 className="uppercase text-6xl md:text-9xl flex flex-col font-extrabold">
          <span>Leo</span>
          <span>Messi</span>
        </h1>
        <p>Original Paintings And Fine Art Prints of Lionel Andrés Messi.</p>
        <Link href="/shop">
          <button className="text-white bg-black p-3 w-36">SHOP ALL</button>
        </Link>
      </header>

      <div className="mt-14 mb-4">
        <h3 className="text-3xl text-center uppercase mb-4">Originals</h3>
        <Originals />
        <Link href="/shop">
          <button className="uppercase border-[1px] border-black py-1 w-full mt-6">
            Shop All
          </button>
        </Link>
      </div>

      <div className="mt-24 mb-4">
        <h3 className="text-3xl text-center mb-4 uppercase">Limited Edition</h3>
        <LimitedEdition />
        <Link href="/shop">
          <button className="uppercase border-[1px] border-black py-1 w-full mt-6">
            Shop All
          </button>
        </Link>
      </div>

      <div className="mt-24 mb-4">
        <h3 className="text-3xl text-center mb-4 uppercase">Featured</h3>
        <Featured />
        <Link href="/shop">
          <button className="uppercase border-[1px] border-black py-1 w-full mt-6">
            Shop All
          </button>
        </Link>
      </div>

      <div className="mt-24 mb-4">
        <h3 className="text-3xl text-center mb-4 uppercase">Latest</h3>
        <Latest />
        <Link href="/shop">
          <button className="uppercase border-[1px] border-black py-1 w-full mt-6">
            Shop All
          </button>
        </Link>
      </div>
      <MailingList />
    </section>
  );
}
