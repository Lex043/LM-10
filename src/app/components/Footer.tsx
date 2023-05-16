import Marquee from "react-fast-marquee";
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
    <footer className="border-t-[1px] border-black py-5 px-4 md:px-10 lg:px-14">
      <section className="mb-6 flex flex-wrap justify-between md:gap-10 md:w-full">
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

        <Marquee gradient={false} speed={50} pauseOnHover className="max-w-sm">
          <div className="flex items-center gap-6 mt-4">
            {" "}
            {PAYMENT_LOGOS.map((logo, name) => {
              return (
                <div
                  className="w-12 grayscale duration-100 ease-linear hover:grayscale-0"
                  key={name}
                >
                  <Image
                    src={logo.logo}
                    height={40}
                    width={40}
                    alt={logo.name}
                  />
                </div>
              );
            })}
          </div>
        </Marquee>
      </section>

      <section className="mt-6 flex flex-col gap-4 place-items-center md:flex-row md:justify-between">
        <h3 className="text-xs">@LM10 | {new Date().getFullYear()}</h3>

        <p className="uppercase text-center text-xs">
          <span>
            Inspired by:{" "}
            <a href="https://leah-gardner.vercel.app/" className="font-bold">
              yinkakun's leah-gardner &
            </a>{" "}
            <a href="https://cr7-swiss.vercel.app/" className="font-bold">
              CR7's site by swiss
            </a>{" "}
            dev: Alex.{" "}
          </span>
          <span>
            {" "}
            This Project is open source. You can checkout the repo{" "}
            <a href="https://github.com/Lex043/LM-10" className="font-bold">
              here
            </a>
          </span>
        </p>
      </section>
    </footer>
  );
};

export default Footer;
