import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./config";
import { userLoginData, userRegisterData } from "@/app/_utils/type";


export const RegisterNewUser = async({email, password, displayName}: userRegisterData) => {
  const response = await createUserWithEmailAndPassword(auth,email,password);
    
  if (response) {
    await updateProfile(response.user, { displayName: displayName });
    return response.user
  } else {
    throw new Error("Unable to register new user");
  }
}

export const LoginUser = async ({email, password}: userLoginData) => {
  const response = await signInWithEmailAndPassword(auth, email, password);
    if (response) {
      console.log("🚀 ~ LoginUser ~ response:", response)
      
      return response.user
    } else {
      throw new Error("login failed");
    }
}