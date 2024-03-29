"use client";

import Originals from "../components/Originals";
import LimitedEdition from "../components/LimitedEdition";
import Featured from "../components/Featured";
import Latest from "../components/Latest";
import { Tab } from "@headlessui/react";

const Shop = () => {
  return (
    <section className="flex flex-col flex-wrap w-full md:flex-row gap-4 mt-8">
      <Tab.Group>
        <Tab.List className="flex flex-col border-[1px] border-black p-3">
          <Tab
            className={({ selected }) =>
              `border-none outline-none uppercase text-start ${
                selected && "font-semibold underline"
              }`
            }
          >
            Originals
          </Tab>
          <Tab
            className={({ selected }) =>
              `border-none outline-none uppercase text-start ${
                selected && "font-semibold underline"
              }`
            }
          >
            Limited Editions
          </Tab>
          <Tab
            className={({ selected }) =>
              `border-none outline-none uppercase text-start ${
                selected && "font-semibold underline"
              }`
            }
          >
            Featured
          </Tab>
          <Tab
            className={({ selected }) =>
              `border-none outline-none uppercase text-start ${
                selected && "font-semibold underline"
              }`
            }
          >
            Latest
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <Originals />
          </Tab.Panel>
          <Tab.Panel>
            <LimitedEdition />
          </Tab.Panel>
          <Tab.Panel>
            <Featured />
          </Tab.Panel>
          <Tab.Panel>
            <Latest />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </section>
  );
};

export default Shop;
