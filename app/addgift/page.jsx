"use client";
import Link from "next/link";
import { gifts } from "../../_data/data";
import GiftList from "@/components/GiftList";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

const { default: Navigation } = require("@/components/Navigation");

const Addgift = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/addgift/giftadded");
  };

  const addgift = () => {
    router.push("/customgift");
  };

  return (
    <>
      <div>
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

          <Link href="/" className="text-primary font-bold">
            Cancel
          </Link>
        </div>

        <div className=" md:w-2/4 px-6 mx-auto">
          <h1 className="text-black text-lg ml-4 font-bold pb-4">
            Select gift item
          </h1>
          {gifts.map((gift) => {
            return (
              <GiftList
                key={gift.id}
                id={gift.id}
                title={gift.title}
                img={gift.img}
                bg={gift.bg}
              />
            );
          })}
          <div className="flex w-full justify-around py-4">
            <Button
              className="bg-[#C015A4] text-white w-full md:w-1/2 lg:w-1/5 p-4 text-center border rounded-full"
              label="Add gift"
              onClick={handleClick}
            />
            <Button
              className="bg-[#F7F3F3] text-black w-full md:w-1/2 lg:w-1/5 p-4 text-center border rounded-full"
              label="Add custom gift"
              onClick={addgift}
            />
          </div>
        </div>

        <Navigation />
      </div>
    </>
  );
};

export default Addgift;
