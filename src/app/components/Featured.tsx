import Image from "next/image";
import Link from "next/link";
import lm from "../../db/lm.json";

const Featured = () => {
  return (
    <section>
      <div className="grid justify-center gap-3 md:grid-cols-2 lg:grid-cols-4">
        {lm.featured.map((feature) => (
          <Link
            href={`/shop/${feature.slug}`}
            key={feature.id}
            className="border-[1px] border-black p-2 flex flex-col gap-2"
          >
            <Image
              src={feature.image}
              height={200}
              width={300}
              className="w-full h-64 object-cover"
              alt={feature.name}
            />
            <div className="flex justify-between">
              <span className="uppercase">{feature.name}</span>
              <span>{feature.price}USD</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Featured;
