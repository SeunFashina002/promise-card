"use client";

import Button from "@/components/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { UserAuth } from "@/context/AuthContext";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "@/firebase/config";
import { useState, useEffect } from "react";
import Image from "next/image";
import Navigation from "@/components/Navigation";

const Profile = () => {
  const router = useRouter();
  const { user } = UserAuth();
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    if (user) {
      const fetchUserProfile = async () => {
        const { displayName } = user;
        try {
          const q = query(
            collection(db, "users"),
            where("username", "==", displayName)
          );
          const querySnapshot = await getDocs(q);

          if (!querySnapshot.empty) {
            setUserProfile(querySnapshot.docs[0].data());
          } else {
            console.error("User profile not found.");
          }
        } catch (error) {
          console.error("Error fetching user profile:", error);
        }
      };

      fetchUserProfile();
    }
  }, [user]);

  if (!userProfile) {
    return <div className="h-screen w-full bg-[#FFFDFA]"></div>;
  }

  if (!user) {
    router.push("/sign-in");
  }
  const handleClick = () => {
    router.push("/profile/updateprofile");
  };

  return (
    <>
      <section className="md:w-2/4 mx-auto p-4">
        <div className="flex justify-between p-4">
          <h1 className="text-black text-lg font-bold">My profile</h1>
          <Link
            href="/profile/promisedgifts"
            className="text-primary text-lg font-bold"
          >
            Promised Gifts
          </Link>
        </div>

        <div className="flex gap-2 items-center p-6">
          <div className="w-16 h-16 bg-black rounded-full border-primary border-4"></div>
          <div>
            <h1 className="text-black text-xl font-bold">
              {userProfile.username}
            </h1>
          </div>
        </div>

        <div className="p-6 border rounded-lg my-8 bg-[#EDEFEE]">
          <p className="text-black">{userProfile.bio}</p>
        </div>

        <div className="py-4">
          <input
            type="text"
            placeholder={`https://promisecard.vercel.app/${user.displayName}`}
            className="p-4 bg-[#F7F3F3] border rounded-lg w-full mb-4"
          />
          <Button
            className="bg-[#C015A4] text-white w-full md:w-1/2 lg:w-1/5 p-4 text-center border rounded-full"
            label="Copy"
          />
          <div className="flex gap-2 p-4">
            <p className="text-black font-semibold">
              Have any sugesstion/report?
            </p>
            <Link href="/" className="text-primary font-bold">
              Send Here
            </Link>
          </div>
        </div>

        <Button
          className="bg-[#C015A4] text-white w-full md:w-1/2 lg:w-1/5 p-4 text-center border rounded-full"
          label="Updateprofile"
          onClick={handleClick}
        />
      </section>
      <Navigation />
    </>
  );
};

export default Profile;
