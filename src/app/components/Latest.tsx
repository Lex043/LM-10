import Image from "next/image";
import Link from "next/link";
import lm from "../../db/lm.json";

const Latest = () => {
  return (
    <section>
      <div className="grid justify-center w-full gap-3 md:grid-cols-2 lg:grid-cols-4">
        {lm.latest.map((latest) => (
          <Link
            href={`/shop/${latest.slug}`}
            key={latest.id}
            className="border-[1px] border-black p-2 flex flex-col justify-between"
          >
            <Image
              src={latest.image}
              height={200}
              width={300}
              className="w-full h-64 object-cover"
              alt={latest.name}
            />

            <div className="flex justify-between">
              <span className="uppercase">{latest.name}</span>
              <span>{latest.price}USD</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Latest;
