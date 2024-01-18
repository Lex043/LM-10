"use client";

import Link from "next/link";
import ImageComponent from "./ImageComponent";
import { useState, useEffect } from "react";
import { db } from "@/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

interface Limited {
  id: string;
  imageUrl: string;
  name: string;
  slug: string;
  price: number;
  category: string;
}

const LimitedEdition = () => {
  const [limitededition, setLimitededition] = useState<any>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const col = collection(db, "messi");
      const querySnapshot = await getDocs(col);
      const documentsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setLimitededition([...documentsData]);
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
      {limitededition.map(
        (limited: Limited) =>
          limited.category === "Limited Edition" && (
            <Link
              key={limited.id}
              href={`/shop/${limited.slug}`}
              className="border-[1px] border-black p-2 flex flex-col gap-2"
            >
              <ImageComponent data={limited} />
              <div className="flex justify-between">
                <span className="uppercase">{limited.name}</span>
                <span>{limited.price}USD</span>
              </div>
            </Link>
          )
      )}
    </div>
  );
};

export default LimitedEdition;
