import LimitedEdition from "@/app/components/LimitedEdition";
import MailingList from "@/app/components/MailingList";
import LinkModal from "@/app/components/LinkModal";

const page = () => {
  return (
    <section className="flex flex-col md:flex-row md:flex-wrap px-4 md:px-10 mt-6 lg:px-14">
      <LinkModal />
      <LimitedEdition />
      <MailingList />
    </section>
  );
};

export default page;
