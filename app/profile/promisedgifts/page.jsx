import GiftList from "@/components/GiftList";
import { gifts } from "../../../_data/data";

const Promisedgifts = () => {
  return (
    <>
      <section className="md:w-2/4 mx-auto p-4">
        <h1 className="text-black font-bold text-lg">Gifts</h1>
        <div className="flex justify-between p-4">
          <p className="text-black font-base">Reminder</p>
          <p className="text-primary">toggle here</p>
        </div>

        <select
          name=""
          id=""
          className="w-full text-black border-t-2 p-4 border-b-2 outline-none"
        >
          <option value="">1 day</option>
          <option value="">2 days</option>
          <option value="">3 days</option>
          <option value="">4 days</option>
          <option value="">5 days</option>
        </select>
      </section>

      <div className="py-8">
        {gifts.map((gift) => (
          <GiftList {...gift} />
        ))}
      </div>
    </>
  );
};

export default Promisedgifts;
