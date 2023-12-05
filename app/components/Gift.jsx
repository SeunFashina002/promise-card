import Image from "next/image";

const Gift = ({ id, title, img, bg }) => {
  return (
    <>
      <div
        key={id}
        className={`${bg} w-full rounded-lg p-6 flex flex-col items-center justify-center`}
      >
        <Image src={img} alt="money" width={70} height={70} />

        <h2 className=" text-black">{title}</h2>
      </div>
    </>
  );
};

export default Gift;
