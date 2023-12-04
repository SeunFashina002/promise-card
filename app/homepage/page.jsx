import Image from "next/image";
import Link from "next/link";
import { PiHandHeartBold } from "react-icons/pi";

const Homepage = () => {
  return (
    <>
      <section className="  p-2 flex flex-col justify-center items-center bg-[#FFFDFA] h-screen">
        <div className="py-4 text-center">
          <h1 className="text-2xl font-semibold text-black">Promise Card</h1>
          <h2 className="text-black">God Loves Cheerful Givers </h2>
        </div>

        <div className="w-full px-6 lg:w-2/4">
          <div className="flex justify-between">
            <div className="flex text-black">
              <h2>Promise me</h2>
              <PiHandHeartBold />
            </div>

            <Link href="/" className="text-black">
              See All
            </Link>
          </div>

          <div className="flex gap-5">
            <div className="bg-green-100 w-2/4 rounded-lg p-6 flex flex-col items-center justify-center">
              <Image
                src="/images/image 4.png"
                alt="money"
                width={70}
                height={70}
              />

              <h2 className="text-black">Money</h2>
            </div>
            <div className="bg-red-100 w-2/4 rounded-lg p-6 flex flex-col items-center justify-center">
              <Image
                src="/images/image 5.png"
                alt="money"
                width={70}
                height={70}
              />

              <h2 className="text-black">Chocolate</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
