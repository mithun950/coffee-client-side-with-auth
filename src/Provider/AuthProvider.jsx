import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../Components/Auth/firebase-init";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
 const [user,setUser] = useState(null)
 const [loading,setLoading] = useState(true)

const signUpWithPass = (email,password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
   
}


const signInUser = (email,password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password);
}

const authInfo = {
    user,
    loading,
    signUpWithPass,
    signInUser
}



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;