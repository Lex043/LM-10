export default function Navbar() {
  return (
    <nav className="flex justify-between flex-wrap border-b-[1px] border-black py-3 px-4">
      <button className="flex items-center gap-2">
        <div className="flex flex-col gap-1">
          <div className="h-[1px] w-4 bg-black"></div>
          <div className="h-[1px] w-4 bg-black"></div>
        </div>
        <span>SHOP</span>
      </button>
      <h3>LM10</h3>
      <button className="flex items-center gap-1">
        <span>CART</span>
        <span className="text-white bg-black rounded-full w-8 h-5 flex justify-center items-center p-2">
          0
        </span>
      </button>
    </nav>
  );
}
