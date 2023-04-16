import React, { createContext, useEffect, useState } from "react";
export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const userInfo = {
    user,
  };
  //   setUser(userInfo);
  //   useEffect(() => {
  //     setUser(userInfo);
  //   }, []);
  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
};

export default UserProvider;

// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   // ...
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Firebase Authentication and get a reference to the service
// const auth = getAuth(app);
