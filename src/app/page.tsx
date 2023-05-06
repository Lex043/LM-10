import Originals from "./components/Originals";
import LimitedEdition from "./components/LimitedEdition";
import Featured from "./components/Featured";
import Latest from "./components/Latest";

export default function Home() {
  return (
    <section className="px-4 mt-6">
      <header className="text-center flex flex-col gap-4 place-items-center">
        <h1 className="uppercase text-6xl md:text-9xl flex flex-col font-extrabold">
          <span>Leo</span>
          <span>Messi</span>
        </h1>
        <p>Original Paintings And Fine Art Prints of Lionel Andrés Messi.</p>
        <button className="text-white bg-black p-3 w-36">SHOP ALL</button>
      </header>
      <Originals />
      <LimitedEdition />
      <Featured />
      <Latest />
    </section>
  );
}
