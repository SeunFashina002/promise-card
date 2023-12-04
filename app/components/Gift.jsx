import Image from "next/image";

const Gift = () => {
  return (
    <>
      <div className="bg-green-100 w-2/4 rounded-lg p-6 flex flex-col items-center justify-center">
        <Image src="/images/image 4.png" alt="money" width={70} height={70} />

        <h2 className="text-black">Money</h2>
      </div>
    </>
  );
};

export default Gift;
