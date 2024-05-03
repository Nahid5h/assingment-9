import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const auth =getAuth(app)
const AuthPrider = ({children}) => {

    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const creatUser =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const updateUserProfile =(name ,image)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:image,
          
            
        });
    }
    const singIn =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }
    const singOut =()=>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=>{
        const unCubcribe =onAuthStateChanged(auth,currentUser=>{
            console.log('user in the  on state changed', currentUser)
            setUser(currentUser)
            setLoading(false)
        });
        return()=>{
            unCubcribe();
         
        }

      
    })
   const authInfo={
   user,
   loading,
   creatUser,
   singOut,
   singIn,
   updateUserProfile ,
   
   

   }
  

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthPrider;