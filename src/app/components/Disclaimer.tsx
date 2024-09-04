const Disclaimer = () => {
    return (
        <section className="my-16">
            <div className="mx-auto flex max-w-xl flex-col place-items-center gap-4 border-[1px] border-red-600 p-4 md:p-8">
                <button className="bg-red-600 px-2 py-1 uppercase text-white">
                    Disclaimer
                </button>
                <p className="text-center">
                    This is not the real website of Lionel Messi. This is a demo
                    project for learning purpose only. The real website can be
                    found at{" "}
                    <a
                        href="https://messi.com"
                        className="font-semibold uppercase"
                    >
                        messi.com
                    </a>
                </p>
            </div>
        </section>
    );
};

export default Disclaimer;
