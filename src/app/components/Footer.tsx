import Image from "next/image";

import VisaLogo from "../../../public/images/visa.svg";
import PaypalLogo from "../../../public/images/paypal.svg";
import ApplePayLogo from "../../../public/images/applepay.svg";
import GooglePayLogo from "../../../public/images/googlepay.svg";
import MastercardLogo from "../../../public/images/mastercard.svg";

const PAYMENT_LOGOS = [
    {
        logo: VisaLogo,
        name: "Visa",
    },
    {
        logo: PaypalLogo,
        name: "Paypal",
    },
    {
        logo: ApplePayLogo,
        name: "Apple Pay",
    },
    {
        logo: GooglePayLogo,
        name: "Google Pay",
    },
    {
        logo: MastercardLogo,
        name: "Mastercard",
    },
];

const Footer = () => {
    return (
        <footer className="border-t-[1px] border-black px-4 py-5 md:px-10 lg:px-14">
            <section className="mx-auto mb-6 flex max-w-screen-2xl flex-wrap justify-between md:w-full md:gap-10">
                <div className="flex flex-col gap-1">
                    <h3 className="uppercase">Socials</h3>
                    <ul>
                        <li>
                            <a href="/" className="text-xs uppercase">
                                Twitter
                            </a>
                        </li>
                        <li>
                            <a href="/" className="text-xs uppercase">
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a href="/" className="text-xs uppercase">
                                Pinterest
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-1">
                    <h3 className="uppercase">Help</h3>
                    <ul>
                        <li>
                            <a href="/" className="text-xs uppercase">
                                Shipping & Returns
                            </a>
                        </li>
                        <li>
                            <a href="/" className="text-xs uppercase">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="/" className="text-xs uppercase">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="mt-4 flex items-center gap-3">
                    {PAYMENT_LOGOS.map((logo, name) => {
                        return (
                            <div
                                className="w-12 grayscale duration-100 ease-linear hover:grayscale-0"
                                key={name}
                            >
                                <Image
                                    src={logo.logo}
                                    height={0}
                                    width={0}
                                    alt={logo.name}
                                    className="cursor-pointer"
                                />
                            </div>
                        );
                    })}
                </div>
            </section>

            <section className="mx-auto mt-6 flex max-w-screen-2xl flex-col place-items-center gap-4 md:flex-row md:justify-between">
                <h3 className="text-xs">@LM10 | {new Date().getFullYear()}</h3>

                <p className="text-center text-xs uppercase">
                    <span>
                        Inspired by:{" "}
                        <a
                            href="https://leah-gardner.vercel.app/"
                            className="font-bold"
                        >
                            yinkakun's leah-gardner &
                        </a>{" "}
                        <a
                            href="https://cr7-swiss.vercel.app/"
                            className="font-bold"
                        >
                            CR7's site by swiss.
                        </a>{" "}
                        dev: Alex.{" "}
                    </span>
                    <span>
                        You can checkout the repo{" "}
                        <a
                            href="https://github.com/Lex043/LM-10"
                            className="font-bold"
                        >
                            here
                        </a>
                    </span>
                </p>
            </section>
        </footer>
    );
};

export default Footer;
