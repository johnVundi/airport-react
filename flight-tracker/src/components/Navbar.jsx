import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/Authcontext";

//import Review from '../../pages/Review'
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleOnclick = () => {
    Swal.fire({
      icon: "success",
      title: "Thank you for using SafariFlight",
      text: "We are greatful for the opportunity to serve you",
      confirmButtonText: "OK",
    }).then(() => {
      logout();
      // Redirect to the homepage
      window.location.href = "/";
    });
  };

  return (
    <div>
      <nav className=" mx-4 pb-1 flex flex-wrap justify-between items-center px-5 min-h-[15vh] border-b-2 border-white bg-cyan-500">
        {/* {log} */}
        <div className=" flex flex-col">
          <p className="font-bold text-2xl text-white">
            FLIGHT<span className=" text-[#E99B04] ">TRACKER</span>
          </p>
          <p className="text-white text-sm font-thin"> flight statistics</p>
        </div>
        {/* {navigation Links} */}
        <div className=" text-white font-semibold flex flex-wrap justify-between gap-6 mr-5">
          <Link to="/">Home</Link>
          <Link to="/aboutus">About us</Link>
          <Link to="/flight"> Flights</Link>
          {user ? (
            <>
              <Link onClick={handleOnclick}> Logout</Link>
            </>
          ) : (
            <>
              <Link to="/signUp">Sign up</Link>
              <Link to="/login">Log in</Link>
            </>
          )}
        </div>
      </nav>
      {/* <div className='flex justify-end px-8'>
        <Review user={user} token={token} />
        </div> */}
    </div>
  );
};

export default Navbar;
