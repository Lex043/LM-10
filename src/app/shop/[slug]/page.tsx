import Image from "next/image";
import all from "../../../db/all.json";
import path from "path";
import fsPromises from "fs/promises";

const page = ({ data, slug }: any) => {
  return (
    <section>
      <div className="grid w-full items-center gap-3 md:grid-cols-2 lg:grid-cols-4">
        {data &&
          data.all.map((original: any) => (
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
                <span>{original.slug}</span>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default page;

async function getData() {
  const filePath = path.join(process.cwd(), "src/db/lm.json");
  const jsonData = await fsPromises.readFile(filePath);
  const data = JSON.parse(jsonData.toString());

  return data;
}

export const getStaticPaths = async () => {
  const data = await getData();
  const paths = data.all.map((res: any) => ({
    params: { slug: res.slug },
  }));
  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps(context: any) {
  const slug = context.params.slug;
  const data = await getData();
  console.log(data);
  return {
    props: {
      data,
      slug,
    },
  };
}
