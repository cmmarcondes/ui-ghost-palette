import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { onSnapshot } from "firebase/firestore";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { auth, handleUserProfile } from "../firebase-config/config";

const AuthenticationContext = createContext({});

const AuthenticationContextProvider = ({ children, ...props }) => {
  const [picture, setPicture] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  const socialMedia = useMemo(
    () => ({
      google: new GoogleAuthProvider(),
      facebook: new FacebookAuthProvider(),
    }),
    []
  );

  socialMedia.google.setCustomParameters({ prompt: "select_account" });
  socialMedia.facebook.setCustomParameters({ display: "popup" });

  function handleSetPicture(url) {
    setPicture(url);
  }

  const signOut = useCallback(async () => {
    try {
      await auth.signOut();
      setCurrentUser(null);
    } catch (error) {}
  }, []);

  const verifyIfUserIsLoggedIn = useCallback(() => {
    onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        onSnapshot(userRef, (snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            displayName: userAuth.displayName,
            email: userAuth.email,
            picture: userAuth.photoURL,
          });
        });
      }
    });
  }, []);

  const emailLogin = useCallback(async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
  }, []);

  const socialMediaLogin = useCallback(
    async (name) => {
      await signInWithPopup(auth, socialMedia[name])
        .then(({ user }) => {
          setCurrentUser({
            displayName: user.displayName,
            email: user.email,
            picture: user.photoURL,
          });
        })
        .catch((error) => {
          //console.log(error);
        });
    },
    [socialMedia]
  );

  useEffect(() => {
    verifyIfUserIsLoggedIn();
  }, [verifyIfUserIsLoggedIn]);

  return (
    <AuthenticationContext.Provider
      value={{
        handleSetPicture,
        socialMediaLogin,
        emailLogin,
        signOut,
        picture,
        currentUser,
      }}
      {...props}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationContextProvider;

export function useAuthenticationContext() {
  const context = useContext(AuthenticationContext);

  if (!context) {
    throw new Error(
      "useAuthenticationContext must be used within a AuthenticationContextProvider."
    );
  }

  const {
    handleSetPicture,
    socialMediaLogin,
    emailLogin,
    signOut,
    picture,
    currentUser,
  } = context;

  return {
    handleSetPicture,
    socialMediaLogin,
    emailLogin,
    signOut,
    picture,
    currentUser,
  };
}
