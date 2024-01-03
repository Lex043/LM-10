"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { db } from "@/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

interface Original {
  id: string;
  imageUrl: string;
  name: string;
  slug: string;
  price: number;
  category: string;
}

const Originals = () => {
  const [originals, setOriginals] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const col = collection(db, "messi");
      const querySnapshot = await getDocs(col);
      const documentsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setOriginals([...documentsData]);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message || "Error loading data");
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="grid w-full items-center gap-3 md:grid-cols-2 lg:grid-cols-4">
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {originals.map(
        (original: Original) =>
          original.category === "Originals" && (
            <Link
              key={original.id}
              href={`/shop/${original.slug}`}
              className="border-[1px] border-black p-2 flex flex-col gap-2"
            >
              <Image
                src={original.imageUrl}
                height={200}
                width={300}
                className="w-full h-64 object-cover"
                alt={original.name}
              />
              <div className="flex justify-between">
                <span className="uppercase">{original.name}</span>
                <span>{original.price}USD</span>
              </div>
            </Link>
          )
      )}
    </div>
  );
};

export default Originals;
