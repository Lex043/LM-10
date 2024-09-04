"use client";

import Link from "next/link";
import { FirebaseData } from "@/types";
import ImageComponent from "./ImageComponent";
import useData from "../utils/UseData";
import React from "react";

const Originals: React.FC = () => {
    const { error, data: originals } = useData();

    if (error) return <div>An error has occurred: {error.message}</div>;

    return (
        <div className="grid w-full items-center gap-4 md:grid-cols-2 lg:grid-cols-4">
            {originals &&
                originals.map(
                    (original: FirebaseData) =>
                        original.category === "Originals" && (
                            <Link
                                key={original.id}
                                href={`/shop/${original.slug}`}
                                className="flex flex-col gap-2 border-[1px] border-black p-2"
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
