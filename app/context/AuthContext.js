import { useContext, createContext, useState, useEffect } from "react";
import { auth, db } from "@/firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";

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

  const createUser = (email, password, username, avatar) => {
    const usernameExists = checkUsernameExists(username);
    if (usernameExists) {
      console.log("username has already been taken");
      return;
    }

    return createUserWithEmailAndPassword(auth, email, password).then(
      ({ user }) => {
        updateProfile(user, {
          displayName: username,
          photoURL: avatar,
          bio: "",
        })
          .catch(console.log)
          .finally(() => {
            console.log("final block executed");
            // setLoading(false)
          });
      }
    );
  };

  // check if username exists
  async function checkUsernameExists(username) {
    const userCollection = collection(db, "users");
    const q = query(userCollection, where("username", "===", username));
    const querySnapshot = await getDocs(q);

    return querySnapshot.empty;
  }

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

  return (
    <AuthContext.Provider
      value={{ user, googleSignIn, logout, login, createUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
