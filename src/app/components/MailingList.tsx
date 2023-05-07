const MailingList = () => {
  return (
    <section className="my-6">
      <div className="border-[1px] border-black p-4 md:p-12">
        <h1 className="uppercase text-3xl md:text-4xl font-semibold text-center">
          Join My Mailing List For Discounts And Latest Works
        </h1>
        <div className="flex mt-4">
          <input
            type="email"
            placeholder="Your Email"
            className="border-[1px] border-black py-3 px-2 outline-none w-full"
          />
          <button className=" bg-black text-white px-2">Subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default MailingList;
