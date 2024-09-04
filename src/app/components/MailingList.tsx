const MailingList = () => {
    return (
        <section className="mx-auto my-16">
            <div className="border-[1px] border-black p-4 md:p-12">
                <h1 className="text-center text-3xl font-semibold uppercase md:text-4xl">
                    Join My Mailing List For Discounts And Latest Works
                </h1>
                <div className="mx-auto mt-4 flex max-w-sm">
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full border-[1px] border-black px-2 py-3 outline-none"
                    />
                    <button className="bg-black px-2 text-white">
                        Subscribe
                    </button>
                </div>
            </div>
        </section>
    );
};

export default MailingList;
