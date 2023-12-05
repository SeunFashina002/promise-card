import Image from "next/image";
import Link from "next/link";

const Gift = ({ id, title, img, bg }) => {
  return (
    <>
      <Link
        href="/"
        key={id}
        className={`${bg} w-full rounded-lg p-6 flex flex-col items-center justify-center`}
      >
        <Image src={img} alt="money" width={70} height={70} />

        <h2 className=" text-black">{title}</h2>
      </Link>
    </>
  );
};

export default Gift;
