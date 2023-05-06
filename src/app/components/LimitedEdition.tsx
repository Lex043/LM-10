import Image from "next/image";
import lm from "../../db/lm.json";

const LimitedEdition = () => {
  return (
    <section className="mt-24 mb-4">
      <h3 className="text-3xl text-center mb-4 uppercase">Limited Edition</h3>
      <div className="flex flex-col gap-6">
        {lm.limited.map((edition) => (
          <div
            key={edition.id}
            className="border-[1px] border-black p-2 flex flex-col gap-2"
          >
            <Image
              src={edition.image}
              height={200}
              width={300}
              alt={edition.name}
            />
            <div className="flex justify-between">
              <span className="uppercase">{edition.name}</span>
              <span>{edition.price}USD</span>
            </div>
          </div>
        ))}
        <button className="uppercase border-[1px] border-black py-1">
          Shop All
        </button>
      </div>
    </section>
  );
};

export default LimitedEdition;
