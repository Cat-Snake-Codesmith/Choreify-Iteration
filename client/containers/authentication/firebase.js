import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCD2oEjnqETls6cmFi0pXAJUNbiW7YlLxA",
  authDomain: "chorefy-e8d69.firebaseapp.com",
  projectId: "chorefy-e8d69",
  storageBucket: "chorefy-e8d69.appspot.com",
  messagingSenderId: "410281049296",
  appId: "1:410281049296:web:334e8ab1bc8e2cb986b2d5",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
import { usePostNewUserMutation } from "../../redux/api/users/usersApi";
import { addLoggedUser } from "../../redux/slices/usersSlice";

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  const response = await signInWithPopup(auth, provider);

  const { uid } = response.user;

  const userID = {
    user_id: uid,
  };

  return userID;
};

// Previous code, I know not best practice

//   const name = response.user.displayName;
//   const email = response.user.email;
//   const profilePic = response.user.photoURL;

//  localStorage.setItem("name", name);
// localStorage.setItem("email", email);
// localStorage.setItem("profilePic", profilePic);

// username: response.user.displayName,
// email: response.user.email,
// profile_picture: response.user.photoURL,