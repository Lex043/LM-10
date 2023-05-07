import Link from "next/link";

import Originals from "../components/Originals";
import LimitedEdition from "../components/LimitedEdition";
import Featured from "../components/Featured";
import Latest from "../components/Latest";
import MailingList from "../components/MailingList";
import LinkModal from "../components/LinkModal";

const page = () => {
  return (
    <section className="px-4 md:px-10 mt-6 lg:px-14">
      <h1 className="text-3xl uppercase text-center">Shop</h1>
      {/* <div className="flex flex-col border-[1px] border-black p-3">
        <Link href="/shop">
          <button className="uppercase">All</button>
        </Link>
        <Link href="/shop/originals">
          <button className="uppercase">Originals</button>
        </Link>
        <Link href="">
          <button className="uppercase">Limited Editions</button>
        </Link>
        <Link href="">
          <button className="uppercase">Featured</button>
        </Link>
        <Link href="">
          <button className="uppercase">Latest</button>
        </Link>
      </div> */}
      <LinkModal />
      <div className="flex flex-col md:flex-row md:flex-wrap gap-3 mt-8">
        <Originals />
        <LimitedEdition />
        <Featured />
        <Latest />
        <MailingList />
      </div>
    </section>
  );
};

export default page;
