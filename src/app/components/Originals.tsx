import Image from "next/image";
import lm from "../../db/lm.json";

const Originals = () => {
  return (
    <section className="mt-14 mb-4">
      <h3 className="text-3xl text-center mb-4">Originals</h3>
      <div className="flex justify-center flex-col gap-6 md:flex-row md:flex-wrap">
        {lm.originals.map((original) => (
          <div
            key={original.id}
            className="border-[1px] border-black p-2 flex flex-col gap-2"
          >
            <Image
              src={original.image}
              height={200}
              width={300}
              alt={original.name}
            />
            <div className="flex justify-between">
              <span className="uppercase">{original.name}</span>
              <span>{original.price}USD</span>
            </div>
          </div>
        ))}
        {/* <button className="uppercase border-[1px] border-black py-1 w-full">
          Shop All
        </button> */}
      </div>
      <button className="uppercase border-[1px] border-black py-1 w-full mt-6">
        Shop All
      </button>
    </section>
  );
};

export default Originals;
