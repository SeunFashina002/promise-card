import Image from "next/image";
import Link from "next/link";

const Promisemade = () => {
  return (
    <>
      <section className="bg-gradient w-full h-screen p-2 md:p-10 ">
        <div className="w-3/4 mx-auto">
          <div className="flex px-2 py-8 md:p-14 justify-end">
            <div className="bg-[#F7F3F380] w-8 h-8 rounded-full flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M13.0599 12L15.3599 9.7C15.6499 9.41 15.6499 8.93 15.3599 8.64C15.0699 8.35 14.5899 8.35 14.2999 8.64L11.9999 10.94L9.69986 8.64C9.40986 8.35 8.92986 8.35 8.63986 8.64C8.34986 8.93 8.34986 9.41 8.63986 9.7L10.9399 12L8.63986 14.3C8.34986 14.59 8.34986 15.07 8.63986 15.36C8.78986 15.51 8.97986 15.58 9.16986 15.58C9.35986 15.58 9.54986 15.51 9.69986 15.36L11.9999 13.06L14.2999 15.36C14.4499 15.51 14.6399 15.58 14.8299 15.58C15.0199 15.58 15.2099 15.51 15.3599 15.36C15.6499 15.07 15.6499 14.59 15.3599 14.3L13.0599 12Z"
                  fill="#292D32"
                />
              </svg>
            </div>
          </div>

          <div className="w-fullmx-auto py-20 flex flex-col items-center gap-4">
            <h1 className="text-gradient text-2xl text-center font-bold">
              Promise Made to Fola Successful!
            </h1>
            <Image
              src="/home.svg"
              alt="Promise card Logo"
              width={130}
              height={130}
              priority
            />
            <div className="flex gap-2 py-44 flex-wrap">
              <p className="text-black">Create your own promise card</p>
              <span>
                <Link href="/" className="text-primary">
                  Create
                </Link>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Promisemade;
