"use client";
import Button from "@/components/Button";
import Navigation from "@/components/Navigation";
import { useRouter } from "next/navigation";
import { UserAuth } from "@/context/AuthContext";

const Giftadded = () => {
  const router = useRouter();
  const { user } = UserAuth();
  // if (!user) {
  //   router.push('/sign-in')
  // }

  function handleClick() {
    router.push("/:id");
  }
  return (
    <>
      <section className="md:w-3/4  mx-auto p-6 md:p-16 h-screen flex flex-col justify-center ">
        <div className="flex flex-col items-center p-4 ">
          <h1 className="text-black text-2xl font-bold py-3">Gift Added</h1>
          <Button
            className="bg-[#C015A4] text-white  p-4 text-center border rounded-full"
            label="Go to home"
            onClick={handleClick}
          />
        </div>

        <div className="lg:p-4 py-16">
          <p className="text-gray-300 text-base py-4">
            Copy and share your promise card link , you can always find it in
            your profile
          </p>

          <input
            type="text"
            // placeholder={`https://promisecard.vercel.app/${user.displayName}`}
            className="p-2 bg-[#F7F3F3] border rounded-s-2xl text-sm"
          />
          <button className="text-primary p-2 bg-[#F7F3F3] border rounded-e-lg text-sm">
            Copy
          </button>
        </div>
      </section>
      <Navigation />
    </>
  );
};

export default Giftadded;
