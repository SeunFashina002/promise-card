import { useContext, createContext, useState, useEffect } from "react";
import { auth, db } from "@/firebase/config";
import { collection, getDocs, query, where, addDoc } from "firebase/firestore";

import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  updateProfile,
} from "firebase/auth";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = async (email, password, username) => {

    const usernameUnique = await checkUsernameAvailability(username)
    console.log("is usernam unique", usernameUnique);
    if (!usernameUnique) {
      throw new Error("username already taken")
    }
    try {
      
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      
      await updateProfile(user, { displayName: username });

      const userDocRef = await addDoc(collection(db, "users"), {
        uid: user.uid,
        username: username,
        bio: "",
        avatar:"../home.svg"
      });

      setUser({
        uid: user.uid,
        email: user.email,
        username: user.username,
        bio: "",
        avatar:"",
      });

      return "user created successfully";
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  
const checkUsernameAvailability = async (username) => {
  const querySnapshot = await getDocs(
    query(collection(db, "users"), where("username", "==", username))
  );
  return querySnapshot.empty;
};
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    signOut(auth);
  };

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [user]);

  const contextValue = {
    user,
    createUser,
    googleSignIn,
    logout,
    login,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
