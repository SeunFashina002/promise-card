import { promisedgifts } from "../../../_data/data";
import Promised from "@/components/promised";

const Promisedgifts = () => {
  return (
    <>
      <section className="md:w-2/4 mx-auto p-6">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M15.0898 19.9201L8.56984 13.4001C7.79984 12.6301 7.79984 11.3701 8.56984 10.6001L15.0898 4.08008"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <h1 className="text-black font-semibold text-2xl">Gifts</h1>
        <div className="flex justify-between py-4">
          <p className="text-black font-base">Reminder</p>
          <div>
            <div class="flex items-center">
              <label for="toggle" class="flex items-center cursor-pointer">
                <div class="relative">
                  <input type="checkbox" id="toggle" class="hidden" />

                  <div class="toggle__line w-12 h-6 bg-gray-400 rounded-full shadow-inner"></div>

                  <div class="toggle__dot absolute w-4 h-4 bg-white rounded-full shadow left-3 top-1 transition"></div>
                </div>
              </label>
            </div>
          </div>
        </div>

        <select
          name=""
          id=""
          className="w-full text-black border-t-2 p-4 border-b-2 outline-none"
        >
          <option className="w-full" value="">
            1 day
          </option>
          <option value="">2 days</option>
          <option value="">3 days</option>
          <option value="">4 days</option>
          <option value="">5 days</option>
        </select>
        <div className="py-8">
          {promisedgifts.map((gift) => (
            <Promised key={gift.id} {...gift} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Promisedgifts;
