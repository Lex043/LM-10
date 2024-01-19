const Disclaimer = () => {
  return (
    <section className="my-16">
      <div className="border-[1px] border-red-600 p-4 md:p-8 max-w-xl mx-auto flex flex-col gap-4 place-items-center">
        <button className="text-white bg-red-600 uppercase py-1 px-2">
          Disclaimer
        </button>
        <p className="text-center">
          This is not the real website of Lionel Messi. This is a demo project
          for learning purpose only. The real website can be found at{" "}
          <a href="https://messi.com" className="uppercase font-semibold">
            messi.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default Disclaimer;
