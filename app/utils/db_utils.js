import { db } from "@/firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";

export const getGiftsForUser = async (userId) => {
  const querySnapshot = await getDocs(
    query(collection(db, "gifts"), where("user", "==", userId))
  );
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const getUserIdByUsername = async (username) => {
  const querySnapshot = await getDocs(
    query(collection(db, "users"), where("username", "==", username))
  );

  if (querySnapshot.empty) {
    return null; // User not found
  }

  return querySnapshot.docs[0].data().uid;
};
