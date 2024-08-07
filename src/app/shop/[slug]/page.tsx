"use client";

import Image from "next/image";
import type { Metadata } from "next";
import { db } from "@/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import useRoute from "@/app/hooks/useRoute";
import AddToCart from "@/app/components/AddToCart";

interface Props {
    params: {
        slug: string;
    };
}

export default function Page({ params }: Props) {
    const { data: item } = useRoute({ params });

    return (
        <section className="px-4 mt-20 md:px-10 mx-auto my-6 lg:px-32">
            <div className="grid w-full items-center gap-4 md:grid-cols-2 md:justify-between">
                <div
                    key={item?.id}
                    className="border-[1px] border-black p-2 flex flex-col gap-2 lg:max-w-[80%]"
                >
                    <Image
                        src={item?.imageUrl as string}
                        height={300}
                        width={400}
                        className="w-[400px] lg:w-full md:w-[450px] h-[350px] md:h-[400px] object-cover"
                        alt={item?.name as string}
                    />
                </div>

                <section>
                    <div className="flex justify-between flex-wrap mb-4">
                        <span className="uppercase text-2xl font-serif">
                            {item?.name}
                        </span>
                        <span className="text-2xl font-serif">
                            ${item?.price}
                        </span>
                    </div>
                    <div className="flex flex-col gap-4">
                        <AddToCart item={item} />

                        <p className="text-sm">{item?.words}</p>
                    </div>
                </section>
            </div>
        </section>
    );
}

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//     const col = collection(db, "messi");
//     const querySnapshot = await getDocs(col);
//     const documentsData: Item[] = querySnapshot.docs.map((doc) => {
//         const data = doc.data() as Item;
//         return {
//             ...data,
//         };
//     });

//     const item: Item | undefined = documentsData.find(
//         (doc) => doc.slug === params.slug
//     );
//     // const { data: item } = useRoute({ params });

//     return { title: item ? `${item.slug} - LM10` : "Page Not Found - LM10" };
// }
