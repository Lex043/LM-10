"use client";

import Link from "next/link";
import ImageComponent from "./ImageComponent";
import { FirebaseData } from "@/types";
import UseData from "../utils/UseData";

const Latest = () => {
    const { error, data: latest } = UseData();

    if (error) return "An error has occurred: " + error.message;

    return (
        <div className="grid w-full items-center gap-4 md:grid-cols-2 lg:grid-cols-4">
            {latest?.map(
                (data: FirebaseData) =>
                    data.category === "Latest" && (
                        <Link
                            key={data.id}
                            href={`/shop/${data.slug}`}
                            className="border-[1px] border-black p-2 flex flex-col gap-2"
                        >
                            <ImageComponent data={data} />
                            <div className="flex justify-between">
                                <span className="uppercase">{data.name}</span>
                                <span>{data.price}USD</span>
                            </div>
                        </Link>
                    )
            )}
        </div>
    );
};

export default Latest;
