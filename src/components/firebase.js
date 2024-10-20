
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDzpb4hpHnxu60EzM5Kd9SwF-jisx4jkuI",
  authDomain: "netflix-clone-4cc77.firebaseapp.com",
  projectId: "netflix-clone-4cc77",
  storageBucket: "netflix-clone-4cc77.appspot.com",
  messagingSenderId: "563418022184",
  appId: "1:563418022184:web:33ff3b92e8462ceff4d01d"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password)=>{
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join);
    }

}

const login = async ()=>{
   try {
    await signInWithEmailAndPassword(auth, email, password);
    
   } catch (error) {
     console.log(error);
     toast.error(error.code.split('/')[1].split('-').join);
   }
}

const logout = ()=>{
    signOut(auth)
}
export {auth, db, login, signup, logout}