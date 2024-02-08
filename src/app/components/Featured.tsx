"use client";

import Link from "next/link";
import ImageComponent from "./ImageComponent";
import { FirebaseData } from "@/types";
import useData from "../utils/UseData";
import React from "react";

const Featured: React.FC = () => {
    const { error, data: featured } = useData();

    if (error) return <div>An error has occurred: {error.message}</div>;

    return (
        <div className="grid w-full items-center gap-4 md:grid-cols-2 lg:grid-cols-4">
            {featured?.map(
                (feature: FirebaseData) =>
                    feature.category === "Featured" && (
                        <Link
                            key={feature.id}
                            href={`/shop/${feature.slug}`}
                            className="border-[1px] border-black p-2 flex flex-col gap-2"
                        >
                            <ImageComponent data={feature} />
                            <div className="flex justify-between">
                                <span className="uppercase">
                                    {feature.name}
                                </span>
                                <span>{feature.price}USD</span>
                            </div>
                        </Link>
                    )
            )}
        </div>
    );
};

export default Featured;
