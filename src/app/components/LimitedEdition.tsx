import Image from "next/image";
import Link from "next/link";
import lm from "../../db/lm.json";

const LimitedEdition = () => {
  return (
    <section>
      <div className="grid justify-center gap-3 md:grid-cols-2 lg:grid-cols-4">
        {lm.limited.map((edition) => (
          <Link
            href={`/shop/${edition.slug}`}
            key={edition.id}
            className="border-[1px] border-black p-2 flex flex-col gap-2"
          >
            <Image
              src={edition.image}
              height={200}
              width={300}
              className="w-full h-64 object-cover"
              alt={edition.name}
            />
            <div className="flex justify-between">
              <span className="uppercase">{edition.name}</span>
              <span>{edition.price}USD</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default LimitedEdition;
