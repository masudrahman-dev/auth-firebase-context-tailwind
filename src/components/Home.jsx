import React, { useContext } from "react";
import { UserContext } from "../Providers/UserProvider";

const Home = () => {
  const {user} = useContext(UserContext);
  console.log(user);
  return (
    <div>
      {user && <p className="text-3xl text-center my-7">{user.displayName}</p>}
    </div>
  );
};

export default Home;
