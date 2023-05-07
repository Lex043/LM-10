import Image from "next/image";
import lm from "../../db/lm.json";

const LimitedEdition = () => {
  return (
    <section>
      {/* <h3 className="text-3xl text-center mb-4 uppercase">Limited Edition</h3> */}
      <div className="grid justify-center gap-3 md:grid-cols-2 lg:grid-cols-4">
        {lm.limited.map((edition) => (
          <div
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
          </div>
        ))}
      </div>
      {/* <button className="uppercase border-[1px] border-black py-1 w-full mt-6">
        Shop All
      </button> */}
    </section>
  );
};

export default LimitedEdition;
