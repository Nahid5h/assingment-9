import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth/cordova";

const pro = new GoogleAuthProvider();
const gitpro = new GithubAuthProvider();

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
    const gooleLogin=()=>{
        setLoading(true)
        return signInWithPopup(auth,pro)
    }
    const gitHublogin =()=>{
        setLoading(true)
        return  signInWithPopup(auth,gitpro)
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
   gooleLogin,
   gitHublogin,
   updateUserProfile 
  
   
   

   }
  

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthPrider;