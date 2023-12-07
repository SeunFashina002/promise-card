import Image from "next/image";

const GiftList = ({ id, title, img, bg }) => {
  return (
    <>
      <div key={id} className="p-4 gap-4 flex items-center">
        <div className={`${bg} p-2 rounded-lg`}>
          <Image src={img} alt={title} width={50} height={50} />
        </div>
        <h1 className="text-black">{title}</h1>
      </div>
    </>
  );
};

export default GiftList;
