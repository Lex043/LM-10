import Originals from "@/app/components/Originals";
import MailingList from "@/app/components/MailingList";
import LinkModal from "@/app/components/LinkModal";

const page = () => {
  return (
    <section className="px-4 md:px-10 mt-6 pb-6 lg:px-14">
      <LinkModal />
      <Originals />
      <MailingList />
    </section>
  );
};

export default page;
