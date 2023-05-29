import Image from "next/image";
import type { Metadata } from "next";
import { getData } from "@/db/all";
import CartItems from "@/app/components/CartItems";

interface Props {
  params: {
    slug: string;
  };
}

export default async function All({ params }: Props) {
  const [items] = await getData(params.slug);

  return (
    <section className="px-4 mt-20 md:px-20 mx-auto my-6 lg:px-28">
      <div className="grid w-full items-center gap-4 md:grid-cols-2 md:justify-between">
        <div
          key={items.id}
          className="border-[1px] border-black p-2 flex flex-col gap-2 md:max-w-[80%]"
        >
          <Image
            src={items.image}
            height={200}
            width={300}
            className="w-full h-80 object-cover"
            alt={items.name}
          />
        </div>

        <section>
          <div className="flex justify-between flex-wrap mb-4">
            <span className="uppercase text-2xl font-serif">{items.name}</span>
            <span className="text-2xl font-serif">${items.price}</span>
          </div>
          <div className="flex flex-col gap-4">
            <CartItems />
            <p className="text-sm">{items.words}</p>
          </div>
        </section>
      </div>
    </section>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const [items] = await getData(params.slug);
  return { title: items.slug + " - LM10" };
}
