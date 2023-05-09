import Image from "next/image";
import type { Metadata } from "next";
import { getData } from "@/db/all";

interface Props {
  params: {
    slug: string;
  };
}

export default async function All({ params }: Props) {
  const [items] = await getData(params.slug);

  return (
    <section className="px-4 md:px-10 my-6 lg:px-14">
      <div className="grid w-full items-center gap-4 md:grid-cols-2 md:justify-between">
        <div
          key={items.id}
          className="border-[1px] border-black p-2 flex flex-col gap-2"
        >
          <Image
            src={items.image}
            height={200}
            width={300}
            className="w-full h-64 object-cover"
            alt={items.name}
          />
        </div>

        <section>
          <div className="flex justify-between flex-wrap">
            <span className="uppercase text-2xl font-serif">{items.name}</span>
            <span className="text-2xl font-serif">${items.price}</span>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex h-10">
              <button className="border-[1px] border-black w-full">-</button>
              <span className="border-t-[1px] border-b-[1px] border-black w-full flex items-center justify-center">
                1
              </span>
              <button className="border-[1px] border-black w-full">+</button>
            </div>
            <button className="uppercase text-white bg-black w-full py-3 px-2">
              Add To Cart
            </button>
            <p>{items.words}</p>
          </div>
        </section>
      </div>
    </section>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const [items] = await getData(params.slug);
  return { title: items.name + " - LM10" };
}
