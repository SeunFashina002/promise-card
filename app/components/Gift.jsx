import Image from "next/image";
import Link from "next/link";

const Gift = ({ id, name, image, bg = "moneybg" }) => {
  return (
    <>
      <Link
        href="/"
        key={id}
        className={`${bg} w-full rounded-lg p-6 flex flex-col items-center justify-center`}
      >
        <Image
          src="/images/image 9.png"
          alt="gift-image"
          width={70}
          height={70}
          priority
        />

        <h2 className=" text-black">{name}</h2>
      </Link>
    </>
  );
};

export default Gift;
