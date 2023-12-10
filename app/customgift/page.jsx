import Link from "next/link";
import Button from "@/components/Button";
import Navigation from "@/components/Navigation";
const Customgift = () => {
  return (
    <>
      <section className=" p-4 md:w-2/4 mx-auto">
        <div className="flex justify-between p-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M15.09 19.9201L8.56997 13.4001C7.79997 12.6301 7.79997 11.3701 8.56997 10.6001L15.09 4.08008"
              stroke="#292D32"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <Link href="/" className="text-primary font-bold ">
            Cancel
          </Link>
        </div>

        <div className="p-4 bg-[#FCF1F6] border border-primary rounded-lg">
          <p className="text-black">
            You can add a custom gift option here which you can add to your
            catalogue
          </p>
        </div>

        <div className="pt-20">
          <form className="flex flex-col py-4">
            <label htmlFor="" className="text-black pb-4">
              Gift name <span className="text-primary font-bold">*</span>
            </label>
            <input type="text" className="bg-[#F7F3F3] border rounded-lg p-4" />
            <input
              type="file"
              name=""
              id=""
              className="file:bg-[#C015A40D]  my-4 text-black file:border-3 file:border-primary file:rounded-lg file:p-8 file:border-dashed  "
            />
            <Button
              className="bg-[#C015A4] text-white w-full md:w-1/2 lg:w-1/5 p-4 text-center border rounded-full mt-11"
              label="Add gift"
            />
          </form>
        </div>
      </section>
      <Navigation />
    </>
  );
};

export default Customgift;
