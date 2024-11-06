import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { User } from "firebase/auth";
import {type} from "os"; // Импортируем тип User

export type AuthDetailsProps ={
  onSignOut:()=>void
}
const AuthDetails: React.FC<AuthDetailsProps> = ({onSignOut}) => {
  const [authUser, setAuthUset] = useState<User | null>(null); // Указываем тип состояния как User | null

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUset(user);
      } else {
        setAuthUset(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  function userSignOut() {
    signOut(auth)
        .then(() => console.log("Successfully signed out"))
        .catch((e) => console.log(e));
    onSignOut()
  }

  return (
      <div>
        {authUser ? (
            <div>
              <p>{`Signed in as ${authUser.email}`}</p>
              <button onClick={userSignOut}>Sign Out</button>
            </div>
        ) : (
            <p>Signed Out</p>
        )}
      </div>
  );
};

export default AuthDetails;
