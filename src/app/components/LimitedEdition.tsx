"use client";

import Link from "next/link";
import ImageComponent from "./ImageComponent";
import { FirebaseData } from "@/types";
import UseData from "../utils/UseData";

const LimitedEdition = () => {
    const { error, data: limitededition } = UseData();

    if (error) return "An error has occurred: " + error.message;

    return (
        <div className="grid w-full items-center gap-4 md:grid-cols-2 lg:grid-cols-4">
            {limitededition?.map(
                (limited: FirebaseData) =>
                    limited.category === "Limited Edition" && (
                        <Link
                            key={limited.id}
                            href={`/shop/${limited.slug}`}
                            className="border-[1px] border-black p-2 flex flex-col gap-2"
                        >
                            <ImageComponent data={limited} />
                            <div className="flex justify-between">
                                <span className="uppercase">
                                    {limited.name}
                                </span>
                                <span>{limited.price}USD</span>
                            </div>
                        </Link>
                    )
            )}
        </div>
    );
};

export default LimitedEdition;
