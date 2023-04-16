import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Providers/UserProvider";

const Header = () => {
  const { user, signOutUser } = useContext(UserContext);
  const signOUtHandler = () => {
    signOutUser()
      .then(() => {
        // console.log('result :>> ', result);
      })
      .catch((err) => {
        console.log("err :>> ", err);
      });
  };
  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Auth Master
        </Link>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Home
        </Link>
        <Link to="/signin" className="btn btn-ghost normal-case text-xl">
         Log  in
        </Link>
        <Link to="/register" className="btn btn-ghost normal-case text-xl">
          Register
        </Link>
        <Link to="/orders" className="btn btn-ghost normal-case text-xl">
          Orders
        </Link>
        {user ? (
          <>
            <p>{user.email} </p>
            <button onClick={signOUtHandler} className="btn  ml-5 btn-success">
              Log out
            </button>
          </>
        ) : (
          <Link to="/signin" className="btn btn-info  ml-5">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
