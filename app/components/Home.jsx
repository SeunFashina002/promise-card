import Gift from "@/components/Gift";
import Link from "next/link";
import { PiHandHeartBold } from "react-icons/pi";
import { useEffect, useState } from "react";
import EmptyGift from "./EmptyGift";
import { PromisePage } from "./PromisePage";
import { useRouter } from "next/navigation";
import { getGiftsForUser, getUserIdByUsername } from "@/utils/db_utils";
import Navigation from "./Navigation";

export const Home = ({ user, username }) => {
  const router = useRouter();
  const [gifts, setGifts] = useState([]);
  const [dataLoaded, setdataLoaded] = useState(false);

  useEffect(() => {
    const fetchGifts = async () => {
      let userId;
      if (user) {
        userId = user.uid;
      } else if (username) {
        userId = await getUserIdByUsername(username);
      } else {
        router.push("/");
      }

      if (userId) {
        const userGifts = await getGiftsForUser(userId);
        setGifts(userGifts);
        setdataLoaded(true);
      } else {
        router.push("/sign-up");
      }
    };

    fetchGifts();
  }, [user, username]);

  // if (user && gifts.length < 1) {
  //   return <EmptyGift />;
  // }

  if (!dataLoaded) {
    return <div className="h-screen w-full bg-[#FFFDFA]"></div>;
  }
  if (!user) {
    return <PromisePage username={username} />;
  }

  return (
    <>
      <section className="  p-2 flex flex-col justify-center items-center bg-[#FFFDFA] h-4/5">
        <div className="w-full px-6 lg:w-2/4">
          {user && gifts.length > 0 && (
            <div className="flex justify-between">
              <div className="flex items-center gap-2 text-black">
                <h2 className="font-bold">My gifts</h2>
                <PiHandHeartBold />
              </div>

              <Link href="/" className="text-primary font-bold">
                See All
              </Link>
            </div>
          )}
          {user && gifts.length > 0 ? (
            <div className="grid grid-cols-2 p-4 gap-4">
              {gifts.map((gift) => (
                <Gift key={gift.id} {...gift} />
              ))}
            </div>
          ) : (
            <EmptyGift />
          )}
        </div>
      </section>
      <Navigation />
    </>
  );
};

export default Home;
