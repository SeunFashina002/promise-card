"use client";
import Link from "next/link";
import { gifts } from "../../_data/data";
import GiftList from "@/components/GiftList";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { collection, addDoc } from "firebase/firestore";
import { UserAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import { db } from "@/firebase/config";

const { default: Navigation } = require("@/components/Navigation");

const Addgift = () => {
  const { user } = UserAuth();
  const router = useRouter();

  const [selectedGifts, setSelectedGifts] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    if (user) {
      setUserId(user.uid);
    }
  }, [user]);

  if (!userId) {
    return <div className="h-screen w-full bg-[#FFFDFA]"></div>;
  }

  if (!user) {
    router.push("/sign-in");
  }

  const addSelectedGifts = async () => {
    for (const gift of selectedGifts) {
      try {
        await addDoc(collection(db, "gifts"), {
          name: gift.title,
          image: gift.img,
          user: userId,
        });
        console.log("gift added");
        router.push("/:id/addgift/giftadded");
      } catch (error) {
        console.log("error adding gift", error);
      }
    }

    setSelectedGifts([]);
  };

  const addCustomGift = () => {
    router.push("/customgift");
  };

  return (
    <>
      <div className="h-full">
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
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
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
                gift={gift}
                setSelectedGifts={setSelectedGifts}
              />
            );
          })}
          <div className="flex w-full justify-around py-4">
            <Button
              className="bg-[#C015A4] text-white w-full md:w-1/2 lg:w-1/5 p-4 text-center border rounded-full"
              label="Add gift"
              onClick={addSelectedGifts}
            />
            <Button
              className="bg-[#F7F3F3] text-black w-full md:w-1/2 lg:w-1/5 p-4 text-center border rounded-full"
              label="Add custom gift"
              onClick={addCustomGift}
            />
          </div>
        </div>

        <Navigation />
      </div>
    </>
  );
};

export default Addgift;
