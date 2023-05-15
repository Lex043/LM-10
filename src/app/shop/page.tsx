// "use client";

import Originals from "../components/Originals";
import LimitedEdition from "../components/LimitedEdition";
import Featured from "../components/Featured";
import Latest from "../components/Latest";
import MailingList from "../components/MailingList";
import { Tab } from "@headlessui/react";
import Shop from "../components/Shop";

export const metadata = {
  title: "SHOP - LM10",
};

const page = () => {
  return (
    <section className="px-4 md:px-10 mt-6 lg:px-14">
      <h1 className="text-3xl uppercase text-center mb-4">Shop</h1>
      <div>
        <Shop />
        <MailingList />
      </div>
    </section>
  );
};

export default page;
