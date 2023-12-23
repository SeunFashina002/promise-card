import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/firebase/config";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Gift = ({ id, title, image, bg = "moneybg", setGifts, user }) => {
  const [selectedGift, setselectedGift] = useState(false);

  const handleSelection = () => {
    setselectedGift(!selectedGift);
  };

  const handleRemoveGift = async (giftId) => {
    try {
      const giftRef = doc(db, "gifts", giftId);
      await deleteDoc(giftRef);
      console.log("gift deleted successfully");
    } catch (error) {
      console.log("error deleting gift: ", error.message);
    }
  };

  return (
    <>
      <Link
        href="#"
        key={id}
        className={
          selectedGift
            ? `${bg} w-full rounded-lg p-6 flex flex-col items-center justify-center relative border-2 border-primary`
            : `${bg} w-full rounded-lg p-6 flex flex-col items-center justify-center relative `
        }
        onClick={handleSelection}
      >
        <Image
          src={`${image ? image : "/images/image 9.png"}`}
          alt="gift-image"
          width={70}
          height={70}
          priority
        />

        <h2 className=" text-black">{title}</h2>

        {user ? (
          <div
            className="bg-slate-50 rounded-full absolute right-4 top-4 "
            onClick={() => handleRemoveGift(id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M13.0601 12.0001L15.3601 9.70011C15.6501 9.41011 15.6501 8.93011 15.3601 8.64011C15.0701 8.35011 14.5901 8.35011 14.3001 8.64011L12.0001 10.9401L9.70011 8.64011C9.41011 8.35011 8.93011 8.35011 8.64011 8.64011C8.35011 8.93011 8.35011 9.41011 8.64011 9.70011L10.9401 12.0001L8.64011 14.3001C8.35011 14.5901 8.35011 15.0701 8.64011 15.3601C8.79011 15.5101 8.98011 15.5801 9.17011 15.5801C9.36011 15.5801 9.55011 15.5101 9.70011 15.3601L12.0001 13.0601L14.3001 15.3601C14.4501 15.5101 14.6401 15.5801 14.8301 15.5801C15.0201 15.5801 15.2101 15.5101 15.3601 15.3601C15.6501 15.0701 15.6501 14.5901 15.3601 14.3001L13.0601 12.0001Z"
                fill="#292D32"
              />
            </svg>
          </div>
        ) : (
          ""
        )}
      </Link>
    </>
  );
};

export default Gift;
