import Image from "next/image";
import ImageComponent from "@/app/components/ImageComponent";
import type { Metadata } from "next";
import { db } from "@/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import CartItems from "@/app/components/CartItems";

interface Props {
  params: {
    slug: string;
  };
}

interface Item {
  id: string;
  slug: string;
  imageUrl: string;
  category: string;
  price: number;
  name: string;
  words: string;
}

export default async function Page({ params }: Props) {
  const col = collection(db, "messi");
  const querySnapshot = await getDocs(col);
  const documentsData: Item[] = querySnapshot.docs.map((doc) => {
    const data = doc.data() as Item;
    return {
      ...data,
    };
  });
  const item = documentsData.find((doc: Item) => doc.slug === params.slug);

  if (!item) {
    return {
      notFound: true,
    };
  }

  return (
    <section className="px-4 mt-20 md:px-20 mx-auto my-6 lg:px-28">
      <div className="grid w-full items-center gap-4 md:grid-cols-2 md:justify-between">
        <div
          key={item.id}
          className="border-[1px] border-black p-2 flex flex-col gap-2 md:max-w-[80%]"
        >
          <Image
            src={item.imageUrl}
            height={200}
            width={300}
            className="w-full h-80 object-cover"
            alt={item.name}
          />
        </div>

        <section>
          <div className="flex justify-between flex-wrap mb-4">
            <span className="uppercase text-2xl font-serif">{item.name}</span>
            <span className="text-2xl font-serif">${item.price}</span>
          </div>
          <div className="flex flex-col gap-4">
            <CartItems />
            <p className="text-sm">{item.words}</p>
          </div>
        </section>
      </div>
    </section>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const col = collection(db, "messi");
  const querySnapshot = await getDocs(col);
  const documentsData: Item[] = querySnapshot.docs.map((doc) => {
    const data = doc.data() as Item;
    return {
      ...data,
    };
  });

  const item: Item | undefined = documentsData.find(
    (doc) => doc.slug === params.slug
  );

  return { title: item ? `${item.slug} - LM10` : "Page Not Found - LM10" };
}
