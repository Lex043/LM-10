import Featured from "@/app/components/Featured";
import MailingList from "@/app/components/MailingList";
import LinkModal from "@/app/components/LinkModal";

const page = () => {
  return (
    <section className="flex flex-col md:flex-row md:flex-wrap px-4 md:px-10 mt-6 pb-6 lg:px-14">
      <LinkModal />
      <Featured />
      <MailingList />
    </section>
  );
};

export default page;
