import { useContext } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthPrider/AuthPrider";


const Navber = () => {
  const location  =useLocation();
  const navigate=useNavigate();
const {user,singOut}=useContext(AuthContext);

const handleSingOut=()=>{
  singOut()
  .then()
  .catch()
  navigate(location?.state?location.state:'/')
}

  const navLink = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/updateProfile'>Update profile</NavLink></li>
    <li><NavLink to='/aboutus'>About us</NavLink></li>
    <li><NavLink to='/error'>Error</NavLink></li>
  </>
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLink}
          </ul>
        </div>
  
      <a className="btn btn-ghost lg:text-3xl"><span className="text-amber-400">Industrial</span>Insights</a>
  
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLink}
        </ul>
      </div>
      <div className="navbar-end">
        
        {
          user?
          (
            <div className="flex items-center ">
              <div
                className="tooltip"
                data-tip={user?.displayName || "user name not found"}
              >
                <div className="avatar">
                  <div className=" w-10 rounded-full">
                    <img
                      src={
                        user?.photoURL ||
                        "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                      }
                    />
                  </div>
                </div>
              </div>
              <a
                onClick={handleSingOut}
                className="btn bg-[#f39c12]  text-xl rounded-full text-white"
              >
                Logout
              </a>
            </div>
          )
          :
        (  <Link to={'/login'}>
          <button className="btn font-bold">log in</button>
        </Link>)

        }
       
      </div>
    </div>
  );
};

export default Navber;