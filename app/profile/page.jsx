"use client";

import Button from "@/components/Button";
import { useRouter } from "next/navigation";
const Profile = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/profile/updateprofile");
  };
  return (
    <>
      <section>
        <h1 className="text-black">My profile</h1>
        <Button
          className="bg-[#C015A4] text-white w-full md:w-1/2 lg:w-1/5 p-4 text-center border rounded-full"
          label="Updateprofile"
          onClick={handleClick}
        />
      </section>
    </>
  );
};

export default Profile;
