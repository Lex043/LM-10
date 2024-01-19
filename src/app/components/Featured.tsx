"use client";

import Link from "next/link";
import ImageComponent from "./ImageComponent";
import { useState, useEffect } from "react";
import { db } from "@/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

interface Featured {
  id: string;
  imageUrl: string;
  name: string;
  slug: string;
  price: number;
  category: string;
}

const Featured = () => {
  const [featured, setFeatured] = useState<any>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const col = collection(db, "messi");
      const querySnapshot = await getDocs(col);
      const documentsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setFeatured([...documentsData]);
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
    <div className="grid w-full items-center gap-4 md:grid-cols-2 lg:grid-cols-4">
      {error && <p>{error}</p>}
      {featured.map(
        (feature: Featured) =>
          feature.category === "Featured" && (
            <Link
              key={feature.id}
              href={`/shop/${feature.slug}`}
              className="border-[1px] border-black p-2 flex flex-col gap-2"
            >
              <ImageComponent data={feature} />
              <div className="flex justify-between">
                <span className="uppercase">{feature.name}</span>
                <span>{feature.price}USD</span>
              </div>
            </Link>
          )
      )}
    </div>
  );
};

export default Featured;
