import React from "react";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const EmptyGift = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/addgift");
  };
  return (
    <section className="bg-[#FFFDFA] flex flex-col justify-center items-center h-screen w-full px-6 lg:px-9 text-black">
      <div>
        <Image
          src="/empty.svg"
          alt="Empty Gift Box"
          width={127.48}
          height={122.5}
          priority
        />
      </div>
      <p className="text-center w-full my-12 md:text-lg">
        You have not added any gift options yet! Would you like to add one or
        more now?
      </p>
      {/* <h3 className="text-center text-2xl font-bold mb-4 w-full lg:w-1/3">
        Create your own promise card
      </h3> */}
      <Button
        className="bg-[#C015A4] text-white w-full md:w-1/2 lg:w-1/5 p-4 text-center border rounded-full"
        label="Add gift"
        onClick={handleClick}
      />
    </section>
  );
};

export default EmptyGift;
