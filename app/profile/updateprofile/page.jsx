"use client";
import Navigation from "@/components/Navigation";
import Button from "@/components/Button";
import Image from "next/image";
import {
  getDoc,
  where,
  doc,
  updateDoc,
  getDocs,
  query,
  collection,
} from "firebase/firestore";
import { useState, useEffect } from "react";
import { UserAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { db } from "@/firebase/config";

const Updateprofile = () => {
  const { user } = UserAuth();
  const router = useRouter();

  const [profileData, setProfileData] = useState({
    username: "",
    bio: "",
    avatar: "",
  });
  const [dataLoaded, setdataLoaded] = useState(false);

  useEffect(() => {
    if (user) {
      const fetchProfileData = async () => {
        try {
          const q = query(
            collection(db, "users"),
            where("uid", "==", user.uid)
          );
          const querySnapshot = await getDocs(q);
          // console.log("userDoc", userDoc);
          if (!querySnapshot.empty) {
            setProfileData(querySnapshot.docs[0].data());
            setdataLoaded(true);
          } else {
            console.log("no profile found", user.uid);
          }
        } catch (error) {
          console.log("error getting user profile: ", error.message);
        }
      };

      fetchProfileData();
    }
  }, [user]);

  if (!dataLoaded) {
    return <div className="h-screen w-full bg-[#FFFDFA]"></div>;
  }

  if (!user) {
    router.push("/sign-in");
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateDoc(doc(db, "users", user.uid), profileData);
    router.push("/profile");
  };
  return (
    <>
      <section className="md:w-2/4 mx-auto p-4">
        <h1 className="text-black text-2xl p-4 mt-8">Profile</h1>

        <div className="flex gap-2 items-center p-4">
          <Image
            src=""
            alt=""
            className=" bg-black rounded-full gradient-border border-4"
            width={100}
            height={100}
          />
          <div>
            <h1 className="text-black text-xl font-bold">
              {profileData.username}
            </h1>
            <p className="text-primary font-semibold">Add profile picture</p>
          </div>
        </div>

        <div>
          <form>
            <div>
              <label htmlFor="" className="text-black">
                Username
              </label>
              <div className="flex justify-between p-4 bg-[#F7F3F3] border rounded-2xl">
                <input
                  type="text"
                  name="username"
                  placeholder={
                    profileData.username ? profileData.username : "Fola J"
                  }
                  className="outline-none text-black bg-transparent"
                  onChange={handleInputChange}
                  value={profileData.username}
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

            <div className="flex flex-col my-8 ">
              <label htmlFor="" className="text-black">
                Note
              </label>

              <textarea
                className="bg-[#F7F3F3] border border-[#C2BABA] rounded-lg p-4 outline-none text-[#888B89] text-lg"
                name="bio"
                onChange={handleInputChange}
                value={profileData.bio}
                id=""
                cols="10"
                rows="10"
              >
                {profileData.bio
                  ? profileData.bio
                  : "Leave a short note for people convincing them why you need the items"}
              </textarea>
            </div>
            <Button
              className="bg-[#C015A4] text-white w-full md:w-1/2 lg:w-1/5 p-4 text-center border rounded-full "
              label="Save"
              onClick={(e) => handleSubmit(e)}
            />
          </form>
        </div>
      </section>

      <Navigation />
    </>
  );
};

export default Updateprofile;
