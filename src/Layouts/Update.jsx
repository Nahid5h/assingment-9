import { useContext } from "react";
import { AuthContext } from "../AuthPrider/AuthPrider";
import { useLocation, useNavigate } from "react-router-dom";


const Update = () => {
    const {user,updateUserProfile}=useContext(AuthContext);
    const location  =useLocation();
  const navigate=useNavigate();
    const handleUpdateprofile=e=>{
        e.preventDefault();
        const form=new FormData(e.currentTarget);
        const name=form.get('name');
        const photo=form.get('photo');
        // const  email=form.get('email')
       
        console.log(name,photo)
        updateUserProfile(name,photo)
        .then()
        .catch()
        navigate(location?.state?location.state:'/updateProfile')
        
    

    }
  return (
  
<div className="hero ">
    
  <div className="hero-content flex-col lg:gap-40 w-full lg:flex-row-reverse">
    
    <div className="text-center lg:text-left w-1/2">
        
        <img className="rounded-2xl h-48 mt-5" src={user.photoURL} alt="" />
      <h1 className="text-2xl font-bold mt-3">User name: {user.
displayName}</h1>
      <p className="py-6 text-2xl">name:{user.email}</p>
    </div>
    <div className="card    max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleUpdateprofile}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="URL"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Save</button>
        </div>
      </form>
    </div>
  </div>
</div>
    
  );
};

export default Update;
