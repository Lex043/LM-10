import Link from "next/link";

import Originals from "./components/Originals";
import LimitedEdition from "./components/LimitedEdition";
import Featured from "./components/Featured";
import Latest from "./components/Latest";
import MailingList from "./components/MailingList";
import Disclaimer from "./components/Disclaimer";

export default function Home() {
    return (
        <section className="mx-auto mt-20 max-w-screen-2xl px-4 md:px-10 lg:mt-32 lg:px-14">
            <header className="flex flex-col place-items-center gap-6 text-center">
                <h1 className="flex flex-col text-6xl font-extrabold uppercase md:text-9xl lg:text-[10rem]">
                    <span>Leo</span>
                    <span>Messi</span>
                </h1>
                <p>
                    Original Paintings And Fine Art Prints of Lionel Andrés
                    Messi.
                </p>
                <Link href="/shop">
                    <button className="w-36 bg-black p-3 text-white">
                        SHOP ALL
                    </button>
                </Link>
            </header>

            <div className="mb-4 mt-20">
                <h3 className="mb-4 text-center text-3xl uppercase">
                    Originals
                </h3>
                <Originals />
                <Link href="/shop">
                    <button className="mt-6 w-full border-[1px] border-black py-1 uppercase">
                        Shop All
                    </button>
                </Link>
            </div>

            <div className="mb-4 mt-24">
                <h3 className="mb-4 text-center text-3xl uppercase">
                    Limited Edition
                </h3>
                <LimitedEdition />
                <Link href="/shop">
                    <button className="mt-6 w-full border-[1px] border-black py-1 uppercase">
                        Shop All
                    </button>
                </Link>
            </div>

            <div className="mb-4 mt-24">
                <h3 className="mb-4 text-center text-3xl uppercase">
                    Featured
                </h3>
                <Featured />
                <Link href="/shop">
                    <button className="mt-6 w-full border-[1px] border-black py-1 uppercase">
                        Shop All
                    </button>
                </Link>
            </div>

            <div className="mb-4 mt-24">
                <h3 className="mb-4 text-center text-3xl uppercase">Latest</h3>
                <Latest />
                <Link href="/shop">
                    <button className="mt-6 w-full border-[1px] border-black py-1 uppercase">
                        Shop All
                    </button>
                </Link>
            </div>
            <MailingList />
            <Disclaimer />
        </section>
    );
}
