"use client";
import Button from "@/components/Button";
import Link from "next/link";

const Changepassword = () => {
  return (
    <section className="md:w-2/4 mx-auto px-8 pt-14">
      <h1 className="text-black text-2xl font-semibold">Change Password</h1>

      <div className="p-4 bg-[#FCF1F6]  border border-[#C015A4] rounded-lg mt-8  text-black">
        <p>We have sent a verification code to the provided email.</p>

        <p>
          It expires in 10minutes, do check, input it here and create a new
          password
        </p>
      </div>

      <form className="pt-11">
        <div>
          <label htmlFor="" className="text-black text-lg font-lg">
            Verification Number
          </label>
          <div className="flex justify-between p-4 bg-[#F7F3F3] border rounded-2xl mt-2">
            <input
              type="number"
              placeholder="Enter verification number"
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

        <div className="mt-11">
          <label htmlFor="" className="text-black text-lg font-lg">
            New Password
          </label>
          <div className="flex justify-between p-4 bg-[#F7F3F3] border rounded-2xl mt-2">
            <input
              type="password"
              placeholder="Enter new password"
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
                d="M21.2501 9.15004C20.7601 8.37004 20.2001 7.67004 19.6201 7.04004L15.8501 10.81C15.9701 11.18 16.0401 11.58 16.0401 12C16.0401 14.24 14.2301 16.04 12.0001 16.04C11.5801 16.04 11.1801 15.97 10.8101 15.85L7.3501 19.31C8.8101 20.13 10.3901 20.56 12.0001 20.56C13.7801 20.56 15.5101 20.04 17.0901 19.07C18.6701 18.09 20.0901 16.66 21.2501 14.84C22.2501 13.28 22.2501 10.72 21.2501 9.15004Z"
                fill="#292D32"
              />
              <path
                d="M14.0199 9.97989L9.97989 14.0199C9.46989 13.4999 9.13989 12.7799 9.13989 11.9999C9.13989 10.4299 10.4199 9.13989 11.9999 9.13989C12.7799 9.13989 13.4999 9.46989 14.0199 9.97989Z"
                fill="#292D32"
              />
              <path
                opacity="0.4"
                d="M18.25 5.74993L14.86 9.13993C14.13 8.39993 13.12 7.95993 12 7.95993C9.76 7.95993 7.96 9.76993 7.96 11.9999C7.96 13.1199 8.41 14.1299 9.14 14.8599L5.76 18.2499H5.75C4.64 17.3499 3.62 16.1999 2.75 14.8399C1.75 13.2699 1.75 10.7199 2.75 9.14993C3.91 7.32993 5.33 5.89993 6.91 4.91993C8.49 3.95993 10.22 3.42993 12 3.42993C14.23 3.42993 16.39 4.24993 18.25 5.74993Z"
                fill="#292D32"
              />
              <path
                d="M14.8601 12.0001C14.8601 13.5701 13.5801 14.8601 12.0001 14.8601C11.9401 14.8601 11.8901 14.8601 11.8301 14.8401L14.8401 11.8301C14.8601 11.8901 14.8601 11.9401 14.8601 12.0001Z"
                fill="#292D32"
              />
              <path
                d="M21.7699 2.22988C21.4699 1.92988 20.9799 1.92988 20.6799 2.22988L2.22988 20.6899C1.92988 20.9899 1.92988 21.4799 2.22988 21.7799C2.37988 21.9199 2.56988 21.9999 2.76988 21.9999C2.96988 21.9999 3.15988 21.9199 3.30988 21.7699L21.7699 3.30988C22.0799 3.00988 22.0799 2.52988 21.7699 2.22988Z"
                fill="#292D32"
              />
            </svg>
          </div>
        </div>

        <div className="mt-11">
          <label htmlFor="" className="text-black text-lg font-lg">
            Confirm New Password
          </label>
          <div className="flex justify-between p-4 bg-[#F7F3F3] border rounded-2xl mt-2">
            <input
              type="password"
              placeholder="Confirm your password"
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
                d="M21.2501 9.15004C20.7601 8.37004 20.2001 7.67004 19.6201 7.04004L15.8501 10.81C15.9701 11.18 16.0401 11.58 16.0401 12C16.0401 14.24 14.2301 16.04 12.0001 16.04C11.5801 16.04 11.1801 15.97 10.8101 15.85L7.3501 19.31C8.8101 20.13 10.3901 20.56 12.0001 20.56C13.7801 20.56 15.5101 20.04 17.0901 19.07C18.6701 18.09 20.0901 16.66 21.2501 14.84C22.2501 13.28 22.2501 10.72 21.2501 9.15004Z"
                fill="#292D32"
              />
              <path
                d="M14.0199 9.97989L9.97989 14.0199C9.46989 13.4999 9.13989 12.7799 9.13989 11.9999C9.13989 10.4299 10.4199 9.13989 11.9999 9.13989C12.7799 9.13989 13.4999 9.46989 14.0199 9.97989Z"
                fill="#292D32"
              />
              <path
                opacity="0.4"
                d="M18.25 5.74993L14.86 9.13993C14.13 8.39993 13.12 7.95993 12 7.95993C9.76 7.95993 7.96 9.76993 7.96 11.9999C7.96 13.1199 8.41 14.1299 9.14 14.8599L5.76 18.2499H5.75C4.64 17.3499 3.62 16.1999 2.75 14.8399C1.75 13.2699 1.75 10.7199 2.75 9.14993C3.91 7.32993 5.33 5.89993 6.91 4.91993C8.49 3.95993 10.22 3.42993 12 3.42993C14.23 3.42993 16.39 4.24993 18.25 5.74993Z"
                fill="#292D32"
              />
              <path
                d="M14.8601 12.0001C14.8601 13.5701 13.5801 14.8601 12.0001 14.8601C11.9401 14.8601 11.8901 14.8601 11.8301 14.8401L14.8401 11.8301C14.8601 11.8901 14.8601 11.9401 14.8601 12.0001Z"
                fill="#292D32"
              />
              <path
                d="M21.7699 2.22988C21.4699 1.92988 20.9799 1.92988 20.6799 2.22988L2.22988 20.6899C1.92988 20.9899 1.92988 21.4799 2.22988 21.7799C2.37988 21.9199 2.56988 21.9999 2.76988 21.9999C2.96988 21.9999 3.15988 21.9199 3.30988 21.7699L21.7699 3.30988C22.0799 3.00988 22.0799 2.52988 21.7699 2.22988Z"
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
            <Link href="/signup" className="text-primary text-lg">
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

export default Changepassword;
