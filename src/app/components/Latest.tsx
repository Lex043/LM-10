"use client";

import Link from "next/link";
import ImageComponent from "./ImageComponent";
import { useState, useEffect } from "react";
import { db } from "@/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

interface Latest {
  id: string;
  imageUrl: string;
  name: string;
  slug: string;
  price: number;
  category: string;
  words: string;
}

const Latest = () => {
  const [latest, setLatest] = useState<any>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const col = collection(db, "messi");
      const querySnapshot = await getDocs(col);
      const documentsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setLatest([...documentsData]);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message || "Error loading data");
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="grid w-full items-center gap-3 md:grid-cols-2 lg:grid-cols-4">
      {error && <p>{error}</p>}
      {latest.map(
        (data: Latest) =>
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
