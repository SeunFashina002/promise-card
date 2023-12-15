"use client";

import Image from "next/image";
import { useState } from "react";

const GiftList = ({ id, title, img, bg, gift, setSelectedGifts }) => {
  const [clickedGift, setclickedGift] = useState(false);

  function toggleGiftSelection(gift) {
    setclickedGift(!clickedGift);
    setSelectedGifts((prevSelectedGifts) => {
      const isSelected = prevSelectedGifts.includes(gift);
      if (isSelected) {
        return prevSelectedGifts.filter((selected) => selected !== gift);
      } else {
        return [...prevSelectedGifts, gift];
      }
    });
  }

  return (
    <>
      <div
        key={id}
        onClick={() => toggleGiftSelection(gift)}
        className={`p-4 gap-4 flex items-center border-t  cursor-pointer ${
          clickedGift ? `bg border-primary border-b` : ""
        }`}
      >
        <div className={`${bg} p-2 rounded-lg`}>
          <Image src={img} alt={title} width={50} height={50} />
        </div>
        <div className="flex w-full justify-between items-center">
          <h1 className="text-black">{title}</h1>

          {clickedGift ? (
            <div className="bg-white border rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M17.4133 16L20.48 12.9333C20.8666 12.5466 20.8666 11.9066 20.48 11.52C20.0933 11.1333 19.4533 11.1333 19.0666 11.52L16 14.5866L12.9333 11.52C12.5466 11.1333 11.9066 11.1333 11.52 11.52C11.1333 11.9066 11.1333 12.5466 11.52 12.9333L14.5866 16L11.52 19.0666C11.1333 19.4533 11.1333 20.0933 11.52 20.48C11.72 20.68 11.9733 20.7733 12.2266 20.7733C12.48 20.7733 12.7333 20.68 12.9333 20.48L16 17.4133L19.0666 20.48C19.2666 20.68 19.52 20.7733 19.7733 20.7733C20.0266 20.7733 20.28 20.68 20.48 20.48C20.8666 20.0933 20.8666 19.4533 20.48 19.0666L17.4133 16Z"
                  fill="#292D32"
                />
              </svg>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default GiftList;
