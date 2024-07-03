"use client";

import React, { useState, useEffect } from "react";
import { db } from "@/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

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

export default function useRoute({ params }: Props) {
    const [data, setData] = useState<Item>();
    useEffect(() => {
        const fetchData = async () => {
            const col = collection(db, "messi");
            const querySnapshot = await getDocs(col);
            const documentsData: Item[] = querySnapshot.docs.map((doc) => {
                const data = doc.data() as Item;
                return {
                    ...data,
                };
            });
            const item = documentsData.find(
                (doc: Item) => doc.slug === params.slug
            );
            setData(item);

            if (!item) {
                return {
                    notFound: true,
                };
            }
        };

        fetchData();
    }, []);
    return { data };
}
