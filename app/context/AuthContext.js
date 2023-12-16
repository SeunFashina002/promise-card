import { useContext, createContext, useState, useEffect } from "react";
import { auth, db } from "@/firebase/config";
import { collection, getDocs, query, where, addDoc } from "firebase/firestore";
import { checkUsernameAvailability } from "@/utils/db_utils";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  updateProfile,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = async (email, password, username) => {
    const usernameUnique = await checkUsernameAvailability(username);
    console.log("is usernam unique", usernameUnique);
    if (!usernameUnique) {
      throw new Error("username already taken");
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await updateProfile(user, { displayName: username });

      const userDocRef = await addDoc(collection(db, "users"), {
        uid: user.uid,
        username: username,
        bio: "",
        avatar: "",
      });

      return "user created successfully";
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  // const checkUsernameAvailability = async (username) => {
  //   const querySnapshot = await getDocs(
  //     query(collection(db, "users"), where("username", "==", username))
  //   );
  //   return querySnapshot.empty;
  // };

  const login = (email, password) => {
    const user = setPersistence(auth, browserLocalPersistence)
      .then(() => {
        return signInWithEmailAndPassword(auth, email, password);
      })
      .catch((error) => {
        console.log(error.message);
      });
    return user
  };

  const logout = () => {
    signOut(auth);
  };

  const googleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // extract username from gmail
      const emailParts = user.email.split("@");
      const extractedUsername = emailParts[0];

      // check if extracted username is unique
      const usernameUnique = await checkUsernameAvailability(extractedUsername);
      if (!usernameUnique) {
        const usernameSuffix = generateUniqueSuffix();
        const newUsername = `${extractedUsername}_${usernameSuffix}`;
        await updateProfile(user, { displayName: newUsername });

        await addDoc(collection(db, "users"), {
          uid: user.uid,
          username: newUsername,
          bio: "",
          avatar: "",
        });
      } else {
        // update the displayName even if it is unique
        await updateProfile(user, { displayName: extractedUsername });
        await addDoc(collection(db, "users"), {
          uid: user.uid,
          username: extractedUsername,
          bio: "",
          avatar: "",
        });
      }

      return user;
    } catch (error) {
      console.error("google sign in error", error);
    }
  };

  const generateUniqueSuffix = () => {
    return Math.random().toString(36).substring(2, 9);
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

