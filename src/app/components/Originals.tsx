"use client";

import Link from "next/link";
import { FirebaseData } from "@/types";
import ImageComponent from "./ImageComponent";
import UseData from "../utils/UseData";

const Originals = () => {
    const { error, data: originals } = UseData();

    if (error) return "An error has occurred: " + error.message;

    return (
        <div className="grid w-full items-center gap-4 md:grid-cols-2 lg:grid-cols-4">
            {originals?.map(
                (original: FirebaseData) =>
                    original.category === "Originals" && (
                        <Link
                            key={original.id}
                            href={`/shop/${original.slug}`}
                            className="border-[1px] border-black p-2 flex flex-col gap-2"
                        >
                            <ImageComponent data={original} />
                            <div className="flex justify-between">
                                <span className="uppercase">
                                    {original.name}
                                </span>
                                <span>{original.price}USD</span>
                            </div>
                        </Link>
                    )
            )}
        </div>
    );
};

export default Originals;
