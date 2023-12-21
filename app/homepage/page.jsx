"use client";

import Gift from "@/components/Gift";
import Link from "next/link";
import { PiHandHeartBold } from "react-icons/pi";

import { gifts } from "../../_data/data";
import Button from "@/components/Button";
import Navigation from "@/components/Navigation";
import { useRouter } from "next/navigation";

export const PromisePage = ({ user }) => {
  const router = useRouter();

  function handleClick() {
    router.push("/give");
  }
  return (
    <>
      <section className="  p-2 flex flex-col  items-center bg-[#FFFDFA] h-screen">
        <div className="py-14 text-center">
          <h1 className="text-4xl font-semibold text-black font-heading">
            Promise Card
          </h1>
          <h2 className="text-black text-xl">God Loves Cheerful Givers </h2>
        </div>

        <div className="w-full px-6 lg:w-2/4">
          <div className="flex justify-between">
            <div className="flex items-center gap-2 text-black">
              <h2 className="text-lg">Promise me</h2>
              <PiHandHeartBold />
            </div>

            <Link href="/" className="text-primary font-bold">
              See All
            </Link>
          </div>

          <div className="grid grid-cols-2 py-4 gap-4">
            {gifts.map((gift) => (
              <Gift key={gift.id} {...gift} user={user} />
            ))}
          </div>
        </div>
        <Button
          className="bg-[#C015A4] text-white  p-4 text-center border rounded-full absolute bottom-24"
          label="Give"
          onClick={handleClick}
        />
      </section>
      <Navigation />
    </>
  );
};

export default PromisePage;
