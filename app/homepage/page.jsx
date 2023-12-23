"use client";

import Gift from "@/components/Gift";
import Link from "next/link";
import { PiHandHeartBold } from "react-icons/pi";
import Image from "next/image";

import { gifts } from "../../_data/data";
import Button from "@/components/Button";
import Navigation from "@/components/Navigation";
import { useRouter } from "next/navigation";

import { useContext, useState, useEffect } from "react";

export const PromisePage = ({ user }) => {
  const router = useRouter();

  const [addedStatus, setAddedStatus] = useState(() => {
    const savedAddedStatus =
      JSON.parse(localStorage.getItem("addedStatus")) || {};
    return savedAddedStatus;
  });

  useEffect(() => {
    localStorage.setItem("addedStatus", JSON.stringify(addedStatus));
  }, [addedStatus]);

  const selectGift = (selectedGift) => {
    const existingSelectedGifts =
      JSON.parse(localStorage.getItem("gifts")) || [];

    const isAlreadySelected = existingSelectedGifts.some(
      (gift) => gift.id === selectedGift.id
    );

    if (isAlreadySelected) {
      const updatedSelectedGifts = existingSelectedGifts.filter(
        (gift) => gift.id !== selectedGift.id
      );
      localStorage.setItem("gifts", JSON.stringify(updatedSelectedGifts));
    } else {
      const updatedSelectedGifts = [...existingSelectedGifts, selectedGift];
      localStorage.setItem("gifts", JSON.stringify(updatedSelectedGifts));
    }

    setAddedStatus((prevAddedStatus) => ({
      ...prevAddedStatus,
      [selectedGift.id]: !prevAddedStatus[selectedGift.id],
    }));
  };

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
              <div
                key={gift.id}
                className={`${
                  addedStatus[gift.id]
                    ? `${gift.bg} text-black p-4 rounded-lg flex flex-col items-center border-2 border-primary`
                    : `${gift.bg} text-black p-4 rounded-lg flex flex-col items-center`
                }`}
                onClick={() => {
                  selectGift(gift);
                }}
              >
                <Image src={gift.img} alt={gift.title} width={60} height={60} />
                <h1>{gift.title}</h1>
              </div>
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
