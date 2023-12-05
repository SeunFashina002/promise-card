import Container from "@/components/container";
import Button from "@/components/Button";
import { inter } from "../../font";
import { FaUserCircle } from "react-icons/fa";
import { IoIosEyeOff } from "react-icons/io";

const Signin = () => {
  return (
    <section className="py-6 px-6  h-screen flex flex-col justify-center md:items-center w-full bg-[#FFFDFA] lg:px-9">
      <h3
        className={`${inter.className} text-2xl font-semibold text-black mb-8`}
      >
        Welcome Back!
      </h3>
      <div className="flex flex-col justify-center md:w-1/3">
        <div className="flex my-4 items-center">
          <div className="border border-[#C2BABA] flex-1"></div>
          <div className="flex flex-col items-center justify-center text-black">
            <span>Or</span>
            <span>Sign in with username</span>
          </div>
          <div className="border border-[#C2BABA] flex-1"></div>
        </div>
        <div className="mt-4">
          <a
            href=""
            className="flex border border-gray-300 rounded-full py-4 px-3 items-center justify-center"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.8055 8.0415H19V8H10V12H15.6515C14.827 14.3285 12.6115 16 10 16C6.6865 16 4 13.3135 4 10C4 6.6865 6.6865 4 10 4C11.5295 4 12.921 4.577 13.9805 5.5195L16.809 2.691C15.023 1.0265 12.634 0 10 0C4.4775 0 0 4.4775 0 10C0 15.5225 4.4775 20 10 20C15.5225 20 20 15.5225 20 10C20 9.3295 19.931 8.675 19.8055 8.0415Z"
                fill="#FFC107"
              />
            </svg>
            <p className="text-black ml-4">Continue with google</p>
          </a>
        </div>
        <div className="flex flex-col text-black">
          <p className={`${inter.className} my-4`}>
            Username <span className="text-[#C015A4] text-lg">*</span>
          </p>
          <div className="flex border border-gray-300 rounded-2xl justify-between items-center">
            <input
              type="text"
              className="h-full py-4 px-3 rounded-2xl w-[90%] text-xl outline-none"
            />

            <FaUserCircle className="text-3xl  text-neutral-500 ml-1 mr-2" />
          </div>
          <p className={`${inter.className} my-4`}>
            Password <span className="text-[#C015A4] text-lg">*</span>
          </p>
          <div className="flex border border-gray-300 rounded-2xl justify-between items-center">
            <input
              type="password"
              className="h-full py-4 px-3 rounded-2xl w-[90%] text-xl outline-none"
            />

            <IoIosEyeOff className="text-3xl md:text-4xl text-neutral-500 ml-1 mr-2" />
          </div>
        </div>
        <div className="mt-12">
          <Button
            className="bg-[#C015A4] text-white w-full "
            label={"Sign in"}
          />
          <p className="text-black text-lg text-center my-4">
            Don't have an account?{" "}
            <a href="/sign-up" className="text-xl text-[#C015A4] font-medium">
              Signup
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Signin;