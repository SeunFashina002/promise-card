import Link from "next/link";

const Usernavigation = () => {
  return (
    <div className="flex justify-around bg-[#F5F5F5] text-black w-full absolute bottom-0 ">
      <Link
        href="/"
        className="flex flex-col items-center p-4 text-primary font-bold"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            opacity="0.4"
            d="M20.04 6.81994L14.28 2.78994C12.71 1.68994 10.3 1.74994 8.78999 2.91994L3.77999 6.82994C2.77999 7.60994 1.98999 9.20994 1.98999 10.4699V17.3699C1.98999 19.9199 4.05999 21.9999 6.60999 21.9999H17.39C19.94 21.9999 22.01 19.9299 22.01 17.3799V10.5999C22.01 9.24994 21.14 7.58994 20.04 6.81994Z"
            fill="#C015A4"
          />
          <path
            d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V15C11.25 14.59 11.59 14.25 12 14.25C12.41 14.25 12.75 14.59 12.75 15V18C12.75 18.41 12.41 18.75 12 18.75Z"
            fill="#C015A4"
          />
        </svg>
        Home
      </Link>

      <Link
        href="/"
        className="flex flex-col items-center p-4 bg-black rounded-full  font-bold absolute bottom-14 w-20 h-20 justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            opacity="0.4"
            d="M19.97 10V18C19.97 21 18.97 22 15.97 22H7.96997C4.96997 22 3.96997 21 3.96997 18V10H19.97Z"
            fill="white"
          />
          <path
            d="M21.5 7V8C21.5 9.1 20.97 10 19.5 10H4.5C2.97 10 2.5 9.1 2.5 8V7C2.5 5.9 2.97 5 4.5 5H19.5C20.97 5 21.5 5.9 21.5 7Z"
            fill="white"
          />
          <path
            opacity="0.4"
            d="M11.64 5H6.12003C5.78003 4.63 5.79003 4.06 6.15003 3.7L7.57003 2.28C7.94003 1.91 8.55003 1.91 8.92003 2.28L11.64 5Z"
            fill="white"
          />
          <path
            opacity="0.4"
            d="M17.87 5H12.35L15.07 2.28C15.44 1.91 16.05 1.91 16.42 2.28L17.84 3.7C18.2 4.06 18.21 4.63 17.87 5Z"
            fill="#292D32"
          />
          <path
            opacity="0.6"
            d="M8.93994 10V15.14C8.93994 15.94 9.81994 16.41 10.4899 15.98L11.4299 15.36C11.7699 15.14 12.1999 15.14 12.5299 15.36L13.4199 15.96C14.0799 16.4 14.9699 15.93 14.9699 15.13V10H8.93994Z"
            fill="#292D32"
          />
        </svg>
      </Link>

      <Link
        href="/profile"
        className="flex flex-col items-center p-4 font-bold"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            opacity="0.4"
            d="M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z"
            fill="#0C0C0C"
          />
          <path
            d="M17.08 14.1499C14.29 12.2899 9.73996 12.2899 6.92996 14.1499C5.65996 14.9999 4.95996 16.1499 4.95996 17.3799C4.95996 18.6099 5.65996 19.7499 6.91996 20.5899C8.31996 21.5299 10.16 21.9999 12 21.9999C13.84 21.9999 15.68 21.5299 17.08 20.5899C18.34 19.7399 19.04 18.5999 19.04 17.3599C19.03 16.1299 18.34 14.9899 17.08 14.1499Z"
            fill="#0C0C0C"
          />
        </svg>
        Profile
      </Link>
    </div>
  );
};

export default Usernavigation;
