import Image from "next/image";
import lm from "../../db/lm.json";

const Latest = () => {
  return (
    <section>
      {/* <h3 className="text-3xl text-center mb-4 uppercase">Latest</h3> */}
      <div className="grid justify-center w-full gap-3 md:grid-cols-2 lg:grid-cols-4">
        {lm.latest.map((latest) => (
          <div
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
          </div>
        ))}
      </div>
      {/* <button className="uppercase border-[1px] border-black py-1 w-full mt-6">
        Shop All
      </button> */}
    </section>
  );
};

export default Latest;
