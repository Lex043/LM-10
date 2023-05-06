import Image from "next/image";
import lm from "../../db/lm.json";

const Latest = () => {
  return (
    <section className="mt-24 mb-4">
      <h3 className="text-3xl text-center mb-4 uppercase">Latest</h3>
      <div className="flex flex-col gap-6">
        {lm.latest.map((latest) => (
          <div
            key={latest.id}
            className="border-[1px] border-black p-2 flex flex-col gap-2"
          >
            <Image
              src={latest.image}
              height={200}
              width={300}
              alt={latest.name}
            />
            <div className="flex justify-between">
              <span className="uppercase">{latest.name}</span>
              <span>{latest.price}USD</span>
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

export default Latest;
