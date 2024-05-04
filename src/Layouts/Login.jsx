// import { signInWithEmailAndPassword } from "firebase/auth";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthPrider/AuthPrider";
import Swal from "sweetalert2";

const Login = () => {
  const {singIn,gooleLogin,gitHublogin,user}=useContext(AuthContext)
  const location= useLocation();
  const navigate =useNavigate()
  const handleLogin = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    
    const email =form.get('email');
    const password=form.get('password');
    console.log(email,password)
    singIn(email,password)
    .then(result =>{
      console.log(result.user)
      if(result.user){
       
        Swal.fire({
          title: 'Success',
          text: 'login Successfully',
          icon: 'success',
          confirmButtonText: 'OK'
        })
      }
      navigate(location?.state?location.state:'/')
    })
    .catch(error=>{
      console.error(error);
    })
  
  
}
const handleGithuLogin=()=>{

  gitHublogin()
  .then(result =>{
    // const loggedUer= result.user;
    // console.log(loggedUer)
    if(result.user){
       
      Swal.fire({
        title: 'Success',
        text: 'login Successfully',
        icon: 'success',
        confirmButtonText: 'OK'
      })
    }
    navigate(location?.state?location.state:'/')
    
  })
  .catch(error=>{
    console.log(error)
  })

}

  return (
    <div className=" flex justify-center items-center mt-7 ">
        <div className="p-5  w-full lg:p-40 rounded-3xl shadow-2xl bg-base-100 ">
      <h1 className="font-bold text-2xl text-center text-orange-500">
        Login Here
      </h1>
      <form className="lg:card-body" onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#f39c12]  text-white hover:text-black">
            Login
          </button>
        </div>
      </form>
      <p>
        Do not have an account?
        <Link to={"/register"} className="btn btn-link font-bold ">
          Register
        </Link>
      </p>
      <hr className="mb-3" />
      <div>
        <h1 className="text-xl text-center font-bold text-[#f39c12] ">
          Login with . . .
        </h1>

        <div className="flex justify-around mt-3">
          <button 
          onClick={()=> gooleLogin().then(result =>{
            // const loggedUer= result.user;
            // console.log(loggedUer)
            if(result.user){
               
              Swal.fire({
                title: 'Success',
                text: 'login Successfully',
                icon: 'success',
                confirmButtonText: 'OK'
              })
            }
            navigate(location?.state?location.state:'/')
            
          })}
          className="btn btn-sm bg-[#f39c12]   text-white hover:text-black">
            Google
          </button>
          <button 
         onClick={handleGithuLogin}
          className="btn btn-sm bg-[#f39c12]  text-white hover:text-black">
            GitHub
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
