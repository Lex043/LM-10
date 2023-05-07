import Image from "next/image";
import lm from "../../db/lm.json";

const Originals = () => {
  return (
    <section>
      {/* <h3 className="text-3xl text-center uppercase mb-4">Originals</h3> */}
      <div className="grid justify-center items-center gap-3 md:grid-cols-2 lg:grid-cols-4">
        {lm.originals.map((original) => (
          <div
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
          </div>
        ))}
      </div>
      {/* <button className="uppercase border-[1px] border-black py-1 w-full mt-6">
        Shop All
      </button> */}
    </section>
  );
};

export default Originals;
