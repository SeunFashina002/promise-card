"use client";
import Button from "@/components/Button";
import Link from "next/link";

const Forgotpassword = () => {
  return (
    <section className="md:w-2/4 mx-auto px-8 pt-8">
      <h1 className="text-black text-2xl font-semibold">Reset Password</h1>

      <form className="pt-8">
        <div>
          <label htmlFor="" className="text-black text-lg font-lg">
            Username
          </label>
          <div className="flex justify-between p-4 bg-[#F7F3F3] border rounded-2xl mt-2">
            <input
              type="text"
              placeholder="Enter your username"
              className="outline-none text-black bg-transparent"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                opacity="0.4"
                d="M12 22.01C17.5228 22.01 22 17.5329 22 12.01C22 6.48716 17.5228 2.01001 12 2.01001C6.47715 2.01001 2 6.48716 2 12.01C2 17.5329 6.47715 22.01 12 22.01Z"
                fill="#292D32"
              />
              <path
                d="M12 6.93994C9.93 6.93994 8.25 8.61994 8.25 10.6899C8.25 12.7199 9.84 14.3699 11.95 14.4299C11.98 14.4299 12.02 14.4299 12.04 14.4299C12.06 14.4299 12.09 14.4299 12.11 14.4299C12.12 14.4299 12.13 14.4299 12.13 14.4299C14.15 14.3599 15.74 12.7199 15.75 10.6899C15.75 8.61994 14.07 6.93994 12 6.93994Z"
                fill="#292D32"
              />
              <path
                d="M18.7802 19.36C17.0002 21 14.6202 22.01 12.0002 22.01C9.38022 22.01 7.00021 21 5.22021 19.36C5.46021 18.45 6.11022 17.62 7.06021 16.98C9.79022 15.16 14.2302 15.16 16.9402 16.98C17.9002 17.62 18.5402 18.45 18.7802 19.36Z"
                fill="#292D32"
              />
            </svg>
          </div>
        </div>

        <div className="mt-8">
          <label htmlFor="" className="text-black text-lg font-lg">
            Email
          </label>
          <div className="flex justify-between p-4 bg-[#F7F3F3] border rounded-2xl mt-2">
            <input
              type="Email"
              placeholder="Enter your Email address"
              className="outline-none text-black bg-transparent"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                opacity="0.4"
                d="M12 22.01C17.5228 22.01 22 17.5329 22 12.01C22 6.48716 17.5228 2.01001 12 2.01001C6.47715 2.01001 2 6.48716 2 12.01C2 17.5329 6.47715 22.01 12 22.01Z"
                fill="#292D32"
              />
              <path
                d="M12 6.93994C9.93 6.93994 8.25 8.61994 8.25 10.6899C8.25 12.7199 9.84 14.3699 11.95 14.4299C11.98 14.4299 12.02 14.4299 12.04 14.4299C12.06 14.4299 12.09 14.4299 12.11 14.4299C12.12 14.4299 12.13 14.4299 12.13 14.4299C14.15 14.3599 15.74 12.7199 15.75 10.6899C15.75 8.61994 14.07 6.93994 12 6.93994Z"
                fill="#292D32"
              />
              <path
                d="M18.7802 19.36C17.0002 21 14.6202 22.01 12.0002 22.01C9.38022 22.01 7.00021 21 5.22021 19.36C5.46021 18.45 6.11022 17.62 7.06021 16.98C9.79022 15.16 14.2302 15.16 16.9402 16.98C17.9002 17.62 18.5402 18.45 18.7802 19.36Z"
                fill="#292D32"
              />
            </svg>
          </div>
        </div>

        <div className="flex flex-col justify-center pt-14">
          <Button
            className="bg-[#C015A4] text-white w-full md:w-1/2 lg:w-1/5 p-4 text-center border rounded-full "
            label="Reset Password"
          />

          <div className="flex flex-wrap pt-4 justify-center gap-2">
            <p className="text-black text-lg">Don’t have an account?</p>
            <Link href="/signup" className="text-primary text-lg font-semibold">
              Sign Up
            </Link>
          </div>

          <div className="flex flex-wrap pt-20 justify-center gap-2">
            <p className="text-black text-lg">Have any sugesstion/report?</p>
            <Link href="#" className="text-primary text-lg">
              Send here
            </Link>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Forgotpassword;
