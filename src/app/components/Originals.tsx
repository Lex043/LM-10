import Image from "next/image";
import Link from "next/link";
import lm from "../../db/lm.json";

const Originals = () => {
  return (
    <section>
      <div className="grid w-full items-center gap-3 md:grid-cols-2 lg:grid-cols-4">
        {lm.originals.map((original) => (
          <Link
            href={`/shop/${original.slug}`}
            key={original.id}
            className="border-[1px] border-black p-2 flex flex-col gap-2"
          >
            <Image
              src={original.image}
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
        ))}
      </div>
    </section>
  );
};

export default Originals;
