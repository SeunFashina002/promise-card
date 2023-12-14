import Image from "next/image";
import Link from "next/link";

const Promised = ({
  id,
  name,
  image,
  bg = "moneybg",
  promisedby,
  promiseditem,
  date,
}) => {
  return (
    <>
      <div className="flex gap-4 items-center p-4 border-t-2">
        <div
          className={`${bg} rounded-lg p-4 flex flex-col items-center justify-center relative`}
        >
          <Image
            src="/images/image 4.png"
            alt="gift-image"
            width={30}
            height={30}
            priority
          />
        </div>
        <div>
          <div className="flex gap-2">
            <h2 className=" text-black">{promisedby} - </h2>
            <h2 className="text-black font-lg font-bold">{promiseditem}</h2>
          </div>
          <p className="text-[#706D6D]">{date}</p>
        </div>
      </div>
    </>
  );
};

export default Promised;
