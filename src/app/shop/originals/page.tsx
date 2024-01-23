"use client";

import Originals from "@/app/components/Originals";
import Latest from "@/app/components/Latest";
import Featured from "@/app/components/Featured";
import LimitedEdition from "@/app/components/LimitedEdition";
import { Tab } from "@headlessui/react";

const page = () => {
  return (
    <section className="px-4 md:px-10 my-10 lg:px-14">
      <div className="flex flex-col flex-wrap w-full md:flex-row gap-4 mt-8">
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
      </div>
    </section>
  );
};

export default page;
