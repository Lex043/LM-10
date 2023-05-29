import MailingList from "../components/MailingList";
import Shop from "../components/Shop";

export const metadata = {
  title: "SHOP - LM10",
};

const page = () => {
  return (
    <section className="px-4 md:px-10 mt-20 lg:px-14">
      <h1 className="text-3xl lg:text-7xl uppercase text-center mb-4">Shop</h1>
      <Shop />
      <MailingList />
    </section>
  );
};

export default page;
