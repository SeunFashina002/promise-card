"use client";

import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const Welcome = () => {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/sign-up");
  };
  return (
    <section className="bg-gradient flex flex-col justify-center items-center h-screen w-full px-6 lg:px-9">
      <div>
        <Image
          src="/home.svg"
          alt="Promise card Logo"
          width={120}
          height={120}
          priority
        />
      </div>
      <h4 className="text-xl text-center w-full">
        Bring back your childhood memories
      </h4>
      <h3 className="text-center text-2xl font-bold mb-4 w-full lg:w-1/3">
        Create your own promise card
      </h3>
      <Button
        onClick={handleGetStarted}
        className="bg-[#C015A4] text-white w-full md:w-1/2 lg:w-1/5"
        label="Get Started"
      />

      <div className="flex flex-wrap gap-2 mt-28">
        <p className="text-lg">Have any sugesstion/report?</p>
        <Link href="#" className="text-lg text-primary font-bold ">
          Send Here
        </Link>
      </div>
    </section>
  );
};

export default Welcome;

// background: linear-gradient(91.67deg, #C015A4 46.96%, rgba(65, 21, 192, 0.84) 99.71%);
// text-gradient-to-r from-["#C015A4"]
