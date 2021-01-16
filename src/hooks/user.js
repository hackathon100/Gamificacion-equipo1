import firebase from "firebase/app";
import React, { createContext, useContext, useState, useEffect } from "react";
import "firebase/auth";
import { useHistory } from "react-router-dom";

const authContext = createContext();
const googleProvider = new firebase.auth.GoogleAuthProvider();

const useProvideAuth = () => {
  const [loading, setLoading] = useState(false);
  const [fetchingCacheUser, setFetchingCacheUser] = useState(true);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const history = useHistory();
  const onAuthStateChanged = () => {
    return firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser({
          displayName: user.displayName,
          photoURL: user.photoURL,
          uid: user.uid,
        });
      }
      setFetchingCacheUser(false);
    });
  };

  useEffect(() => {
    let mounted = true;
    const unsubscribe = mounted && onAuthStateChanged();
    return () => {
      mounted = false
      unsubscribe();
    };
  }, []);

  const signin = async () => {
    try {
      setLoading(true);
      const result = await firebase.auth().signInWithPopup(googleProvider);
      setUser({
        displayName: result.user.displayName,
        photoURL: result.user.photoURL,
        uid: result.user.uid,
      });
      setLoading(false);
      history.push('/')
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };
  const signout = () => {
    console.log('singing out')
    firebase.auth().signOut().then(() => {
      setUser(null);
      history.push('/login')
    }).catch((error) => {
      setError(error);
    });
  };

  return {
    user,
    fetchingCacheUser,
    loading,
    signin,
    signout,
  };
};

const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

const useAuth = () => {
  return useContext(authContext);
};

export { useProvideAuth, ProvideAuth, useAuth };