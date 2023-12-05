import Gift from "@/components/Gift";
import Link from "next/link";
import { PiHandHeartBold } from "react-icons/pi";

const Homepage = () => {
  return (
    <>
      <section className="  p-2 flex flex-col justify-center items-center bg-[#FFFDFA] h-screen">
        <div className="py-4 text-center">
          <h1 className="text-2xl font-semibold text-black font-heading">
            Promise Card
          </h1>
          <h2 className="text-black">God Loves Cheerful Givers </h2>
        </div>

        <div className="w-full px-6 lg:w-2/4">
          <div className="flex justify-between">
            <div className="flex items-center gap-2 text-black">
              <h2>Promise me</h2>
              <PiHandHeartBold />
            </div>

            <Link href="/" className="text-primary">
              See All
            </Link>
          </div>

          <div className="flex gap-5">
            <Gift />
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
